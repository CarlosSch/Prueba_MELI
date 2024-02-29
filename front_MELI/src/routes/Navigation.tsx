import { Suspense, lazy } from "react";
import { Loader, Header } from "../app/components";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

const HomePage = lazy(() => import("../app/pages/HomePage"));
const SearchPage = lazy(() => import("../app/pages/SearchPage"));
const ProductDetailPage = lazy(() => import("../app/pages/ProductDetailPage"));
const NotFoundPage = lazy(() => import("../app/pages/NotFoundPage"));

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loader />}>
        <main role="main">
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<HomePage />} />
              <Route path="items" element={<SearchPage />} />
              <Route path="items/:id" element={<ProductDetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </main>
      </Suspense>
    </BrowserRouter>
  );
};
