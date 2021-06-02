<template>
  <div class="ma-8">

  <v-row>
    <div><v-btn class="ma-8" href="/newenrollment"> New Enrollment</v-btn></div>
    <div class="ma-3">    <h3 >{{ msg }} </h3>
      <h3> Total enrollment:{{students.length}}</h3>
    </div>
  </v-row>


    <v-data-table
        :headers="headers"
        :items="students"
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
      students: [
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
          name: 'Hoang',
          lname: 'Duc Dang',
          course: 'CPC30211 - Certificate III in Carpentry',
          sentdate: '27/01/2021',
          status: 'Completed'
        },
        {
          name: 'Keyur',
          lname: 'Maheshbhai Fosi',
          course: 'Certificate III in Carpentry',
          sentdate: '21/01/2021',
          status: 'Completed'
        },
        {
          name: 'Gursevak',
          lname: 'Singh Aujla',
          course: 'Certificate IV in Building and Construction',
          sentdate: '25/05/2021',
          status: 'Completed'
        },
        {
          name: 'Usama',
          lname: 'Rao',
          course: 'Certificate IV in Building and Construction',
          sentdate: '19/04/2021',
          status: 'Completed'
        },
        {
          name: 'HongJun',
          lname: 'Choi',
          course: 'Diploma of Building and Construction (Building)',
          sentdate: '12/04/2021',
          status: 'Completed'
        },
        {
          name: 'Saemiroo',
          lname: 'Lee',
          course: 'Diploma of Building and Construction (Building)',
          sentdate: '12/04/2021',
          status: 'Cancelled'
        },
      ],
    }
  },
  methods: {
    getColor (status) {
      if (status == 'In Progress') return 'orange'
      else if (status == 'Completed') return 'green'
      else return 'red'
    },
  },
  computed:{

  }
}
</script>
