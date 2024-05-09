<template>
  <div class="box">
    <v-card flat width="100%" height="100%">
      <v-card-text></v-card-text>
      <v-card-text class="justify-center">
        <span style="font-weight: bold; font-size: 24px">GREAT WORK</span>
      </v-card-text>
      <v-card-text>
        <v-tabs
          v-model="tab"
          fixed-tabs
          background-color="transparent"
          color="yellow"
          centered
          mobile-breakpoint="0"
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab v-for="item in itemsBar" :key="item.title" color="yellow">
            {{ item.title }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in itemsBar" :key="item.title">
            <v-card flat v-if="item.title !== 'ALL'">
              <v-img
                :src="item.imageUrl"
                contain
                height="300"
                width="100%"
                class="grey darken-4"
              ></v-img>
            </v-card>
            <v-card flat v-else>
              <v-row>
                <v-col
                  v-for="itemall in itemsBar"
                  :key="itemall.title"
                  cols="12"
                  md="4"
                  sm="6"
                >
                  <v-img
                    :src="itemall.imageUrl"
                    contain
                    height="300"
                    width="100%"
                    class="grey darken-4"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "greatworkComponent",
  data() {
    return {
      tab: "ALL",
      itemsBar: [
        { title: "ALL", imageUrl: require("@/assets/images/all.png") },
        {
          title: "BRANDING",
          imageUrl: require("@/assets/images/branding.jpg"),
        },
        { title: "DESIGN", imageUrl: require("@/assets/images/design.png") },
        { title: "PHOTO", imageUrl: require("@/assets/images/photo.jpg") },
        { title: "COFFEE", imageUrl: require("@/assets/images/coffee.png") },
      ],
    };
  },
};
</script>
<style scoped>
.box {
  height: auto;
  background-color: white;
  background-size: cover;
}
</style>
