<script></script>

<template>
    <div class="button primary">
      <a href="">Test du bouton</a>
    </div>
</template>

<style lang="scss">
.button {
    padding: 17px 30px;
    border-radius: 4px;
    width: fit-content;
    height: fit-content;
    border: solid 2px $main;
    transition: all 300ms ease-out;
    color: $white;
    @media screen and (max-width: 768px) {
        &{
            padding: 11px 17px;
        }
    }
    a{
        text-align: center;
    }
    &.primary{
        background-color: $main;
        &:hover{
            color: $main;
            background-color: transparent;
        }
    }
    &.secondary{
        background-color: $white;
        color: $main;
        &:hover{
            border-color: $white;
            background-color: $main;
            color: $white;
        }
    }
    &.outline{
        border-color: $white;
        &:hover{
            background-color: $white;
            border-color: $main;
            color: $main;
        }
    }
} 

</style>