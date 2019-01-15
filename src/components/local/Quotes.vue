<template>
    <div>
    <button class="btn btn-primary-outline indie mt-5">Add a quote</button><br/>
    <label class="lbl text-white indie mt-3" for="author">Author</label>
    <input type="text" class="form-control indie w-75" name="author"  placeholder="Enter the name of the author" required/>
    <label class="lbl text-white indie mt-3" for="author ">Quote</label>
    <textarea name="quote" class="form-control indie w-75" cols="30" rows="4"  placeholder="Enter a quote" required></textarea>
    <button class="btn btn-primary-outline indie mt-5">submit it!</button><br/>
    </div>
</template>
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

