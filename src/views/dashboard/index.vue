<template>
  <div class="dashboard-container">
    <card
      v-for="(item, index) in 6"
      :key="index"
      :cardStyle="{width:'300px',height:'300px',margin:'10px 30px'}"
    />
  </div>
</template>

<script>
export default {
  components: {
    card: () => import("comp/dashboard/card.vue")
  }
};
</script>

<style>
</style>
