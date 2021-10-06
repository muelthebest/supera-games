import {
    Table,
    TableCell,
    TableFooter,
    TableRow,
    Typography,
} from "@mui/material";
import { MoneyFormatted } from "../atoms/MoneyFormatted";

export const TableCheckoutProducts = (props) => {
    return (
        <>
            <Table stickyHeader>
                <TableFooter>
                    <TableRow>
                        <TableCell align="right">
                            <Typography style={{ fontSize: 20 }}>
                                TOTAL:
                            </Typography>
                            <MoneyFormatted price={props.price} />
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </>
    );
};
