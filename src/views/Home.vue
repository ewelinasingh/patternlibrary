<template>
  <div> 
    <h1> Home </h1>
    <h3> PatternLibrary provides component templates to use within your website! </h3>
    <hr>
    
    <h3> How to Download </h3>
    <p> Click the below button to download the PatternLibrary. </p>
    <button class="my-button purple" href="../assets/fb.png"> Download PatternLibrary </button>
    <hr>
    
    <h3> How to Set Up </h3>
    <hr>
    
    
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

</style>
