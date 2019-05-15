<template>
  <div> 
    <h1> Navigation </h1>
    <p> This navigation bar is to be placed at the top of a website. The following designs provide a variation of layouts to suit different websites. </p>
    <hr>
    
    <h2> Default Navigation </h2>
    <div class="navigation">
      <a class="nav-brandname" href="#"> CompanyName </a>
      <ul class="nav-buttons">
        <li class="nav-button">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-button">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-button">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="col-md-6">
        <br>
        <p> This is the default navigation layout. The company branding is on the left, followed by the navigation buttons. </p>
      </div>
      <div class="col-md-6">
        <pre class="code-block">
          <code>
            &lt;div class="navigation"&gt;
              &lt;a class="nav-brandname" href="#"&gt; CompanyName &lt;/a&gt;
              &lt;ul class="nav-buttons"&gt;
                &lt;li class="nav-button"&gt;
                  &lt;a class="nav-link" href="#"&gt;Home&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class="nav-button"&gt;
                  &lt;a class="nav-link" href="#"&gt;About&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class="nav-button"&gt;
                  &lt;a class="nav-link" href="#"&gt;Contact&lt;/a&gt;
                &lt;/li&gt;
              &lt;/ul&gt;
            &lt;/div&gt;
          </code>
        </pre>
      </div>
    </div>
    <hr>
    
    <h2> Right Aligned </h2>
    <div class="navigation right">
      <a class="nav-brandname" href="#"> CompanyName </a>
      <ul class="nav-buttons">
        <li class="nav-button">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-button">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-button">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
     <div class="row">
      <div class="col-md-6">
        <br>
        <p> This layout displays the navigation buttons on the right side. This can be implemented by using the .right class.</p>
      </div>
      <div class="col-md-6">
        <pre class="code-block">
          <code>
            &lt;div class="navigation right"&gt;
              &lt;a class="nav-brandname" href="#"&gt; CompanyName &lt;/a&gt;
              &lt;ul class="nav-buttons"&gt;
                &lt;li class="nav-button"&gt;
                  &lt;a class="nav-link" href="#"&gt;Home&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class="nav-button"&gt;
                  &lt;a class="nav-link" href="#"&gt;About&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class="nav-button"&gt;
                  &lt;a class="nav-link" href="#"&gt;Contact&lt;/a&gt;
                &lt;/li&gt;
              &lt;/ul&gt;
            &lt;/div&gt;
          </code>
        </pre>
      </div>
    </div>
    <hr>
    
    <h2> Reversed Order </h2>
    <div class="navigation reversed">
      <a class="nav-brandname" href="#"> CompanyName </a>
      <ul class="nav-buttons">
        <li class="nav-button">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-button">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-button">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
     <div class="row">
      <div class="col-md-6">
        <br>
        <p> Here, the order is reversed, showing the company branding on the right side, and the navigation links on the right. To implement this, use the .reversed class.</p>
      </div>
      <div class="col-md-6">
        <pre class="code-block">
          <code>
            &lt;div class="navigation reversed"&gt;
              &lt;a class="nav-brandname" href="#"&gt; CompanyName &lt;/a&gt;
              &lt;ul class="nav-buttons"&gt;
                &lt;li class="nav-button"&gt;
                  &lt;a class="nav-link" href="#"&gt;Home&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class="nav-button"&gt;
                  &lt;a class="nav-link" href="#"&gt;About&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class="nav-button"&gt;
                  &lt;a class="nav-link" href="#"&gt;Contact&lt;/a&gt;
                &lt;/li&gt;
              &lt;/ul&gt;
            &lt;/div&gt;
          </code>
        </pre>
      </div>
    </div>
    
    <hr>
    <h2> Colours </h2>
    <p> These are the colour variations that can be applied to the navigation bar. The classes are .nav-purple, .nav-blue and .nav-green </p>
    <div class="navigation nav-purple">
      <a class="nav-brandname" href="#"> CompanyName </a>
      <ul class="nav-buttons">
        <li class="nav-button">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-button">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-button">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
    
    <div class="navigation nav-blue">
      <a class="nav-brandname" href="#"> CompanyName </a>
      <ul class="nav-buttons">
        <li class="nav-button">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-button">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-button">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
    
    <div class="navigation nav-green">
      <a class="nav-brandname" href="#"> CompanyName </a>
      <ul class="nav-buttons">
        <li class="nav-button">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-button">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-button">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
    
    <div class="row code-section">
      <div class="col-md-4">
        <h3> Purple </h3>
        <pre class="code-block">
          <code>
            &lt;div class="navigation nav-purple"&gt;
              &lt;a class="nav-brandname" href="#"&gt; CompanyName &lt;/a&gt;
              &lt;ul class="nav-buttons"&gt;
                &lt;li class="nav-button"&gt;
                  &lt;a class="nav-link" href="#"&gt;Home&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class="nav-button"&gt;
                  &lt;a class="nav-link" href="#"&gt;About&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class="nav-button"&gt;
                  &lt;a class="nav-link" href="#"&gt;Contact&lt;/a&gt;
                &lt;/li&gt;
              &lt;/ul&gt;
            &lt;/div&gt;
          </code>
        </pre>
      </div>
      <div class="col-md-4">
        <h3> Blue </h3>
        <pre class="code-block">
          <code>
            &lt;div class="navigation nav-blue"&gt;
              &lt;a class="nav-brandname" href="#"&gt; CompanyName &lt;/a&gt;
              &lt;ul class="nav-buttons"&gt;
                &lt;li class="nav-button"&gt;
                  &lt;a class="nav-link" href="#"&gt;Home&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class="nav-button"&gt;
                  &lt;a class="nav-link" href="#"&gt;About&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class="nav-button"&gt;
                  &lt;a class="nav-link" href="#"&gt;Contact&lt;/a&gt;
                &lt;/li&gt;
              &lt;/ul&gt;
            &lt;/div&gt;
          </code>
        </pre>
      </div>
      <div class="col-md-4">
        <h3> Green </h3>
        <pre class="code-block">
          <code>
            &lt;div class="navigation nav-green"&gt;
              &lt;a class="nav-brandname" href="#"&gt; CompanyName &lt;/a&gt;
              &lt;ul class="nav-buttons"&gt;
                &lt;li class="nav-button"&gt;
                  &lt;a class="nav-link" href="#"&gt;Home&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class="nav-button"&gt;
                  &lt;a class="nav-link" href="#"&gt;About&lt;/a&gt;
                &lt;/li&gt;
                &lt;li class="nav-button"&gt;
                  &lt;a class="nav-link" href="#"&gt;Contact&lt;/a&gt;
                &lt;/li&gt;
              &lt;/ul&gt;
            &lt;/div&gt;
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Nav',
    metaInfo: {
        title: 'PatternLibrary - Navigation',
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
