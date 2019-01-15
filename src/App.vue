<template>
  <div id="app">
    <head-img></head-img>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <add-quote></add-quote>
        </div>
      </div>
    </div>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
  </div>
</template>

<script>
import headimg from './components/shared/Head.vue'
import quotes from './components/local/Quotes.vue'

export default {
  name: 'app',
  components: {
    'head-img':headimg,
    'add-quote': quotes
  }
}
</script>

<style>
#app{
    background-image : url("http://i.imgur.com/yIeVjcQ.jpg");
    height: 100%;
}
</style>
