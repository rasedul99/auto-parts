import { useEffect, useState } from "react";

const useFetchProfile = (user, showModal) => {
  const email = user?.email;
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/user/profile/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      });
  }, [email, showModal]);
  return [profile, setProfile];
};

export default useFetchProfile;
