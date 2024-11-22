<template>
  <div class="fondo">
    </img class="logo" src="/img/logo.png" alt="logo" />
    <div class="barramenu">
      <p>XXVIII EstelCon - Mereth Aldaron Enyalië</p>
      <div class="margin_button" id="botonesMenu"></div>
    </div>
    <div class="titulo"></div>
    <div class="contenido_fondo">
      <div class="contenido">
        <div id="noticias">
          <div class="noticias">
            <div class="titulonoticia">
              <span class="titulont">¡¡¡INVITADOS!!!</span>
            </div>
            <div class="cuerponoticia">
              <p>
                Tod@s los asistentes a la Mereth Aderthad son invitados de
                excepción, si ustedes me entienden, pero no es menos cierto que
                para la ocasión intentamos traer a invitados especiales para el
                disfrute y maravilla de todos los demás.
              </p>
              <p>¿Quiénes nos acompañarán en esta ocasión?</p>
              <div class="invitados">
                <div class="texto">
                  <p>Ted Nasmith</p>
                  <p>
                    Si pensamos en artistas relacionados con la obra de Tolkien,
                    Nasmith es uno de los primeros nombres que aparecen en
                    nuestra cabeza, así que podríamos decir muchas cosas y
                    seguramente nos quedaríamos cortos.
                  </p>
                  <p>
                    Este año tendremos a Nasmith en España en dos ocasiones: en
                    Julio en el Celsius ¡y en Diciembre con nosotr@s!
                  </p>
                  <p>
                    Aún tenemos que confirmar con él si admitirá encargos para
                    la fecha del evento, pero tenemos claro que habrá más de una
                    más de dos cosas en la EstelTienda que os querréis llevar
                    firmadas.
                  </p>
                  <p>
                    Así pues... Conocéis el nombre, conocéis su obra, pero a lo
                    mejor no lo conocéis todo todo de este ilustre invitado
                    Canadiense, y tal vez tenemos algunos ases en la manga así
                    que...
                  </p>
                  <p>¿os venís a la EstelCon a descubrirlos?</p>
                </div>
                <div class="foto">
                  </img src="/img/invitados/Nasmith.jpg" alt="Ted Nasmith" />
                </div>
              </div>
              <br />
              <div class="invitados">
                <div class="foto">
                  </img src="/img/invitados/Raffaela.png" alt="Raffaela Lerch" />
                </div>
                <div class="texto">
                  <p>Raffaela Lerch</p>
                  <p>
                    Tal vez a algun@s pueda no resultaros familiar el nombre de
                    Raffaela Lerch (¿o quizás sí?) aunque su perfil de instagram
                    (<a
                      href="https://www.instagram.com/aronjaart"
                      target="_blank"
                      >@aronjaart</a
                    >) y su trabajo no tienen desperdicio y son una maravilla.
                  </p>
                  <p>
                    Raffaela es una talentosísima artista afincada en Austria
                    que tiene una buena colección de ilustraciones sobre la obra
                    de Tolkien (y más cosas, pero esa historia será contada en
                    otro momento y lugar).
                  </p>
                  <p>
                    Podéis echar un vistazo a su trabajo en el perfil de
                    Instagram y en su web (<a
                      href="https://aronjaart-shop.com"
                      target="_blank"
                      >https://aronjaart-shop.com/</a
                    >)
                  </p>
                  <p>
                    Raffaela nos acompañará durante la EstelCon, y además nos ha
                    dicho que aceptará encargos a partir de Octubre ¡así que
                    estad atent@s!
                  </p>
                </div>
              </div>
              <br />
              <div class="invitados">
                <div class="texto">
                  <p>Álex Langenbach</p>
                  <p>
                    Es probable que much@s os preguntéis, como dice la canción
                    ¿Álex? ¿Quién ... es Álex?
                  </p>
                  <p>
                    Pues Álex Langenbach, más conocido en Instagram como
                    <a
                      href="https://www.instagram.com/alexsonicsmusic"
                      target="_blank"
                      >@AlexSonicsMusic</a
                    >
                    es una joya (guiño, guiño) artífice del "The Doom of the
                    Noldor", disco que os recomendamos muy muy muy muy (¿hemos
                    dicho muy?) mucho.
                  </p>
                  <p>
                    <a
                      href="https://open.spotify.com/intl-es/album/48nn1n4jeQPuAGjbU60Jpt?si=r7OgLvx5TgSwR9x0Nx0R3Q"
                      target="_blank"
                      >Enlace al disco en Spotify</a
                    >
                  </p>
                  <p>
                    Tenemos a los Fëanorianos del grupo recomendándoos
                    encarecidamente que escuchéis su Juramento de Fëanor, y
                    vendrá a la próxima EstelCon a hablarnos de su trabajo...
                  </p>
                  <p>¡y de algunas cosillas que están en cocina!</p>
                </div>
                <div class="foto">
                  </img src="/img/invitados/Alex.jpg" alt="Álex Langenbach" />
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Invitados",
  mounted() {
    // Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-YVMT01CDJD");

    // jQuery script
    this.$nextTick(() => {
      const script = document.createElement("script");
      script.src = "jquery/jquery-3.6.1.min.js";
      script.onload = () => {
        const script2 = document.createElement("script");
        script2.src = "script/mereth.js";
        document.body.appendChild(script2);
      };
      document.body.appendChild(script);
    });
  },
};
</script>

<style scoped>
@import url("/css/estilos.css");

.fondo {
  /* Estilos adicionales si es necesario */
}
</style>
