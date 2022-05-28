import { useEffect, useState } from "react";

const useFetchProfile = (user, showModal) => {
  const email = user?.email;
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch(`https://radiant-fjord-31208.herokuapp.com/user/profile/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      });
  }, [email, showModal]);
  return [profile, setProfile];
};

export default useFetchProfile;
