<template>
  <div class="hello">
    <h1>
      Hola desde el Home?
    </h1>
    <h3> {{vueUI}} </h3>
    <button @click="getUUID()">Obtener UUID</button>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";


export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      vueUI: "",
    };
  },
  methods: {
    getUUID() {
      const uuidGenerated = uuid();
      this.vueUI = uuidGenerated;
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
