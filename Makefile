install:
	@ npm install --quiet
	@ cp config/settings.json.dist config/settings.json
	@ cp tasks/pre.js.dist tasks/pre.js
	@ cp tasks/post.js.dist tasks/post.js

start:
	@ node index.js
