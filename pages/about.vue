<template>
  <div>
    <h1>About Page</h1>
    
    <p>Count:{{ counter }}</p>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth',
});

const counter = useCounter()
</script>