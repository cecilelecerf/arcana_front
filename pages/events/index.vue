
<template>
    <div id="index">
        <Introduction
        twoButton="true"
            title="Les évènements"
            description="Découvrez les événements passés et à venir de l'association Arcana, où la musique et la convivialité sont toujours au rendez-vous !"
            :first-button="{ txt: 'Futurs évènements', link: '/events/futur' }"
            :second-button="{ txt: 'Evènements passés', link: '/events/past' }"
        />
    </div>
</template>

<style lang="scss" scoped>
    #index{
        @include grid;
    }
</style>