<template>
  <v-app>
  <MDBCarousel
    v-model="carousel"
    :items="items"
    :controls="false"
    fade
  /></v-app>
</template>


<script>
  import { ref } from "vue";
  import { MDBCarousel } from "mdb-vue-ui-kit";

  export default {
    components: {
      MDBCarousel
    },
    setup() {
      const items = [
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg",
          alt: "...",
          label: "Software Projects",
          caption: "Get peace of mind, while me make your work easy."
        },
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg",
          alt: "...",
          label: "Recruitment",
          caption: "Recruit candidates for your requirements with our large database of talents."
        },
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg",
          alt: "...",
          label: "Staffing",
          caption:
            "Our staffing service is fully automated, from payroll to performance."
        }
      ];
      const carousel = ref(0);

      return {
        items,
        carousel
      };
    }
  };
</script>