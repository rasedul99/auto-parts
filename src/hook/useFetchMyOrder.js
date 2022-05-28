import { useEffect, useState } from "react";

const useFetchMyOrder = (user) => {
  const email = user?.email;
  console.log(email);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://radiant-fjord-31208.herokuapp.com/orders/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [email]);
  return [orders, setOrders];
};

export default useFetchMyOrder;
