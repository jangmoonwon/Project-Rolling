/**
 * 
 * @param {*} messageId: 메시지의 id값
 * @returns: 삭제 성공여부
 * 
 */

export async function deleteMessage(messageId) {
  const response = await fetch(
    `https://rolling-api.vercel.app/5-8/messages/${messageId}/`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error("Error deleting message");
  }
  return response.status; // 204 for success
}
