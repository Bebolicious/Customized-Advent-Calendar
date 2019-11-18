<template>
  <div class="frame">
    <v-card
      :class="active ? 'door doorOpen' : 'door'"
      :style="styles"
      @click="clickHandler(row * 6 + col)"
    >
      <v-card-text class="headline font-weight-black text-xs-right">
        {{ number }}
      </v-card-text>
    </v-card>
    <v-card class="content" :style="contentStyle"></v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      doorOpen: false,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    });
  },
  computed: {
    styles: function() {
      return {
        "background-position-x": this.getPositionX(this.col) + "px",
        "background-position-y": this.getPositionY(this.row) + "px",
        "background-size": this.getSize()
      };
    },
    contentStyle: function() {
      return {
        "background-image": `url('https://images.squarespace-cdn.com/content/v1/5bdb27ee9772ae1cc7955a0a/1551380747835-EI2FP4GB8PCIESBV0AH7/ke17ZwdGBToddI8pDm48kAt72yGFwHZjoxtmj75n0VMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dv608ZF5SQ066zrusfA3lZsto2GUPSkfCkjYhXQIm1t1CjLISwBs8eEdxAxTptZAUg/UnderConstruction.png')`
      };
    }
  },
  props: ["number", "col", "row", "active", "clickHandler"],
  methods: {
    getPositionX: function(col) {
      var vw = this.windowWidth;
      var doorWidth = (vw - 96) / 6;
      var positionX = 60 + col * doorWidth;
      return -positionX;
    },
    getPositionY: function(row) {
      var vh = this.windowHeight;
      var doorHeight = (vh - 96) / 4;
      var positionY = 60 + row * doorHeight;
      return -positionY;
    },
    getSize: function() {
      return `${this.windowWidth}px ${this.windowHeight}px`;
    }
  }
};
</script>

<style scoped>
.frame {
  padding: 12px;
  height: 100%;
}
.door {
  z-index: 2;
  height: 100%;
  color: black;
  text-shadow: 0 0 12px white;
  border: 1px solid black;
  transform-origin: left;
  background-image: url("https://wallpapercave.com/wp/1zIVRdg.jpg");
  background-origin: border-box;
  -webkit-transition: all 1s ease-in-out 0s, background-position-x 0s,
    background-position-y 0s, background-size 0s;
  -moz-transition: all 1s ease-in-out 0s, background-position-x 0s,
    background-position-y 0s, background-size 0s;
  -o-transition: all 1s ease-in-out 0s, background-position-x 0s,
    background-position-y 0s, background-size 0s;
  transition: all 1s ease-in-out 0s, background-position-x 0s,
    background-position-y 0s, background-size 0s;
}
.doorOpen {
  color: transparent;
  text-shadow: transparent;
  transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px)
    rotateY(-105deg);
}
.content {
  z-index: 1;
  position: relative;
  left: 0px;
  top: -100%;
  height: 100%;
  width: 100%;
  background-origin: border-box;
  background-size: 100% 100%;
}
</style>
