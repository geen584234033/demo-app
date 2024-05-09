<template>
  <div class="box" href="#d">
    <v-row>
      <v-col cols="12" sm="3" md="3">
        <v-card flat class="card-number">
          <span class="number">{{ award }}</span>
          <br />
          <span class="text-number">AWARDS</span>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3" md="3">
        <v-card flat class="card-number">
          <span class="number">{{ clients }}</span>
          <br />
          <span class="text-number">CLIENTS</span>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3" md="3">
        <v-card flat class="card-number">
          <span class="number">{{ team }}</span>
          <br />
          <span class="text-number">TEAM</span>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3" md="3">
        <v-card flat class="card-number">
          <span class="number">{{ project }}</span>
          <br />
          <span class="text-number">PROJECT</span>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "numbersComponent",
  data() {
    return {
      award: 0,
      clients: 0,
      team: 0,
      project: 0,
    };
  },
  methods: {
    countAward() {
      if (this.award > -1) {
        setTimeout(() => {
          this.award += 1;
          this.countAward();
        }, 1000);
      }
    },
    countclients() {
      if (this.clients > -1) {
        setTimeout(() => {
          this.clients += 1;
          this.countclients();
        }, 500);
      }
    },
    countteam() {
      if (this.team > -1) {
        setTimeout(() => {
          this.team += 1;
          this.countteam();
        }, 10000);
      }
    },
    countproject() {
      if (this.project > -1) {
        setTimeout(() => {
          this.project += 1;
          this.countproject();
        }, 5000);
      }
    },
  },
  created() {
    this.countAward();
    this.countclients();
    this.countteam();
    this.countproject();
  },
};
</script>
<style scoped>
.box {
  height: auto;
  background: url("@/assets/images/bg-number.jpg") no-repeat fixed center;
  background-size: cover;
}
.card-number {
  background-color: transparent;
  padding: 30px;
}
.number {
  color: white;
  font-size: 30px;
  font-weight: bold;
}
.text-number {
  color: white;
  font-size: 12px;
  font-weight: normal;
}
</style>
