<template>
  <div>
    <b-card align="center" :bg-variant="color" text-variant="white" class="text-center" :title="framework">
      <b-card-text text-variant="white">{{explanation}}</b-card-text>
      <b-card-img :src="image"></b-card-img>
      <b-card-footer>
        <b-button block :variant="color" :href="link" target="_blank">Follow</b-button>
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'TrailCard',
  props: {
    framework: {
      type: String,
      required: true,
    },
    explanation: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'warning',
    },
    link: {
      type: String,
      default: '#',
    }
  },
};
</script>

<style scoped>
</style>