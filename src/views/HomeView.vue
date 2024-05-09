<template>
  <div class="home">
    <introComponent />
    <ourServiceComponent />
  </div>
</template>

<script>
import introComponent from "@/components/intro-component.vue";
import ourServiceComponent from "@/components/our-service-component.vue";
export default {
  name: "HomeView",
  components: { introComponent, ourServiceComponent },
};
</script>
