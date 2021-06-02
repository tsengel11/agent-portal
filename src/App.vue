<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <!--  -->
      Side Menu
    </v-navigation-drawer>

    <v-app-bar app color="indigo lighten-1" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"> -

      </v-app-bar-nav-icon>

      <v-toolbar-title> Liberty Agent Portal</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded href="https://libertycollege.edu.au">Main Web Site</v-btn>
      <v-btn text rounded to="/">Home</v-btn>
      <v-btn text rounded to="/login">Login</v-btn>
      <v-btn text rounded to="/login">Logout</v-btn>
    </v-app-bar>
    <v-main>
      <!-- Login Module -->
      <router-view></router-view>
    </v-main>
    <v-footer padless>
      <v-col
          class="text-center"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Liberty Construction Collage</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components:{

  },
  data() {
    return {
      drawer: null,
      showPassword: false,
      loginFrag:false
    }
  }
}
</script>
