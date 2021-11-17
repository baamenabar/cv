#!/usr/bin/env bash

# USAGE:
# ./publish "version-tag"
hugo
VERSION=$1
echo "req version ${VERSION}"
if [[ -z "${VERSION}" ]]; then
  echo "Error: Second param (version tag) must not be empty." 1>&2
  exit 1
fi
cd public && git add -A && git commit -m "Publish version ${version}" && git push origin gh-pages && cd ..
