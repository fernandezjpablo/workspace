<template>
  <div class="fondo" @click="navigateToInicio" style="cursor: pointer">
    <img
      class="logo_intro"
      src="/img/logo.png"
      alt="logo"
      id="logoIntro"
      @click.stop="logoClick"
    />
    <h1 class="titulo_intro">XXVIII EstelCon - Mereth Aldaron Enyalië</h1>
  </div>
</template>

<script>
export default {
  name: "EstelCon",
  methods: {
    navigateToInicio() {
      window.location.href = "inicio.html";
    },
    logoClick() {
      alert("Mira que había pantalla para pulsar...");
      window.location.href = "inicio.html";
    },
  },
  mounted() {
    // Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-YVMT01CDJD");
  },
};
</script>

<style scoped>
@import url("/css/estilos.css");

.fondo {
  /* Estilos adicionales si es necesario */
}
</style>
