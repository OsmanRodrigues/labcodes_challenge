#!/bin/bash
source `which virtualenvwrapper.sh`
mkvirtualenv labcodes_challenge -p /usr/bin/python3
make run_api_test

