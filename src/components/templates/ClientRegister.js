import { Formik, Form } from "formik";

import { useHistory } from "react-router-dom";

import schema from "../../schemas/schema";
import InputMask from "react-input-mask";
import { useCart } from "../../hooks/useCart";
import { toast } from "react-toastify";
import { Box, styled } from "@mui/system";
import {
    Button,
    FormHelperText,
    Grid,
    Input,
    InputLabel,
    Typography,
} from "@mui/material";

const ErrorMessage = styled(FormHelperText)(({ theme }) => ({
    color: "#f44336",
}));

export const ClientRegister = () => {
    const { setCart } = useCart();
    const history = useHistory();

    function onSubmit(values) {
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
            <Grid item>
                <Typography variant="h5">Informações do Cliente</Typography>

                <Box pt={3}>
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
                        validationSchema={schema}
                    >
                        {({ values, handleChange, errors, setFieldValue }) => (
                            <Form>
                                <Grid container direction="column" spacing={3}>
                                    <Grid item>
                                        <InputLabel htmlFor="name">
                                            Nome:
                                        </InputLabel>
                                        <Input
                                            name="name"
                                            type="text"
                                            value={values.name}
                                            onChange={(e) => {
                                                const value =
                                                    e.target.value.replace(
                                                        /[1-9]/g,
                                                        ""
                                                    );

                                                setFieldValue("name", value);
                                            }}
                                        />
                                        {errors.name && (
                                            <ErrorMessage>
                                                {errors.name}
                                            </ErrorMessage>
                                        )}
                                    </Grid>

                                    <Grid item>
                                        <InputLabel htmlFor="email">
                                            Email:
                                        </InputLabel>
                                        <Input
                                            name="email"
                                            type="email"
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && (
                                            <ErrorMessage>
                                                {errors.name}
                                            </ErrorMessage>
                                        )}
                                    </Grid>

                                    <Grid item>
                                        <InputLabel htmlFor="cpf">
                                            CPF:
                                        </InputLabel>
                                        <InputMask
                                            type="text"
                                            name="cpf"
                                            value={values.cpf}
                                            onChange={(e) => {
                                                const value = e.target.value
                                                    .replace(/-/g, "")
                                                    .replace(/_/g, "")
                                                    .replace(/\./g, "");

                                                setFieldValue("cpf", value);
                                            }}
                                            mask="999.999.999-99"
                                        >
                                            {(input) => <Input {...input} />}
                                        </InputMask>

                                        {errors.cpf && (
                                            <ErrorMessage>
                                                {errors.name}
                                            </ErrorMessage>
                                        )}
                                    </Grid>
                                    <Grid item>
                                        <InputLabel htmlFor="endereco">
                                            Endereço:
                                        </InputLabel>
                                        <Input
                                            name="endereco"
                                            type="text"
                                            value={values.endereco}
                                            onChange={handleChange}
                                        />
                                        {errors.endereco && (
                                            <ErrorMessage>
                                                {errors.name}
                                            </ErrorMessage>
                                        )}
                                    </Grid>
                                    <Grid item>
                                        <InputLabel htmlFor="cep">
                                            CEP:
                                        </InputLabel>
                                        <InputMask
                                            type="text"
                                            name="cep"
                                            value={values.cep}
                                            onChange={(e) => {
                                                const value = e.target.value
                                                    .replace(/-/g, "")
                                                    .replace(/_/g, "");

                                                setFieldValue("cep", value);
                                            }}
                                            mask="99999-999"
                                        >
                                            {(input) => <Input {...input} />}
                                        </InputMask>
                                        {errors.cep && (
                                            <ErrorMessage>
                                                {errors.name}
                                            </ErrorMessage>
                                        )}
                                    </Grid>
                                    <Grid item>
                                        <InputLabel htmlFor="rua">
                                            Rua:
                                        </InputLabel>
                                        <Input
                                            type="text"
                                            name="rua"
                                            value={values.rua}
                                            onChange={handleChange}
                                        />
                                        {errors.rua && (
                                            <ErrorMessage>
                                                {errors.name}
                                            </ErrorMessage>
                                        )}
                                    </Grid>
                                    <Grid item>
                                        <InputLabel htmlFor="bairro">
                                            Bairro:
                                        </InputLabel>
                                        <Input
                                            type="text"
                                            name="bairro"
                                            value={values.bairro}
                                            onChange={handleChange}
                                        />
                                        {errors.bairro && (
                                            <ErrorMessage>
                                                {errors.name}
                                            </ErrorMessage>
                                        )}
                                    </Grid>
                                    <Grid item>
                                        <InputLabel htmlFor="numero">
                                            Numero:
                                        </InputLabel>
                                        <Input
                                            type="number"
                                            name="numero"
                                            value={values.numero}
                                            onChange={handleChange}
                                        />
                                        {errors.numero && (
                                            <ErrorMessage>
                                                {errors.name}
                                            </ErrorMessage>
                                        )}
                                    </Grid>
                                    <Button
                                        style={{ marginBottom: 40 }}
                                        type="submit"
                                        variant="outlined"
                                        color="primary"
                                    >
                                        Finalizar Pedido
                                    </Button>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Grid>
        </>
    );
};
