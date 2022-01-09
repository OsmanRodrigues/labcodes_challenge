
build_frontend:
	rm -rf project/assets/bundles/ && npm run build

run_frontend:
	npm start

run_django:
	python project/manage.py runserver

run_api_test:
	python project/manage.py test inventory.tests

dev:
	make -j2 run_django run_frontend

node_setup:
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
	export NVM_DIR=$$HOME/.nvm; . ~/.nvm/nvm.sh ; nvm install --lts

rundev:
	./scripts/run_dev.sh

apitest:
	./scripts/run_api_test.sh

apptest:
	npm run test

alltest:
	make apitest apptest
