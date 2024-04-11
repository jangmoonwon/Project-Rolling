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