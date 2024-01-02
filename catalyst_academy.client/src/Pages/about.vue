<template>
    <div>
        <NavOne />
        <PageHeader title="About" />
        <div class="border-bottom"></div>

        <Footer />
    </div>

</template>
<script>
    import NavOne from "../components/NavOne.vue";
    import PageHeader from "../components/PageHeader.vue";
    import Footer from "../components/Footer.vue";

  export default {
    components: {
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "Kipso | About Us"
      }
    }
  }
</script>
