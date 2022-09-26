import css from './App.module.css';
// import SearchBar from './components/SearchBar';
// import Content from './components/Content';
// import HooksCounter from './components/HooksCounter';
import ControlledForm from './components/ControlledForm';
import ControlledFormsHooks from './components/ControlledFormsHooks';

function App() {
  return (
    <div className={css.App}>
      {/* <SearchBar /> */}
      {/* <Content /> */}
      {/* <HooksCounter/> */}
      <ControlledFormsHooks/>
    </div>
  );
}

export default App;