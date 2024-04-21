import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTracking from "../components/Order/OrderTracking.jsx";
import { getOrderById } from "../state/Order/Action.js";
import { updatePayment } from "../state/Payment/Action";
import AddressCard from "../components/AddressCard/AddressCard.jsx";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { orderId } = useParams();
  console.log("orderId", orderId);

  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    setPaymentId(urlParam.get("razorpay_payment_id"));
    setPaymentId(urlParam.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    if(paymentId){
      const data = { orderId, paymentId };
    dispatch(getOrderById(orderId));
    dispatch(updatePayment(data));
    }
    
  }, [orderId, paymentId]);
  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulatation Your Order Get Placed
        </Alert>
      </div>
      <OrderTracking activeStep={1} />

      <Grid container className="space-y-5 py-5 pt-20">
        {order.order?.orderItem.map((item) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5"
            sx={{ alignItem: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex item-center">
                <img
                  className="w-[20rem] h-[20rem] object-cover object-top"
                  src={item.product.imageUrl}
                  alt
                ></img>
                <div className="ml-5 space-y-2">
                  <p className="text-lg font-bold opacity-70">{item.product.title}</p>
                  {/* <div className="opacity-50 text-xs font-semibold space-x-5">
                    {" "}
                    <span>Color: {item.color}</span>
                    <span>Size: {item.size}</span>
                  </div> */}
                  <p>{item.product.brand}</p>
                  <p className="font-bold text-green-500">₹ {item.price}</p>
                  <p>{item.product.description}</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <p className="text-lg font-bold text-green-500 ">Tourist Details</p>
              <AddressCard address={order.order?.shippingAddress} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PaymentSuccess;
