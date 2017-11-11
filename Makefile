# Makefile

VENV="virtualenv"
VENV_DIR="venv"

# NODE_PKGMGR="yarn --modules-folder"
NODE_PKGMGR="npm --prefix"
NODE_DIR="src/static"

SERVER_DIR="src/server"
SERVER="server.py"

setup: venv deps

venv:
	test -d venv || ($(VENV) $(VENV_DIR) || true)
	. $(VENV_DIR)/bin/activate

deps:
	pip install -Ur requirements.txt
	$(NODE_PKGMGR) $(NODE_DIR) install

server:
	python $(SERVER_DIR)$(SERVER)

watch:
	$(NODE_PKGMGR) run watch

fclean:
	rm -rf $(VENV_DIR) $(NODE_DIR)/node_modules
