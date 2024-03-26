export async function getFolderUserData() {
  try {
    const response = await fetch(
      `https://bootcamp-api.codeit.kr/api/users/1/links`
    );
    if (response.ok) {
      const body = await response.json();
      return body;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getFolderLinkData(folderId) {
  const queryString =
    folderId === "ALL"
      ? `https://bootcamp-api.codeit.kr/api/users/1/links`
      : `https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${folderId}`;
  try {
    const response = await fetch(queryString);
    if (response.ok) {
      const body = await response.json();
      return body;
    }
  } catch (error) {
    console.error(error);
  }
}
