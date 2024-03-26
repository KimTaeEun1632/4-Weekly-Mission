import noImg from "../../assets/이미지 없을 때 배경.png";
import "./folderLink.css";

function FolderLink({ folderUserData }) {
  if (
    !folderUserData ||
    !folderUserData.data ||
    folderUserData.data.length === 0
  ) {
    return <div className="errorMassage">저장된 링크가 없습니다.</div>;
  }

  const FolderLinks = Array.isArray(folderUserData.data)
    ? folderUserData.data
    : [];
  return (
    <div>
      <ul>
        {FolderLinks.map(
          ({
            id,
            created_at,
            updated_at,
            url,
            title,
            description,
            image_source,
          }) => {
            return (
              <li key={id}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <div className="imgBox">
                    <img
                      src={image_source ? image_source : noImg}
                      alt={title || "이미지 없음"}
                    />
                  </div>
                  <div className="textBox">
                    <span>{created_at}</span>
                    <p className="description">{description}</p>
                    <p className="date">{updated_at}</p>
                  </div>
                </a>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}

export default FolderLink;
