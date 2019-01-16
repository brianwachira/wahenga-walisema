<template>
<ul class="text-light indie">
    <label v-if="!quote">This section needs some light</label>
    <div v-else>
        <li>{{quote.content}}<br/>{{quote.author}}</li>
    </div>
</ul>
</template>
<script>
    import { serverBus } from '../../main';
    export default {
     data(){
         return {
             quote: null
         }
     },
     created(){
         serverBus.$on('quote',(quotes)=>{
             this.quote = quotes;
         });
     }
    }
</script>
<style scoped>
.indie{ 
  font-family: 'Indie Flower', cursive;
}
</style>

