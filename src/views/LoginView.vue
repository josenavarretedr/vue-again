<template>
  <div class="login-form">
    <Login msg="Hola desde login"/>
  </div>
</template>

<script>

import Login from '@/components/Forms/LoginForm.vue';

export default {
  name: 'LoginView',
  components: {
    Login
  }
}
</script>