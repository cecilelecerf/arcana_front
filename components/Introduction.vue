<script lang="ts">
    export default{
        props:{
            title:{
                type: String,
                required: true,
                default : 'Title'
            },
            description:{
                type: String,
                required: true,
                default : 'Lorem impsum'
            },
            firstButton:{
                type: Object,
                required: true,
            },
            secondButton:{
                type: Object,
                required: false
            },
            twoButton:{
                type:Boolean,
                default: false
            }
        }
    }
</script>

<template>
    <article id="introduction">
        <h1>{{title}}</h1>
        <p>{{description}}</p>
        <div>
            <NuxtLink :to="firstButton.link" class="button secondary">{{firstButton.txt}}</NuxtLink>
            <NuxtLink :to="secondButton.link" class="button Outline" v-if="twoButton">{{secondButton.txt}}</NuxtLink>
        </div>
        <NuxtLink to="#scrollTo"  id="iconScroll" class="icon"><nuxt-icon name="Frame_1"></nuxt-icon></NuxtLink>
        
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
            @media screen and (max-width:768px){
                flex-direction: column;
                a:first-child{
                    margin-bottom : 10px
                }
            }
        }
        .icon{
            grid-column: 3;
            justify-self: center;
            font-size:2rem;
            fill: none !important;
        
        }
        @media screen and (min-width:1000px) {
            padding-bottom: 5%;
        }


}

</style>