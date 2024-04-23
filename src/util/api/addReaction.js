

/**
 *
 * @param {*} recipientId: 해당 경로 url에서 인자로 받아온 id값
 * @param {*} emoji: 삽입할 이모지...
 * @param {*} type: 이모지 개수를 늘릴 건지 줄일 건지. ”increase” | “decrease” 중 하나의 값이어야 한다.
 * @returns
 * 
 */


export async function addReaction(recipientId, emoji, type) {
  const response = await fetch(
    `https://rolling-api.vercel.app/5-8/recipients/${recipientId}/reactions/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emoji, type }),
    }
  );
  if (!response.ok) {
    throw new Error("Error adding reaction");
  }
  return await response.json();
}
