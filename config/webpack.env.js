'use strict'

const NODE_ENV = process.env.NODE_ENV;  //  production  develop

let BASE_API,   proxy;


if (NODE_ENV === 'production') {
  switch (process.env.BASE_ENV) {
    case 'prd':
      BASE_API = "https://api.17kuxiu.com";
      break;
    case 'pre':
      BASE_API = "https://pre.17kuxiu.com";
      break;
    case 'dev':
      BASE_API = "https://dev.17kuxiu.com";
      break;
  }
} else {

  BASE_API = '/api';
  switch (process.env.BASE_ENV) {
    case 'prd':
      proxy = "https://api.17kuxiu.com";
      break;
    case 'pre':
      proxy = "https://pre.17kuxiu.com";
      break;
    case 'dev':
      proxy = "https://dev.17kuxiu.com";
      break;
  }
}


module.exports = {
  BASE_API,
  proxy,
}
