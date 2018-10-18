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

* `APACHE_UNDER_PROXY` To enable proxy log format ( X-Forwarded-For instead of IP)

        APACHE_UNDER_PROXY=any

* `APACHE_FILE_LOGS` Save logs in  `/var/log/httpd/access_log.%Y-%m-%d-%H-%M` instead of stdout  

        APACHE_FILE_LOGS=yes

* `APACHE_LOGROTATE_SECS` Only if `APACHE_FILE_LOGS` is `yes`, will rotate the log on this interval in seconds

        APACHE_LOGROTATE_SECS=3600
        
* `APACHE_LOGS_DAYS` Only if `APACHE_FILE_LOGS` is `yes`, will delete the logs older that this number in days

        APACHE_LOGS_DAYS=14

* `APACHE_NFS_LOCATION` Only if `APACHE_FILE_LOGS` is `yes`, will move all non-current logs to this location, in the directory `hostname`

        APACHE_NFS_LOCATION=/apache-nfs-logs
