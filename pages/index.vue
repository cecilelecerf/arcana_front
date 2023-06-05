<template>
    <div class="test">
        <!-- <InstrumentFlute :styleOutline="true"/>
        <InstrumentViolon :styleOutline="false"/>
        <InstrumentTuba :styleOutline="true"/> -->
        <InstrumentPiano :type="false"/>
        <InstrumentFlute :type="true"/>
    </div>
</template>
<style lang="scss">
.test{
    background-color: $main;
}</style>