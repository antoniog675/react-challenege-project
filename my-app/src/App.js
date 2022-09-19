import css from './App.module.css';
import EventsClass from './components/EventsClass';
import EventsFunctionality from './components/Events.Functionality';

function App() {
  return (
    <div className={css.App}>
      <EventsClass />
      <EventsFunctionality />
    </div>
  );
}

export default App;