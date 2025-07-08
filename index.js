import { get } from './utils/fetch.js';

export function createBonesClient({ apiUrl, apiKey }) {
  if (!apiUrl || !apiKey) {
    throw new Error('Bones API URL and API Key are required');
  }

  const baseParams = { api_key: apiKey };

  return {
    async fetchEntries(params = {}) {
      return get(`${apiUrl}/entries`, { ...baseParams, ...params });
    },
    async fetchCategories(params = {}) {
      return get(`${apiUrl}/categories`, { ...baseParams, ...params });
    },
    async fetchNav(params = {}) {
      return get(`${apiUrl}/structure`, { ...baseParams, ...params });
    },
    async fetchVars(params = {}) {
      return get(`${apiUrl}/variables`, { ...baseParams, ...params });
    }
  };
}
