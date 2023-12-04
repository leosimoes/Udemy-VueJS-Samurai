<template>
  <div id="app">
    <AppHeader />
    <div class="d-flex align-items-center justify-content-center" style="height: 100vh;">
    <b-card-group deck>
      <TrailCard v-for="(trail, index) in trails"
                 :key="index" :framework="trail.framework"
                 :explanation="trail.explanation"
                 :image="trail.image"
                 :color="trail.color"
                 :link="trail.link"
      />
    </b-card-group>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import TrailCard from "@/components/TrailCard.vue";

export default {
  name: 'App',
  components: {
    AppHeader,
    TrailCard
  },
  data() {
    return {
      trails : []
    }
  },
  mounted() {
    this.fetchData();
  },
  methods : {
    async fetchData(){
      const res = await fetch("trails.json");
      const val = await res.json();
      this.trails = val;
      console.log(val);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
