<template>
  <q-page class="q-pa-lg">
    <template v-if="isLoading">
      LOADING...
    </template>
    <template v-else-if="isError">
      <img class="notify" src="~/src/assets/notify.svg" alt="notify">
      <p class="info">Access to XMLHttpRequest at <a href="http://api.hnb.hr/tecajn/v1" target="_blank">http://api.hnb.hr/tecajn/v1</a> has been blocked by CORS policy.</p>
      <p class="info">Please visit <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank">https://cors-anywhere.herokuapp.com/corsdemo</a>
      to request temporary access to the demo server.</p>
    </template>
    <template v-else>
      <Graph type="bar"
             :categories="['Kupovni za devize', 'Srednji za devize', 'Prodajni za devize']"
             :data="[buyCurrency, middleCurrency, sellCurrency]"
             />
    </template>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  components: {
    Graph: () => import('../components/graph')
  },
  data () {
    return {
      buyCurrency: '',
      sellCurrency: '',
      middleCurrency: '',
      isLoading: false,
      isError: false
    }
  },
  created () {
    this.isLoading = true
    this.$store.dispatch('module/getCurrency', { valuta: 'EUR' }).then((res) => {
      this.isLoading = false
      console.log(res.data)
      this.buyCurrency = res.data[0]['Kupovni za devize'].replace(',', '.')
      this.sellCurrency = res.data[0]['Prodajni za devize'].replace(',', '.')
      this.middleCurrency = res.data[0]['Srednji za devize'].replace(',', '.')
    }).catch((err) => {
      this.isLoading = false
      this.isError = true
      console.log(err)
    })
  }
}
</script>

<style lang="scss" scoped>
.notify {
  margin: 0 auto 40px;
  display: block;
  width: 100%;
  max-width: 300px;
}
.info {
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  a {
    text-decoration: none;
    color: $primary;
    transition: 0.3s;
    &:hover {
      color: $dark;
    }
  }
}
</style>
