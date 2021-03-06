"""DEMO URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path

from music import views
from music.views import hotsupplies, keywords, pricerange, suppliescmb, magicprice, memberdata, pricerecord, history, index, ajax_posting, ajax_test
from music.views import login, register, search
from django.conf.urls import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('hotsupplies/', hotsupplies),
    path('keywords/', keywords),
    path('pricerange/', pricerange),
    path('suppliescmb/', suppliescmb),
    path('magicprice/', magicprice),
    path('memberdata/', memberdata),
    path('pricerecord/', pricerecord),
    path('history/', history),
    path('index/', index),
    path('login/', login),
    path('register/', register),
    #url(r'^search/$', views.search),
    url(r'^register_register/$', views.register_register),
    url(r'^login_login/$', views.login_login),
    url(r'^logout/$', views.logout),
    path('ajax_posting/', ajax_posting, name='ajax_posting'),
    path('search/', search, name='search'),
    path('ajax_test/', ajax_test),
    url(r'^related/$', views.related),
]
