<template>
  <div class="home">
    {{test}}
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      reservations: [
        {
          date: '2020-01-04',
          horaire: '22:00',
          groupe: 'Red Hot Chili Peppers'
      }
      ]
    }
  },
  methods() {

  },
  mounted() {

  },
  computed() {

  }

};
</script>
