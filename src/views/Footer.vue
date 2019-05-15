<template>
  <div class="main"> 
    <h1> Footer </h1>
    <p> A website footer is to be placed at the bottom of a page, containing quick links for the user. </p>
    <div class="footer">
      <div class="full-width">
        <div class="company-info third">
          <p>COMPANY</p>
          <a href="#">About Us</a><br>
          <a href="#">Contact</a><br>
          <a href="#">FAQs</a>
        </div>
        <div class="quick-links third">
          <p>QUICK LINKS</p>
          <a href="#">Blog</a><br>
          <a href="#">Jobs</a><br>
          <a href="#">Reviews</a>
        </div>
        <div class="social-media third">
          <p>FOLLOW US ON</p>
          <div class="social social-1">
            <a href="#"> 
              <img src="../assets/fb.png" alt="Like us on Facebook" style="height:40px;width:40px;">
            </a>
          </div>
          <div class="social social-2">
            <a href="#"> 
              <img src="../assets/ig.png" alt="Follow us on Instagram" style="height:40px;width:40px;">
            </a>
          </div>
          <div class="social social-3">
            <a href="#">  
              <img src="../assets/tw.png" alt="Follow us on Twitter" style="height:40px;width:40px;">
            </a>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-5">
       <p> This footer component is made up of three columns. Each column contains different content.
           The first column has links similar to a regular navigation bar, to stop the user from having to scroll back to the top of the page to navigate to a different page.
           The second column contains other links the user might find useful.
           The third column contains social media links, so the user can easily find the brand's pages on socia platforms.
           This is only a template, and the content of the footer can be altered to match the needs of a website. </p>
      </div>
      <div class="col-md-7">
        <pre class="code-block">
          <code>
            &lt;div class="footer"&gt;
              &lt;div class="full-width"&gt;
                &lt;div class="company-info third"&gt;
                  &lt;p&gt;COMPANY&lt;/p&gt;
                  &lt;a href="#"&gt;About Us&lt;/a&gt;&lt;br&gt;
                  &lt;a href="#"&gt;Contact&lt;/a&gt;&lt;br&gt;
                  &lt;a href="#"&gt;FAQs&lt;/a&gt;
                &lt;/div&gt;
                &lt;div class="quick-links third"&gt;
                  &lt;p&gt;QUICK LINKS&lt;/p&gt;
                  &lt;a href="#"&gt;Blog&lt;/a&gt;&lt;br&gt;
                  &lt;a href="#"&gt;Jobs&lt;/a&gt;&lt;br&gt;
                  &lt;a href="#"&gt;Reviews&lt;/a&gt;
                &lt;/div&gt;
                &lt;div class="social-media third"&gt;
                  &lt;p&gt;FOLLOW US ON&lt;/p&gt;
                  &lt;div class="social social-1"&gt;
                    &lt;a href="#"&gt; 
                      &lt;img src="../assets/fb.png" alt="Like us on Facebook" style="height:40px;width:40px;"&gt;
                    &lt;/a&gt;
                  &lt;/div&gt;
                  &lt;div class="social social-2"&gt;
                    &lt;a href="#"&gt; 
                      &lt;img src="../assets/ig.png" alt="Follow us on Instagram" style="height:40px;width:40px;"&gt;
                    &lt;/a&gt;
                  &lt;/div&gt;
                  &lt;div class="social social-3"&gt;
                    &lt;a href="#"&gt;  
                      &lt;img src="../assets/tw.png" alt="Follow us on Twitter" style="height:40px;width:40px;"&gt;
                    &lt;/a&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    metaInfo: {
        title: 'PatternLibrary - Footer',
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
.col-md-5 p{
    margin-left: 10px;
  }
</style>
