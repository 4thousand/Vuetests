<template class="body">
  <div class="content">
    <div style="text-align:center">Login</div>
    <input type="submit" value="Sign In With GOOGLE" @click="submit">
  </div>
</template>

<script>
import firebase from "firebase";
import Router from "../router";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    submit: function() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(data => {
          Router.push("/Home");
          console.log(data);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  margin: 100px auto;
  width: 70%;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(138, 138, 138, 0.19);
  background-color: rgb(194, 194, 194);
}
input[type="text"],
[type="password"] {
  width: 100%;
  height: 20px;
  margin-top: 10px;
  border-color: rgb(233, 240, 236);
  background-color: rgb(34, 97, 34);
}
h1,
input[type="submit"] {
  border-style: double;
  width: 70%;
  height: 40px;
  margin-top: 10px;
  background-color: #ff8367;
}
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
body {
  background-color: rgb(143, 143, 143);
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
