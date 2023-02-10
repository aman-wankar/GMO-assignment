import SignUp from './signupForm';
import DataGridDemo from './dataGrid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<SignUp />}></Route>
          <Route path='/dashboard' element={<DataGridDemo />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
