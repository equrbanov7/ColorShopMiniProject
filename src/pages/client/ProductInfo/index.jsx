import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import { getOneProductRedux } from "../../../redux/actions/productAction";
import { patchUserRedux } from "../../../redux/actions/userActions";

import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  addToBasket,
} from "../../../redux/reducers/userReducer";
import "./index.scss";
import { getOneUserRedux } from "../../../redux/actions/userActions";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ProductInfo = () => {
  const { pathname } = useLocation();
  const productId = pathname ? +pathname.split("/").pop() : null;

  const dispatch = useDispatch();
  const oneProduct = useSelector((state) => state.products?.oneProduct);
  const loginedUserData = useSelector((state) => state.users);
  const userBasket = useSelector((state) => state.users.basket);
 // const usersLoading = useSelector((state) => state.users.loading);

  const userProduct = loginedUserData?.user?.basket?.find(
    (item) => item.productId == productId
  );

  useEffect(() => {
    dispatch(
      patchUserRedux({
        userId: loginedUserData.user.id,
        data: loginedUserData.user,
      })
    );
    // if (!usersLoading) {
    // }
  }, [userBasket]);

  console.log(userProduct, "proo");
  const count = userProduct ? userProduct.count : 1;

  // const updatedUser = { ...loginedUserData?.user };
  console.log(loginedUserData);
  //dispatch(patchUserRedux({ userId: loginedUserData?.user?.id, data: updatedUser }));

  useEffect(() => {
    dispatch(getOneUserRedux(1));
    dispatch(getOneProductRedux(productId));
  }, [productId]);

  const handleIncrement = () => {
    dispatch(increment({ productId }));
    console.log("loginedUserData", loginedUserData);

    // dispatch(
    //   patchUserRedux({
    //     userId: loginedUserData.user.id,
    //     data: loginedUserData.user,
    //   })
    // );
  };

  const handleDecrement = () => {
    console.log("ddd");
    dispatch(decrement({ productId }));
    // dispatch(
    //   patchUserRedux({
    //     userId: loginedUserData.user.id,
    //     data: loginedUserData.user,
    //   })
    // );
  };

  const handleAddToBasket = () => {
    dispatch(addToBasket({ productId, count }));
    // dispatch(
    //   patchUserRedux({
    //     userId: loginedUserData.user.id,
    //     data: loginedUserData.user,
    //   })
    // );
  };

  console.log(loginedUserData);

  if (!oneProduct) return <div>No product found</div>;

  return (
    <Box
      className="ProductInfo"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={4}
    >
      <Card sx={{ display: "flex", maxWidth: 800 }}>
        <CardMedia
          component="img"
          sx={{ width: 400 }}
          image={oneProduct?.image || "/default-image.png"}
          alt={oneProduct.title}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography component="div" variant="h5">
            {oneProduct.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {oneProduct?.description || "No description available"}
          </Typography>
          <Typography variant="h6">
            Price: ${oneProduct.price * count - oneProduct.discount}
          </Typography>
          <Rating name="read-only" value={oneProduct.rating || 0} readOnly />
          <Box display="flex" alignItems="center">
            <IconButton onClick={handleDecrement}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="body1">{count}</Typography>
            <IconButton onClick={handleIncrement}>
              <AddIcon />
            </IconButton>
          </Box>
          <Button variant="contained" onClick={handleAddToBasket}>
            Add to Basket
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductInfo;
