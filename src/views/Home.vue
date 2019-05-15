<template>
  <div> 
    <h3> PatternLibrary provides component templates to use within your website! </h3>
    <br><br><br>
    
    <h3> How to Download </h3>
    <p> Click the below button to download the PatternLibrary.</p>
    <br>
    <a href="downloads/PatternLibrary.zip" class="my-button purple" download> Download PatternLibrary </a>
    <br><br><br><br>
    
    <h3> How to Set Up </h3>
    <p> To use the PatternLibrary CSS file, add the following code to the head tag. Ensure to place it before other stylesheets. </p>
    <pre class="code-block">
      <code>
        &lt;link rel="stylesheet" href="stylesheet/main.css"&gt;
      </code>
    </pre>
    
  </div>
</template>

<script>
  export default {
    name: 'Home',
    metaInfo: {
        title: 'PatternLibrary - Home',
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

  a{
    text-decoration: none;
  }
  
  a:hover{
    color: white;
  }
  
  pre{
    text-align: center;
  }
</style>
