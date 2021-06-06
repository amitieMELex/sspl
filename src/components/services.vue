<template>

<div class="about-section">
  <p>Our doctors are highly experienced.</p>
  <p>Be sure of a better experience.</p>
</div>

<h2 style="text-align:center">Some of Our Doctors</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="../assets/narendra.jpg" alt="Jane" style="width:50%">
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">Child Specialist</p>
        <p>15 years experience.</p>
        <p>jane@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="cards">
      <img src="../assets/download.jpg" alt="Mike" style="width:90%">
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Gastroentrologist</p>
        <p>25 years experience.</p>
        <p>mike@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="../assets/akshay.jpg" alt="John" style="width:50%">
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Cardiologist</p>
        <p>35 years experience.</p>
        <p>john@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
</template>


<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  
  img:../assets/happy.jpeg;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.cards {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 18px;
  text-align: center;
  background-color: #451B7A;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>