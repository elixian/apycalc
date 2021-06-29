<template lang="pug">
h1.text-4xl.text-center FlexBox

.container.mx-auto
    h2.text-3xl.mb-5 flex-direction : Row
    .flex-row(class="md:flex md:space-x-4")
        div.flex.w-16.h-16 1
        div.flex.w-16.h-16 2
        div.flex.w-16.h-16 3
    h2.text-3xl flex-direction : Column
    .flex-col(class="md:flex md:space-y-4")
        div.flex.w-16.h-16 1
        div.flex.w-16.h-16 2
        div.flex.w-16.h-16 3

</template>

<style lang="scss">
    .w-16.h-16{
        @apply bg-pink-500 items-center justify-center rounded-lg text-white font-semibold ;
    }
</style>