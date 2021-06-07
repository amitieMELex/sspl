<template>
  <v-app>
 <v-banner
        single-line
        :sticky="sticky"
      ><h5 style="color:#07C5F3;text-align:center;">
       Connect your future with Staforce!
  </h5>
        
      </v-banner>

  <carousel />



  <v-container>
    <v-banner>
      <h5 style="color:#E021A0; font-style:italic;font-family:Cursive,garamond,serif;">
        Industries
      </h5>
    </v-banner>

  

  <MDBRow :cols="['1','md-2']" class="g-4">
    <MDBCol>
      <MDBCard>
        <MDBCardImg src="https://mdbootstrap.com/img/new/standard/city/041.jpg" top alt="..."/>
        <MDBCardBody>
          <MDBCardTitle>Information Technology</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard>
        <MDBCardImg src="https://mdbootstrap.com/img/new/standard/city/042.jpg" top alt="..."/>
        <MDBCardBody>
          <MDBCardTitle>Recruitment</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard>
        <MDBCardImg src="https://mdbootstrap.com/img/new/standard/city/043.jpg" top alt="..."/>
        <MDBCardBody>
          <MDBCardTitle>Banking</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard>
        <MDBCardImg src="https://mdbootstrap.com/img/new/standard/city/044.jpg" top alt="..."/>
        <MDBCardBody>
          <MDBCardTitle>Public Sectors</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>

  </v-container>

<div >
<h1 style="color: #F11032">Review and stars given by our client</h1>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
</div>
  
  <div >
  <v-img src="../assets/randm.jpg" alt="Avatar" style="width:90px"></v-img>
  <p style="color: #10F1E0"><span>Sameer Jha.</span> CEO at Wood Heights.</p>
  <p style="color: #10F147">"There recruitment team is excellent."</p>
  <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
</div>

<div >
  <v-img src="../assets/sanjana.jpg" alt="Avatar" style="width:90px"></v-img>
  <p style="color: #10F1E0"><span >Sanjana Puri.</span> CEO at AB Media.</p>
  <p style="color: #10F147">"They really listen to what you need."</p>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star "></span>
</div>

  </v-app>
 </template>




<script>
	
import carousel from '@/components/carousel.vue'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBCardImg } from "mdb-vue-ui-kit";
export default {
  name: 'Home',
  components: {
      carousel,
      MDBCard,
      MDBCardBody,
      MDBCardTitle,
      MDBCardText,
      
      MDBCol,
      MDBRow,
      
      MDBCardImg
     
  }
}
</script>

