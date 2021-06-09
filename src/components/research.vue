<template>
	<v-app>
		<v-banner>
			<h5 style="color:#1C3DF7;text-align:center;">
				Research & Innovation
			</h5>
		</v-banner>
		<v-container>
    <MDBCard text="left" style="width: 100%">
   
    <v-img top src="../assets/techcareer.png" 
         max-width="500"
         max-height="500"
		/>
    <MDBCardBody>
      <MDBCardTitle>AI & Data Science</MDBCardTitle>
      <v-divider></v-divider>
      <MDBCardText>
       <datascience />
      </MDBCardText>
    </MDBCardBody>
    
  </MDBCard>
		
		
		
	</v-container>
	</v-app>
</template>





<script>
  import datascience from "./datascience.vue"
  import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText} from "mdb-vue-ui-kit";

  export default {
    components: {
      MDBCard,
      MDBCardBody,
      MDBCardTitle,
      MDBCardText,
      datascience
    }
  };
</script>