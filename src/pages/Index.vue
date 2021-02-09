<template>
  <q-page>
    HELOOO AAAAA
    <Graph/>
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
