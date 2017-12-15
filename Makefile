# ./Makefile
VENV=virtualenv
VENV_DIR=src/venv

# NODE_PKGMGR=yarn --modules-folder
NODE_PKGMGR=npm --prefix
NODE_DIR=src/static

SERVER_DIR=src/server/
SERVER=server.py

REQ_DIR=src/
REQ=requirements.txt
REQ_DEV=requirements_dev.txt

all: venv deps

venv:
	test -d venv || ($(VENV) $(VENV_DIR) || true)

deps:
	# for Google App Engine
	$(VENV_DIR)/bin/pip install -Ur $(REQ_DIR)$(REQ) -t $(REQ_DIR)lib
	# for local development environment
	$(VENV_DIR)/bin/pip install -Ur $(REQ_DIR)$(REQ_DEV)
	$(NODE_PKGMGR) $(NODE_DIR) install

server:
	$(VENV_DIR)/bin/python $(SERVER_DIR)$(SERVER)

watch:
	$(NODE_PKGMGR) $(NODE_DIR) run watch

fclean:
	rm -rf $(VENV_DIR) $(NODE_DIR)/node_modules $(REQ_DIR)lib

re: fclean all
