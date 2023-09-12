<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El mapa conceptual sobre Caracterización y diagnóstico de la empresa aborda los aspectos fundamentales para comprender y analizar una empresa. Se exploran temas como los diferentes tipos de empresa, los recursos y transacciones contables, la disponibilidad de recursos (humanos, materiales, técnicos y financieros), el presupuesto y su importancia, los costos de producción (elementos, clasificación y cálculo) y el plan de producción (características y etapas). Este mapa proporciona una visión general de los elementos clave para entender y gestionar una empresa de manera efectiva. 
    
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Este mapa proporciona una visión general de los elementos clave para entender y gestionar una empresa de manera efectiva. ")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
