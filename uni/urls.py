from django.conf.urls.defaults import *

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
from django.conf import settings
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'uni.views.home', name='home'),
    # url(r'^uni/', include('uni.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'uniapp.views.index'),
        url(r'^(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.STATIC}),
        url(r'^services/$', 'movies.views.service'),

)
