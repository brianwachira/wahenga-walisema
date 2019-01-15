<template>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi pariatur molestiae, voluptate nulla doloremque est labore at. Unde nesciunt doloribus error corporis? Quaerat tenetur exercitationem quisquam, corrupti asperiores minima eum!Lorem</p>
</template>
<script>
    import { serverBus } from '../../main';
    export default {
     data(){
         return {
             quote: null
         }
     },
     methods:{
         created(){
             serverBus.$on('quote',(quote)=>{
                 this.quote = quote;
             });
         }
     }
    }
</script>

