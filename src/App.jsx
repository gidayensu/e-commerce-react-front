
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './util/http.js';
import { useState, useEffect, useMemo } from 'react';
import RootLayout from './pages/RootLayout.jsx';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import CartPage from './pages/CartPage.jsx'
import AboutUs from './pages/AboutUsPage.jsx';


function App() {
  
  const [routeKey, setRouteKey] = useState(0);
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <LandingPage/>
        },
        // {
        //   path: 'product/:productId',
        //   element: <ProductPage/>
        // },
        {
          path: 'shop',
          children: [
            {
              index: true,
              element: <ShopPage/>,
            },
            
            {
              path: 'product/:productId',
              element: <ProductPage key={routeKey}/>
            },
            {
              path: 'checkout',
              element: <CheckoutPage/>
            }, 
            {
              path: 'cart',
              element: <CartPage/>
            }
          ]
        },
        {
          path: 'account',
          children: [
            {
              index: true,
              element: <LoginPage/>,
            },
            {
          path: 'login',
          element: <LoginPage/>
          }, 
          {
            path: 'signup',
            element: <SignUpPage/>
          }
        ]
        },
        {
          path: 'about-us',
          element: <AboutUs/>
        },

        {
          path: 'contact-us',
          element: <ContactUsPage/>
        }
      ]
    }
  ])
  
  

  useEffect(() => {
    // Increment route key whenever the route changes
    const unsubscribe = router.subscribe(() => {
      setRouteKey((prevKey) => prevKey + 1);
    });

    return () => {
      unsubscribe();
    };
  }, [router]);

  
  return (
    
    <QueryClientProvider client ={queryClient}>
      
    
    <RouterProvider router={router}/>
    
    </QueryClientProvider>
    
    )
      
  
}

export default App
