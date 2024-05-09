<template>
  <div class="home">
    <introComponent />
    <ourServiceComponent />
    <numbersComponent />
    <greatworkComponent />
  </div>
</template>

<script>
import introComponent from "@/components/intro-component.vue";
import ourServiceComponent from "@/components/our-service-component.vue";
import numbersComponent from "@/components/numbers-component.vue";
import greatworkComponent from "@/components/greatwork-component.vue";
export default {
  name: "HomeView",
  components: {
    introComponent,
    ourServiceComponent,
    numbersComponent,
    greatworkComponent,
  },
};
</script>
