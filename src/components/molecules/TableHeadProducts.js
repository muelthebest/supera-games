import { TableCell, TableHead, TableRow } from "@mui/material";

export const TableHeadProducts = () => {
    return (
        <>
            <TableHead>
                <TableRow>
                    <TableCell align="center">Imagem</TableCell>
                    <TableCell align="center">Produto</TableCell>
                    <TableCell align="center">Quantidade</TableCell>
                    <TableCell align="center">SubTotal</TableCell>
                </TableRow>
            </TableHead>
        </>
    );
};
