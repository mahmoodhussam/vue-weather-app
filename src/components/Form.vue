<template>
  <div class="input-container">
    <input type="text" placeholder="City Name..." v-model="query" />
    <button @click="$emit('getWeather', query)">Enter</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "FormC",
  setup() {
    const query = ref("");

    return {
      query,
    };
  },
  emits: ["getWeather"],
};
</script>

<style>
.input-container {
  margin-top: 2rem;
}
input {
  width: 75%;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px 0 0 5px;
  border: none;
}

button {
  background-color: #2a9d8f;
  color: #fff;
  border: none;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
}
</style>
