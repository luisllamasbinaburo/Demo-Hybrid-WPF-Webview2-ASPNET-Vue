<template>
  <div>
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/about">Acerca de</router-link>
      <router-link to="/fetch">Fetch</router-link>
      <router-link to="/signalr">SignalR</router-link>
    </nav>
    <router-view />
  </div>
</template>