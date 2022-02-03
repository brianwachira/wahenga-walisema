<template>
  <div id="app">
    <head-img></head-img>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6  text-center">
          <add-quote></add-quote>
        </div>
        <div class="col-md-6">
          <quote-show></quote-show>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headimg from './components/shared/Head.vue'
import quotes from './components/local/Quotes.vue'
import quoteshow from './components/local/Quote-Show.vue'

export default {
  name: 'app',
  components: {
    'head-img':headimg,
    'add-quote': quotes,
    'quote-show': quoteshow
  }
}

</script>

<style>
#app{
    background-image : url("http://i.imgur.com/yIeVjcQ.jpg");
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
