<template>
  <div> 
    <h1> Grid System </h1>
    <p> This is a grid system which will make the page layout easy to manage. 
        It is made so that the user can choose how many columns they want. 
        The following instruction show how to use this grid system for up to 10 columns.
        These columns are shown with border to demostrate their layout easily. 
        To remove the borders, simply do not use the .col-border class. </p>
    <hr>
    
    <h2> 1 column </h2>
    <div class="row-container">
      <div class="column col-border"> 1 </div>
    </div>
    <pre class="code-block">
      <code>
        &lt;div class="row-container"&gt;
          &lt;div class="column col-border"&gt; 1 &lt;/div&gt;
        &lt;/div&gt;
      </code>
    </pre>
    <hr>
    
    <h2> 2 columns </h2>
    <div class="row-container">
      <div class="column col-border"> 2 </div>
      <div class="column col-border"> 2 </div>
    </div>
    <pre class="code-block">
      <code>
        &lt;div class="row-container"&gt;
          &lt;div class="column col-border"&gt; 2 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 2 &lt;/div&gt;
        &lt;/div&gt;
      </code>
    </pre>
    <hr>
    
    <h2> 3 columns </h2>
    <div class="row-container">
      <div class="column col-border"> 3 </div>
      <div class="column col-border"> 3 </div>
      <div class="column col-border"> 3 </div>
    </div>
    <pre class="code-block">
      <code>
        &lt;div class="row-container"&gt;
          &lt;div class="column col-border"&gt; 3 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 3 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 3 &lt;/div&gt;
        &lt;/div&gt;
      </code>
    </pre>
    <hr>
    
    <h2> 4 columns </h2>
    <div class="row-container">
      <div class="column col-border">4 </div>
      <div class="column col-border">4 </div>
      <div class="column col-border">4 </div>
      <div class="column col-border">4 </div>
    </div>
    <pre class="code-block">
      <code>
        &lt;div class="row-container"&gt;
          &lt;div class="column col-border"&gt; 4 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 4 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 4 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 4 &lt;/div&gt;
        &lt;/div&gt;
      </code>
    </pre>
    <hr>
    
    <h2> 5 columns </h2>
    <div class="row-container">
      <div class="column col-border">5 </div>
      <div class="column col-border">5 </div>
      <div class="column col-border">5 </div>
      <div class="column col-border">5 </div>
      <div class="column col-border">5 </div>
    </div>
    <pre class="code-block">
      <code>
        &lt;div class="row-container"&gt;
          &lt;div class="column col-border"&gt; 5 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 5 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 5 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 5 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 5 &lt;/div&gt;
        &lt;/div&gt;
      </code>
    </pre>
    <hr>
    
    <h2> 6 columns </h2>
    <div class="row-container">
      <div class="column col-border">6 </div>
      <div class="column col-border">6 </div>
      <div class="column col-border">6 </div>
      <div class="column col-border">6 </div>
      <div class="column col-border">6 </div>
      <div class="column col-border">6 </div>
    </div>
    <pre class="code-block">
      <code>
        &lt;div class="row-container"&gt;
          &lt;div class="column col-border"&gt; 6 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 6 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 6 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 6 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 6 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 6 &lt;/div&gt;
        &lt;/div&gt;
      </code>
    </pre>
    <hr>
    
    <h2> 7 columns </h2>
    <div class="row-container">
      <div class="column col-border">7 </div>
      <div class="column col-border">7 </div>
      <div class="column col-border">7 </div>
      <div class="column col-border">7 </div>
      <div class="column col-border">7 </div>
      <div class="column col-border">7 </div>
      <div class="column col-border">7 </div>
    </div>
    <pre class="code-block">
      <code>
        &lt;div class="row-container"&gt;
          &lt;div class="column col-border"&gt; 7 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 7 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 7 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 7 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 7 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 7 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 7 &lt;/div&gt;
        &lt;/div&gt;
      </code>
    </pre>
    <hr>
    
    <h2> 8 columns </h2>
    <div class="row-container">
      <div class="column col-border">8 </div>
      <div class="column col-border">8 </div>
      <div class="column col-border">8 </div>
      <div class="column col-border">8 </div>
      <div class="column col-border">8 </div>
      <div class="column col-border">8 </div>
      <div class="column col-border">8 </div>
      <div class="column col-border">8 </div>
    </div>
    <pre class="code-block">
      <code>
        &lt;div class="row-container"&gt;
          &lt;div class="column col-border"&gt; 8 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 8 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 8 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 8 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 8 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 8 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 8 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 8 &lt;/div&gt;
        &lt;/div&gt;
      </code>
    </pre>
    <hr>
    
    <h2> 9 columns </h2>
    <div class="row-container">
      <div class="column col-border">9 </div>
      <div class="column col-border">9 </div>
      <div class="column col-border">9 </div>
      <div class="column col-border">9 </div>
      <div class="column col-border">9 </div>
      <div class="column col-border">9 </div>
      <div class="column col-border">9 </div>
      <div class="column col-border">9 </div>
      <div class="column col-border">9 </div>
    </div>
    <pre class="code-block">
      <code>
        &lt;div class="row-container"&gt;
          &lt;div class="column col-border"&gt; 9 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 9 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 9 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 9 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 9 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 9 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 9 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 9 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 9 &lt;/div&gt;
        &lt;/div&gt;
      </code>
    </pre>
    <hr>
    
    <h2> 10 columns </h2>
    <div class="row-container">
      <div class="column col-border">10 </div>
      <div class="column col-border">10 </div>
      <div class="column col-border">10 </div>
      <div class="column col-border">10 </div>
      <div class="column col-border">10 </div>
      <div class="column col-border">10 </div>
      <div class="column col-border">10 </div>
      <div class="column col-border">10 </div>
      <div class="column col-border">10 </div>
      <div class="column col-border">10 </div>
    </div>
    <pre class="code-block">
      <code>
        &lt;div class="row-container"&gt;
          &lt;div class="column col-border"&gt; 10 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 10 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 10 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 10 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 10 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 10 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 10 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 10 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 10 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 10 &lt;/div&gt;
        &lt;/div&gt;
      </code>
    </pre>
    <hr>
    
    <h2> Adding Rows </h2>
    <p> To add more rows, simply create another .row-container below. </p>
    <div class="row-container">
      <div class="column col-border"> 1 </div>
    </div>
    <div class="row-container">
      <div class="column col-border"> 2 </div>
      <div class="column col-border"> 2 </div>
    </div>
    <div class="row-container">
      <div class="column col-border"> 3 </div>
      <div class="column col-border"> 3 </div>
      <div class="column col-border"> 3 </div>
    </div>
    <pre class="code-block">
      <code>
        &lt;div class="row-container"&gt;
          &lt;div class="column col-border"&gt; 1 &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="row-container"&gt;
          &lt;div class="column col-border"&gt; 2 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 2 &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="row-container"&gt;
          &lt;div class="column col-border"&gt; 3 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 3 &lt;/div&gt;
          &lt;div class="column col-border"&gt; 3 &lt;/div&gt;
        &lt;/div&gt;
      </code>
    </pre>
  </div>
</template>

<script>
  export default {
    name: 'Grid',
    metaInfo: {
      title: 'PatternLibrary - Grid System',
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


