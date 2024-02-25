import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductStore } from "../hooks/useProductStore";
import { ProductDetail, Breadcrumb, ConditionalRender, Loader, } from "../components";
  import { NotFoundPage } from ".";
import styles from "../styles/productDetailPage.module.css";

type RouteParams = {
  id: string;
};

export const ProductDetailPage = () => {
  const { id } = useParams<RouteParams>();
  const navigate = useNavigate();

  const { productDetail, categories, getProductById, isLoadingProducts, error, } = useProductStore();

  useEffect(() => {
    if (id) {
      getProductById(id);
    } else {
      navigate("/", { replace: true });
    }
  }, [id]);

  if (error) return <NotFoundPage />;

  return (
    <div className={styles["pdp-container"]}>
      <div className={styles["pdp-layout"]}>
        <ConditionalRender condition={!isLoadingProducts} Else={<Loader />}>
          <Breadcrumb categories={categories} />
          <ProductDetail product={productDetail} />
        </ConditionalRender>
      </div>
    </div>
  );
};
