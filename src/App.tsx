import SignUp from './signupForm';
import DataGridDemo from './dataGrid';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <SignUp /> },
    { path: 'dashboard', element: <DataGridDemo /> },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
