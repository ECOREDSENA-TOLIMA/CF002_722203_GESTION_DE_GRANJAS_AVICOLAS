export default {
  global: {
    componenteFormativo: 'Caracterización y diagnóstico de la empresa ',
    descripcionCurso:
      'Las empresas son construcciones sociales de alta relevancia y complejidad. Conocer sus propiedades y los recursos que la conforman posibilitará la generación de nuevos emprendimientos que contribuyan al aumento económico del territorio. Entender las tácticas de gestión enfocadas a la planificación y administración de los recursos, otorgará herramientas para potenciar su aumento y asegurar su permanencia en el mercado.  ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de empresa',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Recursos y transacciones contables de la empresa',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Diagnóstico organizacional de la empresa',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Disponibilidad de recursos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Humanos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Materiales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Técnicos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Financieros',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Presupuesto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Definición y ejemplos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Importancia',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tipos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Presupuesto inicial de la empresa',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Cómo elaborar un presupuesto',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Costos de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Elementos del costo de producción',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Clasificación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Cálculo',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Plan de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Características',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Etapas',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_722203.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.3 Diagnóstico organizacional.',
      referencia:
        'Meza B, A, El diagnóstico organizacional: elementos, métodos y técnicas (2009).',
      tipo: 'Artículo web',
      link:
        'https://www.infosol.com.mx/miespacio/el-diagnostico-organizacional-elementos-metodos-y-tecnicas/',
    },
    {
      tema: '5 Plan de Producción.',
      referencia:
        'Pérez A. Plan de producción de una empresa: el pilar de toda buena gestión corporativa (2019)',
      tipo: 'Artículo web',
      link:
        'https://www.obsbusiness.school/blog/plan-de-produccion-de-una-empresa-el-pilar-de-toda-buena-gestion-corporativa',
    },
  ],
  glosario: [
    {
      termino: 'Empresa',
      significado:
        'sistema de organización social para generar valor económico o prestar un servicio a la comunidad.',
    },
    {
      termino: 'Excedentes/Utilidades',
      significado:
        'beneficio económico resultante al tomar los ingresos y deducir los costos y gastos.',
    },
    {
      termino: 'Persona natural',
      significado: 'individuo de la raza humana con derechos y obligaciones.',
    },
    {
      termino: 'Persona jurídica',
      significado:
        'figura jurídica compuesta por una o más personas naturales con identidad propia, pero sin la capacidad de actuar por sí misma. Es diferente a todas las personas que la componen, y requiere de un representante legal para actuar.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'sistema cíclico mediante el cual los resultados obtenidos en un proceso se reintegran nuevamente al mismo para mejorarlo.',
    },
    {
      termino: 'Estrategia',
      significado:
        'plan diseñado para ejecutar acciones y alcanzar objetivos, enmarcado en unos parámetros definidos por los directivos.',
    },
    {
      termino: 'Tributario',
      significado:
        'en el contexto del componente, asociado con impuestos, entendidos como las contribuciones exigidas por el gobierno.',
    },
    {
      termino: 'Ciclo operativo',
      significado:
        'proceso que abarca todas las etapas, desde la compra de materia prima hasta la venta del producto terminado.',
    },
    {
      termino: 'Objeto social',
      significado:
        'labor para la cual fue concebida una empresa, incluye todas las actividades que se van a ejecutar de manera recurrente.',
    },
    {
      termino: 'Plusvalía',
      significado:
        'valorización que obtiene un bien inmueble con el paso del tiempo.',
    },
    {
      termino: 'Margen de rentabilidad',
      significado:
        'ratio que determina la proporción de utilidad al tomar un ingreso y dividirlo en los costos necesarios para generarlo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Burbano A. (2011). Costos y presupuestos. Cuarta edición. Instituto Superior Tecnológico Ismael Pérez Pazmiño ',
      link:
        'https://instipp.edu.ec/Libreria/libro/Presupuestos_-_Burbano%20.pdf',
    },
    {
      referencia:
        'Decreto 410 de 1971 [Presidencia de la República] Por el cual se expide el Código de Comercio. Marzo 27 de 1971',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio.html',
    },
    {
      referencia:
        'Lira P. (2016). Apuntes de finanzas operativas. Universidad Peruana de Ciencias Aplicadas S.A.C.',
      link:
        'https://repositorioacademico.upc.edu.pe/bitstream/handle/10757/620833/Apuntes%20de%20finanzas%20Operaivas%201er%20cap.pdf',
    },
    {
      referencia:
        'Pérez V. y Manuel F. (1985). La evaluación organizacional. p.67-74.',
      // link:
      //   'https://journals.copmadrid.org/jwop/files/1985/vol1/arti2.htm#_Hlk445286354',
    },
    {
      referencia:
        'Planas F. E. (2018). Todo sobre la gestión de su empresa. Editorial de Vecchi.',
      // link:
      //   'https://es.scribd.com/read/388236109/Todo-sobre-la-gestion-de-su-empresa',
    },
    {
      referencia:
        'Rincón C. y Narváez J. (2017). Presupuestos bajo normas internacionales de información financiera y taxonomía XBRL. Ediciones de la U.',
      // link:
      //   'https://es.scribd.com/read/436221926/Presupuestos-Bajo-normas-internacionales-de-informacion-financiera-y-taxonomia-XBRL',
    },
    {
      referencia:
        'Rodríguez D. (2016). Diagnóstico organizacional. Octava edición. Ediciones Universidad Católica de Chile.',
      // link:
      //   'https://es.scribd.com/document/429486479/diagnostico-organizacional',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Mercedes Orduz Gómez',
          cargo: 'Experta Temática',
          centro:
            'Regional Santander - Centro de Atención al Sector Agropecuario',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios (CIES)',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
