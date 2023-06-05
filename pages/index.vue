<template>
    <div class="test">
        <InstrumentViolon :type="false" />
        
        <InstrumentAlto :type="true" />
        <InstrumentTrompette :type="false" />
        <InstrumentCor :type="true" />
        
    </div>
</template>
<style lang="scss">
.test{
    background-color: $main;
}</style>