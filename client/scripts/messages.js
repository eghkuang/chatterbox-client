// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {},

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  items: function () {
    return Object.values(Messages._data);
  },

  add: function (message, callback) {
    Messages._data[message.messageId] = Messages.conform(message);
  },

  savedata: function (dataArray, callback) {
    for (var i = 0; i < dataArray; i ++) {
      Messages._data.add(dataArray[i]);
    }
    callback(Messages.items());

  },

  conform: function (message) {
    messages.text = message.text || "";
    messages.username = message.username || "";
    messages.roomname = message.roomname || "";
    return message;
  }

};