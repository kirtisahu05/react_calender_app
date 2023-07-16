import "../../styles.css";
import "./styles.css";
import {getDayOfWeek} from '../../utils'

export default function ViewEventModal({
  showViewModal,
  selectedEvent,
  closeViewModal,
  openEditModal,
  openDeleteModal
}) {

  return (
    <div className="ViewEventModal">
      {showViewModal && selectedEvent && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2 className="modal-title">Event Details</h2>
              <button className="close-button" onClick={closeViewModal}>X</button>
            </div>
            <div className="modal-content">
              <p>Title: {selectedEvent.title}</p>
              <p>Date: {getDayOfWeek(selectedEvent.date) +`, `+ selectedEvent.date}</p>
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
        </div>
      )}
    </div>
  );
}
