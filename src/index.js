import React, { lazy , Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Main from './components/Main';
import About from './components/About';
import ResturantCard from './components/ResturantCard';
import Cart from './components/Cart';
// import ContactUs from ;

const ContactUs = lazy(()=> import('./components/ContactUs')) 




const appRouter = createBrowserRouter([
  {path:'/',
  element: <App />,
  errorElement:<div><h1>ROUTING ERROR !!</h1></div>,
  children: [
    {
      path:"/",
      element:<Main/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"/about",
      element:<About />
    },
    {
      path:"/contact",
      element:<Suspense fallback={<h1>LOADING.....</h1>}>
      <ContactUs name='Aaush' />
    </Suspense>

    },
    {
      path:"/resturant/:resId",
      element:<ResturantCard />
    }
  ],
    }
    
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
