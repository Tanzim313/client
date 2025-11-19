import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import App from './App'; 
import Root from './Routes/Root';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import AuthProvider from './Authprovider/AuthProvider';
import Home from './component/home';
import ServiceApp from './component/ServiceApp';
import AllService from './component/AllService';
import AddService from './component/AddService/AddService';
import ServiceDetails from './component/ServiceDetails';
import PrivateRoutes from './Routes/PrivateRoutes';
import MyService from './component/MyService';
import MyBooking from './component/MyBooking';
import UpdateService from './component/Updateservice';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,

    children:[
      {
        path:"/",
        element:<Home/>,

        loader: ()=> fetch('http://localhost:3000/models')

      },
      {
        path:'login',
        element: <Login/>
      },
      {

        path:'register',
        element: <Register/>

      },{
        path: "service",
        element: <AllService/>,

        loader: ()=> fetch('http://localhost:3000/models')

    },{
      path:"addService",
      element: 
      <PrivateRoutes>
          <AddService/>
      </PrivateRoutes>
      
    },{
      path:"/service-details/:id",
      element:(
        <PrivateRoutes>
                <ServiceDetails/>
        </PrivateRoutes>   
      ),

      loader: ({params}) => fetch(`http://localhost:3000/models/${params.id}`)
    },{
      path:'/myservice',
      element:
      <PrivateRoutes>
              <MyService/>
      </PrivateRoutes>
    },{
      path: "/my-booking",
      element: 
      <PrivateRoutes>
            <MyBooking/>
      </PrivateRoutes>
    },{
      path:"/update-service/:id",
      element:
          <PrivateRoutes>
                    <UpdateService/>
          </PrivateRoutes>,

       loader: ({params}) => fetch(`http://localhost:3000/models/${params.id}`)
    }

    ]


  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
              <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
