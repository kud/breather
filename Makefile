install:
	@ npm install --quiet
	@ cp -i settings.json.dist settings.json

start:
	@ node index.js
