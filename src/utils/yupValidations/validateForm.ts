import * as Yup from "yup"

export const LoginValidate = Yup.object().shape({
    username: Yup.string().trim().required('Se requiere un nombre'),
    password: Yup.string().trim().required('Se requiere un password')
})