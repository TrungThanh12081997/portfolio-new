/* eslint-disable no-useless-escape */
import * as yup from "yup";

export const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
const regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const regexEmailBefore = /^([a-zA-Z0-9]{1,64}@)/;
const regexEmailAfter = /@([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]){1,255}$/;

export const formRegisterSchema = yup.object({
  fullName: yup.string().required("Vui lòng nhập họ tên"),
  content: yup.string(),
  message: yup.string().required("Vui lòng nhập lý do"),
  phone: yup.string().required("Vui lòng nhập số điện thoại").matches(regexPhone, "Số điện thoại không hợp lệ"),
  email: yup.string().required("Vui lòng nhập email")
    .matches(regexEmail, "Email không hợp lệ")
    .matches(regexEmailBefore, "Trước @ dài không quá 64 kí tự")
    .matches(regexEmailAfter, "Sau @ không quá 255 kí tự"),
  // gender: yup.string().required("Vui lòng chọn giới tính"),
});
export const schema = yup.object().shape({
  name: yup.string().required(" Username is required"),
  title: yup.string().required("Title is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup
    .string()
    .min(10, "Description must be at least 10 characters")
    .required("Description is required"),
});
// export const formRegisterSchema = yup.object().shape({
//   invitation_code: yup.string().required("Mã thư mời là bắt buộc !"),
// });

export default undefined;
