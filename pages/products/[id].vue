<template>
  <div>
    <Head>
      <Title>Nuxt App | {{product.title}} </Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <!-- We can use meta tags here too, and we can also use changeable content here too -->
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
   throw createError({statusCode: 404, statusMessage: "Product not found", fatal: true})
}
// The reason for fatal true is to force the error to be shown even when the error has been created in the browser and not from our application

</script>

<style lang="css" >

</style>