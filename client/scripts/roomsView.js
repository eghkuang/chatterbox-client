// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);

  },

  render: function() {
    // TODO: Render out the list of rooms.
    for (var i = 0; i < Rooms._data.length; i ++) {
      if (Rooms._data[i]) {
        RoomsView.renderRoom(Rooms._data[i]);
      }
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    $lobby = $(`<option value = ${roomname}  >${roomname}</span>`);
    $lobby.appendTo(RoomsView.$select);

  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var newroom = prompt('Please enter a new room name');
    Rooms._data.push(newroom);
    RoomsView.renderRoom(newroom);
    console.log('Rooms._data', Rooms._data);


    // location.reload();

  }

};
