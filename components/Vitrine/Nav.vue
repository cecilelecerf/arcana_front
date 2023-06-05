<template>
    <header>
        <img src="@/static/images/logo.png" alt="">
        <nav>
            <NuxtLink to="/" activeClass="active">Accueil</NuxtLink>
            <NuxtLink to="/courses" activeClass="active">Cours</NuxtLink>
            <NuxtLink to="/events" activeClass="active">Evènements</NuxtLink>
            <NuxtLink to="/info" activeClass="active">Informations</NuxtLink>
            <NuxtLink to="/register" activeClass="active">S'inscrire</NuxtLink>
        </nav>
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
    @media screen and (min-width:1000px) {
        nav {
            width: 55%;
        }
    }
    @media screen and (max-width:825px) {
        padding: 15px 50px;
        
    }
}
</style>