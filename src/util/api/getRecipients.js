export async function getRecipients(limit, offset, sort) {
  const url = new URL("https://rolling-api.vercel.app/5-8/recipients/");
  if (limit) url.searchParams.append("limit", limit);
  if (offset) url.searchParams.append("offset", offset);
  if (sort) url.searchParams.append("sort", sort);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error fetching recipients");
  }
  return await response.json();
}
