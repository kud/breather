install:
	@ echo "> Install npm dependencies"
	@ npm install --quiet
	@ echo "\n> Install ruby dependencies"
	@ gem install terminal-notifier
	@ echo "\n> Copy configuration"
	@ cp config/settings.json.dist config/settings.json
	@ cp tasks/pre.js.dist tasks/pre.js
	@ cp tasks/post.js.dist tasks/post.js
	@ echo "\n> Done!"

start:
	@ node index.js
