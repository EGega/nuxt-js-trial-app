<template>
  <div>
  <ProductDetails :product="product" />
  </div>
</template>

<script setup>
definePageMeta({
  layout:"products"
})
const {id} = useRoute().params
const url = `https://fakestoreapi.com/products/${id}`
console.log(url);

// fetch the product
const {data: product} = await useFetch(url)

// This is how we throw an error in nuxt and this is how we send the status code and the 
if(!product.value) {
   throw createError({statusCode: 404, statusMessage: "Product not found"})
}

</script>

<style lang="css" >

</style>