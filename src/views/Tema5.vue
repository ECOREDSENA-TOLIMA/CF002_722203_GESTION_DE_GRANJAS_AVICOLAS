<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Plan de producción

    .row.justify-content-center
      .col-lg-10.col-12(data-aos="fade-right")
        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img.pb-5(src="@/assets/curso//temas/tema5/img-39-1.svg" data-aos="zoom-in-up" alt="")
        figure.movil.mt-0  
          .row.justify-content-center.d-lg-none.d-md-none  
            img.pb-5(src="@/assets/curso/temas/tema5/img-39-2.svg" data-aos="zoom-in-up" alt="")
      .col-lg-10.col-12(data-aos="fade-right")
        .cajon.color-acento-contenido.p-4
          p.mb-0 El proceso productivo involucra todas las áreas que tienen relación directa con la elaboración del producto o la prestación del servicio. La correcta gestión de este aspecto permite la optimización de los costos, lo que puede traducirse en una mayor rentabilidad, o en un menor precio de venta. El plan de producción surge como una herramienta administrativa enfocada a la correcta gestión del proceso productivo, con miras a la generación de ventajas competitivas a través de la mejora de la eficiencia de todos los actores que sean contemplados en él.

    Separador 
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Características

    p.mb-5 El plan de producción se concentra en la elaboración de los productos o la prestación de los servicios ofrecidos por la empresa, los factores que los caracterizan son los siguientes: 

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-0.desktop
          template(v-slot:imagen)
            figure(data-aos="flip-up")
              img(src="@/assets/curso/temas/tema5/img-39-3.svg" data-aos="zoom-in-up"  alt="")

          .tarjeta.color-primario.p-3(x="18.5%" y="50.5%" numero="+")
            p.mb-0 Debe ser elaborado por un jefe de producción con el conocimiento técnico, necesario para evaluar la mayor cantidad de variables respecto a niveles de materia prima y horas de trabajo. A mayor número de escenarios contemplados, mayor probabilidad de identificar las metodologías más eficientes.

          .tarjeta.color-acento-botones-2.p-3(x="50%" y="50.5%" numero="+")
            p.mb-0 Es precedido por una planeación estratégica, dado que debe estar acorde a los planteamientos ordenados por el área directiva de la compañía. La planeación estratégica determina, por ejemplo, el tipo de productos a fabricar, información que toma el plan de producción como base para determinar los requerimientos de materia prima y personal.

          .tarjeta.color-acento-contenido.p-3(x="81.5%" y="50.5%" numero="+")
            p(style="color:#000") Se nutre de los presupuestos de otras áreas. 
            p(style="color:#000") Tal es el caso del presupuesto de ventas, que aporta la información asociada a la demanda, y que funciona como punto de partida para establecer las metas de producción. También se alinea con los presupuestos de capital, ya que la cantidad de recursos disponibles puede afectar las políticas de compra y almacenaje de inventarios.
    
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-0.movil
          template(v-slot:imagen)
            figure(data-aos="flip-up")
              img(src="@/assets/curso/temas/tema5/img-39-4.svg" data-aos="zoom-in-up" alt="")  

          .tarjeta.color-primario.p-3(x="50.5%" y="18.5%" numero="+")
            p.mb-0 Debe ser elaborado por un jefe de producción con el conocimiento técnico, necesario para evaluar la mayor cantidad de variables respecto a niveles de materia prima y horas de trabajo. A mayor número de escenarios contemplados, mayor probabilidad de identificar las metodologías más eficientes.

          .tarjeta.color-acento-botones-2.p-3(x="50.5%" y="50%" numero="+")
            p.mb-0 Es precedido por una planeación estratégica, dado que debe estar acorde a los planteamientos ordenados por el área directiva de la compañía. La planeación estratégica determina, por ejemplo, el tipo de productos a fabricar, información que toma el plan de producción como base para determinar los requerimientos de materia prima y personal.

          .tarjeta.color-acento-contenido.p-3(x="50.5%" y="81.5%" numero="+")
            p(style="color:#000") Se nutre de los presupuestos de otras áreas. 
            p(style="color:#000") Tal es el caso del presupuesto de ventas, que aporta la información asociada a la demanda, y que funciona como punto de partida para establecer las metas de producción. También se alinea con los presupuestos de capital, ya que la cantidad de recursos disponibles puede afectar las políticas de compra y almacenaje de inventarios.
    
    Separador 

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Etapas 

    p.mb-5 Para llevar a cabo un plan de producción es necesario tener en cuenta una serie de pasos que contribuirán a que las estimaciones sean más cercanas a la realidad. Lo anterior es de vital importancia dado que plantearse objetivos realistas evitará sobre inversiones y permitirá una medición más objetiva de la capacidad de la línea productiva. Se recomienda que cualquier plan de producción conste por lo menos de las siguientes etapas:

    .tarjeta.tarjeta.color-acento-botones10.p-4.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Previsión de la demanda del producto
            p Una aproximación de las unidades que se esperan vender de cada producto es uno de los factores más relevantes a la hora de programar las compras de materia prima y la contratación del personal operativo. Esta estimación proviene del presupuesto de ventas, que hace parte de la planificación estratégica de la empresa.

          .col-md-5.px-3
            figure
              img(src='@/assets/curso/temas/tema5/img-40.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Diseño de plan maestro de producción
            p Una vez se cuenta con los niveles de demanda esperada por producto, es momento de proceder a determinar aspectos más específicos como la cantidad a producir, los períodos estimados de entrega y las cargas de trabajo por línea de producción. Se le denomina plan maestro porque en este convergen todos los productos elaborados por la empresa.

          .col-md-5.px-3
            figure
              img(src='@/assets/curso/temas/tema5/img-41.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Planificación de capacidad
            p En esta fase es importante considerar factores internos como la capacidad de la maquinaria, la disponibilidad de los espacios productivos, o la cantidad de operarios y las horas disponibles para trabajar. Se recomienda buscar un equilibrio entre las distintas líneas de producción para optimizar el uso de las instalaciones y cubrir con toda la demanda estimada en etapas previas de la planeación estratégica.

          .col-md-5.px-3
            figure
              img(src='@/assets/curso/temas/tema5/img-42.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Control de inventarios
            p Debe planificarse la cantidad de materia prima a comprar, los intervalos de tiempo para hacer los pedidos acordes al volumen y ritmo de producción, usualmente se busca mantener solo los volúmenes de materia prima necesarios para reducir costos de almacenamiento y mantener los niveles de liquidez apropiados.

          .col-md-5.px-3
            figure
              img(src='@/assets/curso/temas/tema5/img-43.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Control de producción y de calidad
            p En esta etapa se evaluarán las unidades producidas y el cumplimiento de los estándares de calidad planteados. La supervisión estará enfocada en el cumplimiento de los cronogramas propuestos, el volumen de la producción estimada en comparación a la ejecutada y en la minimización de costos por defectos o sobrantes. 

          .col-md-5.px-3
            figure
              img(src='@/assets/curso/temas/tema5/img-44.png', alt='Texto que describa la imagen')










</template>

<script>
export default {
  name: 'Tema5',
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
