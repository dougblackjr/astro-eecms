async function get(url, params = {}) {
  try {
    // Convert params object to query string
    const query = new URLSearchParams(params).toString();
    const fullUrl = query ? `${url}?${query}` : url;

    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Fetch error for ${url}:`, error.message);
    return null;
  }
}

module.exports = {
  get,
};
