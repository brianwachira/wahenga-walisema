<template>
<ul class="text-light indie pt-5">
    <label v-if="!quote">This section needs some light</label>
    <div v-else>
        <li v-for="(Quote,index) in quote" @click="removeQuote(index)">{{Quote.content}}<br/>{{Quote.author}}</li>
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
        },methods :{
         removeQuote(index){
             if(confirm("Do you want to delete this Quote?")){
                this.quote.splice(index,1);
            }else  {
                return;
            }
         }
     }
}
</script>
<style scoped>
.indie{ 
  font-family: 'Indie Flower', cursive;
  font-weight: bold
}
li{
    cursor: pointer;
}
</style>

