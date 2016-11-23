#!/bin/bash

TRACEVIEW_CONFIGURED=`cat /usr/local/apache2/conf/httpd.conf | grep oboe`

if [ -z "$TRACEVIEW_CONFIGURED" ]; then
    sed -i 's|# LoadModule foo_module modules/mod_foo.so|LoadModule oboe_module modules/mod_oboe.so\nLoadModule oboe_ps_module modules/mod_oboe_ps_ap24.so|' /usr/local/apache2/conf/httpd.conf
    echo 'IncludeOptional conf/extra/oboe*.conf' >> /usr/local/apache2/conf/httpd.conf
    /usr/sbin/traceview-config $TRACEVIEW
fi

exec /etc/init.d/tracelyzer start
