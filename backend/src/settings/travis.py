import os
from .base import *

SECRET_KEY = '71f!(pb*@k)7s7%0_lt(h^qs_*2tkmp_%$&)&9ihd60e8rm#i9'

if 'TRAVIS' in os.environ:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': 'travisci',
            'USER': 'postgres',
            'PASSWORD': '',
            'HOST': 'localhost',
            'PORT': '',
        }
    }
