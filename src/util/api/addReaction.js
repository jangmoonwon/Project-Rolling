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