<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <Plotly :data="myData" :layout="layout"></Plotly>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <div id='myDiv' style="width:600px;height:250px;"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { Plotly } from 'vue-plotly'
  export default {
    name: 'Histogram',
    components: {
      Plotly
    },
    created: () => {
    },
    computed: {
        myData: function() {
            var x = [];
            for (var i = 0; i < 500; i ++) {
                x[i] = Math.random();
            }

            var trace = {
                x: x,
                type: 'histogram',
            };
            return [trace];
        }
    },
    data: () => ({
    data:[],
    layout:{
      title: "Histogram"
    }
    }),
  }
</script>