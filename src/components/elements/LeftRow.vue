<template>
  <li :class="isSelected ? 'active' : ''">
    <a href="" @click.prevent="select" data-toggle="tab">{{ data.gp_name }}</a>
  </li>
</template>

<script>
export default {
  name: 'LeftRow',
  props: {
    isSelected: Boolean,
    data: Object
  },
  computed: {
  },
  methods: {
    select: function () {
      this.$emit('selected')
    }
  }
}
</script>

<style>
</style>
