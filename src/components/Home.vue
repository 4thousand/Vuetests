<template>
  <div>
    <div class="navbar">
      <a style="float:right;" @click="submit">Logout</a>
    </div>
    <div class="content">
      <div class="boxnameleft">
        <img v-bind:src="user.photoURL" v-bind:alt="altText">
      </div>
      <div style="text-align:left;margin-top:10px;margin-left:10px">{{user.email}}</div>
      <div style="text-align:left;margin-top:20px;margin-left:10px;">{{user.displayname}}</div>
    </div>
  </div>
</template>

<script>
const data = {};

import firebase from "firebase";

import Router from "../router";

firebase
  .auth()

  .onAuthStateChanged(data => {
    if (!data) {
      Router.push("/");
    } else {
      var user = {
        email: "",
        displayname: "",
        datetime: ""
      };

      user.email = data.email;
      user.displayname = data.displayName;
      user.datetime = new Date().toString();

      firebase
        .database()
        .ref("/Log")
        .push(user);
    }
  });
export default {
  name: "Home",

  data() {
    return {
      user: {
        email: "",
        displayname: "",
        photoURL: ""
      },
      data: {},
      data: {
        email: "",
        displayname: "",
        datetime: ""
      }
    };
  },
  methods: {
    submit: function() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signOut();
    }
  },
  created() {
    this.datta = firebase.auth().currentUser;
    this.user.email = this.datta.email;
    this.user.displayname = this.datta.displayName;
    this.user.photoURL = this.datta.photoURL;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
}
.boxnameleft {
  width: 80px;
  height: 80px;
  float: left;
  margin-right: 10px;
}
.boxright {
  float: left;
}
.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
template {
  background-color: rgb(226, 226, 226);
}
.navbar a:hover {
  background: #ddd;
  color: black;
}

.content {
  margin: 0 auto;
  width: 85%;
  height: 80px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: rgb(236, 236, 236);
}

img {
  width: 80px;
  height: 80px;
  float: left;
  margin-right: 10px;
  border-radius: 10px;
}
.boxname {
  border: 1px #ccc solid;
  height: 30px;

  align-items: center;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
