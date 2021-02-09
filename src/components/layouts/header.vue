<template>
  <div>
    <q-layout view="hHh Lpr lff">
      <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Header</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list>
              <router-link to="/" class="link">
                <q-item clickable v-ripple>
                    <q-item-section avatar>
                    <q-icon name="attach_money" />
                    </q-item-section>
                    <q-item-section>
                     Currency
                    </q-item-section>
                </q-item>
              </router-link>
              <router-link to="/currency-country" class="link">
                <q-item clickable v-ripple>
                    <q-item-section avatar>
                    <q-icon name="auto_graph" />
                    </q-item-section>
                    <q-item-section>
                     Currency
                    </q-item-section>
                </q-item>
              </router-link>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <slot></slot>
    </q-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
    text-decoration: none;
    color: initial;
}
</style>
