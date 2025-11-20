<template>
  <nav id="top-navbar" class="navbar-inverse navbar">
    <div class="container-fluid">
      <div class="navbar-header">
        <div class="logo">
          <a class="logo-mini">
            <div class="logo-img">
              <img src="logo.jpg" alt="logo">
            </div>
          </a>
          <a class="simple-text logo-normal">Телефонная книга</a>
        </div>
      </div>
      <div id="top-navbar-collapse" class="collapse navbar-collapse">
        <ul class="col-sm-5 col-md-4 navbar-nav nav">
          <li class="navbar-form navbar-left" role="search">
            <input id="searchbox" type="text" class="form-control" placeholder="примеры: мария иванова, секретарь, 2039" value="">
          </li>
        </ul>
        <ul id="w8" class="navbar-nav hidden-sm hidden-xs nav">
          <li>
            <a id="search-btn" href="" @click.prevent="test">
              <i class="glyphicon glyphicon-search"></i>
              Поиск
            </a>
          </li>
          <li>
            <a id="reset-btn" href="" @click.prevent="test">
              <i class="glyphicon glyphicon-remove"></i>
              Сброс
            </a>
          </li>
        </ul>
        <ul id="w9" class="navbar-nav navbar-right nav">
          <li>
            <a href="" @click="logout">Выйти <i class="glyphicon glyphicon-log-out"></i></a>
          </li>
        </ul>
        <div id="manager-controls" style="display: block;">
          <ul id="w11" class="navbar-nav navbar-right nav">
            <li v-show="isEditMode">
              <a type="3" id="last-action-btn"><i class="glyphicon glyphicon-user"></i></a>
            </li>
            <li id="actions-dd" :class="list? 'dropdown open' : 'dropdown'" v-show="isEditMode">
              <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" @click="list = !list"><span class="caret"></span></a>
              <ul id="w12" class="dropdown-menu">
                <li><a type="3" tabindex="-1" @click="add(3)"><i class="glyphicon glyphicon-user"></i> Добавить персону</a></li>
                <li><a type="2" tabindex="-1" @click="add(2)"><i class="glyphicon glyphicon-th-large"></i> Добавить отдел</a></li>
                <li><a type="1" tabindex="-1" @click="add(1)"><i class="glyphicon glyphicon-th"></i> Добавить раздел</a></li>
              </ul>
            </li>
            <li v-show="isRoot" :class="isEditMode? 'active' : ''"><a href="" @click.prevent="clEdit" id="editmode-btn" class="glyphicon glyphicon-pencil btn-lg" title="Turns on and off card editing"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'Headers',
  data: () => ({
    searchText: '',
    searchItem: [{bs_name: 'No results found'}],
    line: false,
    isEditMode: false,
    list: false,
    isRoot: false
  }),
  props: {
  },
  methods: {
    add (idx) {
      this.list = false
      this.$emit('add', idx)
    },
    clEdit () {
      this.isEditMode = !this.isEditMode
      this.$emit('editOn', this.isEditMode)
    },
    async logout () {
      await this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  },
  mounted () {
    this.isRoot = this.$store.getters.getRoot == 1? true : false
  }
}
</script>

<style>
.navbar-brand {
  padding-left: 3em;
}
.logo-img {
  width: 34px;
  display: inline-block;
  height: 34px;
  margin-left: 0;
  margin-right: 10px;
  background: #fff;
  border-radius: 40px;
  text-align: center;
  line-height: 34px
}
.logo-img img {
  max-width: 18px;
  position: relative
}
.logo {
  padding: 12px 0 9px;
  margin: 0;
  position: relative;
  z-index: 4;
  display: block
}
.logo a.logo-mini {
  float: left;
  width: 30px;
  text-align: center;
  /* margin-left: 23px; */
  margin-right: 15px;
  position: relative
}
.logo a.logo-normal {
  display: block;
  opacity: 1;
  transform: translateZ(0);
  text-decoration: none;
}
.logo .simple-text {
  padding: 5px 0;
  display: inline-block;
  font-size: 18px;
  line-height: 20px;
  white-space: nowrap;
  color: #9d9d9d;
  overflow: hidden;
  text-align: left
}
.sidebar .logo p {
  float: left;
  font-size: 20px;
  margin: 10px;
  line-height: 20px
}
.sidebar .logo:before {
  content: "";
  position: absolute;
  bottom: 0;
  right: 15px;
  width: calc(100% - 30px);
  height: 1px
}
</style>