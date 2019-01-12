// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
Vue.config.productionTip = false
var config = {
  apiKey: "AIzaSyBbY7clHrQb77s11gaKLB-6jTQSo-hKVQw",
  authDomain: "dbms-2d56d.firebaseapp.com",
  databaseURL: "https://dbms-2d56d.firebaseio.com",
  projectId: "dbms-2d56d",
  storageBucket: "dbms-2d56d.appspot.com",
  messagingSenderId: "43798428746"
};
firebase.initializeApp(config);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
