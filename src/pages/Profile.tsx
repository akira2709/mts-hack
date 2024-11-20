import {useParams} from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  return <h1>Profile Page of {username}</h1>;
};

export default Profile;