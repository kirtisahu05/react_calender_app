import "./../../styles.css";
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
        <div className="modal">
          <div className="modal-content">
            <h3>Add Event</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const event = {
                  id: Date.now().toString(),
                  date: eventForm.date,
                  title: e.target.title.value,
                  time: e.target.time.value,
                  venue: e.target.venue.value,
                  notes: e.target.notes.value,
                  invites: e.target.invites.value
                };
                addEvent(event);
              }}
            >
              <div className="fields">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" required />
              </div>

              <div className="fields">
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  id="date"
                  onChange={handleDateChange}
                  required
                />
              </div>

              <div className="fields">
                <label htmlFor="time">Time:</label>
                <input type="time" id="time" required />
              </div>

              <div className="fields">
                <label htmlFor="venue">Venue:</label>
                <input type="text" id="venue" />
              </div>

              <div className="fields">
                <label htmlFor="notes">Notes:</label>
                <textarea id="notes"></textarea>
              </div>

              <div className="fields">
                <label htmlFor="invites">Invites:</label>
                <input type="text" id="invites" />
              </div>

              <div className="modal-buttons">
                <button type="submit">Save</button>
                <button onClick={closeAddModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
