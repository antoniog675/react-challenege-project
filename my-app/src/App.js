import css from './App.module.css';
import ContentAPI from './components/ContentAPI';
import HTTPHooks from './components/HTTPHooks';
import PostItemAPI from './components/PostItemAPI';

function App() {
  return (
    <div className={css.App}>
      <ContentAPI />
    </div>
  );
}

export default App;