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
            horizontal: true
          }
        }
      },
      series: [
        {
          data: this.data
        }
      ]
    }
  }
}
</script>
