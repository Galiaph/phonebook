<template>
  <div class="tab-content col-md-10 col-sm-10 col-lg-10">
    <div id="dp-tab-3" class="tab-pane active" part-id="3">
      <central-row v-for="(item, idx) in phonebook" :key="item.id" :liType="item.type" :liName="item.name" :liPhone="item.phone" :liComment="item.comment" :isEditRow="isEditRow" :draggable="isEditRow" @dragstart="onDragStart(idx)" @dragover.prevent="onDragOver(idx)" @drop="onDrop(idx)"/>
    </div>
  </div>
</template>

<script>

import CentralRow from './elements/CentralRow.vue' 

export default {
  name: 'CentralBar',
  components: {
    CentralRow
  },
  data: () => ({
    dragStartIndex: null,
    dragOverIndex: null
  }),
  props: {
    phonebook: {
      type: Array
    },
    isEditRow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onDragStart (idx) {
      if (this.isEditRow)
        this.dragStartIndex = idx
    },
    onDragOver (idx) {
      if (this.isEditRow)
        this.dragOverIndex = idx
    },
    onDrop(idx) {
      if (this.dragStartIndex === null || !this.isEditRow) return

      this.$emit('dragPb', { start: this.dragStartIndex, end: idx })

      this.dragStartIndex = null
      this.dragOverIndex = null
    }
  }
}
</script>

<style>
div.card.dept {
    padding-top: 2em;
    font-weight: bold;
    color: #999;
}
.dnd-container {
  display: flex;
  gap: 32px;
}
.list {
  width: 150px;
  border: 1px solid #ccc;
  min-height: 120px;
  padding: 10px;
  border-radius: 4px;
}
.card.prsn:nth-of-type(odd) {
    background: #f9f9f9;
}
.card.prsn:nth-of-type(odd):hover {
    background: #EEEEEE;
}
.list-item {
  padding: 8px;
  margin-bottom: 6px;
  background: #f1f1f1;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  cursor: grab;
}
div.card input.form-control {
    height: 22px;
    margin-top: -1px;
    margin-left: -12px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.42857143;
    color: #555;
    background: #fff none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    padding: 0px 12px;
}
</style>
