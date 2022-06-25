<template>
  <div>
    <h1>Hola desde Login</h1>
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

      <button @click="loginUser()">Login</button>
    </div>
    <div class="other">
      <router-link :to="{ name: 'register' }">Register</router-link>
    </div>
  </div>
</template>

<script>
import { firebaseAuth } from "@/firebaseInit.js";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default {
  name: "LoginForm",

  methods: {
    async loginUser() {
      try {
        const userCredential = await signInWithEmailAndPassword(
          firebaseAuth,
          this.email,
          this.password
        );
        console.log(userCredential.user.uid);
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  created() {
    onAuthStateChanged(firebaseAuth, async (userAuth) => {
      if (userAuth) {
        const tokenResult = await firebaseAuth.currentUser.getIdTokenResult();
        console.log(tokenResult.claims);
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>