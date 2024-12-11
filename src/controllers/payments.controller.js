import { data } from "../database/data.js";

const paymentsControllers = () => {
  const getPayments = () => {
    let payments = [];

    data.payments.map((item) => {
      console.log(item);
      const { id, clientName, referenceNumber, amount, date } = item;
      payments = payments.concat({
        id,
        clientName,
        referenceNumber,
        amount,
        date,
      });
    });

    console.log(payments);
    return payments;
  };

  const getid = (refNum) => {
    let payment = {};
    let paymentFound = false;

    data.payments.forEach((p) => {
      if (p.id === refNum) {
        const { id, clientName, referenceNumber, amount, date } = p;
        payment = { id, clientName, referenceNumber, amount, date };
        paymentFound = true;
      }
    });
    if (paymentFound) return { payment: payment, message: "Payment Found" };
    else return { payment: null, message: "Payment not Found" };
  };

  const postPayments = (payment) => {
    let paymentFound = false;

    data.payments.map((item) => {
      if (item.id == payment.id) paymentFound = true;
    });

    if (!paymentFound) {
      data.payments.push(payment);
      return { message: "Payment has been aggregated sucessfully" };
    } else {
      return { message: "Payment already exist" };
    }
  };
  return { getPayments, postPayments, getid };
};

export default paymentsControllers;
