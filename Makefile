install:
	@ npm install --quiet
	@ cp settings.json.dist settings.json
	@ cp pre.js.dist pre.js
	@ cp post.js.dist post.js

start:
	@ node index.js
