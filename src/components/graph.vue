<template>
  <div id="app">
    <apexchart
      width="500"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: this.categories
        },
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true
          }
        },
        colors: ['#0bff00', '#0085ff', '#ff0000']
      },
      series: [
        {
          name: 'currency',
          data: this.data
        }
      ]
    }
  }
}
</script>
