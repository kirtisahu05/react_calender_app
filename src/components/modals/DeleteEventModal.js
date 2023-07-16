import "../../styles.css";
import "./styles.css";

export default function DeleteEventModal({
  showDeleteModal,
  deleteEvent,
  closeDeleteModal
}) {
  return (
    <div className="DeleteEventModal">
      { showDeleteModal && (
        <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h2 className="modal-title">Confirm Delete</h2>
                <button className="close-button" onClick={closeDeleteModal}>X</button>
              </div>
              <div className="modal-content">
                <p>Are you sure you want to delete this event?</p>
                <div className="modal-buttons">
                  <button className="cancel-button" onClick={closeDeleteModal}>Cancel</button>
                  <button onClick={deleteEvent}>Delete</button>
                </div>
              </div>
            </div>
        </div>
      )}
    </div>
  );
}
