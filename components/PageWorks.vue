<template>
  <div class="detail detail-2" v-bind:class="{ show: display === true }">
    <h2>Works</h2>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div class="ui">
      <nuxt-link class="close" to="/">Close</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageTop',
  computed: {
    display() {
      return this.$store.getters['page/pageId'] === 'works'
    }
  }
}
</script>

<style scoped lang="scss" src="./detail.scss"></style>
