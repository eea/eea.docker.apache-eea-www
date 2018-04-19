#!/bin/bash

# Server name
if [ ! -z "$SERVER_NAME" ]; then
  echo "Updating ServerName to $SERVER_NAME"
  sed -i "s|www.eea.europa.eu|$SERVER_NAME|g" /usr/local/apache2/conf/extra/vh-wwwplone.conf
  sed -i "s|www.eea.europa.eu|$SERVER_NAME|g" /usr/local/apache2/conf/httpd.conf
  sed -i "s|www.eea.europa.eu|$SERVER_NAME|g" /var/eea-buildout-plone4/etc/apache/vh-www-https.conf

  SERVER_ALIAS=`echo $SERVER_NAME | sed 's/www.//g'`
  echo "Updating ServerAlias to $SERVER_ALIAS"
  sed -i "s|ServerAlias eea.europa.eu|ServerAlias $SERVER_ALIAS|g" /usr/local/apache2/conf/extra/vh-wwwplone.conf
  sed -i "s|ServerAlias eea.europa.eu|ServerAlias $SERVER_ALIAS|g" /var/eea-buildout-plone4/etc/apache/vh-www-https.conf

  if [[ $SERVER_NAME == *"dev"* ]]; then
    sed -i "s|https/|http/|g" /usr/local/apache2/conf/extra/vh-wwwplone.conf
    sed -i "s|:443|:80|g" /usr/local/apache2/conf/extra/vh-wwwplone.conf
  fi
fi

# Countries and regions
if [ ! -z "$COUNTRIES_AND_REGIONS" ]; then
  sed -i "s|192.168.2.46:55662|$COUNTRIES_AND_REGIONS|g" /var/eea-buildout-plone4/etc/apache/vh-www-common.inc
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

#
# BROTLI module
#
if [ -z "$(grep /usr/local/apache2/conf/httpd.conf -e brotli_module)" ]; then
  sed -i 's|LoadModule rewrite_module modules/mod_rewrite.so|LoadModule rewrite_module modules/mod_rewrite.so\nLoadModule brotli_module modules/mod_brotli.so|' /usr/local/apache2/conf/httpd.conf
fi

#
# TRACEVIEW modules
#
if [ ! -z "$TRACEVIEW" ]; then
    TRACEVIEW_CONFIGURED=`cat /usr/local/apache2/conf/httpd.conf | grep oboe`
    if [ -z "$TRACEVIEW_CONFIGURED" ]; then
        sed -i 's|# LoadModule foo_module modules/mod_foo.so|LoadModule oboe_module modules/mod_oboe.so\nLoadModule oboe_ps_module modules/mod_oboe_ps_ap24.so|' /usr/local/apache2/conf/httpd.conf
        echo 'IncludeOptional conf/extra/oboe*.conf' >> /usr/local/apache2/conf/httpd.conf
        /usr/sbin/traceview-config $TRACEVIEW
    fi
    /etc/init.d/tracelyzer start
fi

#
# SSL
#
if [ ! -z "$APACHE_ENABLE_SSL" ]; then
  if [ ! -e /usr/local/apache2/conf/extra/vh-www-https.conf ]; then
    cp /var/eea-buildout-plone4/etc/apache/vh-www-https.conf /usr/local/apache2/conf/extra/
  fi
fi

#
# Default APACHE_MODULES
#
if [ -z "$APACHE_MODULES" ]; then
  export APACHE_MODULES="http2_module mime_magic_module data_module unique_id_module remoteip_module negotiation_module"
fi

#
# Default APACHE_INCLUDE
#
if [ -z "$APACHE_INCLUDE" ]; then
  export APACHE_INCLUDE="conf/extra/httpd-languages.conf conf/extra/httpd-default.conf"
fi

exec /apache-entrypoint.sh "$@"
