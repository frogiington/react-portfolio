
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Pages/AboutMe.jsx'


// //Pages the router will use to show the appropriate views
import Project from './Pages/Project.jsx';
import Contact from './Pages/Contact.jsx';
import App from './App';
import Error from './Pages/Error.jsx';

// //define accessible routes, and which compnents respond to which URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Root/>,
      },
      {
        path: '/portfolio',
        element: <Project/>,
      },
      {
        path: '/Contact',
        element: <Contact/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
