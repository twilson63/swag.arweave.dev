export default {
  '**/*.{ts,js,mjs,cjs}': ['eslint', 'prettier --write'],
  '**/*.{md,json,yml}': ['prettier --write'],
  '*.{svelte}': [
    'svelte-check --tsconfig ./tsconfig.json',
    'prettier --write --plugin-search-dir=.'
  ],
  'package.json': ['sort-package-json', 'prettier --write'],
  'README.md': ['markdown-toc-gen insert', 'prettier --write']
};
