# Astro EECMS

A simple Node.js connector to pull **entries**, **categories**, and **Structure navigation** from an [ExpressionEngine Bones](https://expressionengine.com/add-ons/bones) JSON API and use them in your Astro site.

Built for fast content sourcing, ideal for JAMstack builds powered by ExpressionEngine.

---

## 🚀 Installation

```bash
npm install astro-eecms
````

Or for local development:

```bash
npm install /path/to/your/astro-eecms
```

---

## 🔧 Setup

Create a `.env` file in your project root with:

```env
BONES_API_URL=https://your-site.com/bones/api
BONES_API_KEY=your-bones-api-key
```

---

## 📦 Usage

```js
const {
  fetchEntries,
  fetchCategories,
  fetchNav
} = require('astro-eecms');

(async () => {
  const entries = await fetchEntries({ channel: 'blog', limit: 10 });
  const categories = await fetchCategories();
  const nav = await fetchNav();

  console.log('Entries:', entries);
  console.log('Categories:', categories);
  console.log('Navigation:', nav);
})();
```

Each function accepts optional query parameters, which will be merged with the required API key. Any query string accepted by your Bones API can be passed in.

---

## ✨ API

| Function            | Description                                      |
| ------------------- | ------------------------------------------------ |
| `fetchEntries()`    | Returns entries from Bones (optionally filtered) |
| `fetchCategories()` | Returns all categories                           |
| `fetchNav()`        | Returns nav data from Structure JSON             |

Each function returns a **Promise** that resolves to the JSON data from Bones.

---

## 🛠 Example in Vue

```vue
<script>
import { fetchEntries } from 'astro-eecms';

export default {
  data() {
    return {
      posts: [],
      loading: true
    };
  },
  async mounted() {
    this.posts = await fetchEntries({ channel: 'blog' });
    this.loading = false;
  }
};
</script>
```

---

## 📝 Scripts

You can run a sync manually with:

```bash
npm run sync
```

---

## 📁 File Structure

```
astro-eecms/
├── index.js         # Entry point
├── bones.js         # Exports fetch functions
├── utils/
│   └── fetch.js     # Axios wrapper
├── .env             # API key & URL
├── README.md
├── LICENSE
└── package.json
```

---

## 📄 License

MIT License — use freely in personal and commercial projects.

---

## 👋 Credits

Made by [tripleNERDscore](https://triplenerdscore.net) — built for JAMstack sites powered by ExpressionEngine + Astro.