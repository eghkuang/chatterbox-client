// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.on(
      'click',
      '.username',
      MessagesView.handleClick
    );
  },

  render: function(messages) {
    // TODO: Render _all_ the messages.
    MessagesView.$chats.html('');
    messages.forEach(message => {
      MessagesView.renderMessage(message);
    });
  },


  renderMessage: function(message) {
    // TODO: Render a single message.
    // $chatsmessage = $('#chats');
    // $messagediv = $('<div class= "message"></div>');
    // $username = $(`<span class ="username">${message.username}</span>`);
    // $text = $(`<span class ="text">${message.text}</span>`);
    // $roomname = $(`<span class ="roomname">${message.roomname}</span>`);
    // $username.appendTo($messagediv);
    // $text.appendTo($messagediv);
    // $roomname.appendTo($messagediv);
    // $messagediv.appendTo($chatsmessage);

    var $html = MessageView.render(message);
    var nhtml = html.toUpperCase();
    if (nhtml.indexOf('<SCRIPT>') === -1 && nhtml.indexOf('<IMG SRC') === -1) {
      MessagesView.$chats.prepend($html);
    }

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    console.log('are we in???');
    var username = $(event.target).data('username');
    if (username === undefined) {
      return;
    }
    Friends.toggleStatus(username, MessagesView.Render);
  }

};