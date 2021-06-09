<template>
	<v-banner>
	<h3>
		Staffing
	</h3>
</v-banner>
 <MDBCard>
    <v-img
      src="../assets/staffing.jpg"
      top
      alt="..."
    />
    <MDBCardBody>
    <MDBCardTitle><h3 style="color:#07C5F3;">What is Staffing</h3></MDBCardTitle>
    <MDBCardText>
        Staffing is the process of hiring eligible candidates in the organization or company for specific positions. In management, the meaning of staffing is an operation of recruiting the employees by evaluating their skills, knowledge and then offering them specific job roles accordingly.
    <v-banner>
	<h3 style="color:#07C5F3;">
	<b>Our Process</b>
	</h3>
    </v-banner>
    <p>
    At staforce, we do care of employee Performance management, Payroll management(hiring on our payroll) compliance and everything. we have a dedicated platform for this.	
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