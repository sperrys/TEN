# settings associated with someone who is working locally and trying stuff out

from .base import *

DEBUG = True

INSTALLED_APPS += [
    'debug_toolbar',
]

MIDDLEWARE += ['debug_toolbar.middlewar.DebugToolbarMiddleware', ]

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

DEBUG_TOLLBAR_CONFIG = {
    'JQUERY_URL': '',
}
