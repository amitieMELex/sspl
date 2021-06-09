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
      <h3 style="color:#164FF3; font-style:italic;font-family:Cursive,garamond,serif;">
        Industries
      </h3>
    </v-banner>

  

  <MDBRow :cols="['1','md-2']" class="g-4">
    <MDBCol>
      <MDBCard>
        <v-img src="../assets/coding.jpg" top alt="..." :aspect-ratio="16/9"
        :width="width" max-height="650"
  max-width="650"></v-img>
        <MDBCardBody>
          <MDBCardTitle><MDBIcon icon="css3" iconStyle="fab" style="color: #C20B69"/>Information Technology</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard>
        <v-img src="../assets/logistics.png" top alt="..." :aspect-ratio="16/9"
        :width="width" max-height="650"
  max-width="650"></v-img>
        <MDBCardBody>
          <MDBCardTitle><MDBIcon icon="truck" iconStyle="fas" style="color: #0BA9C2" />Transport & Logistics</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard>
        <v-img src="../assets/banking.jpg" top alt="..." :aspect-ratio="16/9"
        :width="width" max-height="650"
  max-width="650"></v-img>
        <MDBCardBody>
          <MDBCardTitle><MDBIcon icon="bitcoin" iconStyle="fab" style="color: #07CEF5" />Banking</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard>
        <v-img src="../assets/bsnssol.jpg" top alt="..." :aspect-ratio="16/9"
        :width="width" max-height="650"
  max-width="650"></v-img>
        <MDBCardBody>
          <MDBCardTitle><MDBIcon icon="shapes" iconStyle="fas" style="color: #E8C7ED"/>Public Sectors</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard>
        <v-img src="../assets/aihealthcare.png" top alt="..." :aspect-ratio="16/9"
        :width="width" max-height="650"
  max-width="650"></v-img>
        <MDBCardBody>
          <MDBCardTitle><MDBIcon icon="user-md" iconStyle="fas" style="color: #F56A32"/>Healthcare</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard>
        <v-img src="../assets/recruit.png" top alt="..." :aspect-ratio="16/9"
        :width="width" max-height="650"
  max-width="650"></v-img>
        <MDBCardBody>
          <MDBCardTitle><MDBIcon icon="user-tie" iconStyle="fas" style="color: #6CEE52"/>Human Resource</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</v-container>
 

  <v-banner>
<h5 style="color: #F11032">Review and stars given by our client
<MDBIcon icon="star" iconStyle="fas" />
<MDBIcon icon="star" iconStyle="fas" />
<MDBIcon icon="star" iconStyle="fas" />
<MDBIcon icon="star" iconStyle="fas" />
<MDBIcon icon="star" iconStyle="fas" />
</h5></v-banner>






 <MDBCard class="mb-3" style="max-width: 100%; align-items: center;">
    <MDBRow class="g-0">
      <MDBCol md="4">
       
 <v-img src="../assets/randm.jpg" alt="Avatar" max-height="70"
  max-width="70"></v-img>



      </MDBCol>
      <MDBCol md="8" >
        <MDBCardBody >
          <MDBCardTitle>
            <p style="color: #050008"><span>Sameer Jha.</span> CEO at Wood Heights.</p>
          </MDBCardTitle>
          <MDBCardText>
            <p style="color: #CE9AEC">"There recruitment team is excellent."</p>
          </MDBCardText>
          <MDBCardText>
            <small class="text-muted">
               
<MDBIcon icon="star" iconStyle="fas" style="color: #F11032"/>
<MDBIcon icon="star" iconStyle="fas" style="color: #F11032" />
<MDBIcon icon="star" iconStyle="fas" style="color: #F11032" />
<MDBIcon icon="star" iconStyle="fas" style="color: #F11032"/>
<MDBIcon icon="star" iconStyle="fas" style="color: #F11032"/>

            </small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCol>
    </MDBRow>
  </MDBCard>


  <MDBCard class="mb-3" style="max-width:100%; align-items: center;">
    <MDBRow class="g-0">
      <MDBCol md="4">
      <v-img src="../assets/sanjana.jpg" alt="Avatar" max-height="70"
  max-width="70"></v-img>
      </MDBCol>
      <MDBCol md="8">
        <MDBCardBody>
          <MDBCardTitle>
            <p style="color: #050008"><span >Sanjana Puri.</span> CEO at AB Media.</p>
          </MDBCardTitle>
          <MDBCardText>
            <p style="color: #CE9AEC">"They really listen to what you need."</p>
          </MDBCardText>
          <MDBCardText>
            <small class="text-muted">
             <MDBIcon icon="star" iconStyle="fas" style="color: #F11032"/>
             <MDBIcon icon="star" iconStyle="fas" style="color: #F11032"/>
             <MDBIcon icon="star" iconStyle="fas" style="color: #F11032"/>
             <MDBIcon icon="star" iconStyle="fas" style="color: #F11032"/>
             <MDBIcon icon="star" iconStyle="fas" style="color: #F11032"/>
             <MDBIcon icon="star" iconStyle="far" style="color: #F11032"/>
            </small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCol>
    </MDBRow>
  </MDBCard>
  </v-app>
 </template>




<script>
	
import carousel from '@/components/carousel.vue'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBIcon  } from "mdb-vue-ui-kit";
export default {
  name: 'Home',
  components: {
      carousel,
      MDBCard,
      MDBCardBody,
      MDBCardTitle,
      MDBCardText,
      MDBIcon,
      MDBCol,
      MDBRow,
      
      
     
  }
}
</script>

