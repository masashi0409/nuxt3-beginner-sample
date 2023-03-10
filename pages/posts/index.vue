<script setup>
const { data: posts, error, pending } = await useFetch(
  'https://jsonplaceholder.typicode.com/posts/',
  {
    lazy: true,
  }
)
</script>
<template>
  <div>
    <h1>Posts一覧</h1>
    <p v-if="error">{{ error }}</p>
    <p v-if="pending">Loading...</p>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>