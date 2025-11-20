<template>
<section class="h-100">
		<div class="container h-100">
			<div class="row justify-content-sm-center h-100">
				<div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
					<div class="text-center my-5">
						<img :src="require('@/assets/logo.jpg')" alt="logo" width="100">
					</div>
					<div class="mycard shadow-lg">
						<div class="mycard-body p-5">
							<h1 class="fs-4 mycard-title fw-bold mb-4 text-center">Телефонный справочник</h1>
							<form method="POST" class="needs-validation" novalidate="" autocomplete="off" @submit.prevent="login">
								<div class="mb-3">
									<label class="mb-2 text-muted" for="email">Login</label>
									<input v-model="username" type="text" class="form-control" id="nameInput" autofocus required>
								</div>
								<div class="mb-3">
									<div class="mb-2 w-100">
										<label class="text-muted" for="password">Password</label>
									</div>
									<input type="password" class="form-control" v-model="password" id="passInput" required>
								</div>

								<div class="d-flex align-items-center">
									<button type="submit" class="btn btn-primary ms-auto">
										Login
									</button>
								</div>
							</form>
						</div>
					</div>
					<div class="text-center mt-5 text-muted">
						Copyright &copy; 2022-2025
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

export default {
  // eslint-disable-next-line
  name: 'Login',
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    login: async function () {
      const username = this.username
      const password = this.password
      const host = this.hostReg

      if (!username) {
        document.getElementById('nameInput').focus()
        // this.error = 'Введите логин'
        return
      }

      if (!password) {
        document.getElementById('passInput').focus()
        // this.error = 'Введите пароль'
        return
      }

      // if (this.error) {
      //   this.error = ''
      // }

      try {
        await this.$store.dispatch('login', {
          username,
          password,
          host
        })
        this.$router.push('/')
      } catch (err) {
        this.$store.commit('auth_error')
      }
    }
  }
}
</script>

<style scoped>
.h-100 {
    height: 100%!important
}
.justify-content-sm-center {
    justify-content: center!important;
}
.fw-bold {
    font-weight: 700!important;
}
.fs-4 {
    font-size: 1.5rem!important;
}
.mb-4 {
    margin-bottom: 1.5rem!important;
}
.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(0*-1);
    margin-right: calc(1.5rem*-.5);
    margin-left: calc(1.5rem*-.5)
}
.mb-2 {
    margin-bottom: .5rem!important;
}
.my-5 {
    margin-top: 3rem!important;
    margin-bottom: 3rem!important;
}
.p-5 {
    padding: 3rem!important
}
.mycard,.mycard .actions,.mycard .mycard-content,.mycard .mycard-footer,.mycard .mycard-title,.mycard .category,.mycard .description,.mycard .social-line,.mycard .stats,.mycard a,.mycard small {
    position: relative
}
.mycard {
    border-radius: 4px;
    background-color: #fff;
    margin-bottom: 30px
}
.shadow-lg {
    box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important
}
.mycard {
    --bs-mycard-spacer-y: 1rem;
    --bs-mycard-spacer-x: 1rem;
    --bs-mycard-title-spacer-y: 0.5rem;
    --bs-mycard-title-color: ;
    --bs-mycard-subtitle-color: ;
    --bs-mycard-border-width: 1px;
    --bs-mycard-border-color: rgba(0, 0, 0, .175);;
    --bs-mycard-border-radius: 0.375rem;
    --bs-mycard-box-shadow: ;
    --bs-mycard-inner-border-radius: calc(0.375rem - 1px);
    --bs-mycard-cap-padding-y: 0.5rem;
    --bs-mycard-cap-padding-x: 1rem;
    --bs-mycard-cap-bg: rgba(33, 37, 41,0.03);
    --bs-mycard-cap-color: ;
    --bs-mycard-height: ;
    --bs-mycard-color: ;
    --bs-mycard-bg: #fff;
    --bs-mycard-img-overlay-padding: 1rem;
    --bs-mycard-group-margin: 0.75rem;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    height: ;
    color: #212529;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, .175);
    border-radius: 0.375rem
}
.mycard {
    border-radius: 4px;
    background-color: #fff;
    margin-bottom: 30px
}

