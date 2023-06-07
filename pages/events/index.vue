<script setup>
    const { data : pasts, error: pastsError } = useAsyncData(() =>{
        return $fetch('http://127.0.0.1:8741/api/events')
            .then(response => {
                const pasts = response['hydra:member'];
                const selectedPasts = pasts.slice(0, 2);
                return selectedPasts;
            })
            .catch(error =>{
                console.error(error);
                return [];
            })
    });
    const { data : futurs, error: futursError } = useAsyncData(() =>{
        return $fetch('http://127.0.0.1:8741/api/posts')
            .then(response => {
                const futurs = response['hydra:member'];
                const selectedFuturs = futurs.slice(0, 2);
                return selectedFuturs;
            })
            .catch(error =>{
                console.error(error);
                return [];
            })
    })
</script>

<template>
    <div id="eventsIndex">
        <!-- <pre>
            {{ pasts }}
        </pre> -->
        
        <ul>
            <li v-for="past in pasts" :key="past.id">
                <p>{{ past.title }}</p>
            </li>
        </ul>
        <h1>Futur</h1>
        <ul>
            <EventsFuturArticle />
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    #eventsIndex{
        @include grid;
    }
</style>