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