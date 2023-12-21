import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import productsFromFile from "./../data/shipments.json";
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const HomePage = () => {

    const [shipments, setShipments] = useState(productsFromFile);
    const navigate = useNavigate();

    const findIndex = (id, list) => {
        return list.findIndex(shipment => shipment.orderNo === id);
    }

    const deleteShipment = (id) => {
        const index = findIndex(id, shipments);
        shipments.splice(index, 1);
        setShipments(shipments.slice());
    }

    const updatedList = shipments.map(shipment => ({
        id: shipment.orderNo,
        col1: shipment.orderNo,
        col2: shipment.date,
        col3: shipment.customer,
        col4: shipment.trackingNo,
        col5: shipment.status,
        col6: shipment.consignee,
        col7: "",
      }));
    
      const handleNavigate = (id) => {
        navigate("/shipment/"+id)
      };

    const columns = [
        { field: 'col1', headerName: 'Order NO', width: 150 },
        { field: 'col2', headerName: 'Delivery date', width: 150 },
        { field: 'col3', headerName: 'Customer', width: 150 },
        { field: 'col4', headerName: 'Tracking NO', width: 150 },
        { field: 'col5', headerName: 'Status', width: 150 },
        { field: 'col6', headerName: 'Consignee', width: 150 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 300,
            renderCell: (params) => (
                <>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleNavigate(params.row.id)}
                    >
                        Details
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => deleteShipment(params.row.id)}
                    >
                        Delete
                    </Button>
                </>
              
            ),
          },
        ];

    return (
        <Container maxWidth="lg">
            <DataGrid
                rows={updatedList}
                columns={columns}
                initialState={{
                    pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                />
        </Container>
    )
}

export default HomePage