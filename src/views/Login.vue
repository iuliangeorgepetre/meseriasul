<template>
  <div class="login">
    <h1>This is a login page</h1>
    <div class="container">
      <FormLogin/>
    </div>
</div>
</template>

<script>
import FormLogin  from '@/components/FormLogin';
export default {
  name:'Login',
  components: {
    FormLogin
  }
}
</script>
