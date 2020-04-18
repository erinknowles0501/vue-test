<template>
  <div id="app">
    {{ hewwo }}
    <p>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <router-link to="/hello">Go to Hewwi</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: function() {
    return {
      hewwo: "hewwo",
    };
  },
};
</script>

<style>
body {
  background: #332211;
  color: white;
}
</style>
