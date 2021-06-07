<template>
  <v-app>
    <v-main>
      <v-banner>
        <h5 style="color:#E021A0; font-style:italic;font-family:Cursive,garamond,serif;">Staforce Services Pvt Ltd</h5>
      </v-banner>
      <v-container>


  <MDBTabs v-model="activeTabId1">
    <!-- Tabs navs -->
    <MDBTabNav pills tabsClasses="mb-3">
      <MDBTabItem tabId="ex1-1" href="ex1-1">Tab #1</MDBTabItem>
      <MDBTabItem tabId="ex1-2" href="ex1-2">Tab #2</MDBTabItem>
      <MDBTabItem tabId="ex1-3" href="ex1-3">Tab #3</MDBTabItem>
    </MDBTabNav>
    <!-- Tabs navs -->
    <!-- Tabs content -->
    <MDBTabContent>
      <MDBTabPane tabId="ex1-1">
          <MDBRow style="color: #985DF1;background-color: #F1E5E7;">
    <MDBCol col="9"> <h1>Address</h1></MDBCol>
    <MDBCol col="4">
      <p>Plot no 430/42</p><br />
      <p>Laxmi Vihar, Burari</p>
      <br /><p>Delhi</p>
    </MDBCol>
    <MDBCol col="6">
      <h2><i class="fas fa-envelope-open"></i></h2>
      <br /><p>support@staforce.in</p>
      <h2><i class="fas fa-phone"></i></h2>
      <br /><p>9953850970</p>
    </MDBCol>
  </MDBRow>
      </MDBTabPane>
      <MDBTabPane tabId="ex1-2">
        <v-banner>
        <h5 style="color:blue">Call or leave us a message:</h5>
      </v-banner>

      
 <form @submit.prevent="sendEmail">
  <div style="background-color: #F3F4FF;">
        <MDBInput label="Name" v-model="name" />
  <MDBInput label="Email" v-model="email" type="email" />
  <MDBInput label="Phone number" v-model="phone" type="tel" />
  <MDBTextarea label="Message" rows="4" v-model="message" />
  </div>
       <MDBBtn color="primary" >
         <input type="submit" value="Submit">
       </MDBBtn> 
      </form>
      </MDBTabPane>
      <MDBTabPane tabId="ex1-3">Content #3</MDBTabPane>
    </MDBTabContent>
    <!-- Tabs content -->
  </MDBTabs>




  
    
  



    
    
  </v-container>

</v-main>
</v-app>
</template>


<script>
import { MDBInput } from 'mdb-vue-ui-kit';

import emailjs from 'emailjs-com';
import { MDBTextarea } from 'mdb-vue-ui-kit';
import { ref } from 'vue';
import { MDBCol, MDBRow, MDBBtn, 
      MDBTabs,
      MDBTabNav,
      MDBTabContent,
      MDBTabItem,
      MDBTabPane } from 'mdb-vue-ui-kit';
export default {
  name: 'ContactUs',
  components: {
      MDBInput,
      MDBTextarea,
      MDBCol,
      MDBRow,
      MDBBtn,
      MDBTabs,
     MDBTabNav,
     MDBTabContent,
     MDBTabItem,
     MDBTabPane,
    },
     setup() {
      const activeTabId1 = ref('ex1-1');

      return {
        activeTabId1,
      };
    },
    data() {
    return {
      name: '',
      phone: '',
      gender:'',
      message: ''

    }
  },

  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_k8s6umv', 'template_2z16xy8', e.target, 'user_rsrapxIJiaUt4Jl2mzi0V', {
          name: this.name,
          phone: this.phone,
          message: this.meessage
        })
        console.log('it works!!!')
      } catch (error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.phone = ''
      this.message
    },
  }
}
</script>




