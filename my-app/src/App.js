import css from './App.module.css';
import ContentAPIHooks from './components/ContentAPIHooks';
import HTTPHooks from './components/HTTPHooks';
import PostItemAPI from './components/PostItemAPI';

function App() {
  return (
    <div className={css.App}>
      <ContentAPIHooks />
    </div>
  );
}

export default App;