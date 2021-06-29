<template lang="pug">
.container.m-3
  h1.text-center Apy calculator 
    span.text-center only for compound 
  .container(class="flex  flex-col items-center md:space-x-4 md:justify-around md:flex-row").mx-auto
    label.block
      | Amount staked
      input(type="number" ,v-model="data.amount", step="0.01" ).block.mt-1
    label.block
      | APR 
      span.text-xs (see on your service provider)
      input(type="number",  v-model="data.apr", step="0.01").block.mt-1
    label.block
      | Duration 
      span.text-xs (days) 
      input(type="number",  v-model="data.duration", step="1").block.mt-1
  .container.mx-auto(class="w-1/2").text-center.mt-8
    p.mt-5.text-xl.font-bold Total after {{data.duration}} day(s)
    span.block {{apyCalc().toFixed(5)}} EGLD
    p.mt-5.text-xl.font-bold ROI
    span.block {{(apyCalc() - data.amount).toFixed(5)}} EGLD
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({

  setup() {
    let data = reactive({
      amount:1,
      apr:15.5,
      duration:365
    });


    function apyCalc(){
      let i = 0;
       let apr  = data.apr / 365;
      let result = + data.amount;
      while( i < data.duration){
        result = result + (result * apr /100 )
        i++;
      }
      return result;
    }



    return{
      data,
      apyCalc
    }
  }
})

</script>
