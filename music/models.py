
# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AssessDetail(models.Model):
    cmtid = models.CharField(primary_key=True, max_length=255)
    ratings_number = models.IntegerField()
    itemid = models.CharField(max_length=255)
    shopid = models.CharField(max_length=255)
    itemratingreply_orderid = models.CharField(db_column='ItemRatingReply_orderid', max_length=255, blank=True, null=True)  # Field name made lowercase.
    itemratingreply_itemid = models.CharField(db_column='ItemRatingReply_itemid', max_length=255, blank=True, null=True)  # Field name made lowercase.
    itemratingreply_cmtid = models.CharField(db_column='ItemRatingReply_cmtid', max_length=255, blank=True, null=True)  # Field name made lowercase.
    itemratingreply_ctime = models.CharField(db_column='ItemRatingReply_ctime', max_length=255, blank=True, null=True)  # Field name made lowercase.
    itemratingreply_mentioned = models.CharField(db_column='ItemRatingReply_mentioned', max_length=255, blank=True, null=True)  # Field name made lowercase.
    itemratingreply_rating = models.CharField(db_column='ItemRatingReply_rating', max_length=255, blank=True, null=True)  # Field name made lowercase.
    itemratingreply_editable = models.CharField(db_column='ItemRatingReply_editable', max_length=255, blank=True, null=True)  # Field name made lowercase.
    itemratingreply_userid = models.CharField(db_column='ItemRatingReply_userid', max_length=255, blank=True, null=True)  # Field name made lowercase.
    itemratingreply_shopid = models.CharField(db_column='ItemRatingReply_shopid', max_length=255, blank=True, null=True)  # Field name made lowercase.
    itemratingreply_comment = models.CharField(db_column='ItemRatingReply_comment', max_length=255, blank=True, null=True)  # Field name made lowercase.
    itemratingreply_filter = models.CharField(db_column='ItemRatingReply_filter', max_length=255, blank=True, null=True)  # Field name made lowercase.
    itemratingreply_rating_star = models.CharField(db_column='ItemRatingReply_rating_star', max_length=255, blank=True, null=True)  # Field name made lowercase.
    itemratingreply_status = models.CharField(db_column='ItemRatingReply_status', max_length=255, blank=True, null=True)  # Field name made lowercase.
    itemratingreply_mtime = models.CharField(db_column='ItemRatingReply_mtime', max_length=255, blank=True, null=True)  # Field name made lowercase.
    itemratingreply_opt = models.CharField(db_column='ItemRatingReply_opt', max_length=255, blank=True, null=True)  # Field name made lowercase.
    itemratingreply_is_hidden = models.CharField(db_column='ItemRatingReply_is_hidden', max_length=255, blank=True, null=True)  # Field name made lowercase.
    like_count = models.IntegerField(blank=True, null=True)
    mtime = models.IntegerField(blank=True, null=True)
    mentioned = models.CharField(max_length=255, blank=True, null=True)
    is_hidden = models.CharField(max_length=255, blank=True, null=True)
    author_portrait = models.CharField(max_length=255, blank=True, null=True)
    orderid = models.CharField(max_length=255, blank=True, null=True)
    editable_date = models.CharField(max_length=255, blank=True, null=True)
    opt = models.CharField(max_length=255, blank=True, null=True)
    status = models.CharField(max_length=255, blank=True, null=True)
    author_username = models.CharField(max_length=255, blank=True, null=True)
    tags_number = models.CharField(max_length=255, blank=True, null=True)
    tags_description = models.CharField(max_length=255, blank=True, null=True)
    tags_id = models.CharField(max_length=255, blank=True, null=True)
    images = models.CharField(max_length=255, blank=True, null=True)
    delete_operator = models.CharField(max_length=255, blank=True, null=True)
    editable = models.CharField(max_length=255, blank=True, null=True)
    anonymous = models.CharField(max_length=255, blank=True, null=True)
    ctime = models.CharField(max_length=255, blank=True, null=True)
    rating_star = models.CharField(max_length=255, blank=True, null=True)
    author_shopid = models.CharField(max_length=255, blank=True, null=True)
    userid = models.CharField(max_length=255, blank=True, null=True)
    comment = models.CharField(max_length=1000, blank=True, null=True)
    filter_0 = models.IntegerField(blank=True, null=True)
    delete_reason = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'assess_detail'


