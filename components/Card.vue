<script>
export default{
    data(){
        return{
            hover : false
        }
    },
    props:{
        date:{
            type: Boolean,
            default : false
        },
        info:Array
    },
}
</script>

<template>
    <div class="card"  @mouseenter="hover = !hover" @mouseleave="hover = false">
        <figure>
            <div class="hover" v-if="hover">
                <h3>
                    <Icon name="streamline:interface-add-1-expand-cross-buttons-button-more-remove-plus-add" class="icon"></Icon> 
                    Voir plus
                </h3>                
            </div>
            <img src="" alt="">
        </figure>
        <div>
            <p>Musique collective</p>
            <h6 v-if="date">Date</h6>
            <h6>Voir plus</h6>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card{
    background-color: $main;
    width: 270px;
    height: fit-content;
    color: $white;
    border-radius: 3px;
    @media screen and (max-width:600px) {
        width: 150px;
        border-bottom: 1.83px;
    }
    figure{
        width: 100%;
        height: 268px;
        position: relative;
        @media screen and (max-width:600px) {
        height: 132px;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        div{    
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            h3{
                position: absolute;
                top: calc(50% - 17px);
                left: calc(50% - 58px);
                .icon{
                    font-size: 1rem;
                    margin-top: -5px;
                    margin-right: 10px;
                }
            }
        }
    }
    & > div {
        padding: 15px 25px;
        text-align: center;
        @media screen and (max-width:600px) {
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
}
</style>
