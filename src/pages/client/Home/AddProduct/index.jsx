import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { postOneProductRedux } from "../../../../redux/actions/productAction";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./index.scss";
import { useEffect, useState } from "react";
import { getCategoriesRedux } from "../../../../redux/actions/categoryAction";
const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.products);
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const onSubmit = (data) => {
    dispatch(postOneProductRedux(data))
      .unwrap()
      .then(() => {
        setOpenDialog(true);
        reset();
      })
      .catch(() => {});
  };

  const categories = useSelector((state) => state.categories?.categories);

  useEffect(() => {
    dispatch(getCategoriesRedux());
  }, [dispatch]);

  return (
    <div className="AddProduct">
      <h1>Add Product</h1>
      <div className="CustomContainer">
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            label="Title"
            {...register("title", { required: "Title is required" })}
            error={!!errors.title}
            helperText={errors.title?.message}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            type="number"
            {...register("price", { required: "Price is required" })}
            error={!!errors.price}
            helperText={errors.price?.message}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Image URL"
            {...register("image", { required: "Image URL is required" })}
            error={!!errors.image}
            helperText={errors.image?.message}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Category</InputLabel>
            <Select
              {...register("category_id", { required: "Category is required" })}
              error={!!errors.category_id}
              defaultValue=""
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
            {errors.category_id && (
              <Box color="error.main">{errors.category_id.message}</Box>
            )}
          </FormControl>
          <TextField
            label="Discount (%)"
            type="number"
            {...register("discount")}
            error={!!errors.discount}
            helperText={errors.discount?.message}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Status"
            {...register("status")}
            error={!!errors.status}
            helperText={errors.status?.message}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Rating"
            type="number"
            inputProps={{ min: 1, max: 5 }}
            {...register("rating", { required: "Rating is required" })}
            error={!!errors.rating}
            helperText={errors.rating?.message}
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            fullWidth
          >
            {loading ? <CircularProgress size={24} /> : "Submit"}
          </Button>
          {error && <Box color="error.main">{error}</Box>}

          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>
              Product Added
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleCloseDialog}
                aria-label="close"
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Box>Product has been added successfully!</Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </div>
    </div>
  );
};

export default AddProduct;
