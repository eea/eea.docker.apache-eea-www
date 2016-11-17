#!/bin/bash

/docker-base-setup.sh

if [ ! -z "$SERVER_NAME" ]; then
  echo "Updating ServerName to $SERVER_NAME"
  sed -i "s|www.eea.europa.eu|$SERVER_NAME|g" /usr/local/apache2/conf/extra/vh-wwwplone.conf
  sed -i "s|www.eea.europa.eu|$SERVER_NAME|g" /usr/local/apache2/conf/httpd.conf

  SERVER_ALIAS=`echo $SERVER_NAME | sed 's/www.//g'`
  echo "Updating ServerAlias to $SERVER_ALIAS"
  sed -i "s|ServerAlias eea.europa.eu|ServerAlias $SERVER_ALIAS|g" /usr/local/apache2/conf/extra/vh-wwwplone.conf
fi

# Timeout
if [ ! -z "$APACHE_TIMEOUT" ]; then
  echo "Updating Timeout to $APACHE_TIMEOUT"
  sed -i "s|^Timeout [0-9]*|Timeout $APACHE_TIMEOUT|" /usr/local/apache2/conf/extra/httpd-default.conf
fi

# KeepAliveTimeout
if [ ! -z "$APACHE_KEEPALIVE_TIMEOUT" ]; then
  echo "Updating KeepAliveTimeout to $APACHE_KEEPALIVE_TIMEOUT"
  sed -i "s|^KeepAliveTimeout [0-9]*|KeepAliveTimeout $APACHE_KEEPALIVE_TIMEOUT|" /usr/local/apache2/conf/extra/httpd-default.conf
fi

# Default charset
DEFAULT_CHARSET=`cat /usr/local/apache2/conf/extra/httpd-languages.conf | grep AddDefaultCharset`
if [ -z "$DEFAULT_CHARSET" ]; then
  echo "Adding DefaultCharset to utf-8"
  echo "AddDefaultCharset utf-8" >> /usr/local/apache2/conf/extra/httpd-languages.conf
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
