#!/bin/sh -eu
# https://blog.codecentric.de/en/2018/12/react-application-container-environment-aware-kubernetes-deployment/
if [ -z "${MEDIA_LOCATION:-}" ]; then
    MEDIA_LOCATION_JSON=undefined
else
    MEDIA_LOCATION_JSON=$(jq -n --arg media_location $MEDIA_LOCATION '$media_location')
fi
if [ -z "${IPIFY_KEY:-}" ]; then
    IPIFY_KEY_JSON=undefined
else
    IPIFY_KEY_JSON=$(jq -n --arg ipify_key $IPIFY_KEY '$ipify_key')
fi
 
cat <<EOF
window.REACT_APP_MEDIA_LOCATION=$MEDIA_LOCATION_JSON;
window.REACT_APP_IPIFY_KEY=$IPIFY_KEY_JSON;
EOF