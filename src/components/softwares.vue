<template>
	<v-banner>
	<h3>
		IT & Softwares
	</h3>
</v-banner>
 <MDBCard>
    <v-img
      src="../assets/Custom-Software-Development.jpg"
      top
      alt="..."
    />
    <MDBCardBody>
    <MDBCardTitle><h3 style="color:#07C5F3;">What is Software Development</h3></MDBCardTitle>
    <MDBCardText>
       Software development is the process programmers use to build computer programs. The process, also known as the Software Development Life Cycle (SDLC), includes several phases that provide a method for building products that meet technical specifications and user requirements
    <v-banner>
	<h3 style="color:#07C5F3;">
	Our Service
	</h3>
    </v-banner>
    <p>
    Either you are a retailer and required to have a e-commerce platform, or a educational institute, reuired a education platform. we are mastered in everythiing.	
    </p>
    </MDBCardText>
      
   </MDBCardBody>
  </MDBCard>
</template>




<script>
  import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from "mdb-vue-ui-kit";

  export default {
    components: {
      MDBCard,
      MDBCardBody,
      MDBCardTitle,
      MDBCardText,
      
     
    }
  };
</script>