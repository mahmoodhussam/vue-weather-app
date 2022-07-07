<template>
  <h1>Weather App</h1>
  <Form @getWeather="getWeather" />
  <transition name="result">
    <div v-if="apiCalled">
      <h1 class="country">
        {{ finalResult.data.name }} / {{ finalResult.data.sys.country }}
      </h1>
      <h3>{{ finalResult.data.main.temp }} <sup>o</sup> C</h3>
    </div>
  </transition>
</template>

<script>
import { reactive, ref } from "vue";
import Form from "./components/Form.vue";
import { readData } from "./api/read";
export default {
  name: "App",
  setup() {
    const finalResult = reactive({});
    const apiCalled = ref(false);
    const url = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "822e57448bc62839bdf6370e5f4b1ab7";
    const getWeather = async (query) => {
      const finalApi =
        url + "?q=" + query + "&units=metric" + "&appid=" + apiKey;
      const result = await readData(finalApi);
      if (!result) {
        apiCalled.value = false;
      } else {
        apiCalled.value = true;
      }
      Object.assign(finalResult, result);
      console.log("finalResult", finalResult);
      // fetch(finalApi)
      //   .then((res) => console.log("res", res.json()))
      //   .catch((err) => console.log("err", err));
    };

    return {
      getWeather,
      finalResult,
      apiCalled,
    };
  },
  components: {
    Form,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #264653;
  color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.country {
  margin-top: 20px;
}
.result-enter-from {
  opacity: 0;
}
.result-enter-to {
  opacity: 1;
}
.result-enter-active {
  transition: all 2s ease;
}
</style>
