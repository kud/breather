install:
	@ npm install --quiet
	@ for file in $$(ls *.dist); \
	do \
	cp $$file $${file%.*} ; \
	done;

start:
	@ node index.js
