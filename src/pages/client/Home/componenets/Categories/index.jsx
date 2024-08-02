import { useEffect, useState } from "react";
// import CustomCard from "../../../../../components/Card";
import { getCategories } from "../../../../../api/categories";
import CardImage from "../../../../../components/Card-Image";

import "./index.scss";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching customer info:", error);
      }
    };

    fetchData();
  }, []);

  console.log(categories);

  return (
    <div className="Categories">
      <div className="CustomnContainer">
        {categories?.map((category) => (
          <>
            <CardImage title={category.name} imgSrc={category.image} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Categories;
