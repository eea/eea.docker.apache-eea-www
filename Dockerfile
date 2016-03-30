FROM eeacms/apache:2.4s
MAINTAINER "European Environment Agency (EEA): IDM2 A-Team" <eea-edw-a-team-alerts@googlegroups.com>

RUN apt-get update \
 && apt-get install -y --no-install-recommends curl \
 && rm -rf /var/lib/apt/lists/* \
 && mkdir -p /usr/local/apache2/conf/extra/  \
 && curl -o /usr/local/apache2/conf/extra/vh-www-common.inc -SL https://svn.eionet.europa.eu/repositories/Zope/trunk/www.eea.europa.eu/trunk/etc/apache/vh-www-common.inc \
 && curl -o /usr/local/apache2/conf/extra/vh-www-staging.conf -SL https://svn.eionet.europa.eu/repositories/Zope/trunk/www.eea.europa.eu/trunk/etc/apache/vh-www-staging.conf
