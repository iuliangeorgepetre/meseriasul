<template>
  <div class="about">
    <h1>Lista Joburilor</h1>
    <APIVisualizer/>
  </div>
</template>

<script>
import APIVisualizer from '@/components/APIVisualizer';

export default {
  name:'About',
  components:{
    APIVisualizer
  }
}
</script>