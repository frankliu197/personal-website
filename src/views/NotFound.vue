<template lang="pug">
.not-found
  .error-pg
    .error-number
      .number.left-coffee 4
      .coffee-mug
      .number.right-coffee 4
    .mean-msg
      p Page Not found
      P Redirecting to home ...
  
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'NotFound',
    created(){
      setTimeout( () => this.$router.push({ path: '/home'}), 1000);
    }
  })
</script>

<style lang="scss">

.not-found {
  height: 100%;
  background-image: linear-gradient( rgba(100,65,37,1), rgba(122,65,37,0.3));
  .error-number {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 700px;
  }

  .number {
    font-size: 25em;
    color: #414042;
    .number.left-coffee {
      margin-right: 2%;
    }

    .number.right-coffee {
      margin-left: 2%;
    }
  }

  /* COFFEE MUG */

  .coffee-mug {
    background: #3f2616;
    position: relative;
    margin: 0;
    width: 170px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #442918, 0 0 0 25px #3c2415, 0 0 0 42px #e4e6b2,
      0 0 0 65px #eff0d1, 0 120px 0 -25px #3c2415, 100px 70px 0 -25px #3c2415,
      80px 140px 0 -10px #3c2415, 0px 210px 0 -55px #3c2415,
      20px 250px 0 -65px #3c2415; 
  }
  .coffee-mug::before {
    content: "";
      position: absolute;
      background: #eff0d1;
      height: 80px;
      width: 60px;
      top: -85px;
      right: -75px;
      border-radius: 5px;
      box-shadow: inset 0px 50px 0 0px #eff0d1;
      transform: rotate(45deg);
    }
    .coffee-mug::after {
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      border: 3px solid #77665c;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      top: 0;
      bottom: 0;
      margin-top: auto;
      margin-bottom: auto;
      opacity: 0.2;
      animation: rings 3s ease-out infinite;
    }
  @keyframes rings {
      to {
        width: 150px;
        height: 150px;
        opacity: 0;
      }
    }

  /* Mean Message */
  .mean-msg {
    font-size: 1.5em;
    margin-top: 90px;
    text-align: center;
    .mean-msg a {
      border-bottom: 1px solid #414042;
      color: #3c2415;
    }
  }

  /*Provides More interactivity otherwise it isn't needed */
  @media only screen and (max-width: 650px) {
    .coffee-mug {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      box-shadow: 0 0 0 10px #442918, 
                  0 0 0 25px #3c2415, 
                  0 0 0 42px #e4e6b2,
                  0 0 0 65px #eff0d1, 
                  10px 120px 0 -25px #3c2415, 
                  70px 90px 0 -25px #3c2415,
                  50px 120px 0 -10px #3c2415;
    }

    @keyframes rings {
      to {
        width: 50px;
        height: 50px;
        opacity: 0;
      }
    }
  }

  @media only screen and (max-width: 550px) {
    .coffee-mug {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      box-shadow: 0 0 0 10px #442918, 
                  0 0 0 25px #3c2415, 
                  0 0 0 42px #e4e6b2,
                  0 0 0 65px #eff0d1, 
                  10px 120px 0 -25px #3c2415, 
                  70px 90px 0 -25px #3c2415,
                  50px 120px 0 -10px #3c2415;
    }

    .number {
      font-size: 17em;
    }
  }

  @media only screen and (max-width: 450px) {
    .coffee-mug {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      box-shadow: 0 0 0 10px #442918, 
                  0 0 0 25px #3c2415, 
                  0 0 0 42px #e4e6b2,
                  0 0 0 65px #eff0d1;
      }

    .number {
      font-size: 12em;
    }
  }

  @media only screen and (max-width: 350px) {
    .coffee-mug {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      box-shadow: 0 0 0 10px #442918, 
                  0 0 0 25px #3c2415, 
                  0 0 0 40px #e4e6b2,
                  0 0 0 55px #eff0d1;
      }

    .number {
      font-size: 8em;
    }

    .coffee-mug::after {
      content: "";
      width: 20px;
      height: 20px;
      left: -3px;
    }

    .coffee-mug::before {
      content: "";
      position: absolute;
      background: #eff0d1;
      height: 40px;
      width: 30px;
      top: -70px;
      right: -60px;
      border-radius: 5px;
      box-shadow: inset 0px 50px 0 0px #eff0d1;
      transform: rotate(45deg);
    }

    @keyframes rings {
      to {
        width: 15x;
        height: 15px;
        opacity: 0;
      }
    }
  }
}


</style>