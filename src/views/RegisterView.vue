<template>
  <div >
    <RegisterForm msg="Hola desde Register"/>
  </div>
</template>

<script>

import RegisterForm from '@/components/Forms/RegisterForm.vue';

export default {
  name: 'RegisterView',
  components: {
    RegisterForm
  }
}
</script>