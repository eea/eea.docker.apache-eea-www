FROM eeacms/apache:2.4-1.0
MAINTAINER "European Environment Agency (EEA): IDM2 A-Team" <eea-edw-a-team-alerts@googlegroups.com>

COPY traceview-setup.sh /

RUN apt-get update \
 && apt-get install -y --no-install-recommends curl libsys-syslog-perl apt-transport-https \
 && mkdir -p /usr/local/apache2/conf/extra/ /var/eea-buildout-plone4/etc/apache /var/eea-buildout-plone4/etc/scripts /var/local/www-logs/eea /var/www/html /var/www-static-resources/ \
 && curl -o /var/eea-buildout-plone4/etc/scripts/apache_syslog -SL http://svn.eionet.europa.eu/repositories/Zope/trunk/www.eea.europa.eu/trunk/etc/scripts/apache_syslog \
 && curl -o /var/eea-buildout-plone4/etc/apache/vh-www-common.inc -SL https://svn.eionet.europa.eu/repositories/Zope/trunk/www.eea.europa.eu/trunk/etc/apache/vh-www-common.inc \
 && curl -o /usr/local/apache2/conf/extra/vh-wwwplone.conf -SL https://svn.eionet.europa.eu/repositories/Zope/trunk/www.eea.europa.eu/trunk/etc/apache/vh-wwwplone.conf \
 && mv /docker-setup.sh /docker-base-setup.sh \
 && sed -i 's|ServerName eeacms-apache.docker.com|ServerName www.eea.europa.eu|' /usr/local/apache2/conf/httpd.conf \
 && sed -i 's|you@example.com|helpdesk@eea.europa.eu|' /usr/local/apache2/conf/httpd.conf \
 && /traceview-setup.sh \
 && rm -rf /var/lib/apt/lists/* \
 && rm -rf /var/cache/* \
 && rm -rf /tmp/*

COPY chaperone.conf /etc/chaperone.d/chaperone.conf
COPY tracelyzer.sh traceview-setup.sh docker-setup.sh /
