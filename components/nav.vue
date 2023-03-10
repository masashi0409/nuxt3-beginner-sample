<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <span style="display: inline-block; margin-right: 10px"></span>
    <NuxtLink to="/about">About</NuxtLink>
    <span style="display: inline-block; margin-right: 10px"></span>
    <NuxtLink to="/gpt">Gpt</NuxtLink>
    <span style="display: inline-block; margin-right: 10px"></span>
    <NuxtLink :to="{ name: 'users-list' }">User List</NuxtLink>
    <span style="display: inline-block; margin-right: 10px"></span>
    <NuxtLink to="/posts">Post List</NuxtLink>
  </nav>
</template>