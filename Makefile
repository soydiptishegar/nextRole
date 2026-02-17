.PHONY: help start-ui build lint preview install clean

help:
	@echo "Available commands:"
	@echo "  make install   - Install dependencies"
	@echo "  make start-ui  - Run development server"
	@echo "  make build     - Build for production"
	@echo "  make preview   - Preview production build"
	@echo "  make lint      - Run ESLint"
	@echo "  make clean     - Remove node_modules and dist"

install:
	npm install

start-ui:
	npm run dev

build:
	npm run build

preview:
	npm run preview

lint:
	npm run lint

clean:
	rmdir /s /q node_modules dist
