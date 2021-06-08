import { useEffect, useState } from "react";

import Profile from "./Profile.js";
import "../styles/profiles.css";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/roxcity/300697399059a6f54a983d1e9af5f459/raw/d81a2c42f8de6ca439f3cd3a5b0e809fd34f31bc/users.json"
    )
      .then((res) => res.json())
      .then((profiles) => {
        setProfiles(profiles);
      });
  }, []);

  return (
    <div className="container__profiles">
      {profiles.map((profile, index) => (
        <Profile key={index} profile={profile} />
      ))}
    </div>
  );
};

export default Profiles;
