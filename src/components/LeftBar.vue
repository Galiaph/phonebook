<template>
  <div class="col-md-2 col-sm-2 col-lg-2 tabs-left" style="height: 71vh; overflow-y: scroll;">
    <ul id="dp-tag-list" class="nav nav-tabs">
      <LeftRow v-for="item in group" :data="item" :key="item" :is-selected="item.id == groupSelect" @selected="select(item.id)" />
    </ul>
  </div>
</template>

<script>

import LeftRow from './elements/LeftRow.vue'

export default {
  name: 'LeftBar',
  components: {
  LeftRow
  },
  props: {
    group: Object,
    groupSelect: {
      type: Number,
      default: 1
    },
  },
  methods: {
    select: function (index) {
      this.$emit('rowSelect', index)
    }
  }
}
</script>

<style>
</style>
