import css from './App.module.css';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import NestingComponents from './components/NestingComponents';

function App() {
  return (
    <div className={css.App}>
      <MethodsAsPropsParent />
    </div>
  );
}

export default App;