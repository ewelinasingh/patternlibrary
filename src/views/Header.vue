<template>
  <div> 
    <h1> Header </h1>
    <div class="row">
      <div class="col-md-6">
        <p> The header is displayed after the navigations on a website. This header is to be used as a hero image. </p>
      </div>
      <div class="col-md-6">
        <pre class="code-block">
          <code>
            &lt;header&gt;
              &lt;div class="header-container"&gt;
                &lt;div class="header-img-container"&gt;
                  &lt;img class="header-img" src="../assets/header.png"&gt;
                &lt;/div&gt;
                &lt;div class="header-text"&gt;
                  &lt;p class="p1"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/p&gt;
                  &lt;button href="#" class="my-button white"&gt;Explore More&lt;/button&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/header&gt;
          </code>
        </pre>
      </div>
    </div>
    <header>
      <div class="header-container">
        <div class="header-img-container">
          <img class="header-img" src="../assets/header.png">
        </div>
        <div class="header-text">
          <p class="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button href="#" class="my-button white">Explore More</button>
        </div>
      </div>
    </header>
    
  </div>
</template>

<script>
  export default {
    name: 'Header',
    metaInfo: {
        title: 'PatternLibrary - Header',
        meta: [
          {charset: 'utf-8'}
        ]
    },
    props: {
      msg: String
    }
  }
</script>

<style scoped>
</style>
