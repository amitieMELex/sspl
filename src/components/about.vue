<template>
  <v-app>
  <MDBTabs v-model="activeTabId2">
    <!-- Tabs navs -->
    <MDBTabNav pills fill tabsClasses="mb-3">
      <MDBTabItem tabId="ex2-1" href="ex2-1">Link</MDBTabItem>
      <MDBTabItem tabId="ex2-2" href="ex2-2">Very very very very long link</MDBTabItem>
      <MDBTabItem tabId="ex2-3" href="ex2-3">Another link</MDBTabItem>
    </MDBTabNav>
    <!-- Tabs navs -->
    <!-- Tabs content -->
    <MDBTabContent>
      <MDBTabPane tabId="ex2-1">Tab 1 content</MDBTabPane>
      <MDBTabPane tabId="ex2-2">Tab 2 content</MDBTabPane>
      <MDBTabPane tabId="ex2-3">Tab 3 content</MDBTabPane>
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
      const activeTabId2 = ref('ex2-1');

      return {
        activeTabId2,
      };
    },
  };
</script>