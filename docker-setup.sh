#!/bin/bash

/docker-base-setup.sh

if [ ! -z "$SERVER_NAME" ]; then
  sed -i "s|www.eea.europa.eu|$SERVER_NAME|g" /usr/local/apache2/conf/extra/vh-wwwplone.conf
  sed -i "s|www.eea.europa.eu|$SERVER_NAME|g" /usr/local/apache2/conf/httpd.conf

  SERVER_ALIAS=`echo $SERVER_NAME | sed 's/www.//g'`
  sed -i "s|ServerAlias eea.europa.eu|ServerAlias $SERVER_ALIAS|g" /usr/local/apache2/conf/extra/vh-wwwplone.conf
fi

#
# Fix permissions
#
touch /var/local/www-logs/eea/https_plone4_access_log
chmod +x /var/eea-buildout-plone4/etc/scripts/apache_syslog
chown -R www-data:www-data /usr/local/apache2/conf/extra/
chown -R www-data:www-data /var/eea-buildout-plone4/etc/
chown -R www-data:www-data /var/local/www-logs/eea/
chown -R www-data:www-data /var/www/html/
