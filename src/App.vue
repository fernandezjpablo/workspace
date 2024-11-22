<template>
  <div id="app">
    <EstelCon />
    <Invitados />
  </div>
</template>

<script>
import EstelCon from "./components/EstelCon.vue";
import Invitados from "./components/Invitados.vue";

export default {
  name: "App",
  components: {
    EstelCon,
    Invitados,
  },
};
</script>

<style>
/* Estilos globales si es necesario */
</style>
