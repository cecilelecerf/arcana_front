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
    <article id="scrollTo" class="futurArticle">
        <h1>Nos futurs évènements</h1>
        <p>Vous êtes à la recherche d'activités musicales à venir pour assouvir votre passion ? Ne cherchez plus ! L'association Arcana a toujours quelque chose de prévu pour tous les amateurs de musique, qu'il s'agisse de concerts, d'auditions, de stages ou d'autres événements musicaux. Notre programme varié et riche en événements vous permettra de partager des moments uniques et conviviaux avec des passionnés de musique, et de faire partie d'une communauté engagée et dynamique. Consultez régulièrement notre page pour ne rien manquer et soyez au courant des dernières actualités de l'association. Nous avons hâte de vous accueillir et de partager avec vous des moments inoubliables en musique !</p>
        <NuxtLink v-for="futur in futurs" :key="futur.id" :to="`events/futur/${ futur.id }`">
            <ArticleComponent :info="futur"/>
        </NuxtLink>
        <NuxtLink to="/events/futur" class="button primary">Voir tous les futurs évènements</NuxtLink>

    </article>
</template>

<style lang="scss" scoped>
    
    .futurArticle{
        grid-column : 2 / 5;
        & > * {
            margin-bottom: 50px;
        }
        & > *:last-child{
            margin-bottom: 0;
        }
        & > a {
            display :block
        }


    }
</style>