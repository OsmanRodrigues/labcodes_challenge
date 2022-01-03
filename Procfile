web: PYTHONPATH=$PYTHONPATH:$PWD/project gunicorn project.wsgi --log-file -
release: python project/manage.py migrate --no-input
