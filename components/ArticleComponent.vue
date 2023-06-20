<script lang="ts">
export default {
    props:{
        date:{
            type : Boolean,
            default : true
        },
        location:{
            type : Boolean,
            default : true
        },
        info:{
            type : Object,
            required: true,
        }
    }
}
</script>

<template>
    <article class="article">
        <img :src="info.picture_id.adress" :alt="info.picture_id.alt">
        <div>
            <div>
                <h2>{{ info.title }}</h2>
                <p v-if="date">{{ info.date }}</p>
            </div>
            <p v-if="location">{{ info.location }}</p>
            <p class="description">{{ info.description }}</p>            
            <h6>Voir plus</h6>            
        </div>
    </article>
</template>

<style lang="scss" scoped>
.article{
    display: flex;
    width: 100%;
    height: fit-content;
    background-color: $main;
    color: $white;
    border-radius: 3px;    
    transition: all 300ms ease-out;
    &:hover{
        background-color: $lightBlue;
        color: $black;
    }

    img{
        background-color: $lightBlue;
        width: 20%;
        object-fit: cover;
        border-radius: 3px 0 0 3px;
    }
    & > div {
        width: 80%;
        padding: 20px 30px;
        & > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        & > * {
            margin-bottom: 20px;
        }
        .description{
            max-height: 100px;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 17px;

        }
        h6{
            margin-bottom: 0px;
            text-decoration: underline;
        }
    }
    @media screen and (max-width: 768px) {
        &{
            display: block;
            height: fit-content;
            img{
                width: 100%;
            height: 35%;
            }
            & > div{
                padding: 20px;
                width: auto;
                height: 65%;
                & > * {
                    margin-bottom: 15px;
                }
                & > div{
                    display: block;
                    h2{
                        margin-bottom: 15px;
                    }
                }
                .description{
                    max-height: 75px;
                }
            }
        }
    }
}
</style>