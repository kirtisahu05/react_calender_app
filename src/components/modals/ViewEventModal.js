import "./../../styles.css";

export default function ViewEventModal({
  selectedEvent,
  setEventForm,
  setShowEditModal,
  setShowDeleteModal
}) {
  const openEditModal = (event) => {
    setEventForm(event);
    setShowEditModal(true);
  };

  // Function to open delete event modal
  const openDeleteModal = (event) => {
    setEventForm(event);
    setShowDeleteModal(true);
  };

  return (
    <div className="ViewEventModal">
      {selectedEvent && (
        <div className="modal">
          <div className="modal-content">
            <h3>Event Details</h3>
            <p>Date: {selectedEvent.date}</p>
            <p>Time: {selectedEvent.time}</p>
            <p>Venue: {selectedEvent.venue}</p>
            <p>Notes: {selectedEvent.notes}</p>
            <p>Invites: {selectedEvent.invites}</p>
            <div className="modal-buttons">
              <button onClick={() => openEditModal(selectedEvent)}>Edit</button>
              <button onClick={() => openDeleteModal(selectedEvent)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
