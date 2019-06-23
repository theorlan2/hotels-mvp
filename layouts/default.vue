<template>
  <div>
      <Header v-if="ShowHeader" :pageIn="$route.name" />
    <nuxt />
     <Footer />
  </div>
</template>
 
<script>
 import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

export default {
  components: {
    Header,
    Footer
  },
  created() {
    let vm = this;
    this.listHiddenHeader.forEach(element => {
      if (element == vm.$route.name) {
        vm.ShowHeader = false;
      }
    });
  },
  data() {
    return {
      listHiddenHeader: [],
      ShowHeader: true
    };
  }
};
</script>

</script>
