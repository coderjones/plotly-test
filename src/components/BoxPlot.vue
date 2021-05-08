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
    name: 'BoxPlot',
    components: {
      Plotly
    },
    created: () => {
    },
    computed: {
        myData: function() {
            var y0 = [];
            var y1 = [];
            for (var i = 0; i < 50; i ++) {
                y0[i] = Math.random();
                y1[i] = Math.random() + 1;
            }

            var trace1 = {
            y: y0,
            type: 'box'
            };

            var trace2 = {
            y: y1,
            type: 'box'
            };

            var data = [trace1, trace2];
            return data;
        }
    },
    data: () => ({
    data:[],
    layout:{
      title: "Box Plot"
    }
    }),
  }
</script>