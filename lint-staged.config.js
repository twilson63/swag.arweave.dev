export default {
  '**/*.{ts,js,mjs,cjs,md,json,yml}': ['prettier --write --plugin-search-dir=.'],
  'package.json': ['sort-package-json', 'prettier --write']
};
