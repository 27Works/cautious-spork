const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6ImppbSIsImFjY2Vzc1R5cGUiOiJhZG1pbiIsImlhdCI6MTY1MjA4ODA3OCwiZXhwIjozNTEyMDg4MDc4fQ.gwexr1yGgTvDMjUGPQ2-dZxXoU7XhcSbgVw1NcU8Tb0";

const baseUrl = "https://noble-rot-api.27.works/1.0";

export const getPosts = async () => {
  const response = await fetch(`${baseUrl}/posts`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};
