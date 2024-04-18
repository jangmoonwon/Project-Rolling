/**
 * 
 * @returns 배경 이미지
 */

export async function getBackgroundImages() {
  const url = "https://rolling-api.vercel.app/background-images/";
  try {
    const response = await fetch(url, {
      headers: {
        accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data; // 이 함수는 호출된 곳에 JSON 데이터를 반환합니다.
  } catch (error) {
    console.error("Fetch error:", error.message);
    return { error: error.message };
  }
}
