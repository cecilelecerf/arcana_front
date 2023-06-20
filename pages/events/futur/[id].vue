<script setup>
    const { id } = useRoute().params
    const { data : futur, error: futurError } = useAsyncData(() =>{
        // params pas récup dans le setup
        return $fetch(`http://127.0.0.1:8741/api/posts/${ id }`)
        .catch((error) =>{
            console.error(error);
            return [];
        })
    })
    
// Point de terminaison de l'API de géocodage avancéhttp://api.positionstack.com/v1/à l'avant? access_key=YOUR_ACCESS_KEY& requête=1600PennsylvanieAve NW,Washington DC

    const { data : api, error: apiError } = useAsyncData(() =>{
        return $fetch(`http://api.positionstack.com/v1/forward? access_key =70073324e9a08c58a5ff7095bcbbafc7`)
        .catch((error) =>{
            return []
        })
    })
</script>


<template>
    <main>
        <EventsIdIntroduction :info="futur" :title="futur.title" :date="futur.startDate" :img="futur.picture_id.adress"/>
        <div>
            <p>{{ futur.description }}</p>
            <p>{{ date(futur.startDate)}}</p>
        </div>
        <!-- <div>
            {{  api }}
        </div> -->
    </main>
</template>

<style lang="scss" scoped>
    main{
        @include grid;
        div{
            grid-column: 2/5;
        }
    }

</style>