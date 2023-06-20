<script lang="ts">
    export default{
        setup(){
            const { data : futurs, error: futursError } = useAsyncData(() =>{
                return $fetch('http://127.0.0.1:8741/api/posts')
                .then(response => response['hydra:member'])
                .catch((error) =>{
                    console.error(error);
                    return [];
                })
            })
            return { futurs }
        }
        
    }
</script>

<template>
    <section>
        <NuxtLink v-for="futur in futurs" :key="futur.id" :to="`/events/futur/${ futur.id }`">
            <ArticleComponent :info="futur"/>
        </NuxtLink>
    </section>
</template>

<style lang="scss" scoped>
    section{
        max-height: 2215px;
        a{
            margin-bottom: 25px;
            display: block;
            &:last-child{
                margin-bottom: 0px;
            }
        }
    }
</style>