.mycard .table {
    margin-bottom: 0
}

.mycard,.mycard .actions,.mycard .mycard-content,.mycard .mycard-footer,.mycard .mycard-title,.mycard .category,.mycard .description,.mycard .social-line,.mycard .stats,.mycard a,.mycard small {
    position: relative
}

.mycard .mycard-link {
    color: #444
}

.mycard .mycard-link:focus,.mycard .mycard-link:hover {
    color: #333
}

.mycard .mycard-image {
    width: 100%;
    overflow: hidden;
    height: 260px;
    border-radius: 4px 4px 0 0;
    position: relative;
    transform-style: preserve-3d
}

.mycard .mycard-image img {
    width: 100%
}

.mycard .filter {
    position: absolute;
    z-index: 2;
    background-color: rgba(0,0,0,.68);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    opacity: 0;
    filter: alpha(opacity=0)
}

.mycard .filter .btn {
    position: relative;
    top: 50%;
    transform: translateY(-50%)
}

.mycard:hover .filter {
    opacity: 1;
    filter: alpha(opacity=100)
}

.mycard .btn-hover {
    opacity: 0;
    filter: alpha(opacity=0)
}

.mycard:hover .btn-hover {
    opacity: 1;
    filter: alpha(opacity=100)
}

.mycard .mycard-body {
    padding: 15px 15px 10px
}

.mycard-body {
    flex: 1 1 auto;
    padding: 1rem 1rem;
    color: ;
}

.mycard .mycard-header {
    padding: 15px 15px 0;
    background-color: #fff;
    border-bottom: none!important
}

.mycard-category {
    font-size: 14px;
    font-weight: 400;
    color: #9a9a9a;
    margin: 0 20px
}

.mycard .mycard-category i,.mycard label i {
    font-size: 16px
}

.mycard label {
    font-size: 12px;
    margin-bottom: 5px;
    text-transform: uppercase
}

.mycard .mycard-title {
    margin: 0;
    color: #333;
    font-weight: 300
}

.mycard .mycard-content {
    padding: 15px 15px 0
}

.mycard .avatar {
    height: 100%;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 5px
}

.mycard .description {
    font-size: 14px;
    color: #333
}

.mycard .mycard-footer {
    padding: 15px 15px 10px;
    background-color: transparent;
    line-height: 30px;
    border-top: none!important;
    font-size: 14px
}

.mycard .mycard-footer .legend {
    padding: 5px 0
}

.mycard .mycard-footer hr {
    margin-top: 5px;
    margin-bottom: 5px
}

.mycard .stats {
    color: #a9a9a9
}

.mycard .author {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 50%;
    border: 4px solid hsla(0,0%,100%,.3);
    overflow: hidden;
    margin: 0 auto;
    transition: all .3s linear
}

.mycard .author i {
    font-size: 14px
}

.mycard h6 {
    font-size: 12px;
    margin: 0
}

.mycard.mycard-separator:after {
    height: 100%;
    right: -15px;
    top: 0;
    width: 1px;
    background-color: #ddd;
    mycard-body: "";
    position: absolute
}

.mycard .ct-chart {
    margin: 30px -10px;
    height: 245px
}

.mycard .ct-label {
    font-size: 1rem!important
}

.mycard .alert {
    border-radius: 4px;
    position: relative
}

.mycard .alert.alert-with-icon {
    padding-left: 65px
}

.mycard.mycard-lock .mycard-body .mycard-title {
    margin-bottom: 20px;
    color: #fff
}

.mycard.mycard-lock .mycard-header .author {
    width: 100px;
    height: 100px
}

.mycard-stats .mycard-body {
    padding: 15px 15px 0
}

.mycard-stats .mycard-body .numbers {
    text-align: right
}

.mycard-stats .mycard-body .numbers p {
    margin-bottom: 0
}

.mycard-stats .mycard-footer {
    padding: 0 15px 10px
}

