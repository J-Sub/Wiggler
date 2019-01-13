<template>
  <div id="homePage">
    <div id="main">
      <h1 id="title">{{ title }}</h1>
      <div id="rules">
        <p>{{ rule1 }}</p>
        <p>{{ rule2 }}</p>
        <p>{{ rule3 }}</p>
      </div>
      <carousel id="skin" :per-page="3" :navigation-enabled="true">
        <slide id="slide">image1
        </slide>
        <slide id="slide">image2
        </slide>
        <slide id="slide">image3
        </slide>
        <slide id="slide">image4
        </slide>
      </carousel>
      <input id="nicknameInput" type="text" ref="nameInput" 
          v-bind:placeholder="name" v-on:keyup.enter.prevent="gameRender()">
      <v-btn id="readyButton" color="#ea7420" round=true
            v-on:mouseenter="textChange()" 
            v-on:mouseleave="textReChange()" 
            v-on:click.prevent="gameRender()">{{ ready }}</v-btn>
      <div id="github">
        <a v-bind:href="git_repo">
          {{ git_repo }}<images></images>
        </a>
      </div>
    </div>
    <div id="background"></div>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel';
import ShowGame from './ShowGame.vue'

export default {
  data () {
    return {
      title: "wiggler",
      rule1: "Pick up foods to begin",
      rule2: "Careful, keep your heads up!",
      rule3: "Shoot and run!",
      skin: "choose your skin",
      skinNum: 1,
      name: "Enter your name",
      ready: "Ready to wiggle?",
      // codes
      git_repo: "https://github.com/bhanghj3094/MyWeb.git"
    }
  }, 
  methods: { // if run, all of the methods functions are called at once(?) but not really applying all results
    toast: function() {
      return 'Welcome!'
    },
    textChange: function() {
      this.ready = "Oh, Yes~"
    },
    textReChange: function() {
      this.ready = "Ready to wiggle?"
    },
    gameRender: function() {
      // render real game
      const userName = this.$refs.nameInput.value; // list of all references in our page
      // 다른 Vue 파일로 넘어가기
    }
  },
  components: {
    Carousel,
    Slide, 
    'show-game': ShowGame
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#background {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('../assets/Background/EggPattern.jpg');
  background-size: cover;
  z-index: -1;
  opacity: 0.8;
}

#title {
  margin-top: 90px;
  text-align: center;
  font-size: 90px;
  font-family: 'Pacifico', cursive;
}

#rules {
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
  font-family: 'Hind Guntur', sans-serif;
}

#skin {
  width: 500px;
  height: 200px;
  /* border: 1px solid black; */
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
}

#nicknameInput {
  margin-top: 20px;
  margin-bottom: 15px;
  width: 280px;
  height: 35px;
  text-align: center;
  background-color: beige;

  border-radius: 3px;
}

#readybutton{
  width: 150px;
  height: 20px;
}

#github {
  margin-top: 110px;
  font-weight: bold;
}
</style>
