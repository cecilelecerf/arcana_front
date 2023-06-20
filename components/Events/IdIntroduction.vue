<script lang="ts">
    export default{
        props:{
            toogleDate:{
                type: Boolean,
                default : false,
            },
            info:{
                type: Object,
                required: true,
            }
        },
        methods:{
            formatDate(){       
                const test = new Date(this.info.startDate);
                return test.toLocaleDateString("fr")
            }
        }
    }
</script>

<template>
    <article id="introduction" :style="`backgroundImage: url(${ info.picture_id.adress })`">
        <h1>{{info.title}}</h1>
        <p>{{ formatDate() }}</p>
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
        padding: 2.5% 0 10% 0;
        text-align: center;
        position: relative;
        & > * {
            z-index: 2;
        }
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

        &::before{
            content:'';
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background-color: rgba(99,126,223,0.6);
            padding: 2.5% 0 10% 0;
            border-radius: 0 0 80% 80%;
            z-index: 1;
        }


}
</style>
