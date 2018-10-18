#!/bin/bash

DAYS_TO_KEEP=${APACHE_LOGS_DAYNR:-14}

CURRENT_LOG=$(basename $1)

LOG_LOCATION=/var/log/httpd/

if [ -n "${APACHE_NFS_LOCATION}" ]; then
        LOG_LOCATION=${APACHE_NFS_LOCATION}/$(hostname)
        mkdir -p $LOG_LOCATION
	#move old logs to NFS volume
        find /var/log/httpd/ -name access_log* ! -name $CURRENT_LOG -exec mv {} $LOG_LOCATION \;
fi


#delete old logs
find $LOG_LOCATION -name access_log* -mtime +${DAYS_TO_KEEP} -exec rm -rf {} \;

