FROM eeacms/apache:2.4-2.1
MAINTAINER "European Environment Agency (EEA): IDM2 A-Team" <eea-edw-a-team-alerts@googlegroups.com>

COPY src/* /tmp/

RUN runDeps="curl libsys-syslog-perl apt-transport-https ca-certificates" \
 && apt-get update \
 && apt-get install -y --no-install-recommends $runDeps \
 && mkdir -p /usr/local/apache2/conf/extra/ /var/eea-buildout-plone4/etc/apache /var/eea-buildout-plone4/etc/scripts /var/local/www-logs/eea /var/www/html /var/www-static-resources/ \
 && sed -i 's|ServerName eeacms-apache.docker.com|ServerName www.eea.europa.eu|' /usr/local/apache2/conf/httpd.conf \
 && sed -i 's|you@example.com|helpdesk@eea.europa.eu|' /usr/local/apache2/conf/httpd.conf \
 && mv /tmp/apache_syslog /var/eea-buildout-plone4/etc/scripts/ \
 && mv /tmp/vh-www-common.inc /var/eea-buildout-plone4/etc/apache/ \
 && mv /tmp/vh-www-https.conf /var/eea-buildout-plone4/etc/apache/ \
 && mv /tmp/vh-wwwplone.conf /usr/local/apache2/conf/extra/ \
 && mv /docker-entrypoint.sh /apache-entrypoint.sh \
 && /tmp/traceview-setup.sh \
 && rm -vf /tmp/traceview-setup.sh

COPY docker-entrypoint.sh /
