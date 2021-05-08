<template>
  <v-container>
      <section>

        <h4 class="v-heading text-h6 mb-2">Histogram </h4> <p>And example of using a histogram with random data. </p>
      </section>
    <v-row>
        <v-col cols="12">
            <h4>Markup:</h4>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            <code>
                {{markup}}
            </code>
        </v-col>
    </v-row> 
    <v-row>
        <v-col cols="12">
            <h4>Code:</h4>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            <pre>
            
<code>         computed: {
                myData: function() {
                        var x = [];
                        for (var i = 0; i &lt; 500; i ++) {
                            x[i] = Math.random();
                        }

                        var trace = {
                            x: x,
                            type: 'histogram',
                        };
                        return [trace];
                    }
                }
    }</code>
            </pre>
        </v-col>
    </v-row>     
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
    },
    markup: '<Plotly :data="myData" :layout="layout"></Plotly>',
    exampleCode: '    computed: {<br>\
        myData: function() {<br>\
            var x = [];<br>\
            for (var i = 0; i < 500; i ++) {<br>\
                x[i] = Math.random();<br>\
            }<br>\
<br>\
            var trace = {<br>\
                x: x,<br>\
                type: \'histogram\',<br>\
            };<br>\
            return [trace];<br>\
        }<br>\
    }'
    }),
  }
</script>