import Image from "./Image.js";

import "../styles/profile.css";

const Profile = ({ profile }) => {
  return (
    <div className="container__profile">
      <div className="container__image">
        <Image imgArr={profile.photos} />
      </div>
      <div className="container__textArea">
        <h3>
          {profile.firstName} {profile.lastName}
        </h3>
      </div>
    </div>
  );
};

export default Profile;
