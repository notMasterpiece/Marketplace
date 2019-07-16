import socket from 'socket.io-client';

class SocketApi {
  init(token) {
    this.socket = socket('http://localhost:3000', {
      query: {
        token,
      },
      transports: ['websocket'],
    });

    this.socket.on('connect', () => {
      // console.log('connect');
    });

  }

  handleMessage(handler) {
    this.socket.on('message', message => handler(JSON.parse(message)));
  }
}

export default new SocketApi();