import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("https://radiant-fjord-31208.herokuapp.com/carparts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return [parts, setParts];
};

export default useParts;
