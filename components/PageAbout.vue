<template>
  <div class="detail detail-1" v-bind:class="{ show: display === true }">
    <h2>About</h2>
    <div class="desc">
      <p class="dummy_100"></p>
      <p class="dummy_100"></p>
      <p class="dummy_100"></p>
      <p class="dummy_100"></p>
      <p class="dummy_100"></p>
      <p class="dummy_100"></p>
      <p class="dummy_100"></p>
      <p class="dummy_100"></p>
      <p class="dummy_80"></p>
    </div>

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
      return this.$store.getters['page/pageId'] === 'about'
    }
  }
}
</script>

<style scoped lang="scss" src="./detail.scss"></style>
