<template>
  <div class="p-4">
    <div class="card flex flex-col gap-4">
      <div v-for="item in result" :key="item.title">
        <Fieldset :legend="item.title">
          <p class="m-0">
            {{
              item.description
            }}
          </p>
        </Fieldset>
      </div>
      <div class="flex flex-col gap-2">
        <Textarea
          v-model="prompt"
          rows="5"
          cols="30"
          placeholder="Write your question here"
        />
        <Button
          label="Generate"
          @click="generatesContent"
          :disabled="isGenerating"
        />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { geminiModel } from "../src/gemini";

const prompt = ref("");
const isGenerating = ref(false);
const result = ref<Array<{ title: string; description: string }>>([]);

async function generatesContent() {
  if (!prompt.value.trim()) return;

  isGenerating.value = true;
  try {
    const conversationHistory = result.value
      .map((item) => `Usuario: ${item.title}\nAsistente: ${item.description}`)
      .join("\n\n");

    const fullPrompt = conversationHistory
      ? `${conversationHistory}\n\nUsuario: ${prompt.value}\nAsistente:`
      : prompt.value;
    const response = await geminiModel.generateContent(fullPrompt);
    const generatedContent = response.response.text();

    addResult(prompt.value, generatedContent);
    prompt.value = "";
  } catch (error) {
    console.error("Error al generar contenido:", error);
  } finally {
    isGenerating.value = false;
  }
}

function addResult(title: string, description: string) {
  result.value.push({ title, description });
}
watch(
  result,
  (newValue) => {
    result.value = newValue;
  },
  { deep: true }
);
</script>
