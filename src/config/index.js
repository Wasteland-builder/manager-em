/**
 * 环境配置封装
 */
 const env = import.meta.env.MODE || 'prod';
 const EnvConfig = {
     dev:{
         baseApi:'/api',
         mockApi:'https://www.fastmock.site/mock/7ca5ac2a5d9fe4234c63f9973a5d5bcd/api'
     },
     test:{
         baseApi:'//test.futurefe.com/api',
         mockApi:'https://www.fastmock.site/mock/7ca5ac2a5d9fe4234c63f9973a5d5bcd/api'
     },
     prod:{
         baseApi:'//futurefe.com/api',
         mockApi:'https://www.fastmock.site/mock/7ca5ac2a5d9fe4234c63f9973a5d5bcd/api'
     }
 }
 export default {
     env,
     mock:false,
     namespace:'manager',
     ...EnvConfig[env]
 }