import { useEffect, useState } from "react";

const useFetchMyOrder = (user) => {
  const email = user?.email;
  console.log(email);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [email]);
  return [orders, setOrders];
};

export default useFetchMyOrder;
