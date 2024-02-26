import { useEffect, useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useProductStore } from "../hooks";
import { useNavigate } from "react-router-dom";
import {
  ProductCard,
  MapRender,
  Loader,
  ConditionalRender,
  Breadcrumb,
  HelmetData,
  NotFoundSearch,
} from "../components";
import style from "../styles/searchPage.module.css";

export const SearchPage = () => {
  const { products, categories, isLoadingProducts, error, searchProducts } = useProductStore();
  const { search } = useLocation();
  const navigate = useNavigate();

  const query = useMemo(
    () => new URLSearchParams(search).get("search"),
    [search]
  );

  const memoSearchProducts = useCallback(
    (query: string | null) => {
      if (query) {
        searchProducts(query);
      } else {
        navigate("/", { replace: true });
      }
    },
    [searchProducts, navigate]
  );

  const meta = {
    title: `${query} | Mercado Libre`,
    description: `Envíos Gratis en el día ✓ ¡Comprá ${query} en cuotas sin interés! Conocé nuestras increíbles ofertas y promociones en millones de productos.`,
  };

  useEffect(() => {
    memoSearchProducts(query);
  }, [query]);

  return (
    <div className={style["search-container"]}>
      <section className={style["search-results"]}>
        <ConditionalRender condition={!isLoadingProducts} Else={<Loader />}>
          <NotFoundSearch message={error}>
            <HelmetData title={meta.title} description={meta.description} />
            <Breadcrumb categories={categories} />
            <ul className={style["search-layout-stack"]}>
              <MapRender
                of={products}
                render={(product) => (
                  <li className={style["search-item"]}>
                    <ProductCard product={product} />
                  </li>
                )}
              />
            </ul>
          </NotFoundSearch>
        </ConditionalRender>
      </section>
    </div>
  );
};
