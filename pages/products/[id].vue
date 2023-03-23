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
</script>

<style lang="css" >

</style>