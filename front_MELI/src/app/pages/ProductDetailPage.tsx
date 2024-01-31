import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductStore } from "../hooks/useProductStore";
import {
  ProductDetail,
  Breadcrumb,
  ConditionalRender,
  Loader,
} from "../components";
import styles from "../styles/productDetailPage.module.css";
import { NotFoundPage } from ".";

type RouteParams = {
  id: string;
};

export const ProductDetailPage = () => {
  const { id } = useParams<RouteParams>();
  const navigate = useNavigate();

  const {
    productDetail,
    categories,
    getProductById,
    isLoadingProducts,
    error,
  } = useProductStore();

  useEffect(() => {
    if (id) {
      getProductById(id);
    } else {
      navigate("/", { replace: true });
    }
  }, [id]);

  if (error) {
    return <NotFoundPage />;
  }

  const { title, price, picture, condition, free_shipping, description } = productDetail;

  return (
    <div className={styles["pdp-container"]}>
      <div className={styles["pdp-layout"]}>
        <ConditionalRender condition={!isLoadingProducts} Else={<Loader />}>
          <Breadcrumb categories={categories} />
          <ProductDetail
            title={title}
            price={price}
            picture={picture}
            condition={condition}
            free_shipping={free_shipping}
            description={description}
          />
        </ConditionalRender>
      </div>
    </div>
  );
};
