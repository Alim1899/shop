import { Outlet } from "react-router-dom";
import React from "react";

const RootLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default RootLayout;
