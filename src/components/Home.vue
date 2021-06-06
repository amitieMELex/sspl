<template>
	<div class="row">
    <h1 style="color:#07C5F3;text-align:center;">Connect your future with Staforce!</h1>
  </div>
  <div class="row">
  <img src="../assets/robotics.png" alt="HTML5 Icon" style="width:700px;height:500px,;">
  </div>
  
  <div class="row">
    <h2 style="color:#07F3F3;text-align:center,padding:35px;">Our team of experienced Professionals are ready to provide you a great Business Solution!! </h2>
  </div>

  <div class="card">
  <img src="../assets/energysectos.jpeg" alt="energy industry" style="width:100%">
  <h1>Energy sector</h1>
  <p class="price">$19.99</p>
  <p>Some text about the jeans..</p>
  <p><router-link to="/energyindustry"><button style="color: #8E22A6">know more</button></router-link></p>
  </div>



<div class="card">
  <img src="../assets/engg.jpg" alt="energy industry" style="width:100%">
  <h1>Recruitment</h1>
  <p class="price">$19.99</p>
  <p style="color: #21D2E0">Recruitment industry is scaling with the growth of sectors like Information Technology,Telecom, Banking,Marketing,BPO..</p>
  <p><router-link to="/energyindustry"><button style="color: #8E22A6">know more</button></router-link></p>
  </div>	
<div>
	<!-- Add icon library -->

<h1 style="color: #F11032">Review and stars given by our client</h1>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
</div>
  
  <div class="containers">
  <img src="../assets/randm.jpg" alt="Avatar" style="width:90px">
  <p style="color: #10F1E0"><span>Sameer Jha.</span> CEO at Wood Heights.</p>
  <p style="color: #10F147">"There recruitment team is excellent."</p>
  <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
</div>

<div class="containers">
  <img src="../assets/sanjana.jpg" alt="Avatar" style="width:90px">
  <p style="color: #10F1E0"><span >Sanjana Puri.</span> CEO at AB Media.</p>
  <p style="color: #10F147">"They really listen to what you need."</p>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star "></span>
</div>

  
 </template>




<script>
	

</script>
<style>
	
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: auto;
  text-align: center;
  font-family: arial;
  padding-left: 356px;
  

}

.price {
  color: #10AF84;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}

.checked {
  color: orange;
}



/* Style the container with a rounded border, grey background and some padding and margin */
.containers {
  border: 2px solid #ccc;
  background-color: #9F10F1;
  border-radius: 3px;
  padding: 6px;
  margin: 16px 0;
  
}

/* Clear floats after containers */
.containers::after {
  content: "";
  clear: both;
  display: table;
}

/* Float images inside the container to the left. Add a right margin, and style the image as a circle */
.containers img {
  float: left;
  margin-right: 0px;
  border-radius: 50%;
}

/* Increase the font-size of a span element */
.containers span {
  font-size: 20px;
  margin-right: 15px;
}

/* Add media queries for responsiveness. This will center both the text and the image inside the container */
@media (max-width: 500px) {
  .containers {
    text-align: center;
  }

  .containers img {
    margin: auto;
    float: none;
    display: block;
  }
}
</style>
