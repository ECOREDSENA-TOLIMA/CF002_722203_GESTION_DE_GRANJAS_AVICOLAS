<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Costos de producción 

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-33.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los decrementos de los beneficios económicos pueden ser clasificados según su destinación; en este sentido se tienen dos grandes categorías que engloban todas las operaciones de la empresa. Las inversiones efectuadas para la creación de los productos se conocen como costo de producción, mientras que las destinadas a la gestión administrativa o comercial son llamadas gastos. 
    
    p.mb-5 La segunda diferencia significativa radica en que los costos son cargados a los productos (en el inventario) y no se reconocen como una disminución en la rentabilidad hasta que no se haya generado la venta de tales productos, los gastos, por su parte, se reconocen directamente en el resultado, afectando la utilidad sin importar si los productos se vendan o no.

    .row.justify-content-center(data-aos="fade-right")
      .col-xl-10.mx-auto
        .titulo-sexto.color-primario(data-aos="fade-right")
          h5 Figura 9.
          span <em>Flujograma de distribución de egresos</em>
        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img(src="@/assets/curso//temas/tema4/img-33-1.svg" data-aos="zoom-in-up" alt="En la figura 9 se muestra una representación gráfica que muestra de manera secuencial y detallada los diferentes procesos y etapas que se llevan a cabo para gestionar y asignar los gastos y salidas de dinero en una empresa.")
          figcaption Nota. Tomado del libro “Presupuestos bajo normas internacionales de información financiera y taxonomía XBRL”. Rincón y Narváez, (2017).
        figure.movil.mt-0  
          .row.justify-content-center.d-lg-none.d-md-none  
            img(src="@/assets/curso/temas/tema4/img-33-2.svg" data-aos="zoom-in-up" alt="En la figura 9 se muestra una representación gráfica que muestra de manera secuencial y detallada los diferentes procesos y etapas que se llevan a cabo para gestionar y asignar los gastos y salidas de dinero en una empresa.")
            figcaption Nota. Tomado del libro “Presupuestos bajo normas internacionales de información financiera y taxonomía XBRL”. Rincón y Narváez, (2017).

    Separador 

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Elementos del costo de producción 

    p.mb-5 Teniendo clara la distinción con los gastos, es posible adentrarse en los elementos que componen el costo de producción. La clasificación que goza de mayor aceptación los divide en tres grandes grupos: materia prima, mano de obra y costos indirectos de fabricación. En la siguiente figura se puede apreciar lo mencionado: 

    .row.justify-content-center(data-aos="fade-right")
      .col-xl-10.mx-auto
        .titulo-sexto.color-primario(data-aos="fade-right")
          h5 Figura 10.
          span <em>Elementos del costo de producción.</em>
        img.d-md-block.mb-5(src="@/assets/curso/temas/tema4/img-34.svg" data-aos="fade-left" alt="En la figura 10 se muestran los componentes que influyen en el costo total de fabricar un bien o producir un servicio. ")

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo=" Materia prima")
        .row
          .col-md-8.col-12
            p Son los materiales utilizados para la elaboración del producto. Se subdivide en materiales directos, siendo estos los afectados por los niveles de producción y atribuibles a cada producto, por ejemplo, las gallinas de engorde; o indirectos en el caso de los que no tienen tanta relevancia o su asignación resulta más compleja de determinar, por ejemplo, el concentrado con el que se alimentan, donde no es posible identificar cuánto de este, se transmite como mayor peso de las aves.
          .col-md-4.col-10
            figure
              img(src='@/assets/curso/temas/tema4/img-35.svg', alt='')

      .tarjeta.color-acento-botones--borde.p-4(titulo="Mano de obra")
        .row
          .col-md-8.col-12
            p Comprende el trabajo realizado por el personal que pertenece al área de producción. Reciben la misma clasificación de la materia prima, por lo que la mano de obra directa suele limitarse al trabajo de los operarios que realizan las labores de forma manual o por intermedio de la maquinaria, mientras que la indirecta comprende los salarios del personal de vigilancia o de los supervisores de área.
          .col-md-4.col-10
            figure
              img(src='@/assets/curso/temas/tema4/img-36.svg', alt='')

      .tarjeta.color-acento-botones--borde.p-4(titulo="Costos indirectos de fabricación")
        .row
          .col-md-8.col-12
            p Agrupan tanto los materiales indirectos como la mano de obra indirecta, así como otros gastos diversos que son necesarios en el área de producción, pero no pueden ser asignados directamente al producto. Algunos ejemplos de estos son los mantenimientos a la maquinaria, el arrendamiento del inmueble donde se ubica la fábrica o los sistemas de control de calidad del producto.
          .col-md-4.col-10
            figure
              img(src='@/assets/curso/temas/tema4/img-37.svg', alt='')

    Separador 

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Clasificación

    p.mb-5 Existen variados criterios de clasificación de los costos de producción que obedecen a propósitos diferentes. A continuación, se describen los que ofrecen mayor utilidad para la administración y elaboración del presupuesto: 

    //- .col-xl-12.mx-auto.mb-5
    //-   img.d-md-block.mb-5(src="@/assets/curso/temas/tema4/img-38.svg" data-aos="fade-left")

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-4.mb-2.col-12.d-flex.align-items-stretch
        div(style="background-color:#D4FEFE;")
          .h4.text-center.p-2.mb-0(style="background-color:#B20D0D;") 
            p.text-small.text-white.mb-0 #[b Según su variabilidad en relación con la producción]
          .p-3.text-small
            p Bajo este modelo, los costos se discriminan en variables, que son aquellos que tienen una relación directa con las unidades producidas, por ejemplo, a mayor cantidad de huevos a producir, mayor la cantidad de gallinas a utilizar. Como contraparte están los costos fijos, que no se ven afectados por la producción, aquí pueden encontrarse rubros como el salario de las aseadoras de planta de producción.
            img.d-md-block.mb-2(src="@/assets/curso/temas/tema4/fig-00.svg" data-aos="fade-left")
      .col-md-4.mb-2.col-12.d-flex.align-items-stretch
        div(style="background-color:#D4FEFE;")
          .h4.text-center.p-2.p-lg-3.mb-0(style="background-color:#B20D0D;") 
            p.text-small.text-white.mb-0 #[b Según su relación con el producto] 
          .p-3.text-small(style="background-color:#D4FEFE;")
            p La regla aplicable a este sistema lleva a determinar si existe o no una relación directa entre el insumo y la generación del producto terminado. 
            p Se consideran directos los costos asignables a un producto en específico como lo sería la materia prima objeto de transformación o el salario pagado al operario que trabaja en una línea de producción en concreto. 
            p Los costos indirectos, por su parte, corresponden a aquellos que, aunque tienen relación con la producción, son comunes a varios tipos de productos o cuesta asignarlos de forma directa a uno en específico. 
            p Uno de los ejemplos más claros es el costo de los servicios públicos, el agua o la luz utilizados para encender y operar la maquinaria: no pueden designarse fácilmente a un solo producto, pues todas las líneas de producción requieren de ellos. 

      .col-md-4.mb-2.col-12.d-flex.align-items-stretch
        div(style="background-color:#D4FEFE;")
          .h4.text-center.p-2.px-lg-3.mb-0(style="background-color:#B20D0D;") 
            p.text-small.text-white.mb-0 #[b Según su uso en procedimientos de planeación]
          .text-small.p-3(style="background-color:#D4FEFE;")
            p Este criterio toma especial relevancia a la hora de la planeación estratégica y la proyección presupuestal. Bajo este sistema están los costos estimados que obedecen a la observación y análisis de su comportamiento y no son tan precisos, pues su cálculo no requiere procedimientos tan rigurosos. 
            p En segundo lugar, están los costos estándar, cuya determinación se hace a través de sistemas de costeo que ofrecen una alta precisión; demandan mucho tiempo para su cálculo, pero tienen un margen de error mucho más reducido. Debido a lo exigente que es el proceso de determinación del costeo estándar, suele ser aplicado a aquellas líneas de producción de gran volumen y relevancia.


    .row.justify-content-center(data-aos="fade-right")
      .col-xl-10.mx-auto
        .titulo-sexto.color-primario(data-aos="fade-right")
          h5 Figura 11.
          span <em>Clasificación de los costos de producción</em>
        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img.pb-5(src="@/assets/curso//temas/tema4/img-38-1.svg" data-aos="zoom-in-up" alt="En la figura 11 se muestra la agrupación de los diferentes elementos de costo en categorías específicas para facilitar su análisis y control. ")
        figure.movil.mt-0  
          .row.justify-content-center.d-lg-none.d-md-none  
            img.pb-5(src="@/assets/curso/temas/tema4/img-38-2.svg" data-aos="zoom-in-up" alt="En la figura 11 se muestra la agrupación de los diferentes elementos de costo en categorías específicas para facilitar su análisis y control. ")

    Separador 

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Cálculo

    .row.mb-4
      .col-lg-12
        .cajon.color-acento-contenido.p-4.mb-4
          p Determinar el costo de producción de un producto puede ser una tarea básica o muy compleja dependiendo las particularidades del proceso. El elemento que suele traer mayores dificultades para su medición es el de costos indirectos, puesto que, al no existir una relación directa con la producción, cuesta trabajo atribuir la proporción del mismo que corresponde a cada línea productiva. Si la empresa produce un solo tipo de producto, se simplifica mucho la labor. En este sentido, una sumatoria de todos los elementos del costo, dividido en el número de unidades producidas brindará el costo por unidad.

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 1.
        span <em>Ejemplo de cálculo de costos por unidad.</em>
      img.d-md-block.mb-5(src="@/assets/curso/temas/tema4/img-39.svg" data-aos="fade-left")





</template>

<script>
export default {
  name: 'Tema4',
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
