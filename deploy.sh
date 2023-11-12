#!/bin/bash

if [ "$1" == "up" ]; then
	docker-compose up --force-recreate --build --scale frontend=3 --scale backend=3 -d
elif [ "$1" == "down" ]; then
	docker-compose down
elif [ "$1" = "test" ]; then
	docker-compose up --force-recreate --build --scale frontend=3 --scale backend=3
else
	echo "Please provide argument"
fi