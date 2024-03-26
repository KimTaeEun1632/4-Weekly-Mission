import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./NavFolder.css";

function NavFolder() {
  const [folderProfileData, setFolderProfileData] = useState(null);

  const fetchFolderUserData = async () => {
    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/users/1"
      );
      if (response.ok) {
        const FolderUserProfileData = await response.json();
        setFolderProfileData(FolderUserProfileData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFolderUserData();
  }, []);

  return (
    <nav>
      <div className="gnb">
        <a href="/">
          <img src={logo} alt="홈으로이동" />
        </a>
        {folderProfileData ? (
          <a href="#" className="loginProfile">
            <img
              className="loginProfileImg"
              src={folderProfileData.data[0].image_source}
              alt="프로필 이미지"
            />
            {folderProfileData.data[0].email}
          </a>
        ) : (
          <a className="cta-login" href="signin.html">
            로그인
          </a>
        )}
      </div>
    </nav>
  );
}

export default NavFolder;
