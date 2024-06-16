<template>
  <a-row align="middle" justify="center" style="min-height: 100vh" class="root">
    <a-config-provider :theme="theme">
      <a-card>
        <a-form id="login" style="width: 300px" :model="formState" name="login" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
          <a-form-item width="600px" label="" name="username" :rules="[{ required: true }]">
            <a-input v-model:value="formState.username" placeholder="请输入用户名" />
          </a-form-item>
          <a-form-item label="" name="password" :rules="[{ required: true }]">
            <a-input-password v-model:value="formState.password" placeholder="请输入密码" />
          </a-form-item>
          <a-form-item name="remember">
            <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
          </a-form-item>
          <a-form-item>
            <a-button block type="primary" html-type="submit">登录</a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </a-config-provider>
  </a-row>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'

const theme = {
  components: {
    Card: {
      colorBgContainer: 'transparent'
      // colorBorderSecondary: 'transparent'
    },
    Input: {
      colorBgContainer: 'transparent'
    }
  }
}

interface FormState {
  username: string
  password: string
  remember: boolean
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true
})
const onFinish = (values: any) => {
  console.log('Success:', values)
  window.location.href = '/'
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>
<style scoped>
.root {
  background: linear-gradient(to right, rgb(18, 194, 233), rgb(196, 113, 237), rgb(246, 79, 89));
}
</style>
<style>
/* #login .ant-form-item-control-input-content:autofill {
  box-shadow: 0 0 0px 1000px #fff inset;
  transition: background-color 5000s ease-in-out 0s;
} */
#login .ant-form-item-control-input-content:has(input[type='text']) {
  background-color: rgba(255, 255, 255, 0.2) !important;
  backdrop-filter: blur(20px);
}
#login .ant-form-item-control-input-content:has(input[type='password']) {
  background-color: rgba(255, 255, 255, 0.2) !important;
  backdrop-filter: blur(20px);
}
</style>
