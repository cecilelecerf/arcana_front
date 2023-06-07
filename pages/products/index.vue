<script setup>
    const { data : products } = useAsyncData(() => {
        return $fetch('https://fakestoreapi.com/products')
    })
</script>

<template>
    <div> 
        <pre>
            {{ products }}
        </pre>
        <ul >
            <li v-for="product in products" :key="product.id">
                {{ product.title }}
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>