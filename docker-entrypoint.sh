#!/bin/bash
if [ -d "/var/www-static-templates/templates" ]; then
  TEMPLATES=$(find /var/www-static-templates/templates -type f)
else
  TEMPLATES=$(find /var/www-static-resources/templates -type f)
fi

# Server name
if [ ! -z "$SERVER_NAME" ]; then
  echo "Updating ServerName to $SERVER_NAME"
  sed -i "s|www.eea.europa.eu|$SERVER_NAME|g" /usr/local/apache2/conf/extra/vh-wwwplone.conf
  sed -i "s|www.eea.europa.eu|$SERVER_NAME|g" /usr/local/apache2/conf/httpd.conf
  sed -i "s|www.eea.europa.eu|$SERVER_NAME|g" /var/eea-buildout-plone4/etc/apache/vh-www-https.conf
  for TEMPLATE in $TEMPLATES; do
    sed -i "s|www.eea.europa.eu|$SERVER_NAME|g" $TEMPLATE
  done

  SERVER_ALIAS=`echo $SERVER_NAME | sed 's/www.//g'`
  echo "Updating ServerAlias to $SERVER_ALIAS"
  sed -i "s|ServerAlias eea.europa.eu|ServerAlias $SERVER_ALIAS|g" /usr/local/apache2/conf/extra/vh-wwwplone.conf
  sed -i "s|ServerAlias eea.europa.eu|ServerAlias $SERVER_ALIAS|g" /var/eea-buildout-plone4/etc/apache/vh-www-https.conf

  if [[ $SERVER_NAME == *"dev"* ]]; then
    sed -i "s|https/|http/|g" /usr/local/apache2/conf/extra/vh-wwwplone.conf
    sed -i "s|:443|:80|g" /usr/local/apache2/conf/extra/vh-wwwplone.conf
    for TEMPLATE in $TEMPLATES; do
      sed -i "s|https://$SERVER_NAME|http://$SERVER_NAME|g" $TEMPLATE
    done
  fi
fi

# Static templates
if [ ! -d "/var/www-static-resources/templates" ]; then
  mv /var/www-static-templates/templates /var/www-static-resources
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

if [ -n "$APACHE_FILE_LOGS" ] && [ "$APACHE_FILE_LOGS" == "yes" ] ; then
  APACHE_LOGROTATE_SECS=${APACHE_LOGROTATE_SECS:-3600}
  mkdir -p /var/log/httpd/
  sed -i "s#/proc/self/fd/1#\"|$/usr/local/apache2/bin/rotatelogs -p /archive_old_logs.sh /var/log/httpd/access_log.%Y-%m-%d-%H-%M $APACHE_LOGROTATE_SECS\"#" /usr/local/apache2/conf/httpd.conf
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

#
# BROTLI module
#
ldconfig
if [ -z "$(grep /usr/local/apache2/conf/httpd.conf -e brotli_module)" ]; then
  sed -i 's|LoadModule rewrite_module modules/mod_rewrite.so|LoadModule rewrite_module modules/mod_rewrite.so\nLoadModule brotli_module modules/mod_brotli.so|' /usr/local/apache2/conf/httpd.conf
fi

#
# SSL
#
if [ "$APACHE_ENABLE_SSL" == "true" ]; then
  if [ ! -e /usr/local/apache2/conf/extra/vh-www-https.conf ]; then
    cp /var/eea-buildout-plone4/etc/apache/vh-www-https.conf /usr/local/apache2/conf/extra/
  fi
fi

#
# Default APACHE_MODULES
#
if [ -z "$APACHE_MODULES" ]; then
  export APACHE_MODULES="http2_module mime_magic_module data_module unique_id_module remoteip_module negotiation_module brotli_module"
fi

#
# Default APACHE_INCLUDE
#
if [ -z "$APACHE_INCLUDE" ]; then
  export APACHE_INCLUDE="conf/extra/httpd-languages.conf conf/extra/httpd-default.conf"
fi

exec /apache-entrypoint.sh "$@"
