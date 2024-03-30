
"use strict";
let rooms = [{"historical":false,"room":"JSX"},{"historical":false,"room":"Module Blocks"},{"historical":false,"room":"Pattern Matching Champions"},{"historical":false,"room":"Pipeline Champions"},{"historical":false,"room":"TC39 Async Context"},{"historical":false,"room":"TC39 Beginners"},{"historical":false,"room":"TC39 Compartments"},{"historical":false,"room":"TC39 Decorators"},{"historical":false,"room":"TC39 Delegates"},{"historical":false,"room":"TC39 ECMA402"},{"historical":false,"room":"TC39 Editors"},{"historical":false,"room":"TC39 General"},{"historical":false,"room":"TC39 Implementers"},{"historical":false,"room":"TC39 Inclusion Group"},{"historical":false,"room":"TC39 Loader"},{"historical":false,"room":"TC39 Matrix Pilot Feedback"},{"historical":false,"room":"TC39 Module Harmony"},{"historical":false,"room":"TC39 Research _TG5_"},{"historical":false,"room":"TC39 Structs and Shared Structs"},{"historical":false,"room":"TC39 TG3"},{"historical":false,"room":"TC39 Test262 Maintainers"},{"historical":false,"room":"TC39 Website"},{"historical":false,"room":"TC39-TG3_ Security"},{"historical":false,"room":"TC39-TG4_ Source Maps"},{"historical":false,"room":"WHATWG"},{"historical":true,"room":"#tc39"},{"historical":true,"room":"#tc39-delegates"},{"historical":true,"room":"#tc39-editor-group"},{"historical":true,"room":"#whatwg"}];

function sanitizeRoomName(room) {
  if (room.startsWith('#')) {
    room = 'irc-' + room;
  }
  return room.replace(/ /g, '_').replace(/#/g, '');
}
function renderRoom(room, current) {
  return `<li><a href="${current === 'index' ? '' : '../'}${sanitizeRoomName(room)}/"${room === current ? ' class="current-room"' : ''}>${room}</a></li>`;
}
function renderRawRoomList(rooms, room) {
  // someday, partition
  let historicalRooms = rooms.filter(r => r.historical).map(r => r.room);
  let activeRooms = rooms.filter(r => !r.historical).map(r => r.room);

  if (historicalRooms.length === 0) {
    return `
<ul class="room-list">
${activeRooms.map(r => renderRoom(r, room)).join('\n')}
</ul>
`;
  } else {
    return `
<div class="room-list-wrapper">Active:<br>
<ul class="room-list">
${activeRooms.map(r => renderRoom(r, room)).join('\n')}
</ul>
</div>
<br>
<div class="room-list-wrapper">Historical:<br>
<ul class="room-list">
${historicalRooms.map(r => renderRoom(r, room)).join('\n')}
</ul>
</div>
`;
  }
}

addEventListener('DOMContentLoaded', () => {
  document.querySelector('.all-rooms').innerHTML = renderRawRoomList(rooms, room);
});
