install: install-deps

run: brain-games
	node bin/brain-games.js

run: lint
	npx eslint .

publish:
	npm publish --dry-run