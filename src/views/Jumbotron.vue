<template>
  <div class="main"> 
    <h1> Jumbotron </h1>
    <p> A jumbotron is a call to action which enables the user to interact with the website. </p>
    <div class="row">
      <div class="col-md-6">
        This jumbotron allows the user to subscribe to the website's services, for example to receive discounts, updates or a newsletter by providing the email.
      </div>
      <div class="col-md-6">
        <pre class="code-block">
          <code>
            &lt;div class="full-width"&gt;
              &lt;div class="jumbo-header"&gt;
                &lt;h2&gt; Subscribe to our newsletter!&lt;/h2&gt;
                &lt;form&gt;
                  &lt;input type="text" class="text-field" placeholder="example@email.com"&gt;
                  &lt;button class="my-button rg purple-border pu-border-hover"&gt; Subscribe &lt;/button&gt;
                &lt;/form&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          </code>
        </pre>
      </div>
    </div>
    <div class="full-width">
      <div class="jumbo-header">
        <h2> Subscribe to our newsletter!</h2>
        <form>
          <input type="text" class="text-field" placeholder="example@email.com">
          <button class="my-button rg purple-border pu-border-hover"> Subscribe </button>
        </form>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Jumbotron',
  metaInfo: {
      title: 'PatternLibrary - Jumbotron',
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
