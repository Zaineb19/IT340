const Event = require('./event');

const eventList = [];

function addEvent(name, patientId, payload) {
  const event = new Event({
    name,
    patientId,
    payload,
    creationDate: new Date(),
  });
  eventList.push(event);
  console.log('Event added:', event);
}

module.exports = {
  eventList,
  addEvent,
};
