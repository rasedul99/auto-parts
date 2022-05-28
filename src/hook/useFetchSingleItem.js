import { useEffect, useState } from "react";

const useFetchSingleItem = (id) => {
  console.log(id);
  const [item, setItem] = useState([]);
 
  useEffect(() => {
    fetch(`http://localhost:5000/carparts/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data.result));
  }, []);
  return [item, setItem];
};

export default useFetchSingleItem;
