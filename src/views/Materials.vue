<template>
  <div class="home">
    <MaterialList msg="List of Enrolled students"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MaterialList from '@/components/MaterialList.vue'

export default {
  name: 'Enrollment',
  components: {
    MaterialList
  }
}
</script>