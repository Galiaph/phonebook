<template>
  <template v-if="liType == 2">
        <div class="card dept row" type="2" card-id="25">
            <div class="bottom-right row">
                <div class="row controls" v-show="isEditRow">
                    <div class="col-sm-12 btn-report controls" >
                        <a class="btn btn-danger btn-xs" v-show="isDelete">Удалить</a>
                        <a class="btn-report" @click.prevent="clDelete">
                            <i class="glyphicon glyphicon-trash"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row details text">
                <h2>
                    <span class="inline" data-id="name" @click.prevent="clickEdit" v-if="!isEditTag">{{ editTag }}</span>
                    <input class="form-control" type="text" name="tag-text" v-model="editTag" v-if="isEditTag" @keydown.esc="tagEsc" @keypress.enter="tagEnter" autofocus/>
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
              <a class="btn btn-danger btn-xs" v-show="isDelete">Удалить</a>
                <a class="btn-report" @click.prevent="clDelete">
                  <i class="glyphicon glyphicon-trash"></i>
                </a>
            </div>
          </div>
        </div>

        <div class="row brief">
          <div class="col-sm-3">
            <span class="inline name" data-id="name">{{ editTag }}<span class="hdm " data-id="name"><i class="glyphicon glyphicon-user"></i></span></span>
          </div>
          <div class="col-sm-4 col-sm-push-4">
            <span class="inline job" data-id="job_title">{{ liComment }}</span>
          </div>
          <div class="col-sm-1 col-sm-pull-3">
            <span class="inline phone" data-id="ph_internal">{{ liPhone }}</span>
          </div>
        </div>
      </div>
    </template>
</template>

<script>
export default {
  name: 'CentralRow',
  props: {
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
    isDelete: false,
    editTag: ''
  }),
  methods: {
    tagEsc () {
      if (this.isEditTag) {
        this.isEditTag = false
      }
    },
    tagEnter () {
      this.isEditTag = false
    },
    clDelete () {
      this.isDelete = !this.isDelete
    },
    clickEdit () {
      if (!this.isEditRow) return

      this.isEditTag = true
    }
  },
  mounted () {
    this.editTag = this.liName
  }
}
</script>

<style>
</style>
