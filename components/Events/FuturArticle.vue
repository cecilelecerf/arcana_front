<script lang="ts">
    export default{
        setup(){
            const { data : futurs, error: futursError } = useAsyncData(() =>{
                return $fetch('http://127.0.0.1:8741/api/posts')
                .then((response) => {
                    const futurs = response['hydra:member'];
                    const selectedFuturs = futurs.slice(0, 2);
                    return selectedFuturs;
                })
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
    <div>
        <NuxtLink v-for="futur in futurs" :key="futur.id" :to="`events/futur?${ futur.id }`">
            <CardComponent :info="futur"/>
        </NuxtLink>

    </div>
</template>