.mycard-stats .icon-big {
    font-size: 3em;
    min-height: 64px
}

.mycard-stats .icon-big i {
    line-height: 59px
}

.mycard-user .mycard-image {
    height: 110px
}

.mycard-user .mycard-image-plain {
    height: 0;
    margin-top: 110px
}

.mycard-user .author {
    text-align: center;
    text-transform: none;
    margin-top: -70px
}

.mycard-user .avatar {
    width: 124px;
    height: 124px;
    border: 5px solid #eee;
    position: relative;
    margin-bottom: 15px
}

.mycard-user .avatar.border-gray {
    border-color: #eee
}

.mycard-user .title {
    line-height: 24px
}

.mycard-user .mycard-body {
    min-height: 240px
}

.mycard-user .mycard-header.no-padding {
    padding: 0
}

.mycard-user .mycard-footer .button-container .btn {
    font-size: 16px
}

.mycard-price .mycard-footer,.mycard-user .mycard-footer {
    padding: 5px 15px 10px
}

.mycard-price hr,.mycard-user hr {
    margin: 5px 15px
}

.mycard-plain {
    background-color: transparent;
    box-shadow: none;
    border-radius: 0
}

.mycard-plain .mycard-image {
    border-radius: 4px
}

.mycard.mycard-plain {
    border: none!important
}

.mycard.mycard-plain .mycard-header {
    background-color: transparent!important
}

.mycard.mycard-login {
    box-shadow: 0 25px 30px -13px rgba(40,40,40,.4);
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 30px;
    transform: translateZ(0);
    transition: all .3s linear
}

.mycard.mycard-login .form-check {
    margin-left: -12px
}

.mycard.mycard-login.mycard-hidden {
    opacity: 0;
    transform: translate3d(0,-60px,0)
}

.mycard.mycard-register .header-text hr {
    border-top: 1px solid hsla(0,0%,100%,.3)
}

.text-muted {
    --bs-text-opacity: 1;
    color: rgba(33, 37, 41, .75)!important
}
.text-center {
    text-align: center!important
}
.mt-5 {
    margin-top: 3rem!important
}
.mb-3 {
    margin-bottom: 1rem!important;
}
.btn-primary,.el-date-picker .el-picker-panel__footer .el-button,.el-date-picker .el-time-panel.el-popper button,.el-date-range-picker .el-picker-panel__footer .el-button {
    border: 1px solid #447df7;
    color: #fff;
    background-color: #447df7;
    cursor: pointer
}

.btn-primary.active,.btn-primary:active,.btn-primary:focus,.btn-primary:hover,.btn-primary:not(:disabled):not(.disabled):active,.btn-primary:not(:disabled):not(.disabled):active:focus,.el-date-picker .el-picker-panel__footer .active.el-button,.el-date-picker .el-picker-panel__footer .el-button:active,.el-date-picker .el-picker-panel__footer .el-button:focus,.el-date-picker .el-picker-panel__footer .el-button:hover,.el-date-picker .el-picker-panel__footer .open>.dropdown-toggle.el-button,.el-date-picker .el-time-panel.el-popper .open>button.dropdown-toggle,.el-date-picker .el-time-panel.el-popper button.active,.el-date-picker .el-time-panel.el-popper button:active,.el-date-picker .el-time-panel.el-popper button:focus,.el-date-picker .el-time-panel.el-popper button:hover,.el-date-range-picker .el-picker-panel__footer .active.el-button,.el-date-range-picker .el-picker-panel__footer .el-button:active,.el-date-range-picker .el-picker-panel__footer .el-button:focus,.el-date-range-picker .el-picker-panel__footer .el-button:hover,.el-date-range-picker .el-picker-panel__footer .open>.dropdown-toggle.el-button,.open>.btn-primary.dropdown-toggle {
    background-color: #2c6cf6;
    color: #fff;
    border-color: #2c6cf6;
    box-shadow: none
}

