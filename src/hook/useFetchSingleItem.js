import { useEffect, useState } from "react";

const useFetchSingleItem = (id) => {
  console.log(id);
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`https://radiant-fjord-31208.herokuapp.com/carparts/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data.result));
  }, [id]);
  return [item, setItem];
};

export default useFetchSingleItem;
