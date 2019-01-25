<template>
  <div class="dashboard-container">
      <card />
  </div>
</template>

<script>
export default {
  components: {
    card:() =>import("comp/dashboard/card.vue")
  }
};
</script>

<style>
</style>
