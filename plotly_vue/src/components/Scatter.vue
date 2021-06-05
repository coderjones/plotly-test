<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <Plotly :data="data" :layout="layout" :display-mode-bar="true"></Plotly>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { Plotly } from 'vue-plotly'
  export default {
    name: 'Scatter',
    components: {
      Plotly
    },
    data: () => ({
    data:[{
      x: [1,2,3,4],
      y: [10,15,13,17],
      type:"scatter"
    },
    {
      x: [1,2,3,4],
      y: [16,5,11,9],
      type:"scatter"
    }
    ],
    layout:{
      title: "My graph"
    }
    }),
  }
</script>