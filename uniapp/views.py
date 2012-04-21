# Create your views here.

from jsonrpc import *
from django.template import RequestContext
from django.shortcuts import render_to_response, redirect, render
from django.core import serializers
from django.template import Context, loader
import base64
import os
import os.path
import urllib
import hmac
import json
import hashlib
from base64 import urlsafe_b64decode, urlsafe_b64encode
import requests

from uniapp.models import User
from uniapp.models import Course
from uniapp.models import Enroll
from uniapp.models import Dept
from uni.settings import FACEBOOK_APPLICATION_ID, FACEBOOK_APPLICATION_SECRET_KEY, FB_APP_NAME
service = JSONRPCService()

requests = requests.session()

app_url = 'https://graph.facebook.com/{0}'.format(FACEBOOK_APPLICATION_ID)

    
def index(request):
    access_token = get_token()

    if access_token:
        me = fb_call('me', args={'access_token': access_token})
        fb_app = fb_call(FB_APP_ID, args={'access_token': access_token})
        friends = fb_call('me/friends',
                          args={'access_token': access_token, 'limit': 4})
        redir = get_home() + 'close/'
        SEND_TO = ('https://www.facebook.com/dialog/send?'
                   'redirect_uri=%s&display=popup&app_id=%s&link=%s'
                   % (redir, FB_APP_ID, get_home()))
        url = request.url
        c = Context({'FB_APP_ID' : FB_APP_ID, 'friends' : friends})
        t = loader.get_template('index.html')
        
        return HttpResponse(t.render(c))
    
class Config(object):
    DEBUG = True
    TESTING = False
    LOG_LEVEL = os.environ.get('LOG_LEVEL', 'DEBUG')
    FBAPI_APP_ID = FACEBOOK_APPLICATION_ID
    FBAPI_APP_SECRET = FACEBOOK_APPLICATION_SECRET_KEY
    FBAPI_SCOPE = ['user_likes', 'user_photos', 'user_photo_video_tags']
           
@jsonremote(service)
def addUser(request, userObject):
    if(userObject['uid'] not in list(User.objects.all())):
        user = User()
        user.uid = userObject['uid']
        user.year = userObject['year']
        user.majorId = userObject['majorId']
        user.save()
@jsonremote(service)
def enrollInCourse(request, courseObject):
    enroll = Enroll()
    cid = courseObject['cid']
    uid = courseObject['uid']
    enroll.uid = uid
    enroll.cid = cid
    enroll.save()
@jsonremote(service)
def updateProfile(request, userObject):
    if(userObject['uid'] in list(User.objects.all())):
        User.objects.filter(uid=userObject['uid']).update(year=userObject['year'], majorId=userObject['majorId'])
@jsonremote(service)
def searchCourse(request, query):
    if(len(Dept.objects.get(name=query['deptName']))==1 and len(Course.objects.get(number=query['number']))>0):
        departmentId = Dept.objects.get(name=query['deptName'])
        courseNumber = Course.objects.get(number=query['number'])
        course = Course.objects.get(number=courseNumber, deptId=departmentId)
        return json_convert(course)
def goToCourse(request, courseRequest):
    if(len(Course.objects.get(id=courseRequest['id'])==1)):
        course = Course.objects.get(id=courseRequest['id'])
        return redirect('CourseProfile.html', json_convert(course))
def getCourse(request, courseRequest):
    if(len(Course.objects.get(id=courseRequest['id'])==1)):
        course = Course.objects.get(id=courseRequest['id'])
        return json_convert(course)

FB_APP_ID = FACEBOOK_APPLICATION_ID
requests = requests.session()

app_url = 'https://graph.facebook.com/{0}'.format(FB_APP_ID)
FB_APP_NAME = FB_APP_NAME
FB_APP_SECRET = FACEBOOK_APPLICATION_SECRET_KEY


def oauth_login_url(preserve_path=True, next_url=None):
    fb_login_uri = ("https://www.facebook.com/dialog/oauth"
                    "?client_id=%s&redirect_uri=%s" %
                    (app.FB_APP_ID, get_home()))

    if app.FBAPI_SCOPE:
        fb_login_uri += "&scope=%s" % ",".join(app.FBAPI_SCOPE)
    return fb_login_uri


