import './App.scss';
import Todos from './todos/Todos';

function App() {
  return (
    <>
      <div className="container col-5">
        <h1 className="text-center title mt-5 mb-5 text-primary">TODOS</h1>
        <Todos />
      </div>
    </>
  );
}

export default App;
