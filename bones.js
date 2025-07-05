const { get } = require('./utils/fetch');

const BONES_API_URL = process.env.BONES_API_URL;
const BONES_API_KEY = process.env.BONES_API_KEY;

function withAuthParams(params = {}) {
  return { ...params, api_key: BONES_API_KEY };
}

async function fetchEntries(params = {}) {
  return get(`${BONES_API_URL}/entries`, withAuthParams(params));
}

async function fetchCategories(params = {}) {
  return get(`${BONES_API_URL}/categories`, withAuthParams(params));
}

async function fetchNav(params = {}) {
  return get(`${BONES_API_URL}/structure`, withAuthParams(params));
}

module.exports = {
  fetchEntries,
  fetchCategories,
  fetchNav,
};
