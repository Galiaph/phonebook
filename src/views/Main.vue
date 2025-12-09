<template>
  <div class="wrap">
    <headers @add="addLine($event)" @editOn="changeEdit($event)" @findOn="finds($event)" @resetOn="resets" />
    <div class="container-fluid" id="main-container">
      <div class="row">
        <div class="col-md-12" id="phonebook">
          <div class="row">
            <left-bar :group="groups" :groupSelect="selecteNode" @rowSelect="rowSelected" />
            <central-bar :isEditRow="isEdit" :phonebook="node" @dragPb="onDrag($event)" @entEditBar="entBar($event)" @clDelBar="delBar($event)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from '../components/Headers.vue'
import leftBar from '../components/LeftBar.vue'
import centralBar from '../components/CentralBar.vue'
import axios from 'axios'
// import moment from 'moment'

export default {
  name: 'App',
  components: {
    Headers,
    leftBar,
    centralBar
  },
  data: () => ({
    selecteNode: 1,
    isEdit: false,
    groups: [],
    pb: [],
    node: []
  }),
  methods: {
      async addLine (event) {
        console.log(this.selecteNode + ' ' + event)
        try {
          const resp = await axios.post(`${this.hostReg}/additem`, { 
            item: { 
              name: '',
              comment: '', 
              phone: '',
              zone: this.selecteNode,
              type: event,
              position: this.node.length+1
            }})

          if (resp.status != 200) {
            console.log('Server not saved change')
            console.log(resp)
          } else {
            this.getLists()
          }
        } catch (err) {
          console.error('error in main addLine')
        }
      },
      async delBar (ev) {
        console.log(ev)
        try {
          const resp = await axios.post(`${this.hostReg}/delitem`, { id: ev })

          if (resp.status != 200) {
            console.log('Server not saved change')
            console.log(resp)
          } else {
            this.getLists()
          }
        } catch (err) {
          console.error('error in main delBar')
        }
      },
      rowSelected (event) {
        this.selecteNode = event
        // this.getZoneByID(this.selecteNode)
        this.node = this.pb.filter(el => el.zone == this.selecteNode)
      },
      async entBar (ev) {
        console.log(ev)
        try {
          const resp = await axios.post(`${this.hostReg}/chitem`, ev)

          if (resp.status != 200) {
            console.log('Server not saved change')
            console.log(resp)
          } else {
            this.getLists()
          }
        } catch (err) {
          console.error('error in main entBar')
        }
      },
      async onDrag (event) {
        console.log(event.start)
        console.log(event.end)
        const movedItem = this.node[event.start]
        this.node.splice(event.start, 1)
        this.node.splice(event.end, 0, movedItem)
        
        try {
          this.node.forEach((el, index) => {
            el.position = index
          })

          const arr = this.node.map(el => {
            return {
              id: el.id,
              position: el.position
            }
          })

          const resp = await axios.post(`${this.hostReg}/chzone`, { 'item': { 'list': arr, 'zone': this.node[0].zone } } )

          if (resp.status != 200) {
            console.log('Server not saved change')
            console.log(resp)
          }
        } catch (err) {
          console.error('error in main mounted')
        }
      },
      changeEdit (event) {
        this.isEdit = event
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
      },
      finds (ev) {
        this.node = this.pb.filter(el => { return el.phone.includes(ev) })
        this.node = this.node.concat(this.pb.filter(el => { return el.name.toLocaleLowerCase().includes(ev.toLocaleLowerCase()) }))
        this.node = this.node.concat(this.pb.filter(el => { return el.comment.toLocaleLowerCase().includes(ev.toLocaleLowerCase()) }))
      },
      resets () {
        this.node = this.pb.filter(el => el.zone == this.selecteNode)
      }
    },
    async mounted () {
      try {
        this.getZones()
        // this.getZoneByID(this.selecteNode)
        this.getLists()
      } catch (err) {
        console.error('error in main mounted')
      }
    }
}
</script>

<style>
</style>
