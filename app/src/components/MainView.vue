<style scoped>
  .main-view {
    width: 1078px;
    height: 693px;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    border: solid 1px blue;
  }
</style>

<template>
  <div>
    <div class="main-view">
      <hero-selection></hero-selection>
      <hero-detail></hero-detail>
      <combatant-list></combatant-list>
    </div>
  </div>
</template>

<script>
  import HeroSelection from './MainView/HeroSelection.vue'
  import HeroDetail from './MainView/HeroDetail.vue'
  import CombatantList from './MainView/CombatantList.vue'

  export default {
    components: {
      HeroSelection,
      HeroDetail,
      CombatantList
    },
    name: 'main'
  }
</script>
