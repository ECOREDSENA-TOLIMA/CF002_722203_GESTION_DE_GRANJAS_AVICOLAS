<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col-lg-12
        .cajon.color-primario.p-4.mb-4
          p El sistema económico actual funciona bajo un esquema globalizado e interconectado que facilita la interacción de agentes tan diversos como distantes entre sí. Bajo este modelo surge la figura de empresa como el organismo productor y generador de valor más importante.  
          p Es tal la complejidad que ha adquirido con el tiempo que existen disciplinas dedicadas únicamente a comprender y aplicar las mejores estrategias para maximizar sus beneficios.
          p Este componente tiene como pilar fundamental aportar al aprendiz una conceptualización de lo qué es una empresa, los elementos que la integran y las estrategias más efectivas para gestionar eficientemente sus recursos a través de la planeación estratégica.   

    figure
      .video
        iframe(width="560" height="315" src="@/assets/curso/introduccion/CF02_Caracterizacion.mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
