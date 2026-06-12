.PHONY: build dev check

build:
	@echo "Building the project..."
	@npm run build
check: 
	@echo "Running checks..."
	@npm run lint
	@npm run test
dev: 
	@echo "Starting development server..."
	@npm run dev
