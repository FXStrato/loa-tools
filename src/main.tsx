import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme } from '@chakra-ui/react';
import { routes } from './routes.tsx';
import './index.css';

const { Button, Input, Drawer, Link } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
    Input,
    Drawer,
    Link
  }
});

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraBaseProvider resetCSS theme={theme}>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </ChakraBaseProvider>
  </React.StrictMode>
);
