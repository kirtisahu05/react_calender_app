import "./styles.css";
import React, { useState, useEffect } from "react";

import {
  AddEventModal,
  DeleteEventModal,
  EditEventModal,
  ViewEventModal
} from "./components/modals";

export default function App() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [eventForm, setEventForm] = useState({
    id: "",
    date: "",
    time: "",
    venue: "",
    notes: "",
    invites: ""
  });

  // Load events from local storage on component mount
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  // Update events in local storage when events change
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  // Function to get the first day of the month
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Function to get the number of days in a month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to handle the month change
  const handleMonthChange = (increment) => {
    const newDate = new Date(
      date.getFullYear(),
      date.getMonth() + increment,
      1
    );
    setDate(newDate);
  };

  const openAddModal = () => {
    setEventForm({
      id: "",
      date: formatDate(date),
      time: "",
      venue: "",
      notes: "",
      invites: ""
    });
    setShowAddModal(true);
  };

  // Function to close add event modal
  const closeAddModal = () => {
    setShowAddModal(false);
  };

  // // Function to open edit event modal
  // const openEditModal = (event) => {
  //   setEventForm(event);
  //   setShowEditModal(true);
  // };

  // Function to close edit event modal
  const closeEditModal = () => {
    setShowEditModal(false);
  };

  // // Function to open delete event modal
  // const openDeleteModal = (event) => {
  //   setEventForm(event);
  //   setShowDeleteModal(true);
  // };

  // Function to close delete event modal
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  // Function to add a new event
  const addEvent = (event) => {
    setEvents([...events, event]);
    closeAddModal();
  };

  // Function to delete an event
  const deleteEvent = () => {
    const updatedEvents = events.filter((event) => event.id !== eventForm.id);
    setEvents(updatedEvents);
    setSelectedEvent(null);
    closeDeleteModal();
  };

  // Function to update an existing event
  const updateEvent = (updatedEvent) => {
    const updatedEvents = events.map((event) => {
      if (event.id === updatedEvent.id) {
        return updatedEvent;
      }
      return event;
    });
    setEvents(updatedEvents);
    setSelectedEvent(null);
    closeEditModal();
  };

  // Function to handle selection of an event
  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  // Function to handle date change in add/edit event form
  const handleDateChange = (event) => {
    const { value } = event.target;
    setEventForm((prevEventForm) => ({
      ...prevEventForm,
      date: value
    }));
  };

  // Function to format date as YYYY-MM-DD
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Get the first day of the current month
  const firstDayOfMonth = getFirstDayOfMonth(
    date.getFullYear(),
    date.getMonth()
  );

  // Get the number of days in the current month
  const daysInMonth = getDaysInMonth(date.getFullYear(), date.getMonth());

  // Generate an array of day numbers
  const datesInMonth = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="calendar-app">
      <div className="header">
        <h2 className="app-title">My Calendar</h2>
        <div className="actions">
          {/* <h4>{date.toDateString()}</h4> */}
          <button className="add-event-button" onClick={openAddModal}>
            Add Event
          </button>
        </div>
      </div>
      <div className="calendar-outer-container">
        <div className="calendar-container">
          <div className="month-navigation">
            <button
              className="arrow-button"
              onClick={() => handleMonthChange(-1)}
            >
              &lt;
            </button>
            <span className="month-name">
              {date.toLocaleString("default", { month: "long" })}{" "}
              {date.getFullYear()}
            </span>
            <button
              className="arrow-button"
              onClick={() => handleMonthChange(1)}
            >
              &gt;
            </button>
          </div>
          <div className="calendar">
            <div className="weekdays">
              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
            </div>
            <div className="dates">
              {[...Array(firstDayOfMonth)].map((_, index) => (
                <div key={`blank-${index}`} className="blank"></div>
              ))}
              {datesInMonth.map((day) => {
                const currentDate = new Date(
                  date.getFullYear(),
                  date.getMonth(),
                  day
                );
                const formattedDate = formatDate(currentDate);
                const eventsForDay = events.filter(
                  (event) => event.date === formattedDate
                );

                return (
                  <div key={day} className="day-container">
                    <div className="day-number">{day}</div>
                    <div className="event-container">
                      {eventsForDay.map((event) => (
                        <div
                          key={event.id}
                          className="event"
                          onClick={() => handleEventSelect(event)}
                        >
                          {event.title}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* {datesInMonth.map((day) => {
            const currentDate = new Date(
              date.getFullYear(),
              date.getMonth(),
              day
            );
            const formattedDate = formatDate(currentDate);
            const eventsForDay = events.filter(
              (event) => event.date === formattedDate
            );

            return (
              <div key={day} className="day-container">
                <div className="day-number">{day}</div>
                <div className="event-container">
                  {eventsForDay.map((event) => (
                    <div
                      key={event.id}
                      className="event"
                      onClick={() => handleEventSelect(event)}
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })} */}
          </div>
        </div>
      </div>
      <AddEventModal
        showAddModal={showAddModal}
        eventForm={eventForm}
        addEvent={addEvent}
        handleDateChange={handleDateChange}
        closeAddModal={closeAddModal}
      />
      <DeleteEventModal
        showDeleteModal={showDeleteModal}
        deleteEvent={deleteEvent}
        closeDeleteModal={closeDeleteModal}
      />
      <EditEventModal
        showEditModal={showEditModal}
        eventForm={eventForm}
        updateEvent={updateEvent}
        handleDateChange={handleDateChange}
        closeEditModal={closeEditModal}
      />
      <ViewEventModal
        selectedEvent={selectedEvent}
        setEventForm={setEventForm}
        setShowEditModal={setShowEditModal}
        setShowDeleteModal={setShowDeleteModal}
      />
    </div>
  );
}
