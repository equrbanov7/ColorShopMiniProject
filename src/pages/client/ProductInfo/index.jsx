import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import Rating from "@mui/material/Rating";
import "./index.scss";
import { getOneProductRedux } from "../../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductInfo = () => {
  const { pathname } = useLocation();
  const productId = pathname ? +pathname.split("/").pop() : null;

  console.log(productId);
  const dispatch = useDispatch();
  const oneProduct = useSelector((state) => state.products?.oneProduct);
  useEffect(() => {
    dispatch(getOneProductRedux(productId));
  }, [dispatch, productId]);

  console.log(oneProduct);

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
            Price: ${oneProduct.price - oneProduct.discount}
          </Typography>
          <Rating name="read-only" value={oneProduct.rating || 0} readOnly />
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductInfo;
