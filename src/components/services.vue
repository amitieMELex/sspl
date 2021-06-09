<template>
  <v-app>
  <v-banner>
    <h5 style="color:#07C5F3;text-align:center;">
      Our Services</h5>
  </v-banner>


<v-container>


  <MDBTabs v-model="activeTabId4" vertical>
    <!-- Tabs navs -->
    <MDBTabNav pills tabsClasses="mb-3 text-center">
      <MDBTabItem :wrap="false" tabId="ex4-1" href="ex4-1">IT & Software</MDBTabItem>
      <MDBTabItem :wrap="false" tabId="ex4-2" href="ex4-2">Recruitment</MDBTabItem>
      <MDBTabItem :wrap="false" tabId="ex4-3" href="ex4-3">Staffing</MDBTabItem>
      <MDBTabItem :wrap="false" tabId="ex4-4" href="ex4-4">Consultation</MDBTabItem>
      <MDBTabItem :wrap="false" tabId="ex4-5" href="ex4-5">Digital Marketing</MDBTabItem>
    </MDBTabNav>
    <!-- Tabs navs -->
    <!-- Tabs content -->
    <MDBTabContent style="text-align:left;">
      <MDBTabPane tabId="ex4-1"><softwares /> </MDBTabPane>
      <MDBTabPane tabId="ex4-2"><recruitment /></MDBTabPane>
      <MDBTabPane tabId="ex4-3"><staffing /></MDBTabPane>
      <MDBTabPane tabId="ex4-4"><consultation /></MDBTabPane>
      <MDBTabPane tabId="ex4-5"><digital /></MDBTabPane>
    </MDBTabContent>
    <!-- Tabs content -->
  </MDBTabs>
</v-container>
</v-app>
</template>


<script>
  import {
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';
  import recruitment from '@/components/recruitment.vue';
  import staffing from './staffing.vue';
  import consultation from './consultation.vue';
  import digital from './digital.vue';
  import softwares from './softwares.vue';
  export default {
    components: {
      MDBTabs,
      MDBTabNav,
      MDBTabContent,
      MDBTabItem,
      MDBTabPane,
      recruitment,
      staffing,
      consultation,
      digital,
      softwares
    },
    setup() {
      const activeTabId4 = ref('ex4-1');

      return {
        activeTabId4,
      };
    },
  };
</script>