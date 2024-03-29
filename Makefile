install:
		npm ci

brain-games:
		node bin/brain-games.js

publish:
		npm publish --dry-run

lint:
		npx eslint .

lint-fix:
		npx eslint . --fix

brain-even:
		node bin/brain-even.js

brain-calc:
		node src/games/calc.js

brain-gcd:
		node src/games/gcd.js

brain-progression:
		node src/games/progression.js

brain-prime:
		node src/games/prime.js