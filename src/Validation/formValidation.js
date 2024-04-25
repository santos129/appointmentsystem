import * as yup from "yup";

export const clientSchema = yup.object().shape({
    owner : yup.string().required(),
    pet : yup.string().required(),
    date : yup.string().required(),
    time : yup.string().required(),
    notes : yup.string(),
})