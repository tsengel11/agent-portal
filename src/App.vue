<template>
  <v-app>
    <v-app-bar app color="indigo lighten-1" dark>
      <v-toolbar-title>Liberty Agent Portal</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded>Main Web Site</v-btn>
      <v-btn text rounded>Login</v-btn>
    </v-app-bar>
    <v-content>
      <!-- Login Module -->
      <v-card width="400" class="mx-auto mt-5">
        <v-card-title>
          <h1 class="display-1">Login</h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="Username" prepend-icon="mdi-account-circle" />
            <v-text-field
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="info">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
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
  data() {
    return {
      showPassword: false
    }
  }
}
</script>
