# Makefile

VENV="virtualenv"
VENV_DIR="venv"

# NODE_PKGMGR=yarn --modules-folder
NODE_PKGMGR=npm --prefix
NODE_DIR="src/static"

SERVER_DIR="src/server/"
SERVER="server.py"

all: venv deps

venv:
	test -d venv || ($(VENV) $(VENV_DIR) || true)

deps:
	$(VENV_DIR)/bin/pip install -Ur requirements.txt
	$(NODE_PKGMGR) $(NODE_DIR) install

server:
	$(VENV_DIR)/bin/python $(SERVER_DIR)$(SERVER)

watch:
	$(NODE_PKGMGR) $(NODE_DIR) run watch

fclean:
	rm -rf $(VENV_DIR) $(NODE_DIR)/node_modules

re: fclean all
