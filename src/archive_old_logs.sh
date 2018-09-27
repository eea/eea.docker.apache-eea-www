#!/bin/bash

DAYS_TO_KEEP=${APACHE_LOGS_DAYNR:-14}

find /var/log/httpd/ -name access_log* -mtime +${DAYS_TO_KEEP} -exec rm -rf {} \;

