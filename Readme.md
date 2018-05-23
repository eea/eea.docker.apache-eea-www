# Apache Docker image for EEA website

See [eea,docker.www](https://github.com/eea/eea.docker.www) for deployment instructions.

### Supported environment variables

* `SERVER_NAME` Specifies a hostname and port number (matching the Listen directive) for the server e.g.:

        SERVER_NAME=staging.eea.europa.eu

* `APACHE_MODULES` Load more apache modules, space separated e.g.:

        APACHE_MODULES=file_cache_module cache_module cache_disk_module watchdog_module

* `APACHE_INCLUDE` Include extra config files, space separated e.g.:

        APACHE_INCLUDE=conf/extra/httpd-mpm.conf conf/extra/httpd-languages.conf

* `APACHE_TIMEOUT` Timeout (default `60`) e.g.:

        APACHE_TIMEOUT=120

* `APACHE_KEEPALIVE_TIMEOUT` KeepAliveTimeout (default `5`) e.g.:

        APACHE_KEEPALIVE_TIMEOUT=8

* `APACHE_ENABLE_SSL` Also listen on port `:443`

        APACHE_ENABLE_SSL=true
