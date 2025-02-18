<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h2>Vue-Plotly Examples</h2>
      </div>

      <v-spacer></v-spacer>


    </v-app-bar>

    <v-main>
      <v-row>
        <v-col cols="2">

    <v-navigation-drawer
      v-model="drawer"
      absolute
      permanent
    >
      <v-list dense dark>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="viewSwitch = item.title"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
 
        </v-col>
        <v-col cols="9" v-if="viewSwitch == 'Scatter'">
          <Scatter/>
        </v-col>
        <v-col cols="9" v-if="viewSwitch == 'Bar'">
          <Bar/>
        </v-col>       
        <v-col cols="9" v-if="viewSwitch == 'Home'">
          <HelloWorld />
        </v-col>       
        <v-col cols="9" v-if="viewSwitch == 'Histogram'">
          <Histogram />
        </v-col>     
        <v-col cols="9" v-if="viewSwitch == 'Box Plot'">
          <BoxPlot />
        </v-col>                      
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Scatter from './components/Scatter';
import Bar from './components/Bar';
import Histogram from './components/Histogram';
import BoxPlot from './components/BoxPlot';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Scatter,
    Bar,
    Histogram,
    BoxPlot
  },

  data: () => ({
    //{
    drawer: true,
    viewSwitch: 'Home',
    items: [
      { title: 'Home', icon: 'mdi-home-city' },
      { title: 'Scatter', icon: 'mdi-chart-line' },
      { title: 'Bar', icon: 'mdi-poll' },
      { title: 'Histogram', icon: 'mdi-chart-histogram' },
      { title: 'Box Plot', icon: 'mdi-chart-bar-stacked' },       
    ],
    mini: true,
  }),
};
</script>
