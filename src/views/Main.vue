<template>
  <div class="wrap">
    <headers @add="addLine($event)" @editOn="changeEdit($event)" />
    <div class="container-fluid" id="main-container">
      <div class="row">
        <div class="col-md-12" id="phonebook">
          <div class="row">
            <left-bar :group="groups" :groupSelect="selecteNode" @rowSelect="rowSelected" />
            <central-bar :isEditRow="isEdit" :phonebook="node" @dragPb="onDrag($event)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from '../components/Headers.vue'
import LeftBar from '../components/LeftBar.vue'
import CentralBar from '../components/CentralBar.vue'
import axios from 'axios'
// import moment from 'moment'

export default {
  name: 'App',
  components: {
    Headers,
    LeftBar,
    CentralBar
  },
  data: () => ({
    selecteNode: 1,
    isEdit: false,
    groups: [],
    pb: [],
    node: []
  }),
  methods: {
      addLine (event) {
        console.log(event)
      },
      rowSelected (event) {
        this.selecteNode = event
        // this.getZoneByID(this.selecteNode)
        this.node = this.pb.filter(el => el.zone == this.selecteNode)
      },
      onDrag (event) {
        const movedItem = this.node[event.start]
        this.node.splice(event.start, 1)
        this.node.splice(event.end, 0, movedItem)
      },
      changeEdit (event) {
        this.isEdit = event
        console.log(event)
      },
      async getZones () {
        const resp = await axios.get(`${this.hostReg}/zones`)
        this.groups = resp.data.map(el => {
          return {
            ...el
          }
        })
      },
      async getZoneByID (id) {
        const resp = await axios.get(`${this.hostReg}/zone/${id}`)
        this.pb = resp.data.map(el => {
          return {
            ...el
          }
        })
      },
      async getLists () {
        const resp = await axios.get(`${this.hostReg}/lists`)
        this.pb = resp.data
        this.node = this.pb.filter(el => el.zone == this.selecteNode)
        // this.pb = resp.data.map(el => {
        //   return {
        //     ...el
        //   }
        // })
      }
    },
    async mounted () {
      try {
        this.getZones()
        // this.getZoneByID(this.selecteNode)
        this.getLists()
      } catch (err) {
        console.error('error in headers mounted')
      }
    }
}
</script>

<style>
</style>
