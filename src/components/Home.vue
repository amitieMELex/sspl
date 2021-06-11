<template>
  <v-app>
    <v-container>
 <v-banner
        single-line
        :sticky="sticky"
      ><h5 style="color:#07C5F3;text-align:center;">
       Staforce and Technology- "of the people, by the people and for the people"

  </h5>
  <h5>
  Connect your future with staforce!
  </h5>
        
      </v-banner>

  <carousel />



  
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
            IT or Software industry is raising rapidly. globally almost every industry needs implementation of software technology. our highly experienced software team is working 24by7 to deliver/meet our client expectation.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard>
        <v-img src="../assets/construction.png" top alt="..." :aspect-ratio="16/9"
        :width="width" max-height="650"
  max-width="650"></v-img>
        <MDBCardBody>
          <MDBCardTitle><MDBIcon icon="building" iconStyle="fas" style="color: #0BA9C2" />Construction
          </MDBCardTitle>
          <MDBCardText>
            The Construction industry of India is an important indicator of the development as it creates investment opportunities across various related sectors.
            
              The Construction industry in value terms is expected to record a CAGR of 15.7% to reach $ 738.5 bn by 2022.
              The highways sector in India has been at the forefront of performance and innovation.
              We are working with Indian govt. for many Highway and roadway construction across India.
            
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
            For long, banks have been reluctant to update their systems – and for good reason.The volume of unstructured data that the bank has to process is increasing exponentially with the rise of the digital economy.This has made bankers realize that they need to find technologies that can mimic human action and judgment but at a higher speed, scale, and quality. The answer that has emerged is a combination of various technologies that enable cognitive and robotic process automation in banking.These technologies consist of machine learning, natural language processing, chatbots, robotic process automation, and intelligent analytics in banking that allow the bots to learn and improve.
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
            We are working with government for many projects realted to IT, construction, power and renewable energy.
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
            Artificial intelligence (AI), blockchain, voice search, chatbots and virtual reality (VR) are among the most promising health technologies used today.we are working with our clients in healthcare with research goes paralelly.
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
            As implementation of technology in HR, processes like Payroll management is no more a headache for corporates.we have created a platform for Payroll and Employee management to solve our client's HR related issues.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</v-container>
 

  <v-banner>
Review and stars given by our client<h5 style="color: #F11032">
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
            <p style="color: #050008"><span>Sameer Jha.</span> Recruitment Manager at Wood Heights.</p>
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
  <v-container>
    <client />
  </v-container>
  </v-app>
 </template>




<script>
import client from './client.vue'
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
      client
      
      
     
  }
}
</script>

