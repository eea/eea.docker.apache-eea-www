
FROM eeacms/apache:2.4-3.3
LABEL maintainer="European Environment Agency (EEA): IDM2 A-Team <eea-edw-a-team-alerts@googlegroups.com>"

ENV APACHE_MODULES="http2_module mime_magic_module data_module unique_id_module remoteip_module negotiation_module brotli_module" \
    APACHE_INCLUDE="conf/extra/httpd-languages.conf conf/extra/httpd-default.conf" \
    APACHE_TIMEOUT="120" \
    APACHE_KEEPALIVE_TIMEOUT="8"


COPY src/ /tmp/

RUN runDeps="brotli curl libsys-syslog-perl apt-transport-https ca-certificates" \
 && apt-get update \
 && apt-get install -y --no-install-recommends $runDeps \
 && mkdir -p /usr/local/apache2/conf/extra/ /var/eea-buildout-plone4/etc/apache /var/eea-buildout-plone4/etc/scripts /var/local/www-logs/eea /var/www/html /var/www-static-resources/ /var/www-static-templates \
 && sed -i 's|ServerName eeacms-apache.docker.com|ServerName www.eea.europa.eu|' /usr/local/apache2/conf/httpd.conf \
 && sed -i 's|you@example.com|helpdesk@eea.europa.eu|' /usr/local/apache2/conf/httpd.conf \
 && mv /tmp/apache_syslog /var/eea-buildout-plone4/etc/scripts/ \
 && mv /tmp/vh-www-common.inc /var/eea-buildout-plone4/etc/apache/ \
 && mv /tmp/vh-www-https.conf /var/eea-buildout-plone4/etc/apache/ \
 && mv /tmp/vh-wwwplone.conf /usr/local/apache2/conf/extra/ \
 && mv /tmp/archive_old_logs.sh /archive_old_logs.sh \
 && mv /tmp/templates /var/www-static-templates/ \
 && mv /docker-entrypoint.sh /apache-entrypoint.sh



COPY docker-entrypoint.sh /
