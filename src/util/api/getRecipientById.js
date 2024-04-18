/**
 * 
 * @param {*} recipientId 가져올 Recipient의 id값, 해당 Recipient를 가져옴 -> 아마 이거 그 경로에 넣어주거나 경로에서 Recipeint정보 불러올 시 사용
 * @returns Recipient정보
 */

export async function getRecipientById(recipientId) {
  const response = await fetch(
    `https://rolling-api.vercel.app/5-8/recipients/${recipientId}/`
  );
  if (!response.ok) {
    throw new Error("Error fetching recipient details");
  }
  return await response.json();
}
