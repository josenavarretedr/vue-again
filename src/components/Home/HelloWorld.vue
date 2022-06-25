<template>
  <div class="hello">
    <button @click="getUUID()">Cambiar</button>
    <button @click="createUser()">Crear Usuario</button>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
import {firebaseAuth} from "../../firebaseInit.js";
import { createUserWithEmailAndPassword } from "firebase/auth";


export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    getUUID() {
      console.log(uuid());
    },
    async createUser() {
      try {
        const userCredential = await createUserWithEmailAndPassword(firebaseAuth,
          "k@k.com",
          "yosoyrinsa"
        );
        console.log(userCredential.user);
      } catch (e) {
        console.log(e.message);
      }
    },
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
