<template>
    <div>
        <div>
            <h1 class="text-center text-light pt-5">Wahenga Walisema</h1>
        </div>
        <transition leave-active-class="animated bounceOut">
            <div v-show="!addQuote">
                <h2 class="text-center text-light mt-4"> Light fires in people's hearts</h2>
            </div>
        </transition>
    </div>
</template>
<script>
import {serverBus} from '../../main'
export default {
  data (){
    return {
      addQuote : false
    }
  },
  created(){
             serverBus.$on('addQuote',(addQuotes)=>{
             this.addQuote= addQuotes;
         });
  }
}
</script>

<style scoped>
h1{
    font-family: 'ZCOOL KuaiLe', cursive;
}
h2{
    font-family: 'Indie Flower', cursive;
}
</style>

