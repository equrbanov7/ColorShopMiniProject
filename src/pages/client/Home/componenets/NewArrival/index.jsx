import { useState, useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
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
 import { getProductsRedux } from "../../../../../redux/actions/productAction";
 import { getCategoriesRedux } from "../../../../../redux/actions/categoryAction";
import { getOneUserRedux } from "../../../../../redux/actions/userActions";

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
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [user, setUser] = useState(null);


  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.products?.products);
  const categories = useSelector((state) => state.categories?.categories);
  const { user: fetchedUser } = useSelector((state) => state.users);
  const basket = fetchedUser?.basket;
  
  useEffect(() => {
    dispatch(getCategoriesRedux());
    dispatch(getProductsRedux());
    dispatch(getOneUserRedux(1));
  }, [dispatch]);
  
  useEffect(() => {
    if (categoryId !== null) {
      setFilteredProducts(
        allProducts.filter(
          (product) => product.category_id === categoryId
        )
      );
    } else {
      setFilteredProducts(allProducts);
    }
  }, [categoryId, allProducts]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setCategoryId(null);
    } else {
      setCategoryId(categories[newValue - 1]?.id);
    }
  };

  const handleChangeIndex = (index) => {
    setValue(index);
    if (index === 0) {
      setCategoryId(null);
    } else {
      setCategoryId(categories[index - 1]?.id);
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
                    key={category?.id}
                    label={category?.name}
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
                {filteredProducts.map((product) => {
                  let showLeftTop = product.status === "New";
                  showLeftTop = Boolean(product.discount > 0);
                  return (
                    <CustomCard
                      key={product.id+"88"}
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt={product.title} src={product.image} />}
                      title={product.title}
                      price={product.price}
                      discount={product.discount}
                      showLeftTop={showLeftTop}
                      productId={product.id}
                      user={user}
                      setUser={setUser}
                      loginedUserData={fetchedUser}
                      basket={basket}
                    />
                  );
                })}
              </TabPanel>
              {categories.map((category, index) => (
                <TabPanel
                  key={index}
                  value={value}
                  index={index + 1}
                  dir={theme.direction}
                >
                  {filteredProducts
                    .filter((product) => product.category_id === category.id)
                    .map((product) => {
                      let showLeftTop = product.status === "New";
                      showLeftTop = Boolean(product.discount > 0);
                      return (
                        <CustomCard
                          key={product.id+2}
                          hoverable
                          style={{ width: 240 }}
                          cover={
                            <img alt={product.title} src={product.image} />
                          }
                          title={product.title}
                          price={product.price}
                          discount={product.discount}
                          showLeftTop={showLeftTop}
                          productId={product.id}
                          user={user}
                          setUser={setUser}
                          loginedUserData={fetchedUser}
                        />
                      );
                    })}
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
