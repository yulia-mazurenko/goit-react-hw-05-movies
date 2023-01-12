import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Box from '../Box';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Box>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={3000} theme="colored" />
    </Box>
  );
};