class AssessRough(models.Model):
    cmtid = models.CharField(primary_key=True, max_length=20)
    ratings_number = models.IntegerField()
    itemid = models.CharField(max_length=30)
    shopid = models.CharField(max_length=30)
    liked = models.CharField(max_length=50, blank=True, null=True)
    show_reply = models.CharField(max_length=255, blank=True, null=True)
    product_items_number = models.CharField(max_length=255, blank=True, null=True)
    product_items_itemid = models.CharField(max_length=20, blank=True, null=True)
    product_items_welcome_package_info = models.CharField(max_length=255, blank=True, null=True)
    product_items_liked = models.CharField(max_length=255, blank=True, null=True)
    product_items_recommendation_info = models.CharField(max_length=100, blank=True, null=True)
    product_items_bundle_deal_info = models.CharField(max_length=100, blank=True, null=True)
    product_items_price_max_before_discount = models.CharField(max_length=100, blank=True, null=True)
    product_items_image = models.CharField(max_length=255, blank=True, null=True)
    product_items_is_cc_installment_payment_eligible = models.CharField(max_length=255, blank=True, null=True)
    product_items_shopid = models.CharField(max_length=255, blank=True, null=True)
    product_items_can_use_wholesale = models.CharField(max_length=255, blank=True, null=True)
    product_items_group_buy_info = models.CharField(max_length=255, blank=True, null=True)
    product_items_reference_item_id = models.CharField(max_length=255, blank=True, null=True)
    product_items_currency = models.CharField(max_length=255, blank=True, null=True)
    product_items_raw_discount = models.CharField(max_length=255, blank=True, null=True)
    product_items_show_free_shipping = models.CharField(max_length=255, blank=True, null=True)
    product_items_video_info_list = models.CharField(max_length=255, blank=True, null=True)
    product_items_images = models.CharField(max_length=500, blank=True, null=True)
    product_items_price_before_discount = models.CharField(max_length=255, blank=True, null=True)
    product_items_is_category_failed = models.CharField(max_length=255, blank=True, null=True)
    product_items_show_discount = models.CharField(max_length=255, blank=True, null=True)
    product_items_cmt_count = models.CharField(max_length=255, blank=True, null=True)
    product_items_view_count = models.CharField(max_length=255, blank=True, null=True)
    product_items_catid = models.CharField(max_length=255, blank=True, null=True)
    product_items_upcoming_flash_sale = models.CharField(max_length=255, blank=True, null=True)
    product_items_is_official_shop = models.CharField(max_length=255, blank=True, null=True)
    product_items_brand = models.CharField(max_length=255, blank=True, null=True)
    product_items_price_min = models.CharField(max_length=255, blank=True, null=True)
    product_items_liked_count = models.CharField(max_length=255, blank=True, null=True)
    product_items_can_use_bundle_deal = models.CharField(max_length=255, blank=True, null=True)
    product_items_show_official_shop_label = models.CharField(max_length=255, blank=True, null=True)
    product_items_coin_earn_label = models.CharField(max_length=255, blank=True, null=True)
    product_items_is_snapshot = models.CharField(max_length=255, blank=True, null=True)
    product_items_price_min_before_discount = models.CharField(max_length=255, blank=True, null=True)
    product_items_cb_option = models.CharField(max_length=255, blank=True, null=True)
    product_items_sold = models.CharField(max_length=100, blank=True, null=True)
    product_items_stock = models.CharField(max_length=100, blank=True, null=True)
    product_items_status = models.CharField(max_length=255, blank=True, null=True)
    product_items_price_max = models.CharField(max_length=255, blank=True, null=True)
    product_items_add_on_deal_info = models.CharField(max_length=255, blank=True, null=True)
    product_items_is_group_buy_item = models.CharField(max_length=255, blank=True, null=True)
    product_items_flash_sale = models.CharField(max_length=255, blank=True, null=True)
    product_items_modelid = models.CharField(max_length=255, blank=True, null=True)
    product_items_price = models.CharField(max_length=255, blank=True, null=True)
    product_items_shop_location = models.CharField(max_length=255, blank=True, null=True)
    product_items_item_rating = models.CharField(max_length=255, blank=True, null=True)
    product_items_show_official_shop_label_in_title = models.CharField(max_length=255, blank=True, null=True)
    product_items_tier_variations_number = models.CharField(max_length=255, blank=True, null=True)
    product_items_tier_variations_images = models.CharField(max_length=1400, blank=True, null=True)
    product_items_tier_variations_properties = models.CharField(max_length=255, blank=True, null=True)
    product_items_tier_variations_type = models.CharField(max_length=255, blank=True, null=True)
    product_items_tier_variations_name = models.CharField(max_length=255, blank=True, null=True)
    product_items_tier_variations_options = models.CharField(max_length=800, blank=True, null=True)
    product_items_is_adult = models.CharField(max_length=255, blank=True, null=True)
    product_items_discount = models.CharField(max_length=255, blank=True, null=True)
    product_items_flag = models.CharField(max_length=255, blank=True, null=True)
    product_items_is_non_cc_installment_payment_eligible = models.CharField(max_length=255, blank=True, null=True)
    product_items_has_lowest_price_guarantee = models.CharField(max_length=255, blank=True, null=True)
    product_items_snapshotid = models.CharField(max_length=255, blank=True, null=True)
    product_items_has_group_buy_stock = models.CharField(max_length=255, blank=True, null=True)
    product_items_welcome_package_type = models.CharField(max_length=255, blank=True, null=True)
    product_items_preview_info = models.CharField(max_length=255, blank=True, null=True)
    product_items_name = models.CharField(max_length=500, blank=True, null=True)
    product_items_ctime = models.CharField(max_length=255, blank=True, null=True)
    product_items_wholesale_tier_list = models.CharField(max_length=255, blank=True, null=True)
    product_items_show_shopee_verified_label = models.CharField(max_length=255, blank=True, null=True)
    product_items_show_official_shop_label_in_normal_position = models.CharField(max_length=255, blank=True, null=True)
    product_items_item_status = models.CharField(max_length=255, blank=True, null=True)
    product_items_shopee_verified = models.CharField(max_length=255, blank=True, null=True)
    product_items_hidden_price_display = models.CharField(max_length=255, blank=True, null=True)
    product_items_size_chart = models.CharField(max_length=255, blank=True, null=True)
    product_items_item_type = models.CharField(max_length=255, blank=True, null=True)
    product_items_shipping_icon_type = models.CharField(max_length=255, blank=True, null=True)
    product_items_label_ids = models.CharField(max_length=255, blank=True, null=True)
    product_items_service_by_shopee_flag = models.CharField(max_length=255, blank=True, null=True)
    product_items_model_name = models.CharField(max_length=255, blank=True, null=True)
    product_items_badge_icon_type = models.CharField(max_length=255, blank=True, null=True)
    product_items_historical_sold = models.CharField(max_length=255, blank=True, null=True)
    product_items_transparent_background_image = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'assess_rough'


