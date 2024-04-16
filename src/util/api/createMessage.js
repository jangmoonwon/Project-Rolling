/**
 * 
 * @param {*} recipientId: 경로로 받아온 id값
 * @param {*} sender: 이름
 * @param {*} relationship: 관계
 * @param {*} content: 메시지 contents
 * @param {*} font: 폰트
 * @param {*} profileImageURL: 프로필 이미지 
 * @returns: 생성한 메시지.
 */

export async function createMessage(
	recipientId,
	sender,
	relationship,
	content,
	font,
	profileImageURL
  ) {
	const response = await fetch(
	  `https://rolling-api.vercel.app/5-8/recipients/${recipientId}/messages/`,
	  {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		},
		body: JSON.stringify({
		  sender,
		  relationship,
		  content,
		  font,
		  profileImageURL,
		}),
	  }
	);
	if (!response.ok) {
	  throw new Error("Error creating message");
	}
	return await response.json();
  }