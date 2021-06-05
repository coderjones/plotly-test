<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <Plotly :data="databar" :layout="layout" :display-mode-bar="true"></Plotly>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { Plotly } from 'vue-plotly'
  export default {
    name: 'Bar',
    components: {
      Plotly
    },
    data: () => ({
    databar:[{
      x: [1,2,3,4],
      y: [10,15,13,17],
      type:"bar"
    },
    {
      x: [1,2,3,4],
      y: [16,5,11,9],
      type:"bar"
    }
    ],
    layout:{
      title: "My graph"
    }
    }),
  }
</script>