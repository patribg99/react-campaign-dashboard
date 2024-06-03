import { Button } from "@mui/material";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Cliente",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "order",
      headerName: "Numero de Orden",
      flex: 1,
    },
    {
      field: "namecamp",
      headerName: "Nombre de la campaña",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Numero de Telefono",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "inversion",
      headerName: "Inversion",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.inversion}
        </Typography>
      ),
    },
    {
      field: "cost",
      headerName: "Costo",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.redAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "fee",
      headerName: "Comision",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.blueAccent[400]}>
          {params.row.fee}
        </Typography>
      ),
    },
    {
      field: "dateFrom",
      headerName: "Fecha de inicio",
      flex: 1,
    },
    {
      field: "dateTo",
      headerName: "Fecha de fin",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Campañas" subtitle="Todas las Campañas creadas"/>
      <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" sx={{mr: 1}}> 
                Crear Campaña
              </Button>
              <Button type="submit" color="secondary" variant="contained" sx={{mr: 1}} >
                Modificar Campaña
              </Button>
              <Button type="submit" color="secondary" variant="contained">
                Eliminar Campaña
              </Button>
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} 
        />
      </Box>
    </Box>
  );
};

export default Invoices;
