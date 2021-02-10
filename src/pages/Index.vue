<template>
  <q-page>
    <Graph type="bar" :categories="['Kupovni za devize', 'Srednji za devize', 'Prodajni za devize']" :data="[7.537900, 7.560582, 7.583263]" />
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  components: {
    Graph: () => import('../components/graph')
  }
}
</script>