.btn-primary.disabled,.btn-primary.disabled.active,.btn-primary.disabled.focus,.btn-primary.disabled:active,.btn-primary.disabled:focus,.btn-primary.disabled:hover,.btn-primary:disabled,.btn-primary:disabled.active,.btn-primary:disabled.focus,.btn-primary:disabled:active,.btn-primary:disabled:focus,.btn-primary:disabled:hover,.btn-primary[disabled],.btn-primary[disabled].active,.btn-primary[disabled].focus,.btn-primary[disabled]:active,.btn-primary[disabled]:focus,.btn-primary[disabled]:hover,.el-date-picker .el-picker-panel__footer .disabled.el-button,.el-date-picker .el-picker-panel__footer .el-button:disabled,.el-date-picker .el-picker-panel__footer [disabled].el-button,.el-date-picker .el-picker-panel__footer fieldset[disabled] .el-button,.el-date-picker .el-time-panel.el-popper button.disabled,.el-date-picker .el-time-panel.el-popper button:disabled,.el-date-picker .el-time-panel.el-popper button[disabled],.el-date-picker .el-time-panel.el-popper fieldset[disabled] button,.el-date-range-picker .el-picker-panel__footer .disabled.el-button,.el-date-range-picker .el-picker-panel__footer .el-button:disabled,.el-date-range-picker .el-picker-panel__footer [disabled].el-button,.el-date-range-picker .el-picker-panel__footer fieldset[disabled] .el-button,fieldset[disabled] .btn-primary,fieldset[disabled] .btn-primary.active,fieldset[disabled] .btn-primary.focus,fieldset[disabled] .btn-primary:active,fieldset[disabled] .btn-primary:focus,fieldset[disabled] .btn-primary:hover,fieldset[disabled] .el-date-picker .el-picker-panel__footer .el-button,fieldset[disabled] .el-date-picker .el-time-panel.el-popper button,fieldset[disabled] .el-date-range-picker .el-picker-panel__footer .el-button {
    border-color: #447df7;
    background-color: #447df7;
    cursor: not-allowed
}

.btn-primary.btn-outline,.el-date-picker .el-picker-panel__footer .btn-primary.el-button:first-child,.el-date-picker .el-picker-panel__footer .el-button,.el-date-picker .el-time-panel.el-popper button,.el-date-range-picker .el-picker-panel__footer .btn-primary.el-button:first-child,.el-date-range-picker .el-picker-panel__footer .el-button {
    color: #447df7;
    background-color: transparent;
    border: 1px solid #447df7;
    opacity: 1;
    filter: alpha(opacity=100)
}

.btn-primary.btn-outline.active,.btn-primary.btn-outline:active,.btn-primary.btn-outline:focus,.btn-primary.btn-outline:hover,.el-date-picker .el-picker-panel__footer .active.el-button,.el-date-picker .el-picker-panel__footer .el-button:active,.el-date-picker .el-picker-panel__footer .el-button:focus,.el-date-picker .el-picker-panel__footer .el-button:hover,.el-date-picker .el-picker-panel__footer .open>.dropdown-toggle.el-button,.el-date-picker .el-time-panel.el-popper .open>button.dropdown-toggle,.el-date-picker .el-time-panel.el-popper button.active,.el-date-picker .el-time-panel.el-popper button:active,.el-date-picker .el-time-panel.el-popper button:focus,.el-date-picker .el-time-panel.el-popper button:hover,.el-date-range-picker .el-picker-panel__footer .active.el-button,.el-date-range-picker .el-picker-panel__footer .el-button:active,.el-date-range-picker .el-picker-panel__footer .el-button:focus,.el-date-range-picker .el-picker-panel__footer .el-button:hover,.el-date-range-picker .el-picker-panel__footer .open>.dropdown-toggle.el-button,.open>.btn-primary.btn-outline.dropdown-toggle {
    background-color: #2c6cf6;
    color: #fff;
    border: 1px solid #2c6cf6
}

.btn-primary.btn-outline .caret,.el-date-picker .el-picker-panel__footer .el-button .caret,.el-date-picker .el-time-panel.el-popper button .caret,.el-date-range-picker .el-picker-panel__footer .el-button .caret {
    border-top-color: #fff
}

