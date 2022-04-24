// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set(),

  selected: 'lobby',
  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  items: function() {
    return [...Rooms.storage];
  },

  isSelected: function(roomname = "lobby") {
    return roomname === Rooms.selected;
  },

  add: fucntion(roomname, callback = () => {}) {
    Rooms.storage.add(roomname);
    Rooms.selected = room;
    callback(Rooms.items());
  },

  savedata: function (messages, callback = () => {}) {
    messages.forEach (message => {
      Rooms.add(message.roomname)
    })

   callback(Rooms._data);

  }

};