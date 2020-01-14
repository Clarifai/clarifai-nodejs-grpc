#!/bin/bash

IFS=''
n=1
while read line
do
  if [[ $line == *"additional_bindings "* ]]; then
    echo "$line" | sed -e 's/additional_bindings/additional_bindings'$n'/'
    n=$((++n))
  else
    echo "$line"
  fi
done < ../proto/clarifai/api/service.proto > ../proto/clarifai/api/service_processed.proto
