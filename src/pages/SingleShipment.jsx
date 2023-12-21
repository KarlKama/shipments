import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsFromFile from "./../data/shipments.json";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';



const SingleShipment = () => {
  
    const { id } = useParams();
    const [shipments, setShipments] = useState(productsFromFile);


    const findProduct = (orderNo, list) => {
        return list.find(shipment => shipment.orderNo === orderNo);
    }

    const shipment = findProduct(id, shipments);

    if (shipment === undefined) {
        return <div>Shipment not found</div>
      }

  
    return (
        <Container maxWidth="sm">
            <Box
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <h3>Shipment details</h3>
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="orderNo"
                    defaultValue={shipment.orderNo}
                />
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="Date"
                    defaultValue={shipment.date}
                />
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="Customer"
                    defaultValue={shipment.customer}
                />
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="trackingNo"
                    defaultValue={shipment.trackingNo}
                />
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="consignee"
                    defaultValue={shipment.consignee}
                />
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="status"
                    defaultValue={shipment.status}
                />            

        </Box>
    </Container>
  )
}

export default SingleShipment