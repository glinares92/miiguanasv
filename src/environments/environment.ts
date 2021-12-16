// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,



  // miiguana: {
  //   conectar: 'http://localhost:8080/oauth/token',
  //   departamentos: 'http://localhost:8080/api/sv/departamentos',
  //   rubro: 'http://localhost:8080/api/sv/negocios',
  //   emprendedores: 'http://localhost:8080/api/sv/emprendedores',
  //   crearempr: 'http://localhost:8080/api/sv/emprendedores',
  //   usuarios: 'http://localhost:8080/api/sva/usuarios',
  //   lista: 'http://localhost:8080/articulo/lista',
  //   detalle: 'http://localhost:8080/articulo/detalle/',
  //   stripeConfirm: 'http://localhost:8080/stripe/confirm/',
  //   stripeCancel: 'http://localhost:8080/stripe/cancel/',
  //   stripePagar: 'http://localhost:8080/stripe/paymentintent'
  // },
  // dialogFlow: {
  //   miguanabot: 'c989349992eddbbe92b67180ffdea2c929838f89'
  // },


  miiguana: {
    conectar: 'http://localhost:8080/oauth/token',
    departamentos: 'http://localhost:8080/api/sv/departamentos',
    rubro: 'http://localhost:8080/api/sv/negocios',
    emprendedores: 'http://localhost:8080/api/sv/emprendedores',
    crearempr: 'http://localhost:8080/api/sv/emprendedores',
    usuarios: 'http://localhost:8080/api/sva/usuarios',
    lista: 'http://localhost:8080/articulo/lista',
    detalle: 'http://localhost:8080/articulo/detalle/',
    stripeConfirm: 'http://localhost:8080/stripe/confirm/',
    stripeCancel: 'http://localhost:8080/stripe/cancel/',
    stripePagar: 'http://localhost:8080/stripe/paymentintent',
  },

  nodeEnvios: {
    correo: "http://localhost:3000/sendmail"
  },



  sisa: {
    conectar:        'https://www.sisa.com.sv/SISAServiceRest/api/v1/conectar',
    getDepartamento: 'https://www.sisa.com.sv/SISAServiceRest/api/v1/departamentos',
    getTipoproveedor: 'https://www.sisa.com.sv/SISAServiceRest/api/v1/tipoproveedor',
    getEspecialidada: 'https://www.sisa.com.sv/SISAServiceRest/api/v1/especialidades',
    getBuscar: 'https://www.sisa.com.sv/SISAServiceRest/api/v1/proveedor/buscar',
    getProveedor: 'https://www.sisa.com.sv/SISAServiceRest/api/v1/proveedor/sucursal',
    serviceToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6IkFzZWd1cmF0ZTAxQ29uczFzYSIsImlzcyI6InNpc2EwMSJ9.AyB1IFILiXn1DHtQ0_SVwMY2qK9OHU1Q402UwREv09Y',
    tokeprov: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InNlZ3Vyb3Mvc2lzYSIsImlzcyI6ImF1dGgwIiwiaWF0IjoxNTUwODY1NzE4fQ.qCOjyzMr2Urcd6Qw0mHsevlP8pent8b5n5PyYxxFVzg'
  },


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
