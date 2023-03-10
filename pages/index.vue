<template>
  <div>
    <h1>Main Page</h1>
    <h2>{{ $hello('Nuxt3') }}</h2>

    <h2>Counter</h2>
    <p>Count: {{ counter }}</p>
    <div><button @click="counter++">+</button></div>

    <h2>fetch api</h2>
    <div>{{ msg }}</div>

    <h2>ToDo</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.task }}</li>
    </ul>
    <form @submit.prevent="addTask">
      <div>
        <input v-model="task" />
      </div>
      <div>
        <button type="submit">タスクを登録</button>
      </div>
    </form>
</div>
</template>

<script setup>
const { $hello } = useNuxtApp()

const counter = useCounter()

const { data: msg } = useFetch('/api/hello')

const task = ref('');
const { data: tasks, refresh } = useFetch('/api/task');

const addTask = () => {
  const { data } = useFetch('/api/task', {
    method: 'post',
    body: { task: task.value },
  });
  refresh();
  task.value = '';
};
</script>