import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "@/routes";
import { AppLayout } from "@/layout";
import { HomeScene } from "@/scenes/home.scene";
import { BookProvider } from "@/core/providers";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <BookProvider>
        <AppLayout>
          <Routes>
            <Route path={routes.home} element={<HomeScene />}></Route>
          </Routes>
        </AppLayout>
      </BookProvider>
    </BrowserRouter>
  );
};
