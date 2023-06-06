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
    }
}
</script>

<template>
    <article class="article">
        <img src="@/static/images/FB_IMG_1556548727508.png" alt="">
        <div>
            <div>
                <h2>Titre de l'article</h2>
                <p v-if="date">Date de l'event</p>
            </div>
            <p v-if="location">Lieu de l'évènement</p>
            <p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, laudantium! Omnis, reiciendis sit. Nemo ipsa laboriosam optio atque deleniti magni laudantium minima nesciunt quos. Corporis cum magnam pariatur unde maiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, laudantium! Omnis, reiciendis sit. Nemo ipsa laboriosam optio atque deleniti magni laudantium minima nesciunt quos. Corporis cum magnam pariatur unde maiores.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, laudantium! Omnis, reiciendis sit. Nemo ipsa laboriosam optio atque deleniti magni laudantium minima nesciunt quos. Corporis cum magnam pariatur unde maiores.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, laudantium! Omnis, reiciendis sit. Nemo ipsa laboriosam optio atque deleniti magni laudantium minima nesciunt quos. Corporis cum magnam pariatur unde maioresLorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, laudantium! Omnis, reiciendis sit. Nemo ipsa laboriosam optio atque deleniti magni laudantium minima nesciunt quos. Corporis cum magnam pariatur unde maiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, laudantium! Omnis, reiciendis sit. Nemo ipsa laboriosam optio atque deleniti magni laudantium minima nesciunt quos. Corporis cum magnam pariatur unde maiores.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, laudantium! Omnis, reiciendis sit. Nemo ipsa laboriosam optio atque deleniti magni laudantium minima nesciunt quos. Corporis cum magnam pariatur unde maiores.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, laudantium! Omnis, reiciendis sit. Nemo ipsa laboriosam optio atque deleniti magni laudantium minima nesciunt quos. Corporis cum magnam pariatur unde maiores.</p>            
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
    }
    & > div {
        width: 80%;
        padding: 33.75px 40px;
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