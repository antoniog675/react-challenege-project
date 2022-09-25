import css from './App.module.css';
import SearchBar from './components/SearchBar';
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
      {/* <SearchBar /> */}
      <Content />
    </div>
  );
}

export default App;