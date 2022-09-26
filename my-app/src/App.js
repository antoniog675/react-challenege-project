import css from './App.module.css';
import ContentHooks from './components/ContentHooks';

function App() {
  return (
    <div className={css.App}>
      {/* <SearchBar /> */}
      {/* <UseEffectCounterContainer /> */}
      <ContentHooks />
    </div>
  );
}

export default App;