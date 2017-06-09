#!/bin/bash

echo "================================================================================================================="
echo "Installing AppNeta TraceView...                                                                                  "
echo "================================================================================================================="

echo "tracelyzer.access_key=$TRACEVIEW" > /etc/tracelytics.conf
echo "deb http://apt.tv.solarwinds.com jessie main" > /etc/apt/sources.list.d/appneta.list
curl -k https://apt.tv.solarwinds.com/appneta-apt-key.pub | apt-key add -

apt-get update
apt-get install -y --no-install-recommends liboboe0 liboboe-dev tracelyzer libapache2-mod-oboe

echo "================================================================================================================="
echo "Adding oboe modules to apache...                                                                                 "
echo "================================================================================================================="

cp -v /usr/lib/apache2/modules/mod_oboe* /usr/local/apache2/modules/
cp -v /etc/apache2/mods-available/oboe*.conf /usr/local/apache2/conf/extra/

echo "================================================================================================================="
echo "Cleanup...                                                                                                       "
echo "================================================================================================================="

apt-get purge -y --auto-remove libapache2-mod-oboe apache2
apt-get clean
rm -rf /var/lib/apt/lists/*

# Will configure TraceView in container
exit 0
