#!/bin/bash

set -e

if [ -z "$TRACEVIEW" ]; then
  echo "Empty TRACEVIEW key. Nothing to do."
  exit 0
fi

if [ -e /etc/tracelytics.conf ]; then
  echo "AppNeta TraceView already installed. Nothing to do."
  exit 0
fi

echo "================================================================================================================="
echo "Installing AppNeta TraceView...                                                                                  "
echo "================================================================================================================="


echo "tracelyzer.access_key=$TRACEVIEW" > /etc/tracelytics.conf
echo "deb https://apt.tv.solarwinds.com/$TRACEVIEW jessie main" > /etc/apt/sources.list.d/appneta.list
curl https://apt.tv.solarwinds.com/appneta-apt-key.pub | apt-key add -

apt-get update
apt-get install -y --no-install-recommends liboboe0 liboboe-dev tracelyzer

echo "================================================================================================================="
echo "Installing Apache module: libapache2-mod-oboe                                                                    "
echo "================================================================================================================="

apt-get install -y --no-install-recommends libapache2-mod-oboe

echo "================================================================================================================="
echo "Adding oboe modules to apache...                                                                                 "
echo "================================================================================================================="

cp -v /usr/lib/apache2/modules/mod_oboe* /usr/local/apache2/modules/
cp -v /etc/apache2/mods-available/oboe*.conf /usr/local/apache2/conf/extra/

sed -i 's|# LoadModule foo_module modules/mod_foo.so|LoadModule oboe_module modules/mod_oboe.so\nLoadModule oboe_ps_module modules/mod_oboe_ps_ap24.so|' /usr/local/apache2/conf/httpd.conf
echo 'IncludeOptional conf/extra/oboe*.conf' >> /usr/local/apache2/conf/httpd.conf

echo "================================================================================================================="
echo "Cleanup...                                                                                                       "
echo "================================================================================================================="
apt-get purge -y --auto-remove libapache2-mod-oboe apache2
rm -rf /var/lib/apt/lists/*
rm -rf /var/cache/*
rm -rf /tmp/*
