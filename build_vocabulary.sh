#!/bin/bash

rm -rf _site
export JEKYLL_VERSION=pages

docker run --rm   --volume="$PWD:/srv/jekyll" \
  -it jekyll/jekyll:$JEKYLL_VERSION \
  /bin/sh -c "jekyll build  --config _config.yml #--incremental"

