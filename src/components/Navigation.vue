<template>
<div id="demo">

<div class="column">
  
<h1 style = "font-family:Cursive,garamond,serif;font-size:32px;font-style:italic;color:#E021A0">staforce</h1>

<img src="../assets/staforce.png" alt="HTML5 Icon" style="width:60px;height:60px,;">
</div>

 

 <nav v-bind:class="active" v-on:click.prevent >

  <router-link to="/"><i class="fa fa-fw fa-home"></i>Home</router-link>
  <router-link to="/about"><i class="fa fa-fw fa-book"></i>About</router-link>
   <div class="dropdown" style="color:blue">
  
  <router-link to="/services"><i class="fa fa-globe"></i>Services</router-link>
    
  <div class="dropdown-content" >
    <a href="#"><i class="fas fa-user-check"></i>Recruitment</a>
    <a href="#">Staffing</a>
    <a href="#">IT & Software</a>
    <router-link to="">Research</router-link>
  </div>
</div>

  <router-link to="/contact"><i class="fa fa-fw fa-envelope"></i>contact</router-link>
 </nav>



</div>
</template>

<style>
*{
  margin:0;
  padding:0;
}
h.a {
  color:#389dc1;
  font-style:oblique;
}
body{
  font:15px/1.3 'Open Sans', sans-serif;
  
  text-align:center;
  padding:0px;
    
  
}

a, a:visited {
  outline:none;
  color:#389dc1;
}

a:hover{
  text-decoration:none;
}

section, footer, header, aside, nav{
  display: block;
}


/*-------------------------
  The menu
--------------------------*/

nav{
  display:inline-block;
  margin:8px auto 45px;
  background-color:#16379C;
  box-shadow:0 1px 1px #ccc;
  border-radius:10px;
  margin-left:1px;
}

nav a{
  display:inline-block;
  padding: 20px 50px;
  color:#13EAE7 !important;
  font-weight:bold;
  font-size:16px;
  text-decoration:none !important;
  line-height:1;
  text-transform: uppercase;
  background-color:transparent;

  -webkit-transition:background-color 0.25s;
  -moz-transition:background-color 0.25s;
  transition:background-color 0.25s;
}

nav a:first-child{
  border-radius:2px 0 0 2px;
}

nav a:last-child{
  border-radius:0 2px 2px 0;
}

nav.home .home,
nav.about .about,
nav.services .services,
nav.contact .contact{
  background-color:#e35885;
}

p{
  font-size:22px;
  font-weight:bold;
  color:#7d9098;
}

p b{
  color:#ffffff;
  display:inline-block;
  padding:5px 10px;
  background-color:#c4d7e0;
  border-radius:2px;
  text-transform:uppercase;
  font-size:18px;
}
.dropbtn {
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color:#828613;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: EA13E0;
  padding: 12px 16px;
  text-decoration: color;
  display: block;

}

.dropdown-content a:hover {background-color: #EA741C;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>