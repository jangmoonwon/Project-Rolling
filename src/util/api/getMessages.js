/**
 * 
 * @param {*} recipientId Recipeint의 id, 이 객체의 메시지 목록을 가져오는 거
 * @param {*} limit 메시지 몇 개 가져올 지(이거 아마 필수 아닐 거임)
 * @param {*} offset 몇 번 메시지 부터 가져올 지(이거 아마 필수 아닐 거임)
 * @returns 가져온 메시지 목록 
 */

export async function getMessages(recipientId, limit, offset) {
	const url = new URL(
	  `https://rolling-api.vercel.app/5-8/recipients/${recipientId}/messages/`
	);
	if (limit) url.searchParams.append("limit", limit);
	if (offset) url.searchParams.append("offset", offset);
  
	const response = await fetch(url);
	if (!response.ok) {
	  throw new Error("Error fetching messages");
	}
	return await response.json();
  }