import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { NavigationProvider } from './context/navigation';

const el: any = document.getElementById('root');
const root = createRoot(el);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
