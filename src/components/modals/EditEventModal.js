import "../../styles.css";

export default function EditEventModal({
  showEditModal,
  eventForm,
  updateEvent,
  handleDateChange,
  closeEditModal
}) {
  return (
    <div className="EditEventModal">
      {showEditModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2 className="modal-title">Edit Event</h2>
              <button className="close-button" onClick={closeEditModal}>X</button>
            </div>
            <div className="modal-content">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const event = {
                    id: eventForm.id,
                    date: eventForm.date,
                    title: e.target.title.value,
                    time: e.target.time.value,
                    venue: e.target.venue.value,
                    notes: e.target.notes.value,
                    invites: e.target.invites.value
                  };
                  updateEvent(event);
                }}
              >
                <div className="fields">
                  <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    id="title"
                    defaultValue={eventForm.title}
                    required
                  />
                </div>

                <div className="fields">
                  <label htmlFor="date">Date:</label>
                  <input
                    type="date"
                    id="date"
                    defaultValue={eventForm.date}
                    onChange={handleDateChange}
                    required
                  />
                </div>

                <div className="fields">
                  <label htmlFor="time">Time:</label>
                  <input
                    type="time"
                    id="time"
                    defaultValue={eventForm.time}
                    required
                  />
                </div>

                <div className="fields">
                  <label htmlFor="venue">Venue:</label>
                  <input
                    type="text"
                    id="venue"
                    defaultValue={eventForm.venue}
                  />
                </div>

                <div className="fields">
                  <label htmlFor="notes">Notes:</label>
                  <textarea id="notes" defaultValue={eventForm.notes}></textarea>
                </div>

                <div className="fields">
                  <label htmlFor="invites">Invites:</label>
                  <input
                    type="text"
                    id="invites"
                    defaultValue={eventForm.invites}
                  />
                </div>

                <div className="modal-buttons">
                  <button className="cancel-button" onClick={closeEditModal}>Cancel</button>
                  <button type="submit">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
