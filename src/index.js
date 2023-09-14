
import ReactDOM from 'react-dom/client';
import Home from './views/Home/Home';
import Gift from './views/Gift/Gift';
import Order from './views/Order/Order';
import Pay from './views/Pay/Pay';
import Store from './views/Store/Store';



import {createBrowserRouter, RouterProvider,} from "react-router-dom";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    
    {
      path: "/Order",
      element: <Order/>,
    },
    {
      path: "/Pay",
      element: <Pay/>,
    },
    {
        path:"/Store",
        element:<Store/>,
    },
    {
        path:"/Gift",
        element:<Gift/>,
    },
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <>
 <RouterProvider router={router} />
 {/* <Footer/> */}
 </>
);


