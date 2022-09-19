import css from './App.module.css';
import ConditionalRenderingFunctionality from './components/ConditionalRenderingFunctionality';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';

function App() {
  return (
    <div className={css.App}>
    <ConditionalRenderingFunctionality connected={true}/>
    <ConditionalRenderingClass />
    </div>
  );
}

export default App;