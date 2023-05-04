brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
install:
	npm ci
publish: 
	npm publish --dry-run
lint:
	npx eslint