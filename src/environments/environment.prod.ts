export const environment = {
  production: true,


  miiguana: {
    conectar: 'https://dockerapi-miiguana.azurewebsites.net/oauth/token',
    departamentos: 'https://dockerapi-miiguana.azurewebsites.net/api/sv/departamentos',
    rubro: 'https://dockerapi-miiguana.azurewebsites.net/api/sv/negocios',
    emprendedores: 'https://dockerapi-miiguana.azurewebsites.net/api/sv/emprendedores',
    crearempr: 'https://dockerapi-miiguana.azurewebsites.net/api/sv/emprendedores',
    usuarios: 'https://dockerapi-miiguana.azurewebsites.net/api/sva/usuarios',
    lista: 'https://dockerapi-miiguana.azurewebsites.net/articulo/lista',
    detalle: 'https://dockerapi-miiguana.azurewebsites.net/articulo/detalle/',
    stripeConfirm: 'https://dockerapi-miiguana.azurewebsites.net/stripe/confirm/',
    stripeCancel: 'https://dockerapi-miiguana.azurewebsites.net/stripe/cancel/',
    stripePagar: 'https://dockerapi-miiguana.azurewebsites.net/stripe/paymentintent'
  },


  nodeEnvios: {
    correo: "https://intv1-prod.herokuapp.com/sendmail"
  },



  sisa: {
    conectar: 'https://www.sisa.com.sv/SISAServiceRest/api/v1/conectar',
    getDepartamento: 'https://www.sisa.com.sv/SISAServiceRest/api/v1/departamentos',
    getTipoproveedor: 'https://www.sisa.com.sv/SISAServiceRest/api/v1/tipoproveedor',
    getEspecialidada: 'https://www.sisa.com.sv/SISAServiceRest/api/v1/especialidades',
    getBuscar: 'https://www.sisa.com.sv/SISAServiceRest/api/v1/proveedor/buscar',
    getProveedor: 'https://www.sisa.com.sv/SISAServiceRest/api/v1/proveedor/sucursal',
    serviceToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6IkFzZWd1cmF0ZTAxQ29uczFzYSIsImlzcyI6InNpc2EwMSJ9.AyB1IFILiXn1DHtQ0_SVwMY2qK9OHU1Q402UwREv09Y',
    tokeprov: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InNlZ3Vyb3Mvc2lzYSIsImlzcyI6ImF1dGgwIiwiaWF0IjoxNTUwODY1NzE4fQ.qCOjyzMr2Urcd6Qw0mHsevlP8pent8b5n5PyYxxFVzg'
  },

};
