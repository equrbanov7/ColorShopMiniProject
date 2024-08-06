import { useEffect } from "react";
import CardImage from "../../../../../components/Card-Image";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesRedux } from "../../../../../redux/actions/categoryAction";

import "./index.scss";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories?.categories);

  useEffect(() => {
    dispatch(getCategoriesRedux());
  }, [dispatch]);

  return (
    <div className="Categories">
      <div className="CustomnContainer">
        {categories?.map((category,index) => (
          <>
            <CardImage key={index} title={category.name} imgSrc={category.image} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Categories;
