import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from "@/constants";

import Loader from "@/components/Loader";

const HomePage = lazy(() => import("@/pages/Home"));
const SettingsPage = lazy(() => import("@/pages/Settings"));

function Application() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
        <Route path={SETTINGS_PAGE_ROUTE} element={<SettingsPage />} />
      </Routes>
    </Suspense>
  );
}

export default Application;