.btn-primary.btn-link,.el-date-picker .el-picker-panel__footer .btn-link.el-button,.el-date-picker .el-time-panel.el-popper button.btn-link,.el-date-range-picker .el-picker-panel__footer .btn-link.el-button {
    border-color: transparent!important;
    background-color: transparent!important;
    color: #888
}

.btn-primary.btn-link:active,.btn-primary.btn-link:focus,.btn-primary.btn-link:hover,.el-date-picker .el-picker-panel__footer .btn-link.el-button:active,.el-date-picker .el-picker-panel__footer .btn-link.el-button:focus,.el-date-picker .el-picker-panel__footer .btn-link.el-button:hover,.el-date-picker .el-time-panel.el-popper button.btn-link:active,.el-date-picker .el-time-panel.el-popper button.btn-link:focus,.el-date-picker .el-time-panel.el-popper button.btn-link:hover,.el-date-range-picker .el-picker-panel__footer .btn-link.el-button:active,.el-date-range-picker .el-picker-panel__footer .btn-link.el-button:focus,.el-date-range-picker .el-picker-panel__footer .btn-link.el-button:hover {
    text-decoration: none;
    border-color: transparent;
    color: #797979
}

.btn-primary .caret,.el-date-picker .el-picker-panel__footer .el-button .caret,.el-date-picker .el-time-panel.el-popper button .caret,.el-date-range-picker .el-picker-panel__footer .el-button .caret {
    border-top-color: #447df7
}

.align-items-center {
    align-items: center!important;
}

.d-flex {
    display: flex!important;
}

*,:after,:before {
    box-sizing: border-box;
}
.el-date-picker .el-input .el-input__inner,.form-control,.form-group .el-input__inner {
    background-color: #fff;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    font-size: 1.5rem;
    color: #565656;
    padding: 8px 12px;
    height: 40px;
    box-shadow: none
}
.el-date-picker .el-input .has-error .el-input__inner,.el-date-picker .el-input .has-success .el-input__inner,.form-group .has-error .el-input__inner,.form-group .has-success .el-input__inner,.has-error .el-date-picker .el-input .el-input__inner,.has-error .form-control,.has-error .form-control:focus,.has-error .form-group .el-input__inner,.has-success .el-date-picker .el-input .el-input__inner,.has-success .form-control,.has-success .form-control:focus,.has-success .form-group .el-input__inner {
    border-color: #e3e3e3;
    box-shadow: none
}

.el-date-picker .el-input .has-success .el-input__inner:focus,.form-group .has-success .el-input__inner:focus,.has-success .el-date-picker .el-input .el-input__inner:focus,.has-success .form-control:focus,.has-success .form-group .el-input__inner:focus {
    border-color: #87cb16;
    color: #87cb16
}

.el-date-picker .el-input .has-error .el-input__inner,.form-group .has-error .el-input__inner,.has-error .el-date-picker .el-input .el-input__inner,.has-error .form-control,.has-error .form-group .el-input__inner {
    color: #fb404b
}

.el-date-picker .el-input .has-error .el-input__inner:focus,.form-group .has-error .el-input__inner:focus,.has-error .el-date-picker .el-input .el-input__inner:focus,.has-error .form-control:focus,.has-error .form-group .el-input__inner:focus {
    border-color: #fb404b
}

.el-date-picker .el-input .el-input__inner+.form-control-feedback,.form-control+.form-control-feedback,.form-group .el-input__inner+.form-control-feedback {
    border-radius: 6px;
    font-size: 14px;
    margin-top: -7px;
    position: absolute;
    right: 10px;
    top: 50%;
    vertical-align: middle
}
.card-collapse.collapse,.el-date-picker .el-input .el-input__inner,.form-control,.form-group .el-input__inner,.input-group-addon,.navbar .alert,.tagsinput {
    transition: all .3s linear
}
button,input,optgroup,select,textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit
}
.form-control {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .175);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.375rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out
}
</style>
