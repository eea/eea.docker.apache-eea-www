#!/bin/bash

/docker-base-setup.sh
if [ ! -z "$SERVER_NAME" ]; then
  sed -i "s|www.staging.eea.europa.eu|$SERVER_NAME|g" /usr/local/apache2/conf/extra/vh-www-staging.conf
fi
