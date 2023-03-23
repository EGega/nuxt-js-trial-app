<template>
<!-- This is a customized layout so different from the default one -->
  <div>
   <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4">
      <NuxtLink class="font-bold prev" @click.prevent="$router.back()" > Go Back</NuxtLink>
      <!-- Here I used a fucntion to go to the previous page instead of goin to the homepage -->
    </nav>
   </header>
   <div class="container mx-auto p-4">
    <!-- All the contents goes inside this div while the upper part is default navbar-->
    <slot/>
   </div>
   <footer class="container mx-auto p-4 flex justify-between border-t-2">
         <ul class="flex gap-4">
         <li><NuxtLink to="/">Home</NuxtLink> </li>
         <li><NuxtLink to="/about">About</NuxtLink> </li> 
         <li><NuxtLink to="/products">Products</NuxtLink></li> 
       </ul>
   </footer>
  </div>
</template>

<style scoped>
.router-link-active{
  color: #3085db;
}
.prev {
cursor: pointer;
}
</style>