class Member(models.Model):
    username = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=16)

    class Meta:
        managed = False
        db_table = 'member'


class ProductDetail(models.Model):
    itemid = models.CharField(primary_key=True, max_length=30)
    shopid = models.CharField(max_length=30)
    big_sort = models.CharField(max_length=20, blank=True, null=True)
    mid_sort = models.CharField(max_length=20, blank=True, null=True)
    small_sort = models.CharField(max_length=20, blank=True, null=True)
    wholesale_tier_list_number = models.CharField(max_length=100, blank=True, null=True)
    wholesale_tier_list_min_count = models.CharField(max_length=100, blank=True, null=True)
    wholesale_tier_list_price = models.CharField(max_length=100, blank=True, null=True)
    wholesale_tier_list_max_count = models.CharField(max_length=100, blank=True, null=True)
    show_shopee_verified_label = models.CharField(max_length=2, blank=True, null=True)
    campaignid = models.CharField(max_length=10, blank=True, null=True)
    show_official_shop_label_in_normal_position = models.CharField(max_length=10, blank=True, null=True)
    item_status = models.CharField(max_length=10, blank=True, null=True)
    shopee_verified = models.CharField(max_length=2, blank=True, null=True)
    hidden_price_display = models.CharField(max_length=10, blank=True, null=True)
    size_chart = models.CharField(max_length=10, blank=True, null=True)
    item_type = models.CharField(max_length=2, blank=True, null=True)
    shipping_icon_type = models.CharField(max_length=2, blank=True, null=True)
    label_ids = models.CharField(max_length=255, blank=True, null=True)
    service_by_shopee_flag = models.IntegerField(blank=True, null=True)
    badge_icon_type = models.IntegerField(blank=True, null=True)
    historical_sold = models.IntegerField(blank=True, null=True)
    transparent_background_image = models.CharField(max_length=10, blank=True, null=True)
    estimated_days = models.IntegerField(blank=True, null=True)
    is_hot_sales = models.CharField(max_length=10, blank=True, null=True)
    is_slash_price_item = models.CharField(max_length=2, blank=True, null=True)
    slash_lowest_price = models.CharField(max_length=10, blank=True, null=True)
    condition = models.IntegerField(blank=True, null=True)
    categories_number = models.CharField(max_length=100, blank=True, null=True)
    categories_display_name = models.CharField(max_length=255, blank=True, null=True)
    categories_catid = models.CharField(max_length=100, blank=True, null=True)
    categories_image = models.CharField(max_length=100, blank=True, null=True)
    categories_no_sub = models.CharField(max_length=100, blank=True, null=True)
    categories_is_default_subcat = models.CharField(max_length=100, blank=True, null=True)
    categories_block_buyer_platform = models.CharField(max_length=100, blank=True, null=True)
    is_pre_order = models.CharField(max_length=2, blank=True, null=True)
    cod_flag = models.IntegerField(blank=True, null=True)
    hashtag_list = models.CharField(max_length=1000, blank=True, null=True)
    sold = models.IntegerField(blank=True, null=True)
    makeup = models.CharField(max_length=10, blank=True, null=True)
    reason = models.CharField(max_length=10, blank=True, null=True)
    attributes_number = models.CharField(max_length=100, blank=True, null=True)
    attributes_is_pending_qc = models.CharField(max_length=255, blank=True, null=True)
    attributes_idx = models.CharField(max_length=100, blank=True, null=True)
    attributes_value = models.CharField(max_length=255, blank=True, null=True)
    attributes_id = models.CharField(max_length=100, blank=True, null=True)
    attributes_is_timestamp = models.CharField(max_length=50, blank=True, null=True)
    attributes_name = models.CharField(max_length=255, blank=True, null=True)
    normal_stock = models.IntegerField(blank=True, null=True)
    installment_plans = models.CharField(max_length=10, blank=True, null=True)
    current_promotion_has_reserve_stock = models.CharField(max_length=10, blank=True, null=True)
    current_promotion_reserved_stock = models.IntegerField(blank=True, null=True)
    spend_cash_unit = models.IntegerField(blank=True, null=True)
    coin_earn_items_number = models.CharField(max_length=100, blank=True, null=True)
    coin_earn_items_itemid = models.CharField(max_length=300, blank=True, null=True)
    coin_earn_items_modleid = models.CharField(max_length=100, blank=True, null=True)
    coin_earn_items_coin_earn = models.CharField(max_length=100, blank=True, null=True)
    bundle_deal_id = models.IntegerField(blank=True, null=True)
    description = models.CharField(max_length=3300, blank=True, null=True)
    models_number = models.CharField(max_length=255, blank=True, null=True)
    models_itemid = models.CharField(max_length=1000, blank=True, null=True)
    models_status = models.CharField(max_length=255, blank=True, null=True)
    models_current_promotion_reserved_stock = models.CharField(max_length=255, blank=True, null=True)
    models_name = models.CharField(max_length=4000, blank=True, null=True)
    models_promotionid = models.CharField(max_length=1000, blank=True, null=True)
    models_price = models.CharField(max_length=500, blank=True, null=True)
    models_current_promotion_has_reserve_stock = models.CharField(max_length=1000, blank=True, null=True)
    models_currency = models.CharField(max_length=600, blank=True, null=True)
    models_normal_stock = models.CharField(max_length=300, blank=True, null=True)
    models_extinfo_seller_promotion_limit = models.CharField(max_length=1000, blank=True, null=True)
    models_extinfo_has_shopee_promo = models.CharField(max_length=300, blank=True, null=True)
    models_extinfo_group_buy_info = models.CharField(max_length=300, blank=True, null=True)
    models_extinfo_holiday_mode_old_stock = models.CharField(max_length=300, blank=True, null=True)
    models_extinfo_tier_index = models.CharField(max_length=500, blank=True, null=True)
    models_extinfo_seller_promotion_refresh_time = models.CharField(max_length=500, blank=True, null=True)
    models_price_before_discount = models.CharField(max_length=300, blank=True, null=True)
    models_modelid = models.CharField(max_length=1000, blank=True, null=True)
    models_sold = models.CharField(max_length=255, blank=True, null=True)
    models_stock = models.CharField(max_length=255, blank=True, null=True)
    version = models.CharField(max_length=100, blank=True, null=True)
    data = models.CharField(max_length=10, blank=True, null=True)
    error_msg = models.CharField(max_length=10, blank=True, null=True)
    error = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'product_detail'


