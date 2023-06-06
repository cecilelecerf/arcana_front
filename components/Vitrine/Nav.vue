<script>
    export default{
    data(){
        return{
            close : false
        }
    },
    methods:{
        toggleBurger(close){
            if(!close){
                document.querySelector('nav').classList.add('open');                
                return this.close = !close;
            }
            else{
                document.querySelector('nav').classList.remove('open');      
                return this.close = !close
            }

        }
    }
    }
</script>

<template>
    <header>
        
        <img src="@/static/images/logo.png" alt="Logo Arcana">
        <nav>
            <NuxtLink to="/" activeClass="active">Accueil</NuxtLink>
            <NuxtLink to="/courses" activeClass="active">Cours</NuxtLink>
            <NuxtLink to="/events" activeClass="active">Evènements</NuxtLink>
            <NuxtLink to="/info" activeClass="active">Informations</NuxtLink>
            <NuxtLink to="/register" activeClass="active">S'inscrire</NuxtLink>
        </nav>
        <nuxt-icon name="burger" id="icon" @click="toogleBurger(this.close)"></nuxt-icon>
    </header>
</template>

<style lang="scss" scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px 70px;
    background-color: $main;
    color: $white;
    position: sticky;
    top: 0px;
    z-index: 10;
    img{
        max-height: 80px;
        min-width: 85px;
        width: 8%;
        object-fit: contain;
        justify-self: flex-start;
    }
    nav{
        display: flex;
        justify-content: space-between;
        width: 80%;
        text-align: center;
        & > * {
            margin-left: 10px;
            position: relative;
            &:hover::after{
                content: '°';
                position: absolute;
                display: block;
                left: 48%;
                top: 24px;
            }
        }
        a.active{
            &::after{
                content: "";
                position: absolute;
                left: 5%;
                top: 30px;
                width: 90%;
                height: 1px;
                background-color: $white;
            }
        }
    }
    #icon{
        display: none;
        height: 100%;
        svg{
            width:100%;
        }
    }
    @media screen and (min-width:1000px) {
        nav {
            width: 55%;
        }
    }
    @media screen and (max-width:825px) {
        padding: 15px 50px;
        
    }
    @media screen and (max-width:768px) {
        nav{
            // display: none;
            position: fixed;
            bottom: 0px;
            left:0px;
            flex-direction: column;
            align-items:center;
            padding: 43px 10px 20px 10px;
            border-radius: 80% 80% 0 0;
            background-color: $main;
            width: 100%;
            transition: transform 0.3s ease;
            transform: translateY(100%);
            &.open {
                transform: translateY(0%);
            }
            & > * {
                width: fit-content;
                margin : 10px 0;
                &:hover::after{
                    display:unset;
                }
            }
            a.active{
                &::after{
                    top: 22px;
                }
            }

            
        }
        #icon{
            display: block;
        }
        
    }
}
</style>