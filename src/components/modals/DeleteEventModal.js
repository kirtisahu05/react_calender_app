import "./../../styles.css";

export default function DeleteEventModal({
  showDeleteModal,
  deleteEvent,
  closeDeleteModal
}) {
  return (
    <div className="DeleteEventModal">
      {showDeleteModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete this event?</p>
            <div className="modal-buttons">
              <button onClick={deleteEvent}>Delete</button>
              <button onClick={closeDeleteModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
