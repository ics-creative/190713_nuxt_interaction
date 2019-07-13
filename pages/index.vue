<template>
  <div></div>
</template>

<script>
export default {
  asyncData({ store }) {
    store.commit('page/setPage', null)
  }
}
</script>

<style></style>
