<script lang="ts">
    export default{
        setup(){
            const { data : pasts, error: PastsError } = useAsyncData(() =>{
                return $fetch('http://127.0.0.1:8741/api/events')
                .then((response) => {
                    const pasts = response['hydra:member'];
                    const selectedPasts = pasts.slice(0, 4);
                    return selectedPasts;
                })
                .catch((error) =>{
                    console.error(error);
                    return [];
                })
            })
            return { pasts }
        }
        
    }
</script>

<template>
    <article id="pastArticle">
        <h1>Les évènements déjà passés</h1>
        <section class="flex">
            <div v-for="past in pasts" :key="past.id" >
                <NuxtLink :to="`events/past/${ past.id }`">
                    <CardComponent :info="past"/>
                </NuxtLink>
            </div>
        </section>
        <NuxtLink to="/events/past" class="button primary">Voir tous les évènements déjà passés</NuxtLink>
    </article>
</template>

<style lang="scss" scoped>
    #pastArticle{
        grid-column: 2 / 5;
        & > * {
                margin-bottom: 50px;
        }
        .flex{
            justify-content: space-between;
            flex-wrap: wrap;
         
            div{
                width: 22%;
                min-width: 200px;
                margin-bottom: 25px;
            }
        }
        a {
            display :block
        }
        & > a {
            margin: 0 auto;
        }

    }
</style>