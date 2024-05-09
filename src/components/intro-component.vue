<template>
  <div class="box">
    <v-app style="background-color: transparent; height: auto; width: auto">
      <v-app-bar dense absolute flat scroll-off-screen color="transparent">
        <v-toolbar-title class="white--text"> {{ "</> Developer" }}</v-toolbar-title>
        <v-spacer />
        <div v-if="!$vuetify.breakpoint.mobile">
        <v-menu  v-for="menu in menuAppbar" :key="menu.title" open-on-hover left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" dense text color="white"> {{ menu.title  }} <v-icon>
                mdi-menu-down
            </v-icon> </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="submenu in menu.menu" :key="submenu.name">
              <v-list-item-title> {{ submenu.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
    </div>
      </v-app-bar>
      <div  style="align-content: center; height: 100%;">
        <v-layout justify-center >
            <v-card width="300" flat class="white--text" style="background-color: transparent;">
                <v-card-title class="justify-center white--text">D E V E L O P M E N T</v-card-title>
                <v-card-text class="justify-center white--text">We are web developer</v-card-text>
                <v-card-actions class="justify-center white--text">
                    <v-btn color="white" outlined>read more</v-btn>
                    <v-btn color="white">learn more</v-btn>
                </v-card-actions>
            </v-card>
    </v-layout>
    </div>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "introComponent",
  data() {
    return {
        isMobile: false,
      menuAppbar: [
        { title: "HOME", menu: [{ name: "home1" }, { name: "home2" }] },
        { title: "ABOUT US", menu: [{ name: "about1" }, { name: "about2" }] },
        { title: "NEWS", menu: [{ name: "news1" }, { name: "news2" }] },
        {
          title: "CONTACT US",
          menu: [{ name: "contact1" }, { name: "contact2" }],
        },
      ],
    };
  },
};
</script>
<style scoped>
.box {
  height: 100vh;
  background: url("@/assets/images/bg-intro.png") no-repeat fixed center;
  background-size:  cover;
}
</style>