def simple_dict_serialisation(params):
    return "&".join(map(lambda k: "%s=%s" % (k, params[k]), params.keys()))


def base64_url_encode(data):
    return base64.urlsafe_b64encode(data).rstrip('=')


def fbapi_get_string(path,
    domain=u'graph', params=None, access_token=None,
    encode_func=urllib.urlencode):
    """Make an API call"""

    if not params:
        params = {}
    params[u'method'] = u'GET'
    if access_token:
        params[u'access_token'] = access_token

    for k, v in params.iteritems():
        if hasattr(v, 'encode'):
            params[k] = v.encode('utf-8')

    url = u'https://' + domain + u'.facebook.com' + path
    params_encoded = encode_func(params)
    url = url + params_encoded
    result = requests.get(url).content

    return result


def fbapi_auth(code):
    params = {'client_id': app.FB_APP_ID,
              'redirect_uri': get_home(),
              'client_secret': app.FB_APP_SECRET,
              'code': code}

    result = fbapi_get_string(path=u"/oauth/access_token?", params=params,
                              encode_func=simple_dict_serialisation)
    pairs = result.split("&", 1)
    result_dict = {}
    for pair in pairs:
        (key, value) = pair.split("=")
        result_dict[key] = value
    return (result_dict["access_token"], result_dict["expires"])


def fbapi_get_application_access_token(id):
    token = fbapi_get_string(
        path=u"/oauth/access_token",
        params=dict(grant_type=u'client_credentials', client_id=id,
                    client_secret=app.FB_APP_SECRET),
        domain=u'graph')

    token = token.split('=')[-1]
    if not str(id) in token:
        print 'Token mismatch: %s not in %s' % (id, token)
    return token


def fql(fql, token, args=None):
    if not args:
        args = {}

    args["query"], args["format"], args["access_token"] = fql, "json", token

    url = "https://api.facebook.com/method/fql.query"

    r = requests.get(url, params=args)
    return json.loads(r.content)


def fb_call(call, args=None):
    url = "https://graph.facebook.com/{0}".format(call)
    r = requests.get(url, params=args)
    return json.loads(r.content)



app = Config()

def get_home(request):
    return 'https://' + request.host + '/'


def get_token(request):

    if request.args.get('code', None):
        return fbapi_auth(request.args.get('code'))[0]

    cookie_key = 'fbsr_{0}'.format(FB_APP_ID)

    if cookie_key in request.cookies:

        c = request.cookies.get(cookie_key)
        encoded_data = c.split('.', 2)

        sig = encoded_data[0]
        data = json.loads(urlsafe_b64decode(str(encoded_data[1])+"=="))

        if not data['algorithm'].upper() == 'HMAC-SHA256':
            raise ValueError('unknown algorithm {0}'.format(data['algorithm']))

        h = hmac.new(FB_APP_SECRET, digestmod=hashlib.sha256)
        h.update(encoded_data[1])
        expected_sig = urlsafe_b64encode(h.digest()).replace('=', '')

        if sig != expected_sig:
            raise ValueError('bad signature')

        code =  data['code']

        params = {
            'client_id': FB_APP_ID,
            'client_secret': FB_APP_SECRET,
            'redirect_uri': '',
            'code': data['code']
        }

        from urlparse import parse_qs
        r = requests.get('https://graph.facebook.com/oauth/access_token', params=params)
        token = parse_qs(r.content).get('access_token')

        return token

#@app.route('/channel.html', methods=['GET', 'POST'])

def get_channel():
    return render('channel.html')


#@app.route('/close/', methods=['GET', 'POST'])
def close():
    return render('close.html')



#if __name__ == '__main__':
#    port = int(os.environ.get("PORT", 5000))
#    if app.config.get('FB_APP_ID') and app.config.get('FB_APP_SECRET'):
#        app.run(host='0.0.0.0', port=port)
#    else:
#        print 'Cannot start application without Facebook App Id and Secret set'         
    
    
