#!/bin/sh -eu
if [ -z "${MEDIA_LOCATION:-}" ]; then
    MEDIA_LOCATION_JSON=undefined
else
    MEDIA_LOCATION_JSON=$(jq -n --arg media_location $MEDIA_LOCATION '$media_location')
fi
 
cat <<EOF
window.REACT_APP_MEDIA_LOCATION=$MEDIA_LOCATION_JSON;
EOF