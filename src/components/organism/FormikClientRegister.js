import { useCart } from "../../hooks/useCart";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { FullInputFormik } from "../molecules/FullIInputFormik";
import { Grid } from "@mui/material";
import { Form, Formik } from "formik";
import { FullInputMaskFormik } from "../molecules/FullInputMaskFormik";
import { ButtonCheckOut } from "../molecules/ButtonCheckOut";

export const FormikClientRegister = (props) => {
    const { setCart } = useCart();
    const history = useHistory();

    function onSubmit() {
        setCart([]);
        localStorage.removeItem("@DevMart:cart");
        history.push("/");
        toast.success("Compra feita com sucesso, Volte Sempre!!", {
            position: toast.POSITION.TOP_CENTER,
            theme: "dark",
        });
    }

    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    cpf: "",
                    endereco: "",
                    cep: "",
                    rua: "",
                    bairro: "",
                    numero: "",
                }}
                onSubmit={onSubmit}
                validateOnMount
                validationSchema={props.schema}
            >
                {({ values, handleChange, errors, setFieldValue }) => (
                    <Form>
                        <Grid container direction="column" spacing={3}>
                            <FullInputFormik
                                label="Nome"
                                type="text"
                                values={values.name}
                                errors={errors.name}
                                onChange={(e) => {
                                    const value = e.target.value.replace(
                                        /[1-9]/g,
                                        ""
                                    );

                                    setFieldValue("name", value);
                                }}
                            />
                            <FullInputFormik
                                label="Email"
                                type="email"
                                values={values.email}
                                errors={errors.email}
                                onChange={(e) => {
                                    setFieldValue("email", e.target.value);
                                }}
                            />
                            <FullInputMaskFormik
                                label="CPF"
                                type="text"
                                value={values.cpf}
                                mask="999.999.999-99"
                                errors={errors.cpf}
                                onChange={(e) => {
                                    const value = e.target.value
                                        .replace(/-/g, "")
                                        .replace(/_/g, "")
                                        .replace(/\./g, "");

                                    setFieldValue("cpf", value);
                                }}
                            />
                            <FullInputFormik
                                label="Endereço"
                                type="text"
                                values={values.endereco}
                                errors={errors.endereco}
                                onChange={(e) => {
                                    setFieldValue("endereco", e.target.value);
                                }}
                            />
                            <FullInputMaskFormik
                                label="CEP"
                                type="text"
                                value={values.cep}
                                mask="99999-999"
                                errors={errors.cep}
                                onChange={(e) => {
                                    const value = e.target.value
                                        .replace(/-/g, "")
                                        .replace(/_/g, "")
                                        .replace(/\./g, "");

                                    setFieldValue("cep", value);
                                }}
                            />
                            <FullInputFormik
                                label="Rua"
                                type="text"
                                values={values.rua}
                                errors={errors.rua}
                                onChange={(e) => {
                                    setFieldValue("rua", e.target.value);
                                }}
                            />
                            <FullInputFormik
                                label="Bairro"
                                type="text"
                                values={values.bairro}
                                errors={errors.bairro}
                                onChange={(e) => {
                                    setFieldValue("bairro", e.target.value);
                                }}
                            />
                            <FullInputFormik
                                label="Numero"
                                type="number"
                                values={values.numero}
                                errors={errors.numero}
                                onChange={(e) => {
                                    setFieldValue("numero", e.target.value);
                                }}
                            />

                            <ButtonCheckOut>Finalizar pedido</ButtonCheckOut>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </>
    );
};
