<template>
  <div class="box">
    <v-card flat width="100%" height="100%">
      <v-card-text></v-card-text>
      <v-card-text class="justify-center">
        <span style="font-weight: bold; font-size: 24px">OUR SERVICE</span>
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col
            v-for="item in items"
            :key="item.title"
            cols="12"
            sm="4"
            md="4"
          >
            <v-card height="250px" flat>
              <v-card-text>
                <v-icon size="50">{{ item.icon }}</v-icon>
              </v-card-text>
              <v-card-text>
                <span style="font-weight: bold">{{ item.title }}</span>
              </v-card-text>
              <v-card-text>
                <span style="font-weight: normal">{{ item.description }}</span>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "ourServiceComponent",
  data() {
    return {
      items: [
        {
          icon: "mdi-square-edit-outline",
          title: "WEB DIGN",
          description:
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        },
        {
          icon: "mdi-cog-outline",
          title: "DEVELOPMENT",
          description:
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        },
        {
          icon: "mdi-apple",
          title: "BRANDING",
          description:
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        },
        {
          icon: "mdi-square-edit-outline",
          title: "PHOTOGRAPHY",
          description:
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        },
        {
          icon: "mdi-cog-outline",
          title: "TYPOGRAPHY",
          description:
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        },
        {
          icon: "mdi-apple",
          title: "UI DESIGN",
          description:
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        },
      ],
    };
  },
};
</script>
<style scoped>
.box {
  height: auto;
  background-color: bisque;
  background-size: cover;
}
</style>
