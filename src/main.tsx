import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
  ColorModeScript
} from '@chakra-ui/react';
import { routes } from './routes.tsx';
import './index.css';
import type { ThemeConfig } from '@chakra-ui/react';

const { Button, Drawer, Heading, Input, Link, NumberInput, Table } = chakraTheme.components;

const theme = extendBaseTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true
  },
  components: {
    Button,
    Drawer,
    Heading,
    Input,
    Link,
    NumberInput,
    Table
  }
} as ThemeConfig);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode='dark' />
    <ChakraBaseProvider theme={theme}>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </ChakraBaseProvider>
  </React.StrictMode>
);
