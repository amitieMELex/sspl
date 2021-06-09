<template>
		<v-banner>
	<h3>
	IT Consultation
	</h3>
</v-banner>

 <MDBCard>
    <v-img
      src="../assets/consulting.jpg"
      top
      alt="..."
    />
    <MDBCardBody>
    <MDBCardTitle><h3 style="color:#07C5F3;">What is IT Consulting</h3></MDBCardTitle>
    <MDBCardText>
       Information technology (IT) consulting services allow companies to implement IT strategies and solutions to achieve business-IT alignment, and drive max value from the current IT initiatives.
   
    <MDBCardTitle><h3 style="color:#07C5F3;">OUR IT Consulting Service</h3></MDBCardTitle>
    <p>
    Your business goals shape the project scope – we may focus our entire attention on the advisory stage if you need to work through IT challenges and lay down the strategy for positive IT transformation. Also, we provide a full-service package of assistance for IT projects – we plan, design, implement and continuously support technology-powered solutions.	
    </p>
    <MDBCardTitle><h3 style="color:#07C5F3;">IT solution implementation</h3></MDBCardTitle>
    <p>
    More of our software developers are of senior level, thereby securing coding excellence.
    </p>
    <p>
    Analyzing your business needs.</p>
    <p>Proposing an IT solution and delivering a well-structured clear plan for its implementation: project timeline, budget, required IT resources defined.</p>
    <p>Installing, configuring and customizing all the software components constituting the solution.</p>
    <p>Integrating software components in a compound IT environment.</p>	
    
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