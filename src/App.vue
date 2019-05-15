<template>
  <div id="app">
    <div class="nav-section">
      <div class="row">
        <div class="col-md-12">
          <nav class="navbar navbar-expand-lg navbar-light bg-light" >
            <router-link class="navbar-brand" to="/">
              <span class="brand-text">PatternLibrary</span>
            </router-link> 
        
            <button v-on:click="mobileShow = !mobileShow" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02" v-bind:class="{'show': mobileShow == true}">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                  <router-link class="nav-link" to="/">
                    <span>Home</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/navigation">
                    <span>Navigation</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/header">
                    <span>Header</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/buttons">
                    <span>Buttons</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/jumbotron">
                    <span>Jumbotron</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/footer">
                    <span>Footer</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/scrollbar">
                    <span>Scroll Bar</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/gridsystem">
                    <span>Grid System</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <hr>
    
    <div class="main-section">
      <div class="row">
        <div class="col-md-12">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    // Create the Data Variables
    data: function() {
      return {
        // Set mobile menu to show to false
        mobileShow: false
      }
    }
  }
</script> 

<style>
  @import url('https://fonts.googleapis.com/css?family=Kodchasan');
  
  #app{
    text-align: center;
    min-height: 100vh;
    background-color: #F6ECFF;
  }
  
  h1, h2, h3{
    font-family: 'Kodchasan', serif !important; 
  }
  
  .brand-text{
    font-weight: bold;
    color: #B266FF;
    font-size: 25pt;
    font-family: 'Kodchasan', serif !important; 
  }
  
  .nav-item{
    font-size: 15pt;
    margin-top: 7px;
    font-family: 'Kodchasan', serif !important; 
  }
</style>
