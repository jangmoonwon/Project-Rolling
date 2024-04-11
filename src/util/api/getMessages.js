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