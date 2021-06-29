<template lang="pug">
.container.m-3
  h1.text-center Apy calculator EGLD
  .container(class="flex md:space-x-4 flex-col items-center md:justify-around md:flex-row").mx-auto
    label.block
      | Amount
      input(type="number" v-model="data.amount" ).block.mt-1
    label.block
      | APR
      input(type="number"  v-model="data.apr").block.mt-1
    label.block
      | Duration
      input(type="number"  v-model="data.duration").block.mt-1
    
  p.mt-5.text-2xl.w-full.font-bold.text-center result
    span.block {{apyCalc()}} EGLD
  p.mt-5.text-xl.w-full.font-bold.text-center ROI
    span.block {{apyCalc() - data.amount}} EGLD
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
