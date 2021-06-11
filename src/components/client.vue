<template>
  <v-banner>
      <h5 style="color:#1C3DF7;text-align:center;">
        Our Clients
      </h5>
    </v-banner>
  <MDBRow :cols="['1', 'md-3']" class="g-4">
    <MDBCol>
      <MDBCard class="h-100">
        <v-img
          src="../assets/mkc.png"
          top
          alt="..."
          
        />
        <MDBCardBody>
         <!--  <MDBCardTitle>MKC Infrastructure</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </MDBCardText> -->
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard class="h-100">
        <v-img
          src="../assets/bscpl.jpg"
          top
          alt="..."
          max-width="400"
          max-height="100"
          
        />
        <MDBCardBody>
          <MDBCardTitle>BSCPL Infrastructure</MDBCardTitle>
          <!-- <MDBCardText>This is a short card.</MDBCardText> -->
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard class="h-100">
        <v-img
          src="../assets/ntpc.svg"
          top
          alt="..."
          max-width="400"
          max-height="100"
          
        />
        <MDBCardBody>
          <!-- <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content.
          </MDBCardText> -->
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard class="h-100">
        <v-img
          src="../assets/cnc.jpg"
          top
          alt="..."
          
          
        />
        <MDBCardBody>
         <!--  <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </MDBCardText> -->
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
     <MDBCol>
      <MDBCard class="h-100">
        <v-img
          src="../assets/metmox.jpg"
          top
          alt="..."
          max-width="400"
          max-height="100"
          
        />
        <MDBCardBody>
          <!-- <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content.
          </MDBCardText> -->
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
     <MDBCol>
      <MDBCard class="h-100">
        <v-img
          src="../assets/npr.jpg"
          top
          alt="..."
          max-width="300"
          max-height="500"
          
        />
        <MDBCardBody>
          <!-- <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content.
          </MDBCardText> -->
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
     <MDBCol>
      <MDBCard class="h-100">
        <v-img
          src="../assets/artemis.png"
          top
          alt="..."
          max-width="400"
          max-height="100"
          
        />
        <MDBCardBody>
          <!-- <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content.
          </MDBCardText> -->
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
     <MDBCol>
      <MDBCard class="h-100">
        <v-img
          src="../assets/savience.png"
          top
          alt="..."
          max-width="400"
          max-height="100"
          
        />
        <MDBCardBody>
          <!-- <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content.
          </MDBCardText> -->
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
     <MDBCol>
      <MDBCard class="h-100">
        <v-img
          src="../assets/technosoft.png"
          top
          alt="..."
          max-width="400"
          max-height="100"
          
        />
        <MDBCardBody>
          <!-- <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural lead-in to
            additional content.
          </MDBCardText> -->
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</template>



<script>
  import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardTitle } from "mdb-vue-ui-kit";

  export default {
    components: {
      MDBCol,
      MDBRow,
      
      MDBCard,
      MDBCardBody,
      MDBCardTitle,
      
    
    }
  };
</script>