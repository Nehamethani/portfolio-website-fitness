import MainLayout from './layouts/MainLayout';
import Hero from './Components/Hero';
import About from './Components/About';
import {BrowserRouter as Router,  Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage />} />
    </Route>  
      
    )
  );
  return <RouterProvider router={router} />;

  
}

export default App
