<template>
    <div>
        <div v-show="!addQuote">
            <button class="btn btn-primary-outline indie mt-5 mx-auto d-block"  @click="quoteAdding()">Add a quote</button><br/>
        </div>
        <div v-show="addQuote">
            <label class=" lbl text-white indie mt-3" for="author">Author</label>
            <input type="text" class="form-control indie w-75  mx-auto d-block" name="author" v-model="quote.author" placeholder="Enter the name of the author" required/>
            <label class="lbl text-white indie mt-3  mx-auto" for="author">Quote</label>
            <textarea name="quote" class="form-control indie w-75 mx-auto d-block" cols="30" rows="4"  v-model="quote.content" placeholder="Enter a quote" required></textarea>
            <button class="btn btn-primary-outline indie mt-5 mx-auto d-block" @click="displayQuote()">submit it!</button><br/>
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
                    author : "",
                    content : ""
                },
                quotePackage : []
            }
        },
        methods : {
            quoteAdding(){
            this.addQuote = true,
            serverBus.$emit('addQuote',this.addQuote);
            },
            displayQuote(){
                if(this.quote.author !=="" && this.quote.content !==""){
                this.quotePackage.unshift({
                    author : this.quote.author,
                    content : this.quote.content
                });
                serverBus.$emit('quote',this.quotePackage);
                this.quote.author = "";
                this.quote.content = "";
                this.addQuote = false
                }else{
                    alert("No input field should be empty on submission");
                }
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
d-inherit{
    display: inherit
}
</style>

