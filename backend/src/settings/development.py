#
# These are settings for local development
#
from rest_framework.settings import api_settings
from .base import *

DEBUG = True
ALLOWED_HOSTS = ['localhost']

# It's okay to have secret key in plain text since it is
# different then the production environment key

SECRET_KEY = '71f!(pb*@k)7s7%0_lt(h^qs_*2tkmp_%$&)&9ihd60e8rm#i9'

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.9/howto/static-files/

STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_URL = '/static/'

# The necessary information for connecting to the
# the postgres database running on our local machine

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'djangotutorial',
        'USER': 'djangotutorial',
        'PASSWORD': 'supersecret',
        'HOST': 'localhost',
        'PORT': ''
    }
}

DEFAULT_RENDERER_CLASSES = DEFAULT_RENDERER_CLASSES + (
        'rest_framework.renderers.BrowsableAPIRenderer',
)

REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': DEFAULT_RENDERER_CLASSES
}
