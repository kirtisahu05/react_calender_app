import "../../styles.css";
import "./styles.css";

export default function AddEventModal({
  showAddModal,
  eventForm,
  addEvent,
  handleDateChange,
  closeAddModal
}) {
  return (
    <div className="AddEventModal">
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2 className="modal-title">Add Event</h2>
              <button className="close-button" onClick={closeAddModal}>X</button>
            </div>
            <div className="modal-content">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const { title, time, venue, notes, invites } = e.target;
                  const event = {
                    id: eventForm.id || Date.now().toString(),
                    date: eventForm.date,
                    title: title.value,
                    time: time.value,
                    venue: venue.value,
                    notes: notes.value,
                    invites: invites.value
                  };
                  addEvent(event);
                }}
              >
                <div className="fields">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    required
                    defaultValue={eventForm.title}
                  />
                </div>

                <div className="fields">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    onChange={handleDateChange}
                    required
                    defaultValue={eventForm.date}
                  />
                </div>

                <div className="fields">
                  <label htmlFor="time">Time</label>
                  <input
                    type="time"
                    id="time"
                    required
                    defaultValue={eventForm.time}
                  />
                </div>

                <div className="fields">
                  <label htmlFor="venue">Venue</label>
                  <input
                    type="text"
                    id="venue"
                    defaultValue={eventForm.venue}
                  />
                </div>

                <div className="fields">
                  <label htmlFor="notes">Notes</label>
                  <textarea
                    id="notes"
                    defaultValue={eventForm.notes}
                  ></textarea>
                </div>

                <div className="fields">
                  <label htmlFor="invites">Invites</label>
                  <input
                    type="text"
                    id="invites"
                    defaultValue={eventForm.invites}
                  />
                </div>

                <div className="modal-buttons">
                  <button
                    className="cancel-button"
                    onClick={closeAddModal}
                  >
                    Cancel
                  </button>
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
