<template>
  <div id="app" class="chart-container">
    <apexchart
      style="width: 100%;"
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
        dataLabels: {
          enabled: true,
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val + ' KN'
          }
        },
        xaxis: {
          categories: this.categories,
          labels: {
            formatter: function (value) {
              return value + ' KN'
            }
          }
        },
        yaxis: {
          labels: {
            show: false,
            formatter: function (value) {
              return value + ' KN'
            }
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true
          }
        },
        colors: ['#21BA45', '#0085ff', '#ff0000']
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

<style scoped lang="scss">
.chart-container {
  border: 1px solid rgba(0, 0, 0, 0.24);
  padding: 20px;
  border-radius: 4px;
}
</style>
