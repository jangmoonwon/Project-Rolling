export async function deleteRecipient(recipientId) {
  const response = await fetch(
    `https://rolling-api.vercel.app/5-8/recipients/${recipientId}/`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error("Error deleting recipient");
  }
  return response.status; // 204 for success
}