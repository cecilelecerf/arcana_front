<script lang="ts">
export default {
    
}
</script>

<template>
    <main>
        <Introduction title="Les futurs évènements" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." :first-button="{ txt : 'Voir tous les évènements', link : './'}"/>
        <article id="scrollTo">
            <h1>Nos futurs évènements</h1>
            <p>Vous êtes à la recherche d'activités musicales à venir pour assouvir votre passion ? Ne cherchez plus ! L'association Arcana a toujours quelque chose de prévu pour tous les amateurs de musique, qu'il s'agisse de concerts, d'auditions, de stages ou d'autres événements musicaux. Notre programme varié et riche en événements vous permettra de partager des moments uniques et conviviaux avec des passionnés de musique, et de faire partie d'une association engagée et dynamique. Consultez régulièrement notre page pour ne rien manquer et soyez au courant des dernières actualités de l'association. Nous avons hâte de vous accueillir et de partager avec vous des moments inoubliables en musique !</p>
            <EventsFuturAllFuturEvent></EventsFuturAllFuturEvent>
        </article>
    </main>
</template>

<style lang="scss" scoped>
    main{
        @include grid;
        & > * {
            grid-column: 2/5;
            margin-bottom: 50px;
        }
        article > *{
            margin-bottom: 25px;
        }
    }
</style>