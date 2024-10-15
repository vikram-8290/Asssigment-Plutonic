import React from 'react';
import './App.css';
import Body from './components/Body';
import Product from './components/Product';
import Cart from './components/Cart';
import Layout from './components/Layout'; // Layout component
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // Use Layout for all routes
    children: [
      {
        path: "/",
        element: <Body />,  // Home/Body component
      },
      {
        path: "/product/:id",
        element: <Product />,  // Product detail page
      },
      {
        path: "/cart",
        element: <Cart />,  // Cart page
      },
    ],
  },
]);

export default App;
