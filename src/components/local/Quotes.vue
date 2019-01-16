<template>
    <div>
    <button class="btn btn-primary-outline indie mt-5" v-show="!addQuote" @click="addQuote = !addQuote">Add a quote</button><br/>
    <div v-show="addQuote">
        <label class="lbl text-white indie mt-3" for="author">Author</label>
        <input type="text" class="form-control indie w-75" name="author" v-model="quote.author" placeholder="Enter the name of the author" required/>
        <label class="lbl text-white indie mt-3" for="author ">Quote</label>
        <textarea name="quote" class="form-control indie w-75" cols="30" rows="4"  v-model="quote.content" placeholder="Enter a quote" required></textarea>
        <button class="btn btn-primary-outline indie mt-5" @click="displayQuote()">submit it!</button><br/>
    </div>
    </div>
</template>
<script>
    import { serverBus } from '../../main';
    export default {
        data(){
            return{
                addQuote : false,
                quote : {
                    author : null,
                    content : null
                },
                quotePackage : []
            }
        },
        methods : {
            displayQuote(){
                //console.log(this.quote.author);
                //console.log(this.quote.content);
                this.quotePackage.unshift({
                    author : this.quote.author,
                    content : this.quote.content
                });
                serverBus.$emit('quote',this.quotePackage);
                this.addQuote = false
            }
        }
    }
</script>

<style scoped>
button{
  transition-duration: 0.4s;
  border: 2px solid orange;
  color: #f8f9fa;
}
.indie{ 
  font-family: 'Indie Flower', cursive;
}
button:hover{
    background-color: white;
    color: black;
}
</style>

