<script setup>
import { ref, onMounted } from 'vue'

const data = ref(null)
const forecasts = ref()
const files = ref()

// Obtener datos iniciales
onMounted(() => {
  fetch(`${import.meta.env.VITE_API_URL}/api/demo`)
    .then(res => res.json())
    .then(result => data.value = result)

  populateWeatherData()
  getFiles()
})

// Obtener datos de la API de pronósticos
const populateWeatherData = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/weatherforecast`)
  if (response.ok) {
    forecasts.value = await response.json()
  }
}

// Obtener lista de archivos
const getFiles = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/files`)
  if (response.ok) {
    files.value = await response.json()
  }
}
</script>

<template>
  <div>
    <h1>{{ data?.message || 'Cargando...' }}</h1>

    <div v-if="forecasts === undefined || files === undefined">
      <p>
        <em>Loading... Please refresh once the ASP.NET backend has started. See 
          <a href="https://aka.ms/jspsintegrationreact" target="_blank">https://aka.ms/jspsintegrationreact</a> 
          for more details.
        </em>
      </p>
    </div>

    <div v-else>
      <ul>
        <li v-for="file in files" :key="file">
          {{ file }}
        </li>
      </ul>
    </div>
  </div>
</template>

