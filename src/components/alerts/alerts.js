import Swal from "sweetalert2";
import { addProductToCart } from "../../slices/cartSlice";

export const alertMsg = (content) => {
  const { dispatch, title, info } = content;
  Swal.fire({
    position: "top",
    icon: "success",
    title: title,
    showConfirmButton: false,
    timer: 1500,
  });
  !dispatch || !info ? null : dispatch(addProductToCart(info));
};

export const confirmAlert = (content) => {
  const { dispatch, id, title, button, titleSuccess, action } = content;
  Swal.fire({
    title: title,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: button,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: titleSuccess,
        icon: "success",
      });
      !id ? dispatch(action()) : dispatch(action(id));
    }
  });
};
