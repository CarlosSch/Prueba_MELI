import { Header } from "../app/components";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import {
  HomePage,
  SearchPage,
  ProductDetailPage,
  NotFoundPage,
} from "../app/pages";

export const Navigation = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<Outlet />}>
          <Route index element={<SearchPage />} />
          <Route path=":id" element={<ProductDetailPage />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
