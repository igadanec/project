<template>
  <div id="app">
    <graph-line
      :width="600"
      :height="400"
      :shape="'normal'"
      :axis-min="0"
      :axis-max="50"
      :axis-full-mode="true"
      :labels="['1Q', '2Q', '3Q', '4Q']"
      :names="names"
      :values="values"
    >
      <tooltip :names="names" :position="'right'"></tooltip>
      <legends :names="names"></legends>
      <guideline :tooltip-y="true"></guideline>
    </graph-line>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      names: ['MS', 'Apple', 'Google'],
      values: [
        [10, 5, 5, 5],
        [40, 10, 10, 10],
        [30, 30, 30, 30]
      ]
    }
  }
}
</script>
