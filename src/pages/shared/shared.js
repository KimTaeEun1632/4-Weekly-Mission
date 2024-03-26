import CardList from "../../components/cardlist/CardList";
import Foot from "../../components/common/foot/Foot";
import Nav from "../../components/common/nav/Nav";
import Profile from "../../components/profile/Profile";
import { getUserData } from "../../apis/apiShared";
import { useState, useEffect } from "react";
import "./shared.css";

function Shared() {
  const [userData, setUserData] = useState(null);

  const handleLoad = async () => {
    try {
      const response = await getUserData();
      setUserData(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <Nav />
      <Profile userData={userData} />
      <div className="container">
        <CardList userData={userData} />
      </div>
      <Foot />
    </div>
  );
}

export default Shared;
