FROM eeacms/apache:2.4s
MAINTAINER "European Environment Agency (EEA): IDM2 A-Team" <eea-edw-a-team-alerts@googlegroups.com>

RUN apt-get update \
 && apt-get install -y --no-install-recommends curl libsys-syslog-perl \
 && rm -rf /var/lib/apt/lists/* \
 && mkdir -p /usr/local/apache2/conf/extra/ /var/eea-buildout-plone4/etc/apache /var/eea-buildout-plone4/etc/scripts /var/local/www-logs/eea /var/www/html \
 && curl -o /var/eea-buildout-plone4/etc/scripts/apache_syslog -SL http://svn.eionet.europa.eu/repositories/Zope/trunk/www.eea.europa.eu/trunk/etc/scripts/apache_syslog \
 && curl -o /var/eea-buildout-plone4/etc/apache/vh-www-common.inc -SL https://svn.eionet.europa.eu/repositories/Zope/trunk/www.eea.europa.eu/trunk/etc/apache/vh-www-common.inc \
 && curl -o /usr/local/apache2/conf/extra/vh-wwwplone.conf -SL https://svn.eionet.europa.eu/repositories/Zope/trunk/www.eea.europa.eu/trunk/etc/apache/vh-wwwplone.conf \
 && mv /docker-setup.sh /docker-base-setup.sh

COPY docker-setup.sh /docker-setup.sh
