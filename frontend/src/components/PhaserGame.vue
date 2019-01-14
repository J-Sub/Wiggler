<template>
  <div id='gameScreen'></div>
</template>

<script>
import 'pixi'
import 'p2'
import Phaser from 'phaser'

export default{
  name: 'phaser-game',
  props: {
    width: Number,
    height: Number
  },
  mounted () {
    let self = this
    if (this.game == null) {
      this.game = new Phaser.Game(500, 500, Phaser.AUTO, this.$el, {
        preload: function preload () {
          self.preload(this)
        },
        create: function create () {
          self.create(this)
        },
        update: function update () {
          self.update(this)
        }
      })
      
    }
  },
  methods: {
    preload () {

    },
    create () {
      var helloText = this.game.add.text(250, 250, 'Hello, Phaser!', { 
        fontSize: '32px', 
        fill: '#00F' 
      });
      helloText.anchor.set(0.5, 0.5);
    },
    update () {
    }
  },
  destroyed () {
    this.game.destroy()
  },
  data () {
    return {
      game: null
    }
  }
}
</script>

<style>
  #gameScreen {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* #gameScreen canvas {
    display: block;
    margin: 0 auto;
  } */
</style>