<template>
  <v-app>
  <MDBTabs v-model="activeTabId2">
    <!-- Tabs navs -->
    <MDBTabNav pills fill tabsClasses="mb-3">
      <MDBTabItem tabId="ex2-1" href="ex2-1">Our Company</MDBTabItem>
      <MDBTabItem tabId="ex2-2" href="ex2-2">Mission</MDBTabItem>
      <MDBTabItem tabId="ex2-3" href="ex2-3">Vision</MDBTabItem>
    </MDBTabNav>
    <!-- Tabs navs -->
    <!-- Tabs content -->
    <MDBTabContent>
      <MDBTabPane tabId="ex2-1">
        <MDBCard class="mb-3" style="max-width: 1240px" text="left">
          <MDBRow class="g-0">
      <MDBCol md="4">
        <v-img top src="../assets/Team_page.png" 
         max-width="600"
         max-height="600"
    /></MDBCol>
    <MDBCol md="8">
        <MDBCardBody>
          <MDBCardTitle>Staforce</MDBCardTitle>
          <MDBCardText>
           <h>Staforce was founded to make everyone digitally connected, empower them with our technology.</h>
             <h>Staforce was founded to make everyone digitally connected, empower them with our technology.</h>
        <h>
        We have built many Platforms for this purpose and will bring more!
        </h>
          </MDBCardText>
         
        </MDBCardBody>
      </MDBCol>
    
      
      
    </MDBRow></MDBCard>

      </MDBTabPane>
      <MDBTabPane tabId="ex2-2">

 <MDBCard class="mb-3" style="max-width: 1240px" text="left">
    <MDBRow class="g-0">
      <MDBCol md="4">
         <v-img top  src="../assets/tech.jpg"
max-height="1000px"
  max-width="1000px"
></v-img> 
      </MDBCol>
      <MDBCol md="8">
        <MDBCardBody>
          <MDBCardTitle>Mission</MDBCardTitle>
          <MDBCardText>
           "Empower businesses and people through our technology."
          </MDBCardText>
         
        </MDBCardBody>
      </MDBCol>
    </MDBRow>
  </MDBCard>

    
      </MDBTabPane>
<MDBTabPane tabId="ex2-3">
      <MDBCard class="mb-3" style="max-width: 1240px" text="left">
<MDBRow class="g-0">
      <MDBCol md="4">
         <v-img top src="../assets/visionary_technology.png" 
         max-width="500"
         max-height="500"
    /></MDBCol>
    <MDBCol md="8">
        <MDBCardBody>
          <MDBCardTitle>Vision</MDBCardTitle>
          <MDBCardText>
           <p>To make a positive impact on our users and customers.</p>
        <p>
        To create a diverse environment for innovation and invention and people.
        </p>
          </MDBCardText>
         
        </MDBCardBody>
      </MDBCol>
       
</MDBRow>
      </MDBCard>  
      </MDBTabPane>
    </MDBTabContent>
    <!-- Tabs content -->
  </MDBTabs>
</v-app>
</template>



<script>
  import {
    MDBRow, MDBCol,
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
    MDBCard, MDBCardBody, MDBCardText,
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';

  export default {
    components: {
      MDBRow,
      MDBCol,
      MDBTabs,
      MDBTabNav,
      MDBTabContent,
      MDBTabItem,
      MDBTabPane,
      MDBCard,
      MDBCardBody,
      MDBCardText,
      
    },
    setup() {
      const activeTabId2 = ref('ex2-1');

      return {
        activeTabId2,
      };
    },
  };
</script>