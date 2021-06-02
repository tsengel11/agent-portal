<template>
  <div class="home">
    <EnrollmentList msg="List of Enrolled students"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EnrollmentList from '@/components/EnrollmentList.vue'

export default {
  name: 'Enrollment',
  components: {
    EnrollmentList
  }
}
</script>