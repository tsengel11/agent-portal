<template>
  <v-card
      class="mx-auto"
      width="256"
      tile
  >
    <v-navigation-drawer permanent>
      <v-system-bar></v-system-bar>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="../assets/avatar.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Bayartsengel
            </v-list-item-title>
            <v-list-item-subtitle>sen@libertycollege.edu.au</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="selectedItem"
            color="primary"
        >
          <v-list-item
              v-for="(item, i) in items"
              :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>


                <v-list-item-title @click="to_page(item.root)" v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  methods:{
    to_page(root){
      return location.replace(root)
    }

  },
  data: () => ({
    selectedItem: 0,
    items: [
      { text: 'Enrollment Status', icon: 'mdi-folder' ,root:'/'},
      { text: 'New Enrollment', icon: 'mdi-account-multiple',root:'/newenrollment' },
      { text: 'Knowledges', icon: 'mdi-star' },
      { text: 'Forms', icon: 'mdi-history' },
      { text: 'Price List', icon: 'mdi-check-circle' },
      { text: 'Marketing Materials', icon: 'mdi-upload',root:'/materials' }
    ],
  }),
}
</script>