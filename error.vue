<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
   <p class="mt-7 text-7xl font-bold"> {{error.statusCode}} </p>
   <p class="mt-7 text-6xl">Ooops.</p>
   <p class="mt-7 ">{{error.message}}</p>
  <!-- The error component should be outside of the pages folder and directly into the root folder  -->
  <button class="btn my-7" @click="handleClearError">Go Home</button>
  </div>
</template>

<script setup>
// This error objects comes automatically
 defineProps(['error'])
// The clear error is a default method that clears the error and we can also add the redirect object there to redirect it to whereever we want it to go
const handleClearError = () => clearError({redirect: '/'})
</script>


<style scoped>

</style>