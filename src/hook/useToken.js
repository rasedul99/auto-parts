import { useEffect } from "react";

const useToken = (user) => {
  useEffect(() => {
    const email = user?.user?.email;
    console.log(email);
    const currentUser = { email: email };
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          
        });
    }
  }, [user]);
};

export default useToken;
