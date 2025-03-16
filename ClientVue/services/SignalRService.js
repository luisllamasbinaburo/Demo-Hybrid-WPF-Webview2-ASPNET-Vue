import * as signalR from '@microsoft/signalr';

const signalRService = {
  connection: null,

  startConnection: async function () {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl('/cloc-hub') // Reemplaza con la URL de tu hub
      .configureLogging(signalR.LogLevel.Information)
      .build();

    try {
      await this.connection.start();
      console.log('SignalR Connected.');
    } catch (err) {
      console.error('Error al conectar con SignalR:', err);
    }
  },

  invoke: async function (methodName, ...args) {
    if (this.connection && this.connection.state === signalR.HubConnectionState.Connected) {
      await this.connection.invoke(methodName, ...args);
    } else {
      console.error('No se puede invocar el método, la conexión no está establecida.');
    }
  },

  on: function (methodName, callback) {
    if (this.connection) {
      this.connection.on(methodName, callback);
    } else {
      console.error('No se puede escuchar el método, la conexión no está establecida.');
    }
  },

  stopConnection: async function () {
    if (this.connection) {
      await this.connection.stop();
      console.log('SignalR Disconnected.');
    }
  },
};

export default signalRService;