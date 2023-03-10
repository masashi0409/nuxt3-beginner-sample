<script setup>
const keyword = ref('');
const generateText = ref('')

const prompt = computed(() => `
  日本語で回答して下さい。${keyword.value}について最大150文字で説明してください。
`)

const handleClick = async () => {
  const event = await useFetch('/api/generate', {
    method: 'POST',
    body: {
      prompt
    },
    lazy: true,
  })

  console.log(event)
  generateText.value = event.data.value.choices[0].text
}
</script>

<template>
  <h1>GPT</h1>
  <div>
    <input type="text" v-model="keyword">
  </div>
  <div>
    <button type="button" @click="handleClick">テキスト生成</button>
  </div>
  <div>
    <h2>生成テキスト</h2>
    <div> {{ generateText }}</div>
  </div>
</template>
