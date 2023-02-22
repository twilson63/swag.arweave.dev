export default {
  "**/*.{ts,js,mjs,cjs}": ["eslint", "prettier --write"],
  "**/*.{md,json,yml}": ["prettier --write"],
  "*.{svelte}": [
    // TODO: hook svelte-check into checking only svelte files
    // "svelte-check --tsconfig ./tsconfig.json",
    "eslint",
    "prettier --write --plugin-search-dir=."
  ],
  "package.json": ["sort-package-json", "prettier --write"],
  "README.md": ["markdown-toc-gen insert", "prettier --write"]
};
