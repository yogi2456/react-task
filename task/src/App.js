import './App.css';
import { Routes, Route} from 'react-router-dom'
import Todos from './Components/Todos';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/todos' element={<Todos/>} />
      </Routes>
    </div>
  );
}

export default App;
