<template>
  <q-layout view="lHh Lpr lFf">
    <NavigationBar>
      <q-page-container>
        <router-view />
      </q-page-container>
    </NavigationBar>
  </q-layout>
</template>

<script>
export default {
  components: {
    NavigationBar: () => import('../components/layouts/header')
  }
}
</script>
