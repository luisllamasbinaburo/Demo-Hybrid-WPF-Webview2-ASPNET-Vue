<template>
    <div id="app">
      <h1>Hora Actual</h1>
      <p>{{ time }}</p>
      <a href="/">Back</a>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { HubConnectionBuilder } from '@microsoft/signalr';
  
  const time = ref('');
  
  onMounted(() => {
    const connection = new HubConnectionBuilder()
      .withUrl(`${import.meta.env.VITE_API_URL}/clockHub`)
      .build();
  
    connection.on('ReceiveTime', (currentTime) => {
      time.value = currentTime;
    });
  
    connection.start()
      .then(() => {
        console.log('Conexión a SignalR establecida.');
      })
      .catch((err) => {
        console.error('Error al conectar con SignalR: ', err);
      });
  });
  </script>
