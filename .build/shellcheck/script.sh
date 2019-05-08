#!/bin/sh
set -e
files=$(rg '^\#!.*/bin/(ba)?sh' . --files-with-matches --hidden --glob '!.git/**')
# shellcheck disable=SC2086
shellcheck $files
