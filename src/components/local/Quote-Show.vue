<template>
<ul class="text-light">
    <label v-if="!quote">This section needs some light</label>
    <div v-else>
        <li>{{quote.author}}</li>
        <li>{{quote.content}}</li>
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

