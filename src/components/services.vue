<template>
  <v-app>
  <v-banner>
    <h5 style="color:#07C5F3;text-align:center;">
      Our Services</h5>
  </v-banner>





  <MDBTabs v-model="activeTabId4" vertical>
    <!-- Tabs navs -->
    <MDBTabNav pills tabsClasses="mb-3 text-center">
      <MDBTabItem :wrap="false" tabId="ex4-1" href="ex4-1">It & Software</MDBTabItem>
      <MDBTabItem :wrap="false" tabId="ex4-2" href="ex4-2">Recruitment</MDBTabItem>
      <MDBTabItem :wrap="false" tabId="ex4-3" href="ex4-3">Staffing</MDBTabItem>
    </MDBTabNav>
    <!-- Tabs navs -->
    <!-- Tabs content -->
    <MDBTabContent>
      <MDBTabPane tabId="ex4-1">Tab 1 content</MDBTabPane>
      <MDBTabPane tabId="ex4-2">Tab 2 content</MDBTabPane>
      <MDBTabPane tabId="ex4-3">Tab 3 content</MDBTabPane>
    </MDBTabContent>
    <!-- Tabs content -->
  </MDBTabs>
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
  export default {
    components: {
      MDBTabs,
      MDBTabNav,
      MDBTabContent,
      MDBTabItem,
      MDBTabPane,
    },
    setup() {
      const activeTabId4 = ref('ex4-1');

      return {
        activeTabId4,
      };
    },
  };
</script>