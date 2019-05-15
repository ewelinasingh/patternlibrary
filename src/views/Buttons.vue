<template>
  <div> 
    <h1> Buttons </h1>
    <p>Buttons available in a variation of styles, including different colours, sizes, widths as well as bordered buttons and hover effects.</p>
    <hr>
    
    <h3> Default Button </h3>
    <p> This is the default look of the button without any further styling applied. </p>
    <button class="my-button">Button</button>
    <pre>
      <code class="code-block">
        &lt;button class="my-button"&gt;Button&lt;button&gt;
      </code>
    </pre>
    <hr>
    
    <h3> Usage </h3>
    <p> These .my-button style can be applied to button, anchor and input tags. </p>
    <button class="my-button">Button</button>
    <a class="my-button">Anchor</a>
    <input type="submit" class="my-button" value="Submit">
    <pre>
      <code class="code-block">
        &lt;button class="my-button"&gt;Button&lt;/button&gt;
        &lt;a class="my-button"&gt;Anchor&lt;/a&gt;
        &lt;input type="submit" class="my-button" value="Submit"&gt;
      </code>
    </pre>
    <hr>
    
    <h2> Colours </h2>
    <p> The following colours can be applied to the buttons by simply adding the .white, .grey, .black, .purple, .blue or .green class to the button. </p>
    <button class="my-button rg white">Button</button>
    <button class="my-button rg grey">Button</button>
    <button class="my-button rg black">Button</button>
    <button class="my-button rg purple">Button</button>
    <button class="my-button rg blue">Button</button>
    <button class="my-button rg green">Button</button>
    <pre>
      <code class="code-block">
        &lt;button class="my-button rg white"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg grey"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg black"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg purple"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg blue"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg green"&gt;Button&lt;/button&gt;
      </code>
    </pre>
    <hr>
    
    <h2> Borders </h2>
    <p> Instead of a filled colour buttons, only coloured borders can be applied. </p>
    <button class="my-button rg white-border">Button</button>
    <button class="my-button rg grey-border">Button</button>
    <button class="my-button rg black-border">Button</button>
    <button class="my-button rg purple-border">Button</button>
    <button class="my-button rg blue-border">Button</button>
    <button class="my-button rg green-border">Button</button>
    <pre>
      <code class="code-block">
        &lt;button class="my-button rg white-border"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg grey-border"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg black-border"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg purple-border"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg blue-border"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg green-border"&gt;Button&lt;/button&gt;
      </code>
    </pre>
    <hr>
    
    <h2> Hover Effect </h2>
    <p> A hover effect can be added to the buttons to show feedback on hover. </p>
    <button class="my-button rg white wh-hover">Button</button>
    <button class="my-button rg grey gr-hover">Button</button>
    <button class="my-button rg black bl-hover">Button</button>
    <button class="my-button rg purple pu-hover">Button</button>
    <button class="my-button rg blue blu-hover">Button</button>
    <button class="my-button rg green grn-hover">Button</button>
    <br>
    <button class="my-button rg white-border wh-border-hover">Button</button>
    <button class="my-button rg grey-border gr-border-hover">Button</button>
    <button class="my-button rg black-border bl-border-hover">Button</button>
    <button class="my-button rg purple-border pu-border-hover">Button</button>
    <button class="my-button rg blue-border blu-border-hover">Button</button>
    <button class="my-button rg green-border grn-border-hover">Button</button>
    <pre>
      <code class="code-block">
        &lt;button class="my-button rg white wh-hover"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg grey gr-hover"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg black bl-hover"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg purple pu-hover"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg blue blu-hover"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg green grn-hover"&gt;Button&lt;/button&gt;
        
        &lt;button class="my-button rg white-border wh-border-hover"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg grey-border gr-border-hover"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg black-border bl-border-hover"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg purple-border pu-border-hover"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg blue-border blu-border-hover"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg green-border grn-border-hover"&gt;Button&lt;/button&gt;
      </code>
    </pre>
    <hr>
    
    <h2> Sizes </h2>
    <p> The buttons can be used in different sizes. </p>
    <button class="my-button purple sm">Button</button>
    <button class="my-button purple rg">Button</button>
    <button class="my-button purple lrg">Button</button>
    <pre>
      <code class="code-block">
        &lt;button class="my-button purple sm"&gt;Button&lt;/button&gt;
        &lt;button class="my-button purple rg"&gt;Button&lt;/button&gt;
        &lt;button class="my-button purple lrg"&gt;Button&lt;/button&gt;
      </code>
    </pre>
    <hr>
    
    <h2> Width </h2>
    <p> These widths can abe applied to the buttons. </p>
    <button class="my-button rg blue">Button</button> <br>
    <button class="my-button rg blue md-width">Button</button> <br>
    <button class="my-button rg blue lrg-width">Button</button>
    <pre>
      <code class="code-block">
        &lt;button class="my-button rg blue"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg blue md-width"&gt;Button&lt;/button&gt;
        &lt;button class="my-button rg blue lrg-width"&gt;Button&lt;/button&gt;
      </code>
    </pre>
  </div>
  
</template>

<script>
  export default {
    name: 'Buttons',
    metaInfo: {
        title: 'PatternLibrary - Buttons',
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
