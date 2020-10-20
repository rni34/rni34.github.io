all: deploy copy
	

deploy:
	hugo -D

copy:
	rsync -Prv public/ ../rni34.github.io/
