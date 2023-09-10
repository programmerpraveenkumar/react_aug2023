import Home from './Home';
import Login from './Login';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home2 from './Home2';

let routerPaths = createBrowserRouter([
  {"path":"/home",element:<Home/>},
  {"path":"/about",element:<About/>},
  {"path":"/contact",element:<Contact/>},
  {"path":"/home2",element:<Home2/>}
]);

function App() {
  return (
    <div>
        <RouterProvider router={routerPaths} />
    </div>
  );
}

export default App;
