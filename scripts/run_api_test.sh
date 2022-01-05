#!/bin/bash
source `which virtualenvwrapper.sh`
mkvirtualenv labcodes_challenge -p /usr/bin/python3
pip install -r dev-requirements.txt
make run_api_test

