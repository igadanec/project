<template>
  <q-page class="q-pa-lg" :class="{'loader': isLoading}">
    <template v-if="isLoading">
     <Loader/>
    </template>
    <template v-else-if="isError">
      <img class="notify" src="~/src/assets/notify.svg" alt="notify">
      <p class="info">Access to XMLHttpRequest at <a href="http://api.hnb.hr/tecajn/v1" target="_blank">http://api.hnb.hr/tecajn/v1</a> has been blocked by CORS policy.</p>
      <p class="info">Please visit <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank">https://cors-anywhere.herokuapp.com/corsdemo</a>
      to request temporary access to the demo server.</p>
      <p class="info">After requesting temporary access to the demo server. Please refresh page.</p>
    </template>
    <template v-else>
      <div class="currency-container">
        <q-select
          class="q-mb-lg"
          outlined
          label="Select currency"
          v-model="savedCurrencyCountry"
          :options="options"
          @input="getCurrency()"
        />
        <Graph
          type="bar"
          :categories="['Kupovni za devize', 'Srednji za devize', 'Prodajni za devize']"
          :data="[buyCurrency, middleCurrency, sellCurrency]"
        />
      </div>
    </template>
  </q-page>
</template>

<script>
export default {
  name: 'Currency',
  components: {
    Graph: () => import('../components/graph'),
    Loader: () => import('../components/loader')
  },
  data () {
    return {
      allCurrencies: [],
      buyCurrency: '',
      sellCurrency: '',
      middleCurrency: '',
      isLoading: false,
      isError: false,
      options: [
        {
          label: 'Bosna i Hercegovina',
          value: 'BAM'
        },
        {
          label: 'Njemačka',
          value: 'EUR'
        },
        {
          label: 'Sjedinjene Američke Države',
          value: 'USD'
        },
        {
          label: 'Ujedinjeno Kraljevstvo',
          value: 'GBP'
        }
      ]
    }
  },
  created () {
    this.getCurrency()
    if (localStorage.getItem('currencyStoreCurrency')) {
      const getStoreCurrencyCountry = localStorage.getItem('currencyStoreCurrency', JSON.stringify(this.savedCurrencyCountry))
      this.$store.commit('module/updateCurrencyCountry', JSON.parse(getStoreCurrencyCountry))
    }
  },
  computed: {
    savedCurrencyCountry: {
      get () {
        return this.$store.state.module.savedCurrencyCountry
      },
      set (value) {
        this.$store.commit('module/updateCurrencyCountry', value)
      }
    }
  },
  methods: {
    getCurrency () {
      this.isLoading = true
      this.$axios.get(`https://cors-anywhere.herokuapp.com/http://api.hnb.hr/tecajn/v1?valuta=${this.savedCurrencyCountry.value}`).then((res) => {
        setTimeout(() => {
          this.isLoading = false
        }, 1000)
        this.allCurrencies = res.data
        this.buyCurrency = this.allCurrencies[0]['Kupovni za devize'].replace(',', '.')
        this.sellCurrency = this.allCurrencies[0]['Prodajni za devize'].replace(',', '.')
        this.middleCurrency = this.allCurrencies[0]['Srednji za devize'].replace(',', '.')
      }).catch((err) => {
        this.isLoading = false
        this.isError = true
        return err
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.currency-container {
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
}
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
}
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
