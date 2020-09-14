<template>
  <div class="login">
    <h1>This is a register page</h1>
    <div class="container">
      <FormRegister/>
    </div>
</div>
</template>

<script>
import FormRegister  from '@/components/FormRegister';
export default {
  name:'Login',
  components: {
    FormRegister
  },
  data(){
    return {
      // formData:''
    }
  }
}
</script>
