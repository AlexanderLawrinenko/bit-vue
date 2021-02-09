const connection = new WebSocket("wss://testnet.bitmex.com/realtime");

connection.onmessage = function(event) {
  console.log(event);
};

connection.onopen = function(event) {
  console.log(event);
  connection.send('{"op": "subscribe", "args": "instrument"}');
};
