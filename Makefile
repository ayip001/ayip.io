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

all: venv deps

venv:
	test -d venv || ($(VENV) $(VENV_DIR) || true)

deps:
	$(VENV_DIR)/bin/pip install -Ur $(REQ_DIR)$(REQ)
	$(NODE_PKGMGR) $(NODE_DIR) install

server:
	$(VENV_DIR)/bin/python $(SERVER_DIR)$(SERVER)

watch:
	$(NODE_PKGMGR) $(NODE_DIR) run watch

fclean:
	rm -rf $(VENV_DIR) $(NODE_DIR)/node_modules

re: fclean all
