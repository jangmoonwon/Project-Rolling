/**
 * 
 * @param {*} recipientId 해당 id의 recipeint의 리액션 목록 가져옴
 * @param {*} limit 몇 개 가져올지 (이거 아마 필수 아닐 거임)
 * @param {*} offset 몇 번째 부터 가져올 지 (이거 아마 필수 아닐 거임)
 * @returns 
 */

export async function getReactions(recipientId, limit, offset) {
	const url = new URL(
	  `https://rolling-api.vercel.app/5-8/recipients/${recipientId}/reactions/`
	);
	if (limit) url.searchParams.append("limit", limit);
	if (offset) url.searchParams.append("offset", offset);
  
	const response = await fetch(url);
	if (!response.ok) {
	  throw new Error("Error fetching reactions");
	}
	return await response.json();
  }