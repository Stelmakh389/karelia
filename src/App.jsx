import React from 'react';
import { Toaster } from 'sonner';
import 'sonner';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Home />
      <Toaster richColors position="top-right" />
    </>
  );
}
