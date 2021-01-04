<template>
  <div class="carte">
   <HelloWorld msg="Ici le composant carto"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Carte',
  components: {
    HelloWorld
  }
}
</script>
