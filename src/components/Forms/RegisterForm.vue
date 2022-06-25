<template>
  <div>
    <div class="form">
      <label for="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        v-model="email"
      />
      <br />

      <label for="password">Contraseña</label>
      <input type="password" name="password" id="password" v-model="password" />

      <br />

      <button @click="createUser()">Create</button>
    </div>
    <button @click="logOut()">Log out</button>
  </div>
</template>

<script>
import { firebaseAuth } from "@/firebaseInit.js";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default {

  name: 'RegisterView',
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    /**
     * Funcion asincrona que busca registrar a los usuarios
     */
    async createUser() {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          firebaseAuth,
          this.email,
          this.password
        );
        console.log(userCredential.user.uid);
        this.logOut();
      } catch (e) {
        console.log(e.message);
      }
    },
    async logOut() {
      try {
        await firebaseAuth.signOut();
        console.log("Se Salió de la sesión");
        this.$router.push("/login");
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>
</style>