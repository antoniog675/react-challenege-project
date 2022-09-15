import css from './App.module.css';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className={css.App}>
      <StatefulGreeting greeting="I'm a stateful class component" name="Antonio"/>
    </div>
  );
}

export default App;