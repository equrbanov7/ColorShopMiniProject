import { useState, useEffect } from "react";
import {
  getProducts,
  getProductsByCategoryId,
} from "../../../../../api/product";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomCard from "../../../../../components/Card/index";
import "./index.scss";

// Assuming you have a function to fetch categories
import { getCategories } from "../../../../../api/categories";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

const NewArrival = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [categoryId, setCategoryId] = useState(null);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    // Fetch categories and all products initially
    const fetchAllProducts = async () => {
      try {
        const response = await getProducts();
        setAllProducts(response);
        setFilteredProducts(response); // Show all products initially
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchCategories();
    fetchAllProducts();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      if (categoryId !== null) {
        try {
          const response = await getProductsByCategoryId(categoryId);
          setFilteredProducts(response);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      } else {
        setFilteredProducts(allProducts); // Show all products if no category is selected
      }
    };

    fetchProducts();
  }, [categoryId, allProducts]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setCategoryId(null); // Show all products when "All" tab is selected
    } else {
      setCategoryId(categories[newValue - 1].id); // Adjust index for categories
    }
  };

  const handleChangeIndex = (index) => {
    setValue(index);
    if (index === 0) {
      setCategoryId(null); // Show all products when "All" tab is selected
    } else {
      setCategoryId(categories[index - 1].id); // Adjust index for categories
    }
  };

  return (
    <div className="NewArrival">
      <div className="customContainer">
        <div className="NewArrivalsectionHeader">
          <h2>New Arrival</h2>
          <div className="line"></div>
        </div>
        <div className="SelectedCategoryBox">
          <Box
            sx={{
              bgcolor: "background.paper",
              width: 500,
              position: "relative",
              minHeight: 200,
            }}
          >
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="action tabs example"
              >
                <Tab label={"All"} {...a11yProps(0)} />
                {categories.map((category, index) => (
                  <Tab
                    key={category.id}
                    label={category.name}
                    {...a11yProps(index + 1)} // Adjust index for categories
                  />
                ))}
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                {filteredProducts.map((product) => (
                  <CustomCard
                    key={product.id}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt={product.title} src={product.image} />}
                    title={product.title}
                    price={`$${product.price}`}
                  />
                ))}
              </TabPanel>
              {categories.map((category, index) => (
                <TabPanel
                  key={category.id}
                  value={value}
                  index={index + 1} // Adjust index for categories
                  dir={theme.direction}
                >
                  {filteredProducts
                    .filter((product) => product.category_id === category.id)
                    .map((product) => (
                      <CustomCard
                        key={product.id}
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt={product.title} src={product.image} />}
                        title={product.title}
                        description={`$${product.price}`}
                      />
                    ))}
                </TabPanel>
              ))}
            </SwipeableViews>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