class ProductRough(models.Model):
    itemid = models.CharField(primary_key=True, max_length=50)
    big_sort = models.CharField(max_length=20, blank=True, null=True)
    mid_sort = models.CharField(max_length=20, blank=True, null=True)
    small_sort = models.CharField(max_length=20, blank=True, null=True)
    welcome_package_info = models.CharField(max_length=255, blank=True, null=True)
    liked = models.CharField(max_length=255, blank=True, null=True)
    recommendation_info = models.CharField(max_length=255, blank=True, null=True)
    bundle_deal_info = models.CharField(max_length=255, blank=True, null=True)
    price_max_before_discount = models.CharField(max_length=255, blank=True, null=True)
    images = models.CharField(max_length=1000, blank=True, null=True)
    is_cc_installment_payment_eligible = models.CharField(max_length=255, blank=True, null=True)
    shopid = models.CharField(max_length=100)
    can_use_wholesale = models.CharField(max_length=255, blank=True, null=True)
    group_buy_info = models.CharField(max_length=255, blank=True, null=True)
    reference_item_id = models.CharField(max_length=255, blank=True, null=True)
    currency = models.CharField(max_length=255, blank=True, null=True)
    raw_discount = models.CharField(max_length=255, blank=True, null=True)
    show_free_shipping = models.CharField(max_length=255, blank=True, null=True)
    video_info_list = models.CharField(max_length=255, blank=True, null=True)
    ads_keyword = models.CharField(max_length=255, blank=True, null=True)
    collection_id = models.CharField(max_length=255, blank=True, null=True)
    match_type = models.CharField(max_length=255, blank=True, null=True)
    price_before_discount = models.CharField(max_length=255, blank=True, null=True)
    is_category_failed = models.CharField(max_length=255, blank=True, null=True)
    show_discount = models.CharField(max_length=255, blank=True, null=True)
    cmt_count = models.CharField(max_length=255, blank=True, null=True)
    view_count = models.CharField(max_length=255, blank=True, null=True)
    display_name = models.CharField(max_length=255, blank=True, null=True)
    catid = models.CharField(max_length=255, blank=True, null=True)
    json_data = models.CharField(max_length=255, blank=True, null=True)
    upcoming_flash_sale = models.CharField(max_length=255, blank=True, null=True)
    is_official_shop = models.CharField(max_length=255, blank=True, null=True)
    brand = models.CharField(max_length=255, blank=True, null=True)
    price_min = models.CharField(max_length=255, blank=True, null=True)
    liked_count = models.CharField(max_length=255, blank=True, null=True)
    can_use_bundle_deal = models.CharField(max_length=255, blank=True, null=True)
    show_official_shop_label = models.CharField(max_length=255, blank=True, null=True)
    coin_earn_label = models.CharField(max_length=255, blank=True, null=True)
    price_min_before_discount = models.CharField(max_length=255, blank=True, null=True)
    cb_option = models.CharField(max_length=255, blank=True, null=True)
    sold = models.CharField(max_length=255, blank=True, null=True)
    deduction_info = models.CharField(max_length=255, blank=True, null=True)
    stock = models.CharField(max_length=255, blank=True, null=True)
    status = models.CharField(max_length=255, blank=True, null=True)
    price_max = models.CharField(max_length=255, blank=True, null=True)
    add_on_deal_info = models.CharField(max_length=255, blank=True, null=True)
    is_group_buy_item = models.CharField(max_length=255, blank=True, null=True)
    flash_sale = models.CharField(max_length=255, blank=True, null=True)
    price = models.CharField(max_length=255, blank=True, null=True)
    shop_location = models.CharField(max_length=255, blank=True, null=True)
    item_rating_rating_star = models.CharField(max_length=255, blank=True, null=True)
    rating_count_0 = models.CharField(max_length=50, blank=True, null=True)
    rating_count_1 = models.CharField(max_length=50, blank=True, null=True)
    rating_count_2 = models.CharField(max_length=50, blank=True, null=True)
    rating_count_3 = models.CharField(max_length=50, blank=True, null=True)
    rating_count_4 = models.CharField(max_length=50, blank=True, null=True)
    rating_count_5 = models.CharField(max_length=50, blank=True, null=True)
    rcount_with_image = models.CharField(max_length=255, blank=True, null=True)
    rcount_with_context = models.CharField(max_length=255, blank=True, null=True)
    show_official_shop_label_in_title = models.CharField(max_length=255, blank=True, null=True)
    tier_variations_number = models.CharField(max_length=255, blank=True, null=True)
    tier_variations_images = models.CharField(max_length=1000, blank=True, null=True)
    tier_variations_properties = models.CharField(max_length=255, blank=True, null=True)
    tier_variations_type = models.CharField(max_length=255, blank=True, null=True)
    tier_variations_name = models.CharField(max_length=255, blank=True, null=True)
    tier_variations_options = models.CharField(max_length=1700, blank=True, null=True)
    is_adult = models.CharField(max_length=255, blank=True, null=True)
    discount = models.CharField(max_length=255, blank=True, null=True)
    flag = models.CharField(max_length=255, blank=True, null=True)
    is_non_cc_installment_payment_eligible = models.CharField(max_length=255, blank=True, null=True)
    has_lowest_price_guarantee = models.CharField(max_length=255, blank=True, null=True)
    has_group_buy_stock = models.CharField(max_length=255, blank=True, null=True)
    preview_info = models.CharField(max_length=255, blank=True, null=True)
    welcome_package_type = models.CharField(max_length=255, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    distance = models.CharField(max_length=255, blank=True, null=True)
    adsid = models.CharField(max_length=255, blank=True, null=True)
    ctime = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'product_rough'
        unique_together = (('itemid', 'shopid'),)


class SellerInformation(models.Model):
    userid = models.CharField(max_length=255)
    shopid = models.CharField(primary_key=True, max_length=255)
    rating_normal = models.CharField(max_length=255, blank=True, null=True)
    campaign_config = models.CharField(max_length=255, blank=True, null=True)
    followed = models.CharField(max_length=255, blank=True, null=True)
    show_official_shop_label_in_normal_position = models.CharField(max_length=255, blank=True, null=True)
    rating_bad = models.FloatField(blank=True, null=True)
    mtime = models.IntegerField(blank=True, null=True)
    has_decoration = models.CharField(max_length=255, blank=True, null=True)
    is_shopee_verified = models.CharField(max_length=255, blank=True, null=True)
    cancellation_rate = models.FloatField(blank=True, null=True)
    is_official_shop = models.CharField(max_length=255, blank=True, null=True)
    vacation = models.CharField(max_length=255, blank=True, null=True)
    show_low_fulfillment_warning = models.CharField(max_length=255, blank=True, null=True)
    item_count = models.IntegerField(blank=True, null=True)
    is_ab_test = models.CharField(max_length=255, blank=True, null=True)
    preparation_time = models.IntegerField(blank=True, null=True)
    follower_count = models.IntegerField(blank=True, null=True)
    cb_option = models.IntegerField(blank=True, null=True)
    shop_location = models.CharField(max_length=255, blank=True, null=True)
    enable_display_unitno = models.CharField(max_length=255, blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)
    is_blocking_owner = models.CharField(max_length=255, blank=True, null=True)
    description = models.CharField(max_length=6000, blank=True, null=True)
    rating_good = models.IntegerField(blank=True, null=True)
    is_semi_inactive = models.CharField(max_length=255, blank=True, null=True)
    show_official_shop_label = models.CharField(max_length=255, blank=True, null=True)
    shop_covers_number = models.CharField(max_length=255, blank=True, null=True)
    shop_covers_type = models.CharField(max_length=255, blank=True, null=True)
    shop_covers_image_url = models.CharField(max_length=255, blank=True, null=True)
    shop_covers_video_url = models.CharField(max_length=255, blank=True, null=True)
    show_official_shop_label_in_title = models.CharField(max_length=255, blank=True, null=True)
    campaign_id = models.IntegerField(blank=True, null=True)
    buyer_rating_rating_star = models.CharField(max_length=255, blank=True, null=True)
    rating_count_0 = models.CharField(max_length=255, blank=True, null=True)
    rating_count_1 = models.CharField(max_length=255, blank=True, null=True)
    rating_count_2 = models.CharField(max_length=255, blank=True, null=True)
    rating_count_3 = models.CharField(max_length=255, blank=True, null=True)
    rating_count_4 = models.CharField(max_length=255, blank=True, null=True)
    rating_count_5 = models.CharField(max_length=255, blank=True, null=True)
    chat_disabled = models.CharField(max_length=255, blank=True, null=True)
    show_live_tab = models.CharField(max_length=255, blank=True, null=True)
    response_time = models.IntegerField(blank=True, null=True)
    ctime = models.IntegerField(blank=True, null=True)
    account_username = models.CharField(max_length=255, blank=True, null=True)
    account_following_count = models.IntegerField(blank=True, null=True)
    account_hide_likes = models.IntegerField(blank=True, null=True)
    account_email_verified = models.CharField(max_length=255, blank=True, null=True)
    account_fbid = models.CharField(max_length=255, blank=True, null=True)
    account_total_avg_star = models.FloatField(blank=True, null=True)
    account_phone_verified = models.CharField(max_length=255, blank=True, null=True)
    account_feed_account_info_can_post_feed = models.CharField(max_length=255, blank=True, null=True)
    account_feed_account_info_is_kol = models.CharField(max_length=255, blank=True, null=True)
    account_portrait = models.CharField(max_length=255, blank=True, null=True)
    account_is_seller = models.CharField(max_length=255, blank=True, null=True)
    response_rate = models.FloatField(blank=True, null=True)
    disable_make_offer = models.FloatField(blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    rating_star = models.FloatField(blank=True, null=True)
    country = models.CharField(max_length=255, blank=True, null=True)
    show_shopee_verified_label = models.CharField(max_length=255, blank=True, null=True)
    cover = models.CharField(max_length=255, blank=True, null=True)
    place = models.CharField(max_length=255, blank=True, null=True)
    has_flash_sale = models.CharField(max_length=255, blank=True, null=True)
    last_active_time = models.IntegerField(blank=True, null=True)
    real_url_if_matching_custom_url = models.CharField(max_length=255, blank=True, null=True)
    error_msg = models.CharField(max_length=255, blank=True, null=True)
    error = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'seller_information'
