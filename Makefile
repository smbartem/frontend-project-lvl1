install: install-deps

run: brain-games
	node bin/brain-games.js

run: brain-even
	node bin/brain-even.js

run: lint
	npx eslint .

publish:
	npm publish --dry-run