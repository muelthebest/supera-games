import { Code } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const ErrorPage = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Box>
                <Typography sx={{ color: "HighlightText" }}>
                    <b>
                        Parece que você não inicializou o backend do sistema :(
                    </b>
                </Typography>
                <p>
                    <b>Mas tudo bem, porque aqui te darei um passo a passo</b>
                </p>

                <p>Mais informações no readme do projeto</p>
                <p>
                    <a
                        href="https://github.com/muelthebest/supera-microservices#readme"
                        rel="noreferrer"
                        target="_blank"
                    >
                        {" "}
                        https://github.com/muelthebest/supera-microservices#readme{" "}
                    </a>
                </p>
                <div>
                    <h5>Dependencias</h5>

                    <ul>
                        <li>Git</li>
                        <li>Maven</li>
                        <li>java-jdk-11</li>
                        <li>Yarn</li>
                    </ul>
                </div>

                <div>
                    <h5>Instalação do backend</h5>
                    <code>
                        git clone
                        https://github.com/muelthebest/supera-microservices
                    </code>

                    <br />

                    <code>cd supera-microservices</code>

                    <br />

                    <code>mvn install</code>

                    <br />

                    <code>yarn install</code>

                    <br />

                    <br />

                    <p>
                        <b>
                            Para inicializar todo o projeto rapidamente e já
                            poder acessar o e-commerce, execute o seguinte
                            script:
                        </b>
                    </p>

                    <code>yarn spring-run:all</code>

                    <br />

                    <p>Depois é so reiniciar a página e pronto! :)</p>
                </div>
            </Box>
        </Box>
    );
};
