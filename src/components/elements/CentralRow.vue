<template>
  <template v-if="liType == 2">
        <div class="card dept row" type="2" card-id="25">
            <div class="bottom-right row">
                <div class="row controls" v-show="isEditRow">
                    <div class="col-sm-12 btn-report controls" >
                        <a class="btn btn-danger btn-xs" @click.prevent="Del" v-show="isDelete">Удалить</a>
                        <a class="btn-report" @click.prevent="clDelete">
                            <i class="glyphicon glyphicon-trash"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row details text">
                <h2>
                    <span class="inline" @click.prevent="clickEdit('tag')" v-if="!isEditTag">{{ editTagС }}</span>
                    <input class="form-control" id="4" type="text" :ref="'name_' + id" @blur="tagEsc" v-model="editTag" v-if="isEditTag" @keydown.esc="tagEsc" @keypress.enter="tagEnter" maxlength="50"/>
                </h2>
            </div>
        </div>
    </template>

    <template v-else-if="liType == 3">
      <div class="card prsn row  eml mo" type="3" card-id="32">
        <div class="row entr-mini">
          <div class="col-xs-auto mini1"></div>
          <div class="col-xs-auto mini2"></div>
        </div>
        <div class="bottom-right row">
          <div class="row controls" v-show="isEditRow">
            <div class="col-sm-12 btn-report controls">
              <a class="btn btn-danger btn-xs" @click.prevent="Del" v-show="isDelete">Удалить</a>
                <a class="btn-report" @click.prevent="clDelete">
                  <i class="glyphicon glyphicon-trash"></i>
                </a>
            </div>
          </div>
        </div>

        <div class="row brief">
          <div class="col-sm-3">
            <span :class="this.editTag.length < 1 ? 'inline name ph' : 'inline name'" @click.prevent="clickEdit('tag')" v-if="!isEditTag">{{ editTagС }}<span class="hdm"><i class="glyphicon glyphicon-user"></i></span></span>
            <input class="form-control" type="text" :ref="'name_' + id" @blur="tagEsc" v-model="editTag" v-if="isEditTag" @keydown.esc="tagEsc" @keypress.enter="tagEnter" maxlength="50"/>
          </div>
          <div class="col-sm-4 col-sm-push-4">
            <span :class="this.editCom.length < 1 ? 'inline job ph' : 'inline job'" @click.prevent="clickEdit('com')" v-if="!isEditCom">{{ editComC }}</span>
            <input class="form-control" type="text" :ref="'com_' + id" @blur="tagEsc" v-model="editCom" v-if="isEditCom" @keydown.esc="tagEsc" @keypress.enter="tagEnter" maxlength="200"/>
          </div>
          <div class="col-sm-1 col-sm-pull-3">
            <span :class="this.editPhone.length < 1 ? 'inline phone ph' : 'inline phone'" @click.prevent="clickEdit('phone')" v-if="!isEditPhone">{{ editPhoneC }}</span>
            <input class="form-control" type="text" :ref="'phone_' + id" @blur="tagEsc" v-model="editPhone" v-if="isEditPhone" @keydown.esc="tagEsc" @keypress.enter="tagEnter" maxlength="10"/>
          </div>
        </div>
      </div>
    </template>
</template>

<script>
export default {
  name: 'CentralRow',
  props: {
    id: {
        type: Number
    },
    liType: {
        type: Number,
        default: 3
    },
    liName: {
        type: String,
        default: ''
    },
    liPhone: {
        type: String,
        default: ''
    },
    liComment: {
        type: String,
        default: ''
    },
    isEditRow: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    isEditTag: false,
    isEditCom: false,
    isEditPhone: false,
    isDelete: false,
    editTag: '',
    editCom: '',
    editPhone: '',
    tmpText: ''
  }),
  computed: {
    editTagС () {
      return this.editTag.length < 1 && this.isEditRow ? 'Полное имя' : this.editTag
    },
    editComC () {
      return this.editCom.length < 1 && this.isEditRow ? 'Должность' : this.editCom
    },
    editPhoneC () {
      return this.editPhone.length < 1 && this.isEditRow ? 'Номер' : this.editPhone
    }
  },
  methods: {
    tagEsc () {
      if (this.isEditTag) {
        this.isEditTag = false
        this.editTag = this.tmpText
      }
      if (this.isEditCom) {
        this.isEditCom = false
        this.editCom = this.tmpText
      }
      if (this.isEditPhone) {
        this.isEditPhone = false
        this.editPhone = this.tmpText
      }
    },
    tagEnter () {
      if (this.isEditTag) {
        this.isEditTag = false
        this.$emit('entEdit', { id: this.id, type: 'tag', text: this.editTag })
      }
      if (this.isEditCom) {
        this.isEditCom = false
        this.$emit('entEdit', { id: this.id, type: 'com', text: this.editCom })
      }
      if (this.isEditPhone) {
        this.isEditPhone = false
        this.$emit('entEdit', { id: this.id, type: 'phone', text: this.editPhone })
      }
    },
    clDelete () {
      this.isDelete = !this.isDelete
    },
    Del () {
      this.$emit('clDel', this.id)
    },
    clickEdit (el) {
      if (!this.isEditRow) return

      switch (el) {
        case 'tag':
          this.isEditTag = true
          this.tmpText = this.editTag
          this.$nextTick(() => {
            this.$refs['name_' + this.id].focus()
          })
          
          break
        case 'com':
          this.isEditCom = true
          this.tmpText = this.editCom
          this.$nextTick(() => {
            this.$refs['com_' + this.id].focus()
          })
          break
        case 'phone':
          this.isEditPhone = true
          this.tmpText = this.editPhone
          this.$nextTick(() => {
            this.$refs['phone_' + this.id].focus()
          })
          break
      }
    }
  },
  mounted () {
    this.editTag = this.liName
    this.editCom = this.liComment
    this.editPhone = this.liPhone
  }
}
</script>

<style>
</style>
