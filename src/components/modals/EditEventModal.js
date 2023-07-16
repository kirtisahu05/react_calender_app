import "./../../styles.css";

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
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Event</h3>
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
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                defaultValue={eventForm.title}
                required
              />

              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                defaultValue={eventForm.date}
                onChange={handleDateChange}
                required
              />

              <label htmlFor="time">Time:</label>
              <input
                type="time"
                id="time"
                defaultValue={eventForm.time}
                required
              />

              <label htmlFor="venue">Venue:</label>
              <input
                type="text"
                id="venue"
                defaultValue={eventForm.venue}
                required
              />

              <label htmlFor="notes">Notes:</label>
              <textarea id="notes" defaultValue={eventForm.notes}></textarea>

              <label htmlFor="invites">Invites:</label>
              <input
                type="text"
                id="invites"
                defaultValue={eventForm.invites}
              />

              <div className="modal-buttons">
                <button type="submit">Save</button>
                <button onClick={closeEditModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
