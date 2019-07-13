<template>
  <div class="detail detail-3" v-bind:class="{ show: display === true }">
    <h2>Contact</h2>
    <div class="desc">
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
  name: 'PageContact',
  computed: {
    display() {
      return this.$store.getters['page/pageId'] === 'contact'
    }
  }
}
</script>

<style scoped lang="scss" src="./detail.scss"></style>
