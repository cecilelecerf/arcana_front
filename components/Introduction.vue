<script lang="ts">
</script>

<template>
    <article id="introduction">
        <h1>Titre</h1>
        <p>Découvrez les événements passés et à venir de l'association Arcana, où la musique et la convivialité sont toujours au rendez-vous !</p>
        <div>
            <NuxtLink class="button secondary">Futurs évènements</NuxtLink>
            <NuxtLink class="button Outline">Evènements passés</NuxtLink>
        </div>
        <nuxt-icon name="chevronsDown" class="icon"></nuxt-icon>
    </article>
</template>

<style lang="scss" scoped>
    #introduction{
        @include grid;
        grid-column-start: 1;
        grid-column-end: 6;
        background-color: $main;
        border-radius: 0 0 80% 80%;
        color: $white;
        padding: 0 0 10% 0;
        text-align: center;
        h1{
            grid-column: 2/5;
        }
        p{
            grid-column: 2/5;
        }
        div{
            grid-column: 2/5;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
        .icon{
            grid-column: 3;
            justify-self: center;

        }

    }

</style>