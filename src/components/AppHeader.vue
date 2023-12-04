<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="success">
      <b-navbar-brand href="#">{{title}}</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto">
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/about">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      title: 'Vue Samurai',
    };
  },
};
</script>