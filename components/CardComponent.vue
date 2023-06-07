<script>
export default{
    data(){
        return{
            hover : false
        }
    },
    props:{
        toogleDate:{
            type: Boolean,
            default : false
        },
        info:Array
    },
}
</script>

<template>
    <article class="card"  @mouseenter="hover = !hover" @mouseleave="hover = false">
        <figure>
            <div class="hover" v-if="hover">
                <h3>
                    <nuxt-icon name="more" id="icon"></nuxt-icon>
                    Voir plus
                </h3>
                <div class="filter"></div>         
            </div>
            <img :src="info.picture_id.adress" :alt="info.picture_id.alt">
        </figure>
        <div>
            <p>{{info.title}}</p>
            <h6 v-if="toogleDate">Date</h6>
            <NuxtLink :to="`events/futur/${ info.id }`"><h6>Voir plus</h6></NuxtLink>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.card{
    background-color: $main;
    width: 270px;
    height: fit-content;
    color: $white;
    border-radius: 3px;
    @media screen and (max-width:768px) {
        width: 150px;
        border-bottom: 1.83px;
    }
    figure{
        width: 100%;
        height: 268px;
        position: relative;
        @media screen and (max-width:768px) {
        height: 132px;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    & > div {
        padding: 15px 25px;
        text-align: center;
        @media screen and (max-width:768px) {
        padding: 5px 16px;
        }
        p:first-child{
            margin-bottom: 3px;
        }
        h6:first-child{
            margin-bottom: 3px;
        }
        h6:last-child{
            text-decoration: underline;
        }

    }

    // hover
    .hover{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        h3{
            position: absolute;
            top: 50%;
            left:50%;
            transform: translate(-50%, -50%);
            display:flex;
            align-items: center;
            span{
                font-size: 1.25rem;
                // margin-top: -5px;
                margin-right: 10px;
            }
            z-index: 2;
        }
        div{
            position : relative;
            background-color: rgb(0, 0, 0, 0.6);
            height: 100%;
            width: 100%;
        }
    }
}
</style>
