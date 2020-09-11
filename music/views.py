import json
from itertools import chain
from urllib import request

import emoji
from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from DEMO import cursor, db
from .models import ProductRough, AssessDetail
from .models import ProductDetail
from .models import Member
from django.db import connection
from django.contrib import auth
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib import messages
import tkinter.messagebox
from tkinter import *
from django.views.decorators.csrf import csrf_exempt
from apyori import apriori

# Create your views here.

def index(request):
    if request.user.is_authenticated:
        return render(request, 'hotsupplies.html', locals())
    else:
        return render(request, 'index.html', locals())


def login(request):
    if request.user.is_authenticated:
        return render(request, 'hotsupplies.html', locals())
    else:
        return render(request, 'login.html', locals())


def register(request):
    if request.user.is_authenticated:
        return render(request, 'hotsupplies.html', locals())
    else:
        return render(request, 'register.html', locals())


@login_required
def pricerange(request):
    return render(request, 'pricerange.html', {

    })


@login_required
def keywords(request):
    return render(request, 'keywords.html', {

    })


@login_required
def suppliescmb(request):
    return render(request, 'suppliescmb.html', {

    })


@login_required
def magicprice(request):
    return render(request, 'magicprice.html', {

    })


@login_required
def memberdata(request):
    return render(request, 'memberdata.html', {

    })


@login_required
def pricerecord(request):
    return render(request, 'pricerecord.html', {

    })


@login_required
def history(request):
    return render(request, 'history.html', {

    })


@login_required
def hotsupplies(request):
    try:
        # category = ProductRough.objects.last()  # 讀取第一筆資料
        all_data = {}
        item_list = []

        index = 1
        query = ProductDetail.objects.all().order_by('-historical_sold')[0:20]
        for a in query:
            item_list.append(a.itemid)

            all_data[index] = {}
            all_data[index]['historical_sold'] = a.historical_sold
            all_data[index]['itemid'] = a.itemid
            all_data[index]['shopid'] = a.shopid
            all_data[index]['seller'] = int(int(a.shopid) / 100000)
            b = int(int(a.shopid) / 100000)
            all_data[index]['avg'] = int(int(a.historical_sold) / b)

            index += 1

        index = 1
        for id1 in item_list:
            query1 = ProductRough.objects.get(itemid=id1)
            all_data[index]['name'] = emoji.emojize(query1.name)
            all_data[index]['image'] = query1.images[2:34]
            index += 1


    except:
        errormessage = "(讀取錯誤!)"

    return render(request, 'hotsupplies.html', locals())

    # return HttpResponse(all_data, content_type='application/text')


@csrf_exempt
def login_login(request):
    try:
        username = request.POST.get("email")
        password = request.POST.get("password")
        user_obj = auth.authenticate(username=username, password=password)
        # view_name = User.objects.get(username=username)

        if not user_obj:
            messages.error(request, '帳號或密碼錯誤')
            return render(request, 'login.html', locals())
            # error_msg = '帳號或密碼錯誤'
            # return render(request, 'errors.html', {'error_msg': error_msg})

        else:
            auth.login(request, user_obj)

            path = request.GET.get("next") or "/hotsupplies/"
            return redirect(path)
            # return render(request, 'ranking.html', locals())

    except:

        messages.error(request, '帳號或密碼錯誤')
        return render(request, 'login.html', locals())


# 註冊
def register_register(request):
    try:

        first_name = request.GET.get("first_name")
        last_name = request.GET.get("last_name")
        username = request.GET.get("email")
        password = request.GET.get("pwd")
        password_check = request.GET.get("pwd_check")

        if password == password_check:

            User.objects.create_superuser(username=username, password=password, email=username, first_name=first_name,
                                          last_name=last_name)
            messages.error(request, '註冊成功')
            return render(request, 'login.html', locals())
        else:
            messages.error(request, '確認密碼不相同')
            return render(request, 'register.html', locals())
            # error_msg = '確認密碼不相同'
            # return render(request, 'errors.html', {'error_msg': error_msg})

    except:
        messages.error(request, '帳號已存在')
        return render(request, 'register.html', locals())
        # error_msg = '帳號已存在'
        # return render(request, 'errors.html', {'error_msg': error_msg})


def logout(request):
    ppp = auth.logout(request)
    print(ppp)  # None
    return render(request, 'index.html', locals())


@login_required
def search(request):
    try:
        if request.is_ajax():
            what_search = request.POST.get('what_search', None)
            # getting data from input first_name id
            if what_search:
                # cheking if first_name have value

                search_data = {}
                index = 1
                unit2 = ProductRough.objects.filter(name__icontains=what_search)

                for i in unit2:
                    search_data[index] = {}
                    search_data[index]['itemid'] = i.itemid
                    search_data[index]['search_name'] = i.name
                    search_data[index]['search_image'] = i.images[2:34]
                    index += 1

                a = json.dumps(search_data, ensure_ascii=False)

                response = {
                    'msg': a  # response message
                }
                return JsonResponse(response)  # return response as JSON

        # return render(request, 'suppliescmb.html', locals())

    except:

        # messages.error(request, '查無商品!!!')
        return render(request, 'suppliescmb.html', locals())


def ajax_posting(request):
    if request.is_ajax():
        first_name = request.POST.get('first_name', None)
        # getting data from input first_name id
        if first_name:
            # cheking if first_name have value
            response = {
                'msg': first_name  # response message
            }
            return JsonResponse(response)  # return response as JSON


def ajax_test(request):
        return render(request, 'ajax_test.html', {

        })


def related(request):

    choose_itemid = request.GET.get("1013487638")

    who_buy_this_product = AssessDetail.objects.filter(itemid=choose_itemid)  # 搜尋買了這個東西的人
    what_is_this_product = ProductRough.objects.get(itemid=choose_itemid)

    query3_result = list()

    for a in who_buy_this_product:

        query2_result = list()
        what_buy = AssessDetail.objects.filter(userid=a.userid)  # 搜尋買了這個東西的人還買了什麼

        for b in what_buy:

            id_to_name = ProductRough.objects.filter(itemid=b.itemid)  # 將itemid轉成商品名稱

            for c in id_to_name:

                query2_result.append(c.name)

        query3_result.append(query2_result)

    print(query3_result)
    print("")

    # 關聯計算
    association_rules = apriori(query3_result, min_support=0.01, min_confidence=0.01, min_lift=1.01, max_length=2)
    association_results = list(association_rules)

    related_result = {}
    index1 = 1

    print(what_is_this_product.name)
    print("")

    for item in association_results:
        pair = item[0]
        items = [x for x in pair]

        related_result[index1] = {}

        if items[0] != what_is_this_product.name and items[1] != what_is_this_product.name:

            print(items[0]+'----->'+items[1])
            print('關聯率: ' + str(item[1]))
            print("")

        elif items[0] == what_is_this_product.name:

            related_result[index1]["name"] = items[1]
            related_result[index1]["related"] = str(round(float(item[1]) * 100, 2))
            index1 += 1

        else:

            related_result[index1]["name"] = items[0]
            related_result[index1]["related"] = str(round(float(item[1]) * 100, 2))
            index1 += 1

    print(related_result)

    return render(request, 'suppliescmb.html', locals())

