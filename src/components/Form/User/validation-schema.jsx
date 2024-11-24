import * as Yup from "yup";

export const validationSchema =  Yup.object({
    name: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters long"),
    role: Yup.string()
        .required("Role is required")
        .min(3, "Role must be at least 3 characters long"),
});