import Foot from "../../components/common/foot/Foot";
import SearchInput from "../../components/searchbar/SearchInput";
import AddLink from "./AddLink";
import NavFolder from "./NavFolder";
import FolderLink from "./folderLink";
import { getFolderLinkData, getFolderUserData } from "../../apis/apiFolder";
import { useState, useEffect } from "react";

function Folder() {
  const [folderUserData, setFolderUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLoad = async () => {
    try {
      const response = await getFolderUserData();
      setFolderUserData(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleAllClick = async () => {
    try {
      setLoading(true);
      const response = await getFolderUserData();
      setFolderUserData(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleFavoritesClick = async () => {
    try {
      setLoading(true);
      const response = await getFolderLinkData();
      setFolderUserData(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <NavFolder />
      <AddLink />
      <div className="container">
        <SearchInput />
        <div>
          <button onClick={handleAllClick}>전체</button>
          <button onClick={handleFavoritesClick}>⭐️ 즐겨찾기</button>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <FolderLink folderUserData={folderUserData} />
        )}
      </div>
      <Foot />
    </div>
  );
}

export default Folder;
