export async function getRecipientById(recipientId) {
  const response = await fetch(
    `https://rolling-api.vercel.app/5-8/recipients/${recipientId}/`
  );
  if (!response.ok) {
    throw new Error("Error fetching recipient details");
  }
  return await response.json();
}
