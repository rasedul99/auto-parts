import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import useFetchMyOrder from "../../hook/useFetchMyOrder";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useFetchMyOrder(user);
  console.log(orders);
  const deleteHandler = (id) => {
    console.log(id);
    const proceed = window.confirm("are you sure want to delete");
    console.log(proceed);
    if (proceed) {
      const url = `https://radiant-fjord-31208.herokuapp.com/orders/${id}`;
      console.log(url);
      fetch(url, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast("Deleted succesfuly");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  return (
    <div>
      <div class="overflow-x-auto">
        <ToastContainer />
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => {
              return (
                <tr>
                  <th>{order._id}</th>
                  <td>{order.partsname}</td>
                  <td>{order.quantity}</td>
                  <td>${order.price}</td>
                  <td>
                    <input
                      type="button"
                      value="Payment"
                      className="btn btn-primary mx-1"
                    />
                    <input
                      onClick={() => {
                        deleteHandler(order._id);
                      }}
                      type="button"
                      value="Delete"
                      className="btn btn-danger mx-1"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
