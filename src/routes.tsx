import App from './App';
import { MariView, EngravingsView } from './views';
import type { RouteObject } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'mari',
        element: <MariView />
      },
      {
        path: 'engravings',
        element: <EngravingsView />
      }
    ]
  }
] as RouteObject[];
