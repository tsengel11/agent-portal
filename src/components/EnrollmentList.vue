<template>
  <div class="ma-8">
    <h3 class="ma-3">{{ msg }}</h3>
    <v-data-table
        :headers="headers"
        :items="desserts"
        class="elevation-1"
    >
      <template v-slot:item.status="{ item }">
        <v-chip
            :color="getColor(item.status)"
            dark
        >
          {{ item.status }}
        </v-chip>
      </template>
    </v-data-table>
  </div>

</template>

<script>
export default {
  name: 'EnrollmentList',
  props: {
    msg: String
  },
  data () {
    return {
      headers: [
        {
          text: 'Student First Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },

        { text: 'Student Last Name', value: 'lname' },
        { text: 'Status', value: 'status' },
        { text: 'Course', value: 'course' },
        { text: 'Sent Date', value: 'sentdate' }

      ],
      desserts: [
        {
          name: 'Irfan',
          lname: 'Asif',
          course: 'Certificate III in Wall and Floor Tiling',
          sentdate: '05/05/2021',
          status: 'In Progress'
        },
        {
          name: 'Hasib',
          lname: 'Husainali Charolia',
          course: 'Certificate III in Wall and Floor Tiling',
          sentdate: '27/04/2021',
          status: 'Completed',
        },
        {
          name: 'Munish',
          lname: 'Choudhary',
          course: 'Certificate III in Wall and Floor Tiling',
          sentdate: '31/05/2021',
          status: 'In Progress'
        },
        {
          name: 'Mithil',
          lname: 'Yogeshbhai Viradiya',
          course: 'Certificate III in Wall and Floor Tiling',
          sentdate: '28/05/2021',
          status: 'Cancelled'
        },
        {
          name: 'Ming',
          lname: 'Chun Chuang',
          course: 'Certificate III in Carpentry',
          sentdate: '31/05/2021',
          status: 'In Progress'
        },
        {
          name: 'Jelly bean',
          lname: 375,
          course: 0.0,
          sentdate: 94,
          status: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          lname: 392,
          course: 0.2,
          sentdate: 98,
          status: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          lname: 408,
          course: 3.2,
          sentdate: 87,
          status: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          lname: 452,
          course: 25.0,
          sentdate: 51,
          status: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          lname: 518,
          course: 26.0,
          sentdate: 65,
          status: 7,
          iron: '6%',
        },
      ],
    }
  },
  methods: {
    getColor (status) {
      if (status > 400) return 'red'
      else if (status > 200) return 'orange'
      else return 'green'
    },
  },
}
</script>
