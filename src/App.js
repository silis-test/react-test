import './App.css';
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/react-test'>Home</Link>
        <Link to='/new'>New</Link>
        <Routes>
          <Route path='/react-test' element={<div>Homepage</div>} />
          <Route path='/new' element={<div>New</div>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
