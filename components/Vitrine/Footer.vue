<template>
    <footer>
        <img src="@/static/images/logo.png" alt="Logo Arcana">
        <nav>
            <NuxtLink to="/">Accueil</NuxtLink>
            <NuxtLink to="/courses">Cours</NuxtLink>
            <NuxtLink to="/events">Evènements</NuxtLink>
            <NuxtLink to="/info">Informations</NuxtLink>
            <NuxtLink to="/register">S'inscrire</NuxtLink>
        </nav>
        <nav>
            <NuxtLink to="/legalNotice">Mention légale</NuxtLink>
            <NuxtLink to="/privacyPolicy">Politique de confidentialité</NuxtLink>
            <NuxtLink to="/cookies">Cookies</NuxtLink>
        </nav>
        <nav>
            <NuxtLink to="/legalNotice">Facebook</NuxtLink>
            <NuxtLink to="/privacyPolicy">Email</NuxtLink>
            <NuxtLink to="/cookies">1 rue de la tête St Médard</NuxtLink>
        </nav>
    </footer>
</template>

<style lang="scss" scoped>
    footer{
        display: flex;
        justify-content: space-between;
        background-color: $main;
        color: $white;
        border-radius: 80% 80% 0 0;
        padding: 80px 70px 20px 70px;
        & > *{
            max-width: 25%;
        }
        img{
            width: 15%;            
            object-fit: contain;
            max-height: 80%;
        }
        nav{
            display: flex;
            flex-direction: column;
            & > * {
                        margin: 7px 0;
            }
        }
        @media screen and (max-width: 825px) {
            padding: 80px 50px 20px 50px;
        }
        @media screen and (max-width: 768px) {
            & {
                font-size: 17px;
            line-height: 17px;
                padding: 60px 40px 20px 40px;
                flex-direction: column;
                align-items: center;
                text-align: center;
                img{
                    width: 30%;
                    min-width: 120px;
                }
                nav{
                    flex-direction:row;
                    flex-wrap: wrap;
                    width:100%;
                    max-width: unset;
                    justify-content: center;
                    margin: 10px 0;
                    & > * {
                        margin: 10px 10px;
                    }

                }
            }
            
        }
        @media screen and (max-width:480px){
            
            border-radius: 30% 30% 0 0;
        }
//   @media screen and (max-width:480px){
//     grid-template-columns: 20px repeat(3, 1fr) 20px;
//   }
        
    }
</style>