import linkImg from "../../assets/link.png";
import "./AddLink.css";

function AddLink() {
  return (
    <form className="addLinkBar">
      <label className="addLinkLabel">
        <img src={linkImg} alt="링크검색입력폼 이미지" />
      </label>
      <input
        className="addLinkInput"
        type="text"
        name="AddLink"
        placeholder="링크를 추가해 보세요."
      />
      <button className="addLinkButton">추가하기</button>
    </form>
  );
}

export default AddLink;
