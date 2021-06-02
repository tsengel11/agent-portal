<template>
  <div class="home">
    <v-btn class="ma-8" href="/newenrollment"> New Enrollment</v-btn>
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