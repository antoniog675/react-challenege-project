import css from './App.module.css';
// import SearchBar from './components/SearchBar';
// import Content from './components/Content';
// import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';

function App() {
  return (
    <div className={css.App}>
      {/* <SearchBar /> */}
      {/* <Content /> */}
      {/* <UseStateWithArrays /> */}
      <UseStateWithObjects />
    </div>
  );
}

export default App;