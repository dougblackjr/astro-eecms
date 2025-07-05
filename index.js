const { fetchEntries, fetchCategories, fetchNav } = require('./bones');

(async () => {
  const entries = await fetchEntries();
  const categories = await fetchCategories();
  const nav = await fetchNav();

  console.log('Entries:', entries.length);
  console.log('Categories:', categories.length);
  console.log('Navigation:', nav.length);
})();
