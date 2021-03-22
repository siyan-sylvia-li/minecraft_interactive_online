
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"181",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fandom-dimensions.skin"
    },{
      "function":"__k",
      "convert_null_to":"0",
      "convert_undefined_to":"0",
      "vtp_decodeCookie":false,
      "vtp_name":"shop_link_variant"
    },{
      "function":"__j",
      "convert_null_to":"0",
      "convert_undefined_to":"0",
      "vtp_name":"window.wgCityId"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","525179","value","true"],["map","key","4396","value","true"],["map","key","1249","value","true"],["map","key","613320","value","true"],["map","key","208733","value","true"],["map","key","30404","value","true"],["map","key","74","value","true"],["map","key","509","value","true"],["map","key","2569","value","true"],["map","key","13346","value","true"]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"forcecountry",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"Geo"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],";return a?JSON.parse(a):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],";return a?a:(a=",["escape",["macro",7],8,16],")?a.country:null})();"]
    },{
      "function":"__c",
      "vtp_value":"allowedToSeeShopLink"
    },{
      "function":"__k",
      "convert_null_to":"false",
      "convert_undefined_to":"false",
      "vtp_decodeCookie":false,
      "vtp_name":["macro",9]
    },{
      "function":"__u",
      "convert_null_to":"false",
      "convert_undefined_to":"false",
      "vtp_component":"QUERY",
      "vtp_queryKey":"shop-link-test",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return mw\u0026\u0026mw.config?mw.config.get(\"wikiVertical\"):\"none\"})();"]
    },{
      "function":"__j",
      "convert_null_to":"0",
      "convert_undefined_to":"0",
      "vtp_name":"window.wgUserId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=!0;if(mw){var b=window.wgCanonicalNamespace;b\u0026\u00260\u003Cb.length\u0026\u0026(a=!1)}return a})();"]
    },{
      "function":"__j",
      "convert_null_to":"1",
      "vtp_name":"pvNumberGlobal"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"#hivi_leaderboard\";if(a=document.querySelector(a))if(hivi_classes=a.className.split(\" \")){if(hivi_classes.includes(\"hide\")||hivi_classes.includes(\"default-height\"))return!0;if(hivi_classes.includes(\"theme-hivi\")\u0026\u0026!hivi_classes.includes(\"theme-resolved\"))return!1}return!0})();"]
    },{
      "function":"__vis",
      "vtp_elementSelector":".featured-video__wrapper",
      "vtp_outputMethod":"BOOLEAN",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50"
    },{
      "function":"__c",
      "vtp_value":"interstitial_impressions"
    },{
      "function":"__k",
      "convert_null_to":"0",
      "convert_undefined_to":"0",
      "vtp_decodeCookie":false,
      "vtp_name":["macro",18]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"force-interstitial",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-174161125-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"label"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new URLSearchParams(window.location.search);if(a.get(\"forcecountry\"))return a.get(\"forcecountry\");a=",["escape",["macro",7],8,16],";return(window.geo=a)?a.country:null})();"]
    },{
      "function":"__j",
      "convert_null_to":"0",
      "convert_undefined_to":"0",
      "vtp_name":"wgUserId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fandom.app"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){max=100;min=1;return Math.floor(Math.random()*(max-min+1))+min})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"test-iframe-interstitial",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",25],
      "vtp_map":["list",["map","key","criminalminds.fandom.com","value","true"],["map","key","rupaulsdragrace.fandom.com","value","true"],["map","key","theloudhouse.fandom.com","value","true"],["map","key","spongebob.fandom.com","value","true"],["map","key","thechallenge.fandom.com","value","true"],["map","key","jimmyneutron.fandom.com","value","true"],["map","key","bigbangtheory.fandom.com","value","true"],["map","key","nickelodeon.fandom.com","value","true"],["map","key","ncis.fandom.com","value","true"],["map","key","pawpatrol.fandom.com","value","true"],["map","key","turtlepedia.fandom.com","value","true"],["map","key","icarly.fandom.com","value","true"],["map","key","madagascar.fandom.com","value","true"],["map","key","csi.fandom.com","value","true"],["map","key","heyarnold.fandom.com","value","true"],["map","key","macgyver.fandom.com","value","true"],["map","key","rugrats.fandom.com","value","true"],["map","key","hannibal.fandom.com","value","true"],["map","key","godfather.fandom.com","value","true"],["map","key","hawaiifiveo.fandom.com","value","true"],["map","key","teenmom.fandom.com","value","true"],["map","key","mtvrealworld.fandom.com","value","true"],["map","key","bluebloodstv.fandom.com","value","true"],["map","key","drakeandjosh.fandom.com","value","true"],["map","key","thegoodwife.fandom.com","value","true"],["map","key","rockosmodernlife.fandom.com","value","true"],["map","key","jerseyshore.fandom.com","value","true"],["map","key","magnumpi.fandom.com","value","true"],["map","key","sister-sister.fandom.com","value","true"],["map","key","beavisandbutthead.fandom.com","value","true"],["map","key","twilightzone.fandom.com","value","true"],["map","key","the-game-tv-series.fandom.com","value","true"],["map","key","missionimpossible.fandom.com","value","true"],["map","key","the-equalizer.fandom.com","value","true"],["map","key","younger.fandom.com","value","true"],["map","key","renandstimpy.fandom.com","value","true"],["map","key","doug.fandom.com","value","true"],["map","key","reno911.fandom.com","value","true"],["map","key","inspectorgadget.fandom.com","value","true"],["map","key","memory-alpha.fandom.com","value","true"],["map","key","stephenking.fandom.com","value","true"],["map","key","thegoodwife.fandom.com","value","true"],["map","key","whywomenkill.fandom.com","value","true"],["map","key","no-activity.fandom.com","value","true"],["map","key","survivor.fandom.com","value","true"],["map","key","cbs-all-rise.fandom.com","value","true"],["map","key","dora.fandom.com","value","true"],["map","key","henrydanger.fandom.com","value","true"],["map","key","bluesclues.fandom.com","value","true"],["map","key","peppapig.fandom.com","value","true"],["map","key","beingmaryjane.fandom.com","value","true"],["map","key","keyandpeele.fandom.com","value","true"],["map","key","avatar.fandom.com","value","true"],["map","key","fairlyoddparents.fandom.com","value","true"],["map","key","victorious.fandom.com","value","true"],["map","key","amazingrace.fandom.com","value","true"],["map","key","crankyankers.fandom.com","value","true"],["map","key","daria.fandom.com\/","value","true"],["map","key","swatcbs.fandom.com","value","true"]]
    },{
      "function":"__t"
    },{
      "function":"__vis",
      "vtp_elementId":"WikiaRailWrapper",
      "vtp_outputMethod":"BOOLEAN",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"1"
    },{
      "function":"__e"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-32129070-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__d",
      "vtp_elementId":"watch-show-affiliate-module-gtm__link",
      "vtp_attributeName":"href",
      "vtp_selectorType":"ID"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__j",
      "convert_null_to":"0",
      "convert_undefined_to":"0",
      "vtp_name":"window.wgUserId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=Geo||{};(a=a.getCountryCode())||(a=\"US\");return a})();"]
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"icid_source",
      "vtp_customUrlSource":["macro",45],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"icid_medium",
      "vtp_customUrlSource":["macro",45],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"icid_campaign",
      "vtp_customUrlSource":["macro",45],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"trackingTag"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"destinationURL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"urlType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"urlValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fandom-ads.excludeInterstials"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(mw\u0026\u0026mw.config){var a=mw.config.get(\"wgUserGroups\");if(a\u0026\u0026a.includes(\"staff\"))return!0}return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=!1;if(mw\u0026\u0026mw.config){var b=window.wgCanonicalNamespace;b\u0026\u00260!==b.length||(a=!0)}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"sg-beacon\";a:{b+=\"\\x3d\";for(var d=document.cookie.split(\";\"),c=0;c\u003Cd.length;c++){for(var a=d[c];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(b)){b=cv=a.substring(b.length,a.length);break a}}b=null}return b})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"sg-closed"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",56],8,16],";a=a\u0026\u0026void 0!==a\u0026\u0026\"\"!==a\u0026\u0026a!==location.hostname?\"false\":\"true\";var b=",["escape",["macro",57],8,16],";b\u0026\u0026void 0!==b\u0026\u0026\"\"!==b\u0026\u0026(a=\"false\");return a})();"]
    },{
      "function":"__d",
      "vtp_elementSelector":"#shoebox-applicationData",
      "vtp_selectorType":"CSS"
    },{
      "function":"__u",
      "convert_null_to":"false",
      "convert_undefined_to":"false",
      "vtp_component":"QUERY",
      "vtp_queryKey":"istestwiki",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"",["escape",["macro",59],7],"\";if(a=JSON.parse(a))return a.wikiVariables.isTestWiki;a=\"",["escape",["macro",60],7],"\";return\"true\"===a})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"force-surveygizmo",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"#hivi_leaderboard\";if(a=document.querySelector(a))if(hivi_classes=a.className.split(\" \")){if(hivi_classes.includes(\"hide\")||hivi_classes.includes(\"default-height\"))return!0;if(hivi_classes.includes(\"theme-hivi\")\u0026\u0026!hivi_classes.includes(\"theme-resolved\"))return!1}return!0})();"]
    },{
      "function":"__j",
      "vtp_name":"window.navigator.userAgent"
    },{
      "function":"__c",
      "vtp_value":"bb_interstitial_random_bucket"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(mw\u0026\u0026mw.config){var a=mw.config.get(\"wgUserGroups\");if(a\u0026\u0026a.includes(\"staff\"))return!0}return!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"wgDBname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"wgPageName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"wgArticleId"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":["macro",65]
    },{
      "function":"__v",
      "convert_null_to":"unknown",
      "convert_undefined_to":"unknown",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"wgArticleType"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"force-watchshow",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"div.aff-unit__wrapper\";return(a=document.querySelector(a))?a.attributes.getNamedItem(\"data-category\").nodeValue:\"unknown\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"div.aff-unit__wrapper\";return(a=document.querySelector(a))?a.attributes.getNamedItem(\"data-campaign\").nodeValue:\"unknown\"})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"delighted",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"optimizely-dimension-number"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"optimizely-dimension-value"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"force-paramount-watch-show-affiliate",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__dbg"
    },{
      "function":"__r"
    }],
  "tags":[{
      "function":"__html",
      "priority":10000,
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",42,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction swap_out_affiliate(a,d,c,f,e){if(a){var b=\".aff-unit__header\";b=document.querySelector(b);console.log(\"Looking for a heading node...\",b,a);b\u0026\u0026(b.innerHTML=a)}d\u0026\u0026(a=\"button.aff-unit__cta\",a=document.querySelector(a))\u0026\u0026(a.innerHTML=d);if(c){d=\"a.aff-unit__link\";a=c;if(b=document.querySelector(d))link_existing_href=b.href,!e\u0026\u0026link_existing_href\u0026\u0026link_existing_href.startsWith(\"https:\/\/services.fandom.com\/affiliate\/redirect\")\u0026\u0026(parsed_url=link_existing_href.split(\"?\",1))\u0026\u00261==parsed_url.length\u0026\u0026\n(a=parsed_url[0]+\"?r\\x3d\"+encodeURIComponent(c));if(b=document.querySelector(d))b.href=a,e\u0026\u0026b.addEventListener(\"click\",function(g){location.href=e;g.preventDefault()},!1)}f\u0026\u0026(c=\"div.aff-unit__image-wrapper\",(c=document.querySelector(c))\u0026\u0026c\u0026\u0026(c.style.backgroundImage=\"url('\"+f+\"')\"))}var affiliate_overrides=affiliate_overrides||{},aff_unit_selector=\"div.aff-unit__wrapper\",aff_unit_area=document.querySelector(aff_unit_selector);\nif(aff_unit_area\u0026\u00260\u003CObject.keys(affiliate_overrides).length){var aff_campaign=aff_unit_area.attributes.getNamedItem(\"data-campaign\"),aff_category=aff_unit_area.attributes.getNamedItem(\"data-category\"),country_code=",["escape",["macro",29],8,16],",by_wiki=affiliate_overrides.by_wiki,wikiId=wgCityId,articleId=wgArticleId;if(by_wiki\u0026\u0026wikiId\u0026\u0026by_wiki[wikiId]){var aod=by_wiki[wikiId].article;(aod=aod?by_wiki[wikiId].article[articleId]:by_wiki[wikiId])\u0026\u0026aod[country_code]\u0026\u0026(aff_override_data=aod[country_code],aff_heading=\naff_override_data.heading,aff_subheading=aff_override_data.subheading,aff_link=aff_override_data.link,aff_image=aff_override_data.image,aff_tracking_pixel=aff_override_data.tracking_pixel,swap_out_affiliate(aff_heading,aff_subheading,aff_link,aff_image,aff_tracking_pixel))}else if(aff_campaign\u0026\u0026aff_category\u0026\u0026country_code){var aff_campaign_overrides=affiliate_overrides[aff_campaign.nodeValue];if(aff_campaign_overrides){var aff_category_overrides=aff_campaign_overrides[aff_category.nodeValue];if(aff_category_overrides){var aff_override_data=\naff_category_overrides[country_code];aff_override_data\u0026\u0026(aff_heading=aff_override_data.heading,aff_subheading=aff_override_data.subheading,aff_link=aff_override_data.link,aff_image=aff_override_data.image,aff_tracking_pixel=aff_override_data.tracking_pixel,swap_out_affiliate(aff_heading,aff_subheading,aff_link,aff_image,aff_tracking_pixel))}}}};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":209
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_32458183_6",
      "tag_id":8
    },{
      "function":"__cegg",
      "metadata":["map"],
      "consent":["list"],
      "unlimited":true,
      "vtp_usersNumericId":"00978082",
      "tag_id":23
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_32458183_86",
      "tag_id":87
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":100
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":123
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",21],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":["macro",23],
      "vtp_eventLabel":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":146
    },{
      "function":"__cvt_32458183_149",
      "metadata":["map"],
      "once_per_event":true,
      "tag_id":150
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_32458183_162",
      "tag_id":164
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_32458183_162",
      "tag_id":173
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_32458183_162",
      "tag_id":174
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_32458183_162",
      "tag_id":175
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":177
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":178
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":199
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":206
    },{
      "function":"__cvt_32458183_212",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_dropDownMenu1ExpireType":"months",
      "vtp_checkbox1Secure":true,
      "vtp_text1CookieValue":["macro",28],
      "vtp_checkbox1Path":true,
      "vtp_text1Path":"\/",
      "vtp_checkbox1SameSite":false,
      "vtp_text1Domain":"fandom.com",
      "vtp_dropDownMenu1ExpireMonths":12,
      "vtp_text1CookieName":"last_known_wiki",
      "vtp_checkbox1Domain":true,
      "tag_id":213
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_32458183_162",
      "tag_id":215
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":221
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_32458183_162",
      "tag_id":223
    },{
      "function":"__cvt_32458183_162",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_destinationURL":"#",
      "vtp_interstitialsToRun":["list",["map","trackingTag","iframe_test_yesplease","iURL","https:\/\/cb.sailthru.com\/join\/6n2\/fandomemailsignup-interstitial-iframe-yesplease?utm_source=fandom\u0026utm_medium=interstitial\u0026utm_campaign=desk_iframe_rd6"]],
      "vtp_imageOrIframe":"iframe",
      "tag_id":227
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_32458183_162",
      "tag_id":229
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":233
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"1",
      "vtp_eventCategory":"interstitial",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"email-capture-submit",
      "vtp_eventLabel":"btn",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":243
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":245
    },{
      "function":"__cvt_32458183_247",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_heading":"Paramount+. This Is Peak Streaming.",
      "vtp_tracking_pixel":"",
      "vtp_imageUrl":"https:\/\/vignette.wikia.nocookie.net\/bbe07d43-a1db-45fc-bb11-3decd45854bc",
      "vtp_linkUrl":"https:\/\/www.paramountplus.com\/?ftag=PPM-06-10ade2b",
      "vtp_subheading":"Streaming March 4",
      "vtp_disclaimer":"",
      "tag_id":250
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",38],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",39],
      "vtp_eventAction":["macro",23],
      "vtp_eventLabel":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":253
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"watch-show-affiliate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",39],
      "vtp_eventAction":"click",
      "vtp_eventLabel":["macro",40],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":263
    },{
      "function":"__hl",
      "tag_id":264
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"50",
      "vtp_uniqueTriggerId":"32458183_157",
      "tag_id":265
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":".sg-b-in",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"32458183_180",
      "tag_id":266
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":".sg-b-p.sg-b-p-s",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"32458183_194",
      "tag_id":267
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div.aff-unit__wrapper",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_uniqueTriggerId":"32458183_203",
      "tag_id":268
    },{
      "function":"__cl",
      "tag_id":269
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"32458183_262",
      "tag_id":270
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=",["escape",["macro",19],8,16],",b=\"",["escape",["macro",18],7],"\";a=(parseInt(a,10)||0)+1;console.debug(\"new_impression_count\",a);$.cookie(b,a,{expires:30,path:\"\/\",domain:\"fandom.com\"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=$(\".wds-global-navigation__user-menu \\x3e div:nth-child(2) \\x3e ul:nth-child(1) \\x3e li:nth-child(1)\");window.wgUserId\u0026\u00260\u003Cwindow.wgUserId\u0026\u0026a\u0026\u00260\u003Ca.length?(window.dataLayer.push({event:\"Profile Menu\",action:\"addition\",label:\"",["escape",["macro",43],7]," - ",["escape",["macro",12],7],"\"}),a.after($('\\x3cli\\x3e\\x3ca id\\x3d\"bingebot-watchlist-profile-menu\" href\\x3d\"#bb_modal-watchlist-icid_source\\x3dfandom-icid_medium\\x3dprofile_dropdown-icid_campaign\\x3dwatchlist\" ref\\x3d\"https:\/\/bingebot.fandom.com\/watchlist?icid_source\\x3dfandom\\x26icid_medium\\x3dprofile-dropdown\\x26icid_campaign\\x3dwatchlist\" data-tracking-label\\x3d\"bingebot.watchlist\"\\x3eWatchlist\\x3cspan class\\x3d\"new-pill\"\\x3eNEW\\x3c\/span\\x3e\\x3c\/a\\x3e\\x3c\/li\\x3e'))):\nwindow.dataLayer.push({event:\"Profile Menu\",action:\"not-available\",label:\"",["escape",["macro",43],7]," - ",["escape",["macro",12],7],"\"})})();\u003C\/script\u003E\n\u003Cstyle\u003E\n  .new-pill {\n    float:right;\n    right:6px;\n    width: 31px;\n    height: 14px;\n    border-radius: 3px;\n    background-color: #ff776d;\n    color: #FFF;\n    display:inline; \n    font-size:10px;\n    font-weight:600;\n    padding: 2px 0px 2px 8px; \n  }"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":124
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cdiv id=\"bb_modal\" class=\"bb-modal\"\u003E\n  \u003Cimg class=\"bb-logo\" src=\"https:\/\/bingebot.fandom.com\/static\/media\/bingebot-logo-beta.70c0a22d.png\" alt=\"\"\u003E\n  \u003Cdiv class=\"bb-modal-content\"\u003E\n    \u003Cspan class=\"bb-close\"\u003E\n    \u003C\/span\u003E\n    \u003Ciframe id=\"bb-frame\" src=\"https:\/\/bingebot.fandom.com\/\" frameborder=\"0\" width=\"830\" height=\"590\"\u003E\u003C\/iframe\u003E\n  \u003C\/div\u003E\n\u003C\/div\u003E\n\u003Cstyle\u003E\n  .bb-modal {\n    align-items: center;\n    background-color: rgba(0, 42, 50, 0.85);\n    bottom: 0;\n    display: none;\n    justify-content: center;\n    left: 0;\n    overflow: auto;\n    position: fixed;\n    right: 0;\n    top: 0;\n    z-index: 9999999999999;\n  }\n\n  .bb-logo {\n    position: absolute;\n    top: calc(50% - 335px);\n    z-index: 1;\n  }\n\n  .bb-modal-content {\n    background: #002a32;\n    border: 1px solid rgba(0, 214, 214, 0.2);\n    border-radius: 9px;\n    padding: 9px;\n    position: relative;\n  }\n\n  .bb-close {\n    cursor: pointer;\n    line-height: 1;\n    position: absolute;\n    right: 0;\n    top: -40px;\n  }\n\n  .bb-close\u003Esvg {\n    height: 34px;\n    pointer-events: none;\n    width: 34px;\n  }\n\n\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar dL=window.dataLayer||[];\nif(!window.bb_modalIsActive){var event_name=\"bingebot-modal\";window.openBingeBotModal=function(a,b){var c=document.getElementById(\"bb_modal\").getElementsByClassName(\"bb-close\")[0];c.innerHTML='\\x3csvg xmlns\\x3d\"http:\/\/www.w3.org\/2000\/svg\" viewBox\\x3d\"0 0 34 34\"\\x3e\\x3cpath d\\x3d\"M25.456 23.913l-6.942-6.942 6.942-6.943a1.09 1.09 0 10-1.543-1.543l-6.942 6.943-6.943-6.943a1.09 1.09 0 10-1.543 1.543l6.943 6.943-6.943 6.942a1.09 1.09 0 101.543 1.543l6.943-6.943 6.942 6.943a1.09 1.09 0 101.543-1.543z\" fill\\x3d\"#fff\" \/\\x3e\\x3c\/svg\\x3e';a=\n\"https:\/\/bingebot.fandom.com\/\"+(a?a:\"\");b\u0026\u00260\u003Cb.length?a+=\"?\"+b.join(\"\\x26\"):(b=\"",["escape",["macro",45],7],"\",0\u003Cb.indexOf(\"bingebot.fandom.com\"))\u0026\u0026(a+=\"?icid_source\\x3d",["escape",["macro",46],7],"\\x26icid_medium\\x3d",["escape",["macro",47],7],"\\x26icid_campaign\\x3d",["escape",["macro",48],7],"\");document.getElementById(\"bb_modal\").style.display=\"flex\";document.getElementById(\"bb-frame\").src=a;dL.push({event:\"bingebot-modal\",action:\"impression\",label:a});window.bb_modalIsActive=!0};document.addEventListener(\"click\",function(a){var b=\ndocument.getElementById(\"bb_modal\");if(a.target.matches(\".bb-close\")||a.target===b)a.preventDefault(),b.style.display=\"none\",dL.push({event:\"bingebot-modal\",action:\"close\",label:a.target.matches(\".bb-close\")?\"x\":\"screen\"}),window.bb_modalIsActive=!1,window.location.hash=\"\"},!1);var hash_tag=",["escape",["macro",44],8,16],";if(hash_tag.indexOf(\"-\")){var hash_splits=hash_tag.split(\"-\"),page=hash_splits[1],params=hash_splits.slice(2,hash_splits.length);window.openBingeBotModal(page,params)}else window.openBingeBotModal()};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":155
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=",["escape",["macro",41],8,16],";a\u0026\u0026(0\u003Ca.indexOf(\"watchlist\")?window.openBingeBotModal(\"watchlist\"):window.openBingeBotModal());return!1})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":158
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cdiv id=\"im-modal-1\" class=\"im-modal\"\u003E\n  \u003Cdiv class=\"im-modal-content\"\u003E\n    \u003Cspan class=\"im-modal-close\"\u003E\u003Cbutton\u003ECLOSE\u003C\/button\u003E\u003C\/span\u003E\n    \u003Ca id=\"im-modal-link\" href=\"#\"\u003E\u003Cimg style=\"display:none\" src=\"\" id=\"im-modal-img\"\u003E\u003C\/a\u003E\n    \u003Ciframe id=\"im-modal-iframe\" style=\"display:none\" src=\"\" frameborder=\"0\" height=\"360\" width=\"360\"\u003E\u003C\/iframe\u003E\n\n  \u003C\/div\u003E\n\u003C\/div\u003E \n\u003Cstyle\u003E\n  #im-modal-iframe {\n    background-color: antiquewhite; \/* Fallback color *\/\n    \/*     background-color: rgba(0,0,0,0.4); Black w\/ opacity *\/\n  }\n  \/* The Modal (background) *\/\n  .im-modal {\n    display: none; \n    position: fixed; \/* Stay in place *\/\n    z-index: 10000000; \/* Sit on top *\/\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 100%;  \/* Full width *\/\n    height: 100%;  \/* Full height *\/\n    overflow: auto; \/* Enable scroll if needed *\/\n    background-color: rgb(0,0,0); \/* Fallback color *\/\n    background-color: rgba(0,0,0,0.7); \/* Black w\/ opacity *\/\n  }\n\n  \/* Modal Content\/Box *\/\n  .im-modal-content {\n\/**    background-color: #002b32; *\/\n    margin: 15% auto;  \/* 15% from the top and centered *\/\n    padding: 0; \n    \/*    border: 1px solid #888; *\/\n    width: 360px; \/* Could be more or less, depending on screen size *\/\n  }\n\n  \/* The Close Button *\/\n  .im-modal-close {\n    padding-right:10px;\n    z-index: 20000000; \/* Sit on tippy-top *\/\n    color: #B00001;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n\n  .im-modal-close:hover,\n  .im-modal-close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n  } \n\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Efunction fandom_interstitial_close(){var g=document.getElementById(\"im-modal-1\");g.style.display=\"none\"}\n(function(){var g=10,d=\"interstitial\",c=\"",["escape",["macro",49],7],"\",b=\"",["escape",["macro",50],7],"\",h=\"",["escape",["macro",51],7],"\",e=\"",["escape",["macro",52],7],"\",l=\"",["escape",["macro",31],7],"\";console.debug(h,e,l);setTimeout(function(){var a=!1,m=",["escape",["macro",53],8,16],";\"undefined\"!==typeof m\u0026\u0026(a=!0);if(!a){var k=document.getElementById(\"im-modal-1\");if(\"image\"===h){var f=document.getElementById(\"im-modal-img\");e\u0026\u0026(f.src=e+\"\/scale-to-width-down\/360\",f.style=\"display:block\");f=document.getElementsByClassName(\"im-modal-close\")[0];\na=document.getElementById(\"im-modal-link\");b\u0026\u00260===b.indexOf(\"#\")?a.href=b+\"--icid_source\\x3dfandom-icid_medium\\x3dinterstitial-icid_campaign\\x3d\"+c:b\u0026\u0026(0\u003Cb.indexOf(\"icid_\")||0\u003Cb.indexOf(\"utm_\")?a.href=b:a.href=b+\"?icid_source\\x3dfandom\\x26icid_medium\\x3dinterstitial\\x26icid_campaign\\x3d\"+c);a.onclick=function(){window.dataLayer.push({event:d,action:\"click\",label:c})}}else\"iframe\"===h\u0026\u0026(a=document.getElementById(\"im-modal-iframe\"),a.src=e,a.style=\"display:block\");k.onclick=function(){window.dataLayer.push({event:d,\naction:\"close-x\",label:c});window.fandom_interstitial_close()};k.style.display=\"block\";window.dataLayer.push({event:d,action:\"impression\",label:c});f.onclick=function(){window.dataLayer.push({event:d,action:\"close-x\",label:c});window.fandom_interstitial_close()};window.onclick=function(n){n.target==k\u0026\u0026(window.dataLayer.push({event:d,action:\"close-screen\",label:c}),window.fandom_interstitial_close())}}},1E3*g)})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":165
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar name=\"sg-beacon\",value=location.hostname,days=30,expires=\"\";if(days){var date=new Date;date.setTime(date.getTime()+864E5*days);expires=\"; expires\\x3d\"+date.toUTCString()}var cv=name+\"\\x3d\"+(value||\"\")+expires+\"; path\\x3d\/; domain\\x3dfandom.com \";document.cookie=cv;\u003C\/script\u003E  ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":191
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",40,1]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){require([\"wikia.trackingOptIn\",\"mw\"],function(m,b){function h(){$.cookie(\"sg-closed\",location.href,{expires:30});$(\".wds-banner-notification__container\").slideUp()}function n(){var a=$(\".banner-notifications-placeholder\");if(a){var e=$('\\x3cdiv class\\x3d\"wds-banner-notification__container\"\\x3e\\x3cdiv class\\x3d\"wds-banner-notification wds-message message\"\\x3e\\x3cdiv class\\x3d\"wds-banner-notification__icon\"\\x3e\\x3csvg class\\x3d\"wds-icon wds-icon-small\" xmlns\\x3d\"http:\/\/www.w3.org\/2000\/svg\" width\\x3d\"18\" height\\x3d\"18\" viewBox\\x3d\"0 0 18 18\"\\x3e\\x3cpath id\\x3d\"flag-small\" d\\x3d\"M3 11h10.586l-3.293-3.293a.999.999 0 0 1 0-1.414L13.586 3H3v8zm-1 7a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0h13a1.002 1.002 0 0 1 .707 1.707L12.414 7l4.293 4.293A1 1 0 0 1 16 13H3v4a1 1 0 0 1-1 1z\"\\x3e\\x3c\/path\\x3e\\x3c\/svg\\x3e\\x3c\/div\\x3e\\x3cspan class\\x3d\"wds-banner-notification__text\" id\\x3d\"surveygizmo_bar\"\\x3e\\x3c\/span\\x3e\\x3csvg id\\x3d\"sg-close\" class\\x3d\"wds-icon wds-icon-tiny wds-banner-notification__close\" width\\x3d\"12\" height\\x3d\"12\" viewBox\\x3d\"0 0 12 12\" xmlns\\x3d\"http:\/\/www.w3.org\/2000\/svg\"\\x3e\\x3cpath d\\x3d\"M7.426 6.001l4.278-4.279A1.008 1.008 0 1 0 10.278.296L6 4.574 1.723.296A1.008 1.008 0 1 0 .295 1.722l4.278 4.28-4.279 4.277a1.008 1.008 0 1 0 1.427 1.426L6 7.427l4.278 4.278a1.006 1.006 0 0 0 1.426 0 1.008 1.008 0 0 0 0-1.426L7.425 6.001z\" fill-rule\\x3d\"evenodd\"\\x3e\\x3c\/path\\x3e\\x3c\/svg\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e');\na.prepend(e);$(\".wds-banner-notification__container\").hide();(function(c,k,l,p,d,f,g){c.SurveyGizmoBeacon=d;c[d]=c[d]||function(){(c[d].q=c[d].q||[]).push(arguments)};f=k.createElement(l);g=k.getElementsByTagName(l)[0];f.async=1;f.src=p;g.parentNode.insertBefore(f,g)})(window,document,\"script\",\"\/\/d2bnxibecyz4h5.cloudfront.net\/runtimejs\/intercept\/intercept.js\",\"sg_beacon\");sg_beacon(\"init\",\"NjkxMjIwLTUxZTkwMGQyMWY2NmFhMmE1MDkxMGViNzkxOTRkMmI3NjdjMWVjZTMzZGRmNzQ0MDNm\");a=window.dartGnreValues||[];window.visitorType=\n-1\u003Cdocument.cookie.indexOf(\"__utma\")?\"Returning\":\"New\";sg_beacon(\"data\",\"contentLanguage\",b.config.get(\"wgContentLanguage\"));sg_beacon(\"data\",\"userLanguage\",b.config.get(\"wgUserLanguage\"));sg_beacon(\"data\",\"pageType\",window.wikiaPageType);sg_beacon(\"data\",\"isCorporatePage\",window.wikiaPageIsCorporate?\"Yes\":\"No\");sg_beacon(\"data\",\"verticalName\",b.config.get(\"verticalName\"));sg_beacon(\"data\",\"fullVerticalName\",b.config.get(\"fullVerticalName\"));sg_beacon(\"data\",\"visitorType\",b.config.get(\"visitorType\"));\nsg_beacon(\"data\",\"isLoggedIn\",!!b.config.get(\"wgUserName\"));sg_beacon(\"data\",\"cpBenefitsModalShown\",-1\u003Cdocument.cookie.indexOf(\"cpBenefitsModalShown\"));sg_beacon(\"data\",\"isContributor\",window.isContributor);sg_beacon(\"data\",\"isCurrentWikiAdmin\",window.isCurrentWikiAdmin);sg_beacon(\"data\",\"wgDartCustomKeyValues\",a);sg_beacon(\"data\",\"isDartGnreAdventure\",-1\u003Ca.indexOf(\"adventure\"));sg_beacon(\"data\",\"isDartGnreAction\",-1\u003Ca.indexOf(\"action\"));sg_beacon(\"data\",\"isDartGnreFantasy\",-1\u003Ca.indexOf(\"fantasy\"));\nsg_beacon(\"data\",\"isDartGnreRpg\",-1\u003Ca.indexOf(\"rpg\"));sg_beacon(\"data\",\"isDartGnreScifi\",-1\u003Ca.indexOf(\"scifi\"));sg_beacon(\"data\",\"isDartGnreOpenworld\",-1\u003Ca.indexOf(\"openworld\"));sg_beacon(\"data\",\"isDartGnreFighting\",-1\u003Ca.indexOf(\"fighting\"));sg_beacon(\"data\",\"isDartGnreDrama\",-1\u003Ca.indexOf(\"drama\"));sg_beacon(\"data\",\"isDartGnreCasual\",-1\u003Ca.indexOf(\"casual\"));sg_beacon(\"data\",\"isDartGnreAnime\",-1\u003Ca.indexOf(\"anime\"));sg_beacon(\"data\",\"isDartGnreShooter\",-1\u003Ca.indexOf(\"shooter\"));sg_beacon(\"data\",\"isDartGnreCartoon\",\n-1\u003Ca.indexOf(\"cartoon\"));sg_beacon(\"data\",\"isDartGnreComedy\",-1\u003Ca.indexOf(\"comedy\"));sg_beacon(\"data\",\"isDartGnre3rdpersonshooter\",-1\u003Ca.indexOf(\"3rdpersonshooter\"));sg_beacon(\"data\",\"isDartGnreFps\",-1\u003Ca.indexOf(\"fps\"));sg_beacon(\"data\",\"isDartGnreHorror\",-1\u003Ca.indexOf(\"horror\"));sg_beacon(\"data\",\"isDartGnreDriving\",-1\u003Ca.indexOf(\"driving\"));sg_beacon(\"data\",\"isDartGnreSports\",-1\u003Ca.indexOf(\"sports\"));window.dataLayer.push({event:\"Survey\",action:\"insert-success\",label:\"",["escape",["macro",30],7]," - \"+location.href});\n$(document).on(\"click\",\"#sg-close\",h)}}m.pushToUserConsentQueue(function(a){a?(a=$(\".wds-banner-notification__container\"))\u0026\u00260!==a.length?window.dataLayer.push({event:\"Survey\",action:\"existing-banner\",label:\"",["escape",["macro",30],7]," - \"+location.href}):(a=\"",["escape",["macro",63],7],"\",\"\"!=a?(n(),setTimeout(function(){var e=$(\".sg-b-in\");e\u0026\u00260\u003Ce.length\u0026\u0026(console.log(\"SuveryGizmo Survey is Present, open up unit.\"),$(\".wds-banner-notification__container\").show(),$(document).on(\"click\",\".sg-b-l-m\",h))},1E3)):window.dataLayer.push({event:\"Survey\",\naction:\"uap-blocked\",label:\"",["escape",["macro",30],7]," - \"+location.href})):window.dataLayer.push({event:\"Survey\",action:\"opted-out\",label:\"",["escape",["macro",30],7]," - \"+location.href})})})})();\u003C\/script\u003E\n\u003Cstyle\u003E\n  .sg-b-l-t {display: none;}\n  .sg-b-l-m {display: block;}\n\n  \/**\n  .surveygizmo-bar-wrapper {\n  width: 1024px;\n  background-color: #002a32; \n  margin-top: 1px;\n  margin-left: 10px;\n  margin-right: 10px;\n  padding:0;\n  }\n  .sg-close {\n  float: right;\n  margin: 5px 10px;\n  color: #FFF;\n  font-weight: bolder;\n  cursor: pointer;\n  }\n\n\n  **\/  \n  #sg-b-t-desc {\n    display:inline;\n    color: #000;\n    background-color: #FFF;\n  }\n\n\n  .sg-b-in, .sg-b-h a, .sg-b-f a, .sg-b-p-t a, .sg-b-in a {\n    background-color: #FFF;\n    text-align:left;\n    font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  }\n\n  .sg-b-l-m {\n    margin-left:10px;\n    display:inline;\n    background-color: #FFF;\n    color:blue;\n  }\n  \/**  \n  div.sg-b-p.sg-b-p-s {\n  margin-top:75px;\n  min-height:45px;\n  left:10px;\n  right:10px;\n  }\n  div.sg-b-p {\n  min-height:620px;\n  height: 500px;\n  }\n  div.sg-b-p.sg-b-p-s \u003E div.sg-b-p-t {\n  padding: 5px;\n  }\n  **\/\n\u003C\/style\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":192
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar affiliate_overrides={},now=new Date,hbomax_start_date_1=new Date(\"May 27, 2020 00:00:00\"),hbomax_end_date=new Date(\"Dec 31, 2020 11:59:59\");now=new Date;\nif(0\u003Clocation.href.indexOf(\"showhbomax\\x3dtrue\")||now.getTime()\u003E=hbomax_start_date_1.getTime()\u0026\u0026now.getTime()\u003Chbomax_end_date.getTime())affiliate_overrides.by_wik={147:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}},130814:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}},984:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}},74:{article:{179836:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}}}},\n125:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}},159:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}},1228:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}},2237:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}},621556:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}},\n881799:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}},24357:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}},1024023:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}}};affiliate_overrides.ddb={ddb:{US:{heading:\"Get everything you need to play D\\x26D today\",subheading:\"BEGIN YOUR ADVENTURE\",image:\"https:\/\/static.wikia.nocookie.net\/f5b6c309-5ab5-44d7-bcec-d585f3816946\"}}};\naffiliate_overrides.disneyplus={disney:{PT:{heading:\"Apenas 6,99\\u20ac\/m\\u00eas ou 69,99\\u20ac\/ano\",subheading:\"Subscreva j\\u00e1\",link:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_PT\\x26subId2\\x3dnordic_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",image:\"https:\/\/static.wikia.nocookie.net\/5f9070fd-35af-488c-9f4b-7f168fd606af\"},BE:{heading:\"Du divertissement en continu pour seulement \\u20ac6,99 par mois\",subheading:\"Inscrivez-vous\",link:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_BE\\x26subId2\\x3dnordic_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",\nimage:\"https:\/\/static.wikia.nocookie.net\/8e08763f-6ae8-4996-924a-80ac71a96b95\"},SE:{heading:\"69 kr per m\\u00e5nad eller 689 kr f\\u00f6r ett helt \\u00e5r\",subheading:\"Registrera dig nu\",link:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_SE\\x26subId2\\x3dnordic_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",image:\"https:\/\/static.wikia.nocookie.net\/8e08763f-6ae8-4996-924a-80ac71a96b95\"},DK:{heading:\"59kr. om m\\u00e5neden eller 589 kr. om \\u00e5ret\",subheading:\"Tilmeld dig nu\",\nlink:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_DK\\x26subId2\\x3dnordic_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",image:\"https:\/\/static.wikia.nocookie.net\/8e08763f-6ae8-4996-924a-80ac71a96b95\"},FI:{heading:\"6,99 \\u20ac kuukaudessa tai 69,99 \\u20ac vuodessa\",subheading:\"Rekister\\u00f6idy nyt\",link:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_FI\\x26subId2\\x3dnordic_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",image:\"https:\/\/static.wikia.nocookie.net\/8e08763f-6ae8-4996-924a-80ac71a96b95\"},\nNO:{heading:\"69 kr per m\\u00e5ned eller 689 kr per \\u00e5r\",subheading:\"Registrer deg n\\u00e5\",link:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_NO\\x26subId2\\x3dnordic_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",image:\"https:\/\/static.wikia.nocookie.net\/8e08763f-6ae8-4996-924a-80ac71a96b95\"},AR:{heading:\"Todo en un mismo lugar. Solo $385\/mes\",subheading:\"sugerido para ti\",link:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_AR\\x26subId2\\x3dlatam_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",\nimage:\"https:\/\/static.wikia.nocookie.net\/fbb9a6c9-2318-49c0-8e4f-709cddbac8df\"},BR:{heading:\"Tudo em um s\\u00f3 lugar. Apena R$ 27,90\/m\\u00e9s\",subheading:\"Sugest\\u00f5es para voc\\u00ea\",link:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_BR\\x26subId2\\x3dlatam_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",image:\"https:\/\/static.wikia.nocookie.net\/fbb9a6c9-2318-49c0-8e4f-709cddbac8df\"},CL:{heading:\"Todo en un mismo lugar. Solo CLP 6.500\/mes\",subheading:\"sugerido para ti\",\nlink:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_CL\\x26subId2\\x3dlatam_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",image:\"https:\/\/static.wikia.nocookie.net\/fbb9a6c9-2318-49c0-8e4f-709cddbac8df\"},MX:{heading:\"Todo en un mismo lugar. Solo MXN 159\/mes\",subheading:\"sugerido para ti\",link:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_MX\\x26subId2\\x3dlatam_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",image:\"https:\/\/static.wikia.nocookie.net\/fbb9a6c9-2318-49c0-8e4f-709cddbac8df\"},\nCO:{heading:\"Todo en un mismo lugar. Solo COP 23.900\/mes\",subheading:\"sugerido para ti\",link:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_CO\\x26subId2\\x3dlatam_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",image:\"https:\/\/static.wikia.nocookie.net\/fbb9a6c9-2318-49c0-8e4f-709cddbac8df\"},PE:{heading:\"Todo en un mismo lugar. Solo Pen 25.90\/mes\",subheading:\"sugerido para ti\",link:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_PE\\x26subId2\\x3dlatam_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",\nimage:\"https:\/\/static.wikia.nocookie.net\/fbb9a6c9-2318-49c0-8e4f-709cddbac8df\"}}};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":207
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EsessionStorage.setItem(\"last_know_wiki_in_session\",\"",["escape",["macro",28],7],"\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":214
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar affiliate_overrides={},now=new Date,hbomax_start_date_1=new Date(\"May 27, 2020 00:00:00\"),hbomax_end_date=new Date(\"Dec 31, 2020 11:59:59\");now=new Date;\nif(0\u003Clocation.href.indexOf(\"showhbomax\\x3dtrue\")||now.getTime()\u003E=hbomax_start_date_1.getTime()\u0026\u0026now.getTime()\u003Chbomax_end_date.getTime())affiliate_overrides.by_wik={147:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}},130814:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}},984:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}},74:{article:{179836:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}}}},\n125:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}},159:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}},1228:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}},2237:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}},621556:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}},\n881799:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}},24357:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}},1024023:{US:{tracking_pixel:\"https:\/\/pubads.g.doubleclick.net\/gampad\/clk?id\\x3d5378625813\\x26iu\\x3d\/5441\"}}};console.log(\"Aff Overrides\",affiliate_overrides);affiliate_overrides.ddb={ddb:{US:{heading:\"Get everything you need to play D\\x26D today\",subheading:\"BEGIN YOUR ADVENTURE\",image:\"https:\/\/static.wikia.nocookie.net\/f5b6c309-5ab5-44d7-bcec-d585f3816946\"}}};\naffiliate_overrides.disneyplus={disney:{PT:{heading:\"Apenas 6,99\\u20ac\/m\\u00eas ou 69,99\\u20ac\/ano\",subheading:\"Subscreva j\\u00e1\",link:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_PT\\x26subId2\\x3dnordic_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",image:\"https:\/\/static.wikia.nocookie.net\/5f9070fd-35af-488c-9f4b-7f168fd606af\"},BE:{heading:\"Du divertissement en continu pour seulement \\u20ac6,99 par mois\",subheading:\"Inscrivez-vous\",link:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_BE\\x26subId2\\x3dnordic_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",\nimage:\"https:\/\/static.wikia.nocookie.net\/8e08763f-6ae8-4996-924a-80ac71a96b95\"},SE:{heading:\"69 kr per m\\u00e5nad eller 689 kr f\\u00f6r ett helt \\u00e5r\",subheading:\"Registrera dig nu\",link:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_SE\\x26subId2\\x3dnordic_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",image:\"https:\/\/static.wikia.nocookie.net\/8e08763f-6ae8-4996-924a-80ac71a96b95\"},DK:{heading:\"59kr. om m\\u00e5neden eller 589 kr. om \\u00e5ret\",subheading:\"Tilmeld dig nu\",\nlink:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_DK\\x26subId2\\x3dnordic_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",image:\"https:\/\/static.wikia.nocookie.net\/8e08763f-6ae8-4996-924a-80ac71a96b95\"},FI:{heading:\"6,99 \\u20ac kuukaudessa tai 69,99 \\u20ac vuodessa\",subheading:\"Rekister\\u00f6idy nyt\",link:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_FI\\x26subId2\\x3dnordic_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",image:\"https:\/\/static.wikia.nocookie.net\/8e08763f-6ae8-4996-924a-80ac71a96b95\"},\nNO:{heading:\"69 kr per m\\u00e5ned eller 689 kr per \\u00e5r\",subheading:\"Registrer deg n\\u00e5\",link:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_NO\\x26subId2\\x3dnordic_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",image:\"https:\/\/static.wikia.nocookie.net\/8e08763f-6ae8-4996-924a-80ac71a96b95\"},AR:{heading:\"Todo en un mismo lugar. Solo $385\/mes\",subheading:\"sugerido para ti\",link:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_AR\\x26subId2\\x3dlatam_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",\nimage:\"https:\/\/static.wikia.nocookie.net\/fbb9a6c9-2318-49c0-8e4f-709cddbac8df\"},BR:{heading:\"Tudo em um s\\u00f3 lugar. Apena R$ 27,90\/m\\u00e9s\",subheading:\"Sugest\\u00f5es para voc\\u00ea\",link:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_BR\\x26subId2\\x3dlatam_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",image:\"https:\/\/static.wikia.nocookie.net\/fbb9a6c9-2318-49c0-8e4f-709cddbac8df\"},CL:{heading:\"Todo en un mismo lugar. Solo CLP 6.500\/mes\",subheading:\"sugerido para ti\",\nlink:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_CL\\x26subId2\\x3dlatam_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",image:\"https:\/\/static.wikia.nocookie.net\/fbb9a6c9-2318-49c0-8e4f-709cddbac8df\"},MX:{heading:\"Todo en un mismo lugar. Solo MXN 159\/mes\",subheading:\"sugerido para ti\",link:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_MX\\x26subId2\\x3dlatam_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",image:\"https:\/\/static.wikia.nocookie.net\/fbb9a6c9-2318-49c0-8e4f-709cddbac8df\"},\nCO:{heading:\"Todo en un mismo lugar. Solo COP 23.900\/mes\",subheading:\"sugerido para ti\",link:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_CO\\x26subId2\\x3dlatam_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",image:\"https:\/\/static.wikia.nocookie.net\/fbb9a6c9-2318-49c0-8e4f-709cddbac8df\"},PE:{heading:\"Todo en un mismo lugar. Solo Pen 25.90\/mes\",subheading:\"sugerido para ti\",link:\"https:\/\/disneyplus.bn5x.net\/c\/1947570\/871867\/9358?subId1\\x3dgeneric_PE\\x26subId2\\x3dlatam_sale\\x26subId3\\x3dbanner-fandom\\x26sharedId\\x3dwiki_desktop\",\nimage:\"https:\/\/static.wikia.nocookie.net\/fbb9a6c9-2318-49c0-8e4f-709cddbac8df\"}}};console.log(\"Aff Overrides 2\",affiliate_overrides);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":217
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"EmailCapture_Success\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":231
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cstyle\u003E\n\n  h2.watch-show__cta-header {\n    border-bottom: 1px solid #bfbfbf;\n    padding-top: 5px;\n  }\n\n  .watch-show__disclaimer-message {\n    background-color: rgba(58,58,58,0.1);\n    \/* color: #3a3a3a; *\/\n    font-size: 8px;\n    font-style: italic;\n    letter-spacing: .02px;\n    line-height: 1.5;\n    margin-top: 15px;\n    padding: 10px;\n    position: relative;\n  }\n  .watch-show__image {\n    width: 35px;\n    margin-left: 12px;\n    border-radius: 5px;\n  }\n\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var c=window.dataLayer||[],a=window.watch_show_affiliates||[];if(0\u003Cwindow.watch_show_affiliates.length){a=a[0];var e=\"watch-show-affiliate\",d=\"#WikiaRail\",b=",["escape",["macro",63],8,16],";b\u0026\u0026(d=\"#WikiaRailWrapper\");d=$(d);var f=a.tracking_pixel;b=\"#watch-show-rail-module\";if(b=document.querySelector(b))c.push({event:e,action:\"hide unit\",label:location.href}),$(b).addClass(\"wds-is-hidden\");if(d){b='\\x3csection class\\x3d\"rail-module watch-show\" id\\x3d\"watch-show-rail-module-gtm\" data-tracking-pixel\\x3d\"\"\\x3e\\x3ch2 class\\x3d\"watch-show__cta-header\"\\x3e'+\na.heading+'\\x3c\/h2\\x3e\\x3cdiv class\\x3d\"watch-show__content\"\\x3e\\x3ca id\\x3d\"watch-show-affiliate-module-gtm__link\" href\\x3d\"'+a.linkUrl+'\" class\\x3d\"wds-button wds-is-secondary\" target\\x3d\"_blank\" rel\\x3d\"noopener sponsored\"\\x3e'+a.subheading+'\\x3c\/a\\x3e\\x3cimg src\\x3d\"'+a.imageUrl+'\" alt\\x3d\"'+a.heading+'\" class\\x3d\"watch-show__image\"\\x3e\\x3c\/div\\x3e';var g=a.disclaimer;g\u0026\u0026\"\"!=g\u0026\u0026(b+='\\x3cp class\\x3d\"watch-show__disclaimer-message\" \\x3e'+(a.disclaimer||\"\")+\"\\x3c\/p\\x3e\");b+=\"\\x3c\/section\\x3e\";b=\n$(b);d.prepend(b);$(\"#watch-show-rail-module-gtm\")?c.push({event:e,action:\"impression\",label:JSON.stringify(a)}):c.push({event:e,action:\"impression-no-worky\",label:JSON.stringify(a)});c=$(\"#watch-show-affiliate-module-gtm__link\");c.click(function(h){dL.push({event:e,action:\"click\",label:location.href});f\u0026\u0026(h=new Image,h.src=f)})}}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":256
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"allowedToSeeShopLink"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"hydra"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_ge",
      "arg0":["macro",2],
      "arg1":"1"
    },{
      "function":"_le",
      "arg0":["macro",2],
      "arg1":"20"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"US"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"tv"
    },{
      "function":"_le",
      "arg0":["macro",13],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"true"
    },{
      "function":"_gt",
      "arg0":["macro",15],
      "arg1":"1"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"false"
    },{
      "function":"_lt",
      "arg0":["macro",19],
      "arg1":"1"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"interstitial"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"shop_link_test"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Survey"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"avatar.fandom.com"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"the-boys.fandom.com"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"memory-alpha.fandom.com"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"spongebob.fandom.com"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"insert unit"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"right column affiliate"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"(^$|((^|,)32458183_203($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"\/wiki\/"
    },{
      "function":"_ge",
      "arg0":["macro",15],
      "arg1":"2"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"US"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"ucp"
    },{
      "function":"_le",
      "arg0":["macro",32],
      "arg1":"50"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":".fandom.com"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"adamg2"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"mobile-wiki"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"linkst.fandom.com"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"btn"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"test-adams-stuff=true"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"watch-show-affiliate"
    },{
      "function":"_sw",
      "arg0":["macro",40],
      "arg1":"http"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"(^$|((^|,)32458183_262($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",41],
      "arg1":"bingebot.fandom.com"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"impression"
    },{
      "function":"_gt",
      "arg0":["macro",42],
      "arg1":"0"
    },{
      "function":"_sw",
      "arg0":["macro",44],
      "arg1":"bb_modal"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.historyChange"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"(^$|((^|,)32458183_157($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"oasis"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"interstitial_push_to_fire"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",58],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",61],
      "arg1":"true"
    },{
      "function":"_gt",
      "arg0":["macro",30],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",62],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"click"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"email-capture"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"email_capture_nb1"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"SiteWideMessage"
    }],
  "rules":[
    [["if",0],["add",1]],
    [["if",1,2],["add",2]],
    [["if",3],["add",3,43,28,30,31,32,33,34]],
    [["if",3,4,5,6,7],["add",4]],
    [["if",3,8],["add",4]],
    [["if",3,9],["add",4]],
    [["if",2,7,10,11,12,13,14,15,16],["add",5]],
    [["if",2,17],["add",5,8,17,19,21,22]],
    [["if",18],["add",6]],
    [["if",19],["add",6]],
    [["if",20],["add",6]],
    [["if",7,10,21],["add",7]],
    [["if",7,12,13,14,16,21,22],["add",8]],
    [["if",7,12,13,14,16,21,23],["add",9]],
    [["if",7,12,13,14,16,21,24],["add",10]],
    [["if",7,12,13,14,16,21,25],["add",11]],
    [["if",12,21],["add",12,13]],
    [["if",26,27],["add",14]],
    [["if",28,29],["add",15]],
    [["if",21,30],["add",16]],
    [["if",7,10,12,13,14,16,21],["add",17]],
    [["if",3,31,32,33],["add",18]],
    [["if",2,7,12,13,14,16,33,34,35,36],["add",19,22]],
    [["if",2,37],["add",20]],
    [["if",2,7,12,13,14,16,33,34,36],["add",20]],
    [["if",7,12,13,14,16,17,21,33,38],["add",21]],
    [["if",39,40,41],["add",23]],
    [["if",21,42],["add",24]],
    [["if",3,32,43],["add",25]],
    [["if",12,44,45],["add",26,46]],
    [["if",46,47,48],["add",27]],
    [["if",3,49],["add",29]],
    [["if",18,50],["add",35]],
    [["if",7,21,51],["add",36]],
    [["if",3,52],["add",37]],
    [["if",52,53],["add",37]],
    [["if",47,54],["add",38]],
    [["if",55,56],["add",39]],
    [["if",21,36,57,58,59,61],["unless",60],["add",40,41]],
    [["if",21,62],["add",40,41]],
    [["if",2],["add",42,0,44]],
    [["if",18,63,64],["add",45]],
    [["if",63,65,66],["add",45]],
    [["block",42]]]
},
"runtime":[[50,"__cvt_32458183_149",[46,"a"],[50,"m",[46,"s"],[36,[26,12,2629800]]],[50,"n",[46],[36,true]],[50,"p",[46,"s","t","u"],["b","CVT","Pushing to dL and C"],[52,"v",["f","dataLayer"]],[52,"w",[2,[15,"s"],"reduce",[7,[51,"",[7,"x","y"],[36,[8,"pv",[0,[17,[15,"x"],"pv"],[17,[15,"y"],"pv"]]]]]]]],["v",[8,"event","cityListCounts","action","update","label",[0,"communities: ",[17,[15,"s"],"length"]]]],["d",[15,"t"],[2,[15,"j"],"stringify",[7,[15,"s"]]],[15,"u"]]],[52,"b",["require","logToConsole"]],[52,"c",["require","generateRandom"]],[52,"d",["require","setCookie"]],[52,"e",["require","getCookieValues"]],[52,"f",["require","createQueue"]],[52,"g",["require","makeString"]],[52,"h",["require","copyFromWindow"]],[52,"i",["require","copyFromDataLayer"]],[52,"j",["require","JSON"]],[52,"k",[17,[15,"a"],"text1CookieName"]],[52,"l",[17,[15,"a"],"dataLayerVarName"]],[52,"o",[8,"domain","fandom.com","path","/","max-age",["m"],"expires",0,"samesite",false,"secure",["n"]]],["b",[15,"o"]],[52,"q","fandom_tv_city_list_counts"],[52,"r",["h","wgCityId"]],[22,[15,"r"],[46,[53,["b","CVT","Got wgCityID",[15,"r"]],[52,"s",["e",[15,"q"]]],[22,[30,[28,[15,"s"]],[20,[17,[15,"s"],"length"],0]],[46,[53,["b","CVT","No Existing city counts"],[52,"t",[7,[8,"c",[15,"r"],"pv",1]]],["p",[15,"t"],[15,"q"],[15,"o"]]]],[46,[53,["b","CVT",[15,"s"]],[41,"t"],[3,"t",[2,[15,"j"],"parse",[7,[16,[15,"s"],0]]]],[22,[1,[15,"t"],[18,[17,[15,"t"],"length"],0]],[46,[53,["b","CVT","Got city counts",[15,"t"]],[41,"u"],[3,"u",false],[2,[15,"t"],"forEach",[7,[51,"",[7,"v"],[22,[20,[17,[15,"v"],"c"],[15,"r"]],[46,[3,"u",true],[33,[17,[15,"v"],"pv"],[43,[15,"v"],"pv",[0,[17,[15,"v"],"pv"],1]]]]]]]],["b","CVT","Did we increment?",[15,"t"]],[22,[1,[28,[15,"u"]],[19,[17,[15,"t"],"length"],10]],[46,[2,[15,"t"],"sort",[7,[51,"",[7,"v","w"],[36,[39,[18,[17,[15,"v"],"pv"],[17,[15,"w"],"pv"]],1,[27,1]]]]]],[3,"t",[2,[15,"t"],"slice",[7,0,8]]],[2,[15,"t"],"push",[7,[8,"c",[15,"r"],"pv",1]]],["b","CVT","Had too many, but shouldn\u0027t now...",[15,"t"]]],[46,[22,[28,[15,"u"]],[46,[2,[15,"t"],"push",[7,[8,"c",[15,"r"],"pv",1]]],["b","CVT","Pushing a new one",[15,"t"]]],[46,["b","CVT","Should have just incremeneted, right?",[15,"t"]]]]]],[22,[19,[17,[15,"t"],"length"],5],[46,[53,[52,"v",["f","dataLayer"]],["v",[8,"event","cityListCounts","action","output","label",[2,[15,"j"],"stringify",[7,[15,"t"]]]]]]]],["p",[15,"t"],[15,"q"],[15,"o"]]]]]]]]]],[46,["b","CVT","Didn\u0027t got wgCityID",[15,"r"]]]],[2,[15,"a"],"gtmOnSuccess",[7]]],[50,"__cvt_32458183_162",[46,"a"],[41,"g","h"],[52,"b",["require","logToConsole"]],[52,"c",["require","generateRandom"]],[52,"d",["require","createQueue"]],[52,"e",[17,[15,"a"],"interstitialsToRun"]],[52,"f",[17,[15,"a"],"destinationURL"]],["b","interstitialsToRun \u003d",[15,"e"]],[3,"g",[16,[15,"e"],["c",0,[37,[17,[15,"e"],"length"],1]]]],[3,"h",["c",1023124,5429345]],[41,"i"],[3,"i",[17,[15,"g"],"iURL"]],[41,"j"],[3,"j",[17,[15,"a"],"imageOrIframe"]],[22,[20,[15,"j"],"iframe"],[46,[22,[18,[2,[15,"j"],"indexOf",[7,"?"]],0],[46,[3,"i",[0,[0,[17,[15,"g"],"iURL"],"\u0026rnd\u003d"],[15,"h"]]]],[46,[3,"i",[0,[0,[17,[15,"g"],"iURL"],"?rnd\u003d"],[15,"h"]]]]]]],[41,"k"],[3,"k",[8,"event","interstitial_push_to_fire","trackingTag",[17,[15,"g"],"trackingTag"],"urlType",[15,"j"],"urlValue",[17,[15,"g"],"iURL"],"destinationURL",[15,"f"]]],["b","objToPush",[15,"k"]],[52,"l",["d","dataLayer"]],["l",[15,"k"]],[2,[15,"a"],"gtmOnSuccess",[7]]],[50,"__cvt_32458183_212",[46,"a"],[50,"r",[46,"u"],[22,[20,[15,"u"],"minute"],[46,[36,[26,[15,"g"],60]]],[46,[22,[20,[15,"u"],"hour"],[46,[36,[26,[15,"h"],3600]]],[46,[22,[20,[15,"u"],"day"],[46,[36,[26,[15,"i"],86400]]],[46,[22,[20,[15,"u"],"months"],[46,[36,[26,[15,"j"],2629800]]]]]]]]]]],[50,"s",[46,"u"],[22,[30,[20,[15,"u"],true],[20,[15,"p"],true]],[46,[36,true]]]],[52,"b",["require","logToConsole"]],[52,"c",["require","setCookie"]],[52,"d",["require","queryPermission"]],[52,"e",[17,[15,"a"],"text1CookieName"]],[52,"f",[17,[15,"a"],"text1CookieValue"]],[52,"g",[17,[15,"a"],"dropDownMenu1ExpireMinute"]],[52,"h",[17,[15,"a"],"dropDownMenu1ExpireHour"]],[52,"i",[17,[15,"a"],"dropDownMenu1ExpireDays"]],[52,"j",[17,[15,"a"],"dropDownMenu1ExpireMonths"]],[52,"k",[17,[15,"a"],"dropDownMenu1ExpireCustom"]],[52,"l",[17,[15,"a"],"dropDownMenu1ExpireType"]],[52,"m",[17,[15,"a"],"text1Domain"]],[52,"n",[17,[15,"a"],"text1Path"]],[52,"o",[17,[15,"a"],"dropDownMenu1SameSite"]],[52,"p",[17,[15,"a"],"checkbox1SameSite"]],[52,"q",[17,[15,"a"],"checkbox1Secure"]],[52,"t",[8,"domain",[15,"m"],"path",[15,"n"],"max-age",["r",[15,"l"]],"expires",[15,"k"],"samesite",[15,"o"],"secure",["s",[15,"q"]]]],["b",[15,"t"]],["b",[15,"p"]],["c",[15,"e"],[15,"f"],[15,"t"]],[2,[15,"a"],"gtmOnSuccess",[7]]],[50,"__cvt_32458183_247",[46,"a"],[52,"b",["require","logToConsole"]],[52,"c",["require","createQueue"]],[52,"d",["require","getUrl"]],[52,"e",["require","JSON"]],[52,"f",["c","watch_show_affiliates"]],["f",[15,"a"]],[52,"g",["c","dataLayer"]],["g",[8,"event","watch-show-affiliate","action","add","label",[0,[0,["d"],": "],[2,[15,"e"],"stringify",[7,[15,"a"]]]]]],[2,[15,"a"],"gtmOnSuccess",[7]]],[50,"__cegg",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","getTimestamp"]],[52,"d",["require","makeInteger"]],[52,"e",["require","setInWindow"]],[52,"f",[17,[15,"a"],"usersNumericId"]],[22,[28,[15,"f"]],[46,[2,[15,"a"],"gtmOnFailure",[7]],[36]]],[22,[17,[15,"a"],"snapshotName"],[46,["e","CE_SNAPSHOT_NAME",[17,[15,"a"],"snapshotName"],true]]],[41,"g"],[3,"g",[2,[15,"f"],"toString",[7]]],[42,[23,[17,[15,"g"],"length"],8],[46],false,[46,[3,"g",[0,"0",[15,"g"]]]]],[52,"h",[2,[15,"g"],"match",[7,"(\\d+)(\\d{4})$"]]],[22,[28,[15,"h"]],[46,[2,[15,"a"],"gtmOnFailure",[7]],[36]]],[52,"i",[0,[0,[0,[0,[0,[0,"https://script.crazyegg.com/pages/scripts/",[16,[15,"h"],1]],"/"],[16,[15,"h"],2]],".js"],"?"],["d",[10,["c"],3600000]]]],["b",[15,"i"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],[2,[15,"f"],"toString",[7]]]]]
,"permissions":{"__cvt_32458183_149":{"logging":{"environments":"debug"},"access_globals":{"keys":[{"key":"wgCityId","read":true,"write":false,"execute":false},{"key":"dataLayer","read":true,"write":true,"execute":false}]},"get_cookies":{"cookieAccess":"specific","cookieNames":["fandom_tv_city_list_counts"]},"read_data_layer":{},"set_cookies":{"allowedCookies":[{"name":"fandom_tv_city_list_counts","domain":"fandom.com","path":"\/","secure":"secure","session":"any"}]}},"__cvt_32458183_162":{"logging":{"environments":"debug"},"access_globals":{"keys":[{"key":"dataLayer","read":true,"write":true,"execute":false}]}},"__cvt_32458183_212":{"logging":{"environments":"debug"},"set_cookies":{"allowedCookies":[{"name":"last_known_wiki","domain":"fandom.com","path":"*","secure":"any","session":"any"},{"name":"internal","domain":"*","path":"*","secure":"any","session":"any"}]}},"__cvt_32458183_247":{"logging":{"environments":"debug"},"access_globals":{"keys":[{"key":"watch_show_affiliates","read":true,"write":true,"execute":true},{"key":"dataLayer","read":true,"write":true,"execute":true}]},"get_url":{"urlParts":"any"}},"__cegg":{"access_globals":{"keys":[{"key":"CE_SNAPSHOT_NAME","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/script.crazyegg.com\/pages\/scripts\/*"]}}}
,"sandboxed_scripts":["__cvt_32458183_149","__cvt_32458183_162","__cvt_32458183_212","__cvt_32458183_247"]
,"security_groups":{
"nonGoogleScripts":["__cegg"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ca,da=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ea=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:da(a)}},fa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ia;
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={a:!0},la={};try{la.__proto__=ka;ja=la.a;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ma=ia,na=function(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.sj=b.prototype},oa=this||self,sa=function(a){if(a&&a!=oa)return qa(a.document);null===ra&&(ra=qa(oa.document));return ra},va=/^[\w+/_-]+[=]{0,2}$/,ra=null,qa=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&va.test(c))return c}return""},xa=function(a){return a};var ya=function(a,b){this.g=a;this.o=b};var Aa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Ba=function(){this.D={};this.o=!1;this.J={}};Ba.prototype.get=function(a){return this.D["dust."+a]};Ba.prototype.set=function(a,b){this.o||(a="dust."+a,this.J.hasOwnProperty(a)||(this.D[a]=b))};Ba.prototype.has=function(a){return this.D.hasOwnProperty("dust."+a)};
var Ca=function(a){var b=[],c;for(c in a.D)a.D.hasOwnProperty(c)&&b.push(c.substr(5));return b},Da=function(a,b){b="dust."+b;a.o||a.J.hasOwnProperty(b)||delete a.D[b]};var Fa=function(a){this.o=new Ba;this.g=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(Aa(b)?this.g[Number(b)]=a[Number(b)]:this.o.set(b,a[b]))};ca=Fa.prototype;ca.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof Fa?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
ca.set=function(a,b){if("length"===a){if(!Aa(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else Aa(a)?this.g[Number(a)]=b:this.o.set(a,b)};ca.get=function(a){return"length"===a?this.length():Aa(a)?this.g[Number(a)]:this.o.get(a)};ca.length=function(){return this.g.length};ca.Ub=function(){for(var a=Ca(this.o),b=0;b<this.g.length;b++)a.push(b+"");return new Fa(a)};var Ha=function(a,b){Aa(b)?delete a.g[Number(b)]:Da(a.o,b)};ca=Fa.prototype;ca.pop=function(){return this.g.pop()};
ca.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};ca.shift=function(){return this.g.shift()};ca.splice=function(a,b,c){return new Fa(this.g.splice.apply(this.g,arguments))};ca.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};ca.has=function(a){return Aa(a)&&this.g.hasOwnProperty(a)||this.o.has(a)};var Ia=function(){function a(f,g){if(b[f]){if(b[f].Ic+g>b[f].max)throw Error("Quota exceeded");b[f].Ic+=g}}var b={},c=void 0,d=void 0,e={si:function(f){c=f},Mf:function(){c&&a(c,1)},vi:function(f){d=f},Ta:function(f){d&&a(d,f)},Mi:function(f,g){b[f]=b[f]||{Ic:0};b[f].max=g},Uh:function(f){return b[f]&&b[f].Ic||0},reset:function(){b={}},Gh:a};e.onFnConsume=e.si;e.consumeFn=e.Mf;e.onStorageConsume=e.vi;e.consumeStorage=e.Ta;e.setMax=e.Mi;e.getConsumed=e.Uh;e.reset=e.reset;e.consume=e.Gh;return e};var Ja=function(a,b){this.s=a;this.N=function(c,d,e){return c.apply(d,e)};this.D=b;this.o=new Ba;this.g=this.J=void 0};Ja.prototype.add=function(a,b){La(this,a,b,!1)};var La=function(a,b,c,d){if(!a.o.o)if(a.s.Ta(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.o;e.set(b,c);e.J["dust."+b]=!0}else a.o.set(b,c)};
Ja.prototype.set=function(a,b){this.o.o||(!this.o.has(a)&&this.D&&this.D.has(a)?this.D.set(a,b):(this.s.Ta(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.o.set(a,b)))};Ja.prototype.get=function(a){return this.o.has(a)?this.o.get(a):this.D?this.D.get(a):void 0};Ja.prototype.has=function(a){return!!this.o.has(a)||!(!this.D||!this.D.has(a))};var Ma=function(a){var b=new Ja(a.s,a);a.J&&(b.J=a.J);b.N=a.N;b.g=a.g;return b};var Pa={},Qa=function(a,b){Pa[a]=Pa[a]||[];Pa[a][b]=!0},Ra=function(a){for(var b=[],c=Pa[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Sa=function(){},Ta=function(a){return"function"==typeof a},k=function(a){return"string"==typeof a},Ua=function(a){return"number"==typeof a&&!isNaN(a)},Va=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&Qa("TAGGING",4):Qa("TAGGING",5);return b},Wa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Xa=function(a,b){if(a&&Va(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ya=function(a,b){if(!Ua(a)||!Ua(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ab=function(a,b){for(var c=new $a,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},cb=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},hb=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},ib=
function(a){return Math.round(Number(a))||0},jb=function(a){return"false"==String(a).toLowerCase()?!1:!!a},kb=function(a){var b=[];if(Va(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},lb=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},mb=function(){return(new Date).getTime()},$a=function(){this.prefix="gtm.";this.values={}};$a.prototype.set=function(a,b){this.values[this.prefix+a]=b};$a.prototype.get=function(a){return this.values[this.prefix+a]};
var pb=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},qb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},rb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},tb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},vb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},wb=function(a,b){var c=p;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
Wa(b,d))return}return d},xb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},yb=function(a){var b=[];cb(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var zb=function(a,b){Ba.call(this);this.N=a;this.na=b};na(zb,Ba);zb.prototype.toString=function(){return this.N};zb.prototype.Ub=function(){return new Fa(Ca(this))};zb.prototype.g=function(a,b){a.s.Mf();return this.na.apply(new Ab(this,a),Array.prototype.slice.call(arguments,1))};zb.prototype.s=function(a,b){try{return this.g.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var Db=function(a,b){for(var c,d=0;d<b.length&&!(c=Bb(a,b[d]),c instanceof ya);d++);return c},Bb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof zb))throw Error("Attempting to execute non-function "+b[0]+".");return c.g.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.J;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},Ab=function(a,b){this.o=a;this.g=b},B=function(a,b){var c=a.g;return Va(b)?Bb(c,b):b},F=function(a){return a.o.N};var Eb=function(){Ba.call(this)};na(Eb,Ba);Eb.prototype.Ub=function(){return new Fa(Ca(this))};var Fb={control:function(a,b){return new ya(a,B(this,b))},fn:function(a,b,c){var d=this.g,e=B(this,b);if(!(e instanceof Fa))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.g.s.Ta(a.length+f.length);return new zb(a,function(){return function(g){var h=Ma(d);void 0===h.g&&(h.g=this.g.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=B(this,l[m]),l[m]instanceof ya)return l[m];for(var n=e.get("length"),q=
0;q<n;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new Fa(l));var u=Db(h,f);if(u instanceof ya)return"return"===u.g?u.o:u}}())},list:function(a){var b=this.g.s;b.Ta(arguments.length);for(var c=new Fa,d=0;d<arguments.length;d++){var e=B(this,arguments[d]);"string"===typeof e&&b.Ta(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.g.s,c=new Eb,d=0;d<arguments.length-1;d+=2){var e=B(this,arguments[d])+"",f=B(this,arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ta(g);c.set(e,f)}return c},undefined:function(){}};var Gb=function(){this.s=Ia();this.g=new Ja(this.s)},Hb=function(a,b,c){var d=new zb(b,c);d.o=!0;a.g.set(b,d)};Gb.prototype.Nc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.o(c)};Gb.prototype.o=function(a){for(var b,c=0;c<arguments.length;c++)b=Bb(this.g,arguments[c]);return b};Gb.prototype.D=function(a,b){var c=Ma(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=Bb(c,arguments[e]);return d};var Ib=function(a){if(a instanceof Ib)return a;this.sa=a};Ib.prototype.toString=function(){return String(this.sa)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Jb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Kb=function(a){if(null==a)return String(a);var b=Jb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Lb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ob=function(a){if(!a||"object"!=Kb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Lb(a,"constructor")&&!Lb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Lb(a,b)},G=function(a,b){var c=b||("array"==Kb(a)?[]:{}),d;for(d in a)if(Lb(a,d)){var e=a[d];"array"==Kb(e)?("array"!=Kb(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):Ob(e)?(Ob(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var Qb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=Ca(h),n=0;n<m.length;n++)l[m[n]]=g(h.get(m[n]))},g=function(h){var l=Wa(d,h);if(-1<l)return e[l];if(h instanceof Fa){var m=[];d.push(h);e.push(m);for(var n=h.Ub(),q=0;q<n.length();q++)m[n.get(q)]=g(h.get(n.get(q)));return m}if(h instanceof Eb){var u={};d.push(h);e.push(u);f(h,u);return u}if(h instanceof zb){var r=function(){for(var t=Array.prototype.slice.call(arguments,0),v=0;v<t.length;v++)t[v]=Pb(t[v],b,!!c);var w=b?b.s:Ia(),y=new Ja(w);
b&&(y.g=b.g);return g(h.g.apply(h,[y].concat(t)))};d.push(h);e.push(r);f(h,r);return r}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Pb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Wa(d,
h);if(-1<l)return e[l];if(Va(h)||hb(h)){var m=new Fa([]);d.push(h);e.push(m);for(var n in h)h.hasOwnProperty(n)&&m.set(n,g(h[n]));return m}if(Ob(h)){var q=new Eb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var u=new zb("",function(t){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=Qb(B(this,v[w]),b,!!c);return g((0,this.g.N)(h,h,v))});d.push(h);e.push(u);f(h,u);return u}var r=typeof h;if(null===h||"string"===r||"number"===r||"boolean"===r)return h;};return g(a)};var Rb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Tb=function(a){if(void 0===a||Va(a)||Ob(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Ub={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof Fa)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new Fa(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.g(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.g(a,this.get(e),e,this)&&d.push(this.get(e));return new Fa(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.g(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.g(a,this.get(e),e,this));return new Fa(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Rb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Ha(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new Fa(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.g(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Rb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.g(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Ha(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Vb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Wb=new ya("break"),Xb=new ya("continue"),Yb=function(a,b){return B(this,a)+B(this,b)},Zb=function(a,b){return B(this,a)&&B(this,b)},$b=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);if(!(c instanceof Fa))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Wa(Vb,b)){var d=Rb(c);return Pb(a[b].apply(a,d),this.g)}throw Error("TypeError: "+b+" is not a function");}if(a instanceof Fa){if(a.has(b)){var e=a.get(b);if(e instanceof
zb){var f=Rb(c);f.unshift(this.g);return e.g.apply(e,f)}throw Error("TypeError: "+b+" is not a function");}if(0<=Wa(Ub.supportedMethods,b)){var g=Rb(c);g.unshift(this.g);return Ub[b].apply(a,g)}}if(a instanceof zb||a instanceof Eb){if(a.has(b)){var h=a.get(b);if(h instanceof zb){var l=Rb(c);l.unshift(this.g);return h.g.apply(h,l)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof zb?a.N:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Rb(c))}if(a instanceof
Ib&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},ac=function(a,b){a=B(this,a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");var c=this.g;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=B(this,b);c.set(a,d);return d},cc=function(a){var b=Ma(this.g),c=Db(b,Array.prototype.slice.apply(arguments));if(c instanceof ya)return c},dc=function(){return Wb},ec=function(a){for(var b=B(this,a),c=0;c<b.length;c++){var d=
B(this,b[c]);if(d instanceof ya)return d}},fc=function(a){for(var b=this.g,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=B(this,arguments[c+1]);La(b,d,e,!0)}}},gc=function(){return Xb},hc=function(a,b,c){var d=new Fa;b=B(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.g.add(a,B(this,f))},ic=function(a,b){return B(this,a)/B(this,b)},jc=function(a,b){a=B(this,a);b=B(this,b);var c=
a instanceof Ib,d=b instanceof Ib;return c||d?c&&d?a.sa==b.sa:!1:a==b},kc=function(a){for(var b,c=0;c<arguments.length;c++)b=B(this,arguments[c]);return b};function lc(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=Db(f,d);if(g instanceof ya){if("break"===g.g)break;if("return"===g.g)return g}}}
function mc(a,b,c){if("string"===typeof b)return lc(a,function(){return b.length},function(f){return f},c);if(b instanceof Eb||b instanceof Fa||b instanceof zb){var d=b.Ub(),e=d.length();return lc(a,function(){return e},function(f){return d.get(f)},c)}}
var nc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return mc(function(e){d.set(a,e);return d},b,c)},oc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return mc(function(e){var f=Ma(d);La(f,a,e,!0);return f},b,c)},pc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return mc(function(e){var f=Ma(d);f.add(a,e);return f},b,c)},rc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return qc(function(e){d.set(a,e);return d},b,c)},sc=
function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return qc(function(e){var f=Ma(d);La(f,a,e,!0);return f},b,c)},tc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);var d=this.g;return qc(function(e){var f=Ma(d);f.add(a,e);return f},b,c)};
function qc(a,b,c){if("string"===typeof b)return lc(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof Fa)return lc(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var uc=function(a,b,c,d){function e(n,q){for(var u=0;u<f.length();u++){var r=f.get(u);q.add(r,n.get(r))}}var f=B(this,a);if(!(f instanceof Fa))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.g;d=B(this,d);var h=Ma(g);for(e(g,h);Bb(h,b);){var l=Db(h,d);if(l instanceof ya){if("break"===l.g)break;if("return"===l.g)return l}var m=Ma(g);e(h,m);Bb(m,c);h=m}},vc=function(a){a=B(this,a);var b=this.g,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},yc=function(a,b){var c;a=B(this,a);b=B(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof Eb||a instanceof Fa||a instanceof zb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:Aa(b)&&(c=a[b]);else if(a instanceof Ib)return;return c},zc=function(a,b){return B(this,a)>B(this,
b)},Ac=function(a,b){return B(this,a)>=B(this,b)},Bc=function(a,b){a=B(this,a);b=B(this,b);a instanceof Ib&&(a=a.sa);b instanceof Ib&&(b=b.sa);return a===b},Cc=function(a,b){return!Bc.call(this,a,b)},Dc=function(a,b,c){var d=[];B(this,a)?d=B(this,b):c&&(d=B(this,c));var e=Db(this.g,d);if(e instanceof ya)return e},Ec=function(a,b){return B(this,a)<B(this,b)},Fc=function(a,b){return B(this,a)<=B(this,b)},Gc=function(a,b){return B(this,a)%B(this,b)},Hc=function(a,b){return B(this,a)*B(this,b)},Kc=function(a){return-B(this,
a)},Lc=function(a){return!B(this,a)},Mc=function(a,b){return!jc.call(this,a,b)},Nc=function(){return null},Oc=function(a,b){return B(this,a)||B(this,b)},Pc=function(a,b){var c=B(this,a);B(this,b);return c},Qc=function(a){return B(this,a)},Rc=function(a){return Array.prototype.slice.apply(arguments)},Sc=function(a){return new ya("return",B(this,a))},Tc=function(a,b,c){a=B(this,a);b=B(this,b);c=B(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
zb||a instanceof Fa||a instanceof Eb)&&a.set(b,c);return c},Uc=function(a,b){return B(this,a)-B(this,b)},Vc=function(a,b,c){a=B(this,a);var d=B(this,b),e=B(this,c);if(!Va(d)||!Va(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===B(this,d[h]))if(f=B(this,e[h]),f instanceof ya){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=B(this,e[e.length-1]),f instanceof ya&&("return"===f.g||"continue"===
f.g)))return f},Wc=function(a,b,c){return B(this,a)?B(this,b):B(this,c)},Xc=function(a){a=B(this,a);return a instanceof zb?"function":typeof a},Yc=function(a){for(var b=this.g,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Zc=function(a,b,c,d){var e=B(this,d);if(B(this,c)){var f=Db(this.g,e);if(f instanceof ya){if("break"===f.g)return;if("return"===f.g)return f}}for(;B(this,a);){var g=Db(this.g,e);if(g instanceof ya){if("break"===g.g)break;if("return"===g.g)return g}B(this,
b)}},$c=function(a){return~Number(B(this,a))},ad=function(a,b){return Number(B(this,a))<<Number(B(this,b))},bd=function(a,b){return Number(B(this,a))>>Number(B(this,b))},cd=function(a,b){return Number(B(this,a))>>>Number(B(this,b))},dd=function(a,b){return Number(B(this,a))&Number(B(this,b))},ed=function(a,b){return Number(B(this,a))^Number(B(this,b))},fd=function(a,b){return Number(B(this,a))|Number(B(this,b))};var hd=function(){this.g=new Gb;gd(this)};hd.prototype.Nc=function(a){return kd(this.g.o(a))};
var md=function(a,b){return kd(ld.g.D(a,b))},gd=function(a){var b=function(d,e){var f=a.g,g=String(e);Fb.hasOwnProperty(d)&&Hb(f,g||d,Fb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){Hb(a.g,String(d),e)};c(0,Yb);c(1,Zb);c(2,$b);c(3,ac);c(53,cc);c(4,dc);c(5,ec);c(52,fc);c(6,gc);c(9,ec);c(50,hc);c(10,ic);c(12,jc);c(13,kc);c(47,nc);c(54,oc);c(55,pc);c(63,uc);c(64,rc);c(65,sc);c(66,tc);c(15,vc);c(16,yc);c(17,yc);c(18,zc);c(19,Ac);c(20,Bc);c(21,Cc);c(22,Dc);
c(23,Ec);c(24,Fc);c(25,Gc);c(26,Hc);c(27,Kc);c(28,Lc);c(29,Mc);c(45,Nc);c(30,Oc);c(32,Pc);c(33,Pc);c(34,Qc);c(35,Qc);c(46,Rc);c(36,Sc);c(43,Tc);c(37,Uc);c(38,Vc);c(39,Wc);c(40,Xc);c(41,Yc);c(42,Zc);c(58,$c);c(57,ad);c(60,bd);c(61,cd);c(56,dd);c(62,ed);c(59,fd)},od=function(){var a=ld,b=nd();Hb(a.g,"require",b)},pd=function(a,b){a.g.g.N=b};
function kd(a){if(a instanceof ya||a instanceof zb||a instanceof Fa||a instanceof Eb||a instanceof Ib||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var qd=function(){var a=function(b){return{toString:function(){return b}}};return{og:a("consent"),fd:a("consent_always_fire"),Ee:a("convert_case_to"),Fe:a("convert_false_to"),Ge:a("convert_null_to"),He:a("convert_true_to"),Ie:a("convert_undefined_to"),Yi:a("debug_mode_metadata"),Sa:a("function"),bh:a("instance_name"),eh:a("live_only"),fh:a("malware_disabled"),gh:a("metadata"),aj:a("original_activity_id"),bj:a("original_vendor_template_id"),ih:a("once_per_event"),zf:a("once_per_load"),Df:a("setup_tags"),
Ef:a("tag_id"),Ff:a("teardown_tags")}}();
var rd=[],sd={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},td=function(a){return sd[a]},ud=/[\x00\x22\x26\x27\x3c\x3e]/g;var yd=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,zd={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Ad=function(a){return zd[a]};rd[7]=function(a){return String(a).replace(yd,Ad)};
rd[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(yd,Ad)+"'"}};var Id=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Jd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Md=function(a){return Jd[a]};rd[16]=function(a){return a};var Od;
var Pd=[],Qd=[],Rd=[],Sd=[],Td=[],Ud={},Vd,Wd,Xd,Yd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Zd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Ud[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.Jf&&b.Jf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===qd.fd.toString()&&a[f]){}return void 0!==d?d(e):Od(c,e,b)},ae=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=$d(a[e],b,c));return d},$d=function(a,b,c){if(Va(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push($d(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=Pd[f];if(!g||b.Zd(g))return;c[f]=!0;try{var h=ae(g,b,c);h.vtp_gtmEventId=b.id;d=Zd(h,b);Xd&&(d=Xd.Ih(d,h))}catch(y){b.Zf&&
b.Zf(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[$d(a[l],b,c)]=$d(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=$d(a[n],b,c);Wd&&(m=m||q===Wd.Ac);d.push(q)}return Wd&&m?Wd.Lh(d):d.join("");case "escape":d=$d(a[1],b,c);if(Wd&&Va(a[1])&&"macro"===a[1][0]&&Wd.ei(a))return Wd.Ai(d);d=String(d);for(var u=2;u<a.length;u++)rd[a[u]]&&(d=rd[a[u]](d));return d;case "tag":var r=a[1];if(!Sd[r])throw Error("Unable to resolve tag reference "+
r+".");return d={Qf:a[2],index:r};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=be(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},be=function(a,b,c){try{return Vd(ae(a,b,c))}catch(d){JSON.stringify(a)}return 2};var ce=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.o=a;this.g=c};na(ce,Error);function de(a,b){if(Va(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)de(a[c],b[c])}};var ee=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.s=a;this.o=b;this.g=[]};na(ee,Error);var ge=function(){return function(a,b){a instanceof ee||(a=new ee(a,fe));b&&a.g.push(b);throw a;}};function fe(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ua(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var he=null,ke=function(a){function b(q){for(var u=0;u<q.length;u++)d[q[u]]=!0}var c=[],d=[];he=ie(a);for(var e=0;e<Qd.length;e++){var f=Qd[e],g=je(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<Sd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},je=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=he(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=he(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},ie=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=be(Rd[c],a));return b[c]}};var le={Ih:function(a,b){b[qd.Ee]&&"string"===typeof a&&(a=1==b[qd.Ee]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(qd.Ge)&&null===a&&(a=b[qd.Ge]);b.hasOwnProperty(qd.Ie)&&void 0===a&&(a=b[qd.Ie]);b.hasOwnProperty(qd.He)&&!0===a&&(a=b[qd.He]);b.hasOwnProperty(qd.Fe)&&!1===a&&(a=b[qd.Fe]);return a}};var me=function(){this.g={}};function ne(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new ce(c,d,g);}}function oe(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));ne(e,b,d,g);ne(f,b,d,g)}}}};var se=function(a){var b=pe.F,c=this;this.o=new me;this.g={};var d={},e=oe(this.o,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});cb(a,function(f,g){var h={};cb(g,function(l,m){var n=qe(l,m);h[l]=n.assert;d[l]||(d[l]=n.O)});c.g[f]=function(l,m){var n=h[l];if(!n)throw re(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);n.apply(void 0,q);e.apply(void 0,q)}})},ue=function(a){return te.g[a]||
function(){}};function qe(a,b){var c=Yd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=re;try{return Zd(c)}catch(d){return{assert:function(e){throw new ce(e,{},"Permission "+e+" is unknown.");},O:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function re(a,b,c){return new ce(a,b,c)};var ve=!1;var we={};we.Ti=jb('');we.Oh=jb('');var xe=ve,ye=we.Oh,ze=we.Ti;var Oe=/^[a-z$_][\w$]*$/i,Pe=/^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
var Qe=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Re=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Qe(b,"/*")&&(b=b.slice(0,-2));Qe(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Se=/^[a-z0-9-]+$/i,Te=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Ve=function(a,b){var c;if(!(c=!Ue(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Se.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Te.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),q=n.slice(0,n.indexOf("/")),u;var r=l.hostname,t=q;if(0!==t.indexOf("*."))u=r.toLowerCase()===t.toLowerCase();else{t=t.slice(2);var v=r.toLowerCase().indexOf(t.toLowerCase());u=-1===v?!1:r.length===t.length?
!0:r.length!==t.length+v?!1:"."===r[v-1]}if(u){var w=n.slice(n.indexOf("/"));h=Re(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},Ue=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var Ye=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Ze={Fn:"function",DustMap:"Object",List:"Array"},H=function(a,b,c){for(var d=0;d<b.length;d++){var e=Ye.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var n=typeof l;l instanceof zb?n="Fn":l instanceof Fa?n="List":l instanceof Eb?n="DustMap":
l instanceof Ib&&(n="OpaqueValue");if(n!=h)throw Error("Error in "+a+". Argument "+f+" has type "+n+", which does not match required type "+(Ze[h]||h)+".");}}};function $e(a){return""+a}
function af(a,b){var c=[];return c};var bf=function(a,b){var c=new zb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=B(this,d[e]);return b.apply(this,d)});c.o=!0;return c},cf=function(a,b){var c=new Eb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ta(e)?c.set(d,bf(a+"_"+d,e)):(Ua(e)||k(e)||"boolean"==typeof e)&&c.set(d,e)}c.o=!0;return c};var df=function(a,b){H(F(this),["apiName:!string","message:?string"],arguments);var c={},d=new Eb;return d=cf("AssertApiSubject",c)};var ef=function(a,b){H(F(this),["actual:?*","message:?string"],arguments);var c={},d=new Eb;
return d=cf("AssertThatSubject",c)};function ff(a){return function(){for(var b=[],c=this.g,d=0;d<arguments.length;++d)b.push(Qb(arguments[d],c));return Pb(a.apply(null,b))}}var hf=function(){for(var a=Math,b=gf,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=ff(a[e].bind(a)))}return c};var jf=function(a){var b;return b};var kf=function(a){var b;return b};var lf=function(a){H(F(this),["uri:!string"],arguments);return encodeURI(a)};var mf=function(a){H(F(this),["uri:!string"],arguments);return encodeURIComponent(a)};var nf=function(a){H(F(this),["message:?string"],arguments);};var of=function(a,b){H(F(this),["min:!number","max:!number"],arguments);return Ya(a,b)};var pf=function(a,b,c){var d=a.g.g;if(!d)throw Error("Missing program state.");d.wh.apply(null,Array.prototype.slice.call(arguments,1))};var qf=function(){pf(this,"read_container_data");var a=new Eb;a.set("containerId",'GTM-5HQXBHF');a.set("version",'181');a.set("environmentName",'');a.set("debugMode",xe);a.set("previewMode",ze);a.set("environmentMode",ye);a.o=!0;return a};var rf=function(){return(new Date).getTime()};var sf=function(a){if(null===a)return"null";if(a instanceof Fa)return"array";if(a instanceof zb)return"function";if(a instanceof Ib){a=a.sa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var tf=function(a){function b(c){return function(d){try{return c(d)}catch(e){(xe||ze)&&a.call(this,e.message)}}}return{parse:b(function(c){return Pb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Qb(c))})}};var uf=function(a){return ib(Qb(a,this.g))};var vf=function(a){return Number(Qb(a,this.g))};var wf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var xf=function(a,b,c){var d=null,e=!1;return e?d:null};var gf="floor ceil round max min abs pow sqrt".split(" ");var yf=function(){var a={};return{Vh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Ni:function(b,c){a[b]=c},reset:function(){a={}}}},zf=function(a,b){H(F(this),["apiName:!string","mock:?*"],arguments);};var Af=function(){this.g={};this.o={};};Af.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
Af.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.o.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Ta(b)?bf(a,b):cf(a,b)};
var Bf=function(a,b,c){if(a.o.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.o[b]=Ta(c)?bf(b,c):cf(b,c)};function Cf(){var a={};return a};var J={Hb:"_ee",Gd:"_syn",ej:"_uei",Ad:"_eu",cj:"_pci",od:"event_callback",uc:"event_timeout",aa:"gtag.config",Ca:"gtag.get",oa:"purchase",cb:"refund",Pa:"begin_checkout",$a:"add_to_cart",ab:"remove_from_cart",xg:"view_cart",Me:"add_to_wishlist",Ba:"view_item",Le:"view_promotion",Ke:"select_promotion",jd:"select_item",oc:"view_item_list",Je:"add_payment_info",wg:"add_shipping_info",Fa:"value_key",Ea:"value_callback",ka:"allow_ad_personalization_signals",wd:"restricted_data_processing",xb:"allow_google_signals",
la:"cookie_expires",Ab:"cookie_update",Eb:"session_duration",ra:"user_properties",Ha:"transport_url",P:"ads_data_redaction",lf:"user_data",vc:"first_party_collection",C:"ad_storage",K:"analytics_storage",gd:"region",De:"wait_for_update"};J.qf=[J.oa,J.cb,J.Pa,J.$a,J.ab,J.xg,J.Me,J.Ba,J.Le,J.Ke,J.oc,J.jd,J.Je,J.wg];J.pf=[J.ka,J.xb,J.Ab];J.rf=[J.la,J.uc,J.Eb];var K=function(a){Qa("GTM",a)};var Df=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Ef=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Ff,Gf=function(){if(void 0===Ff){var a=null,b=oa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:xa,createScript:xa,createScriptURL:xa})}catch(c){oa.console&&oa.console.error(c.message)}Ff=a}else Ff=a}return Ff};var If=function(a,b){this.g=b===Hf?a:""};If.prototype.toString=function(){return this.g+""};var Hf={};var Jf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Kf;a:{var Lf=oa.navigator;if(Lf){var Mf=Lf.userAgent;if(Mf){Kf=Mf;break a}}Kf=""}var Nf=function(a){return-1!=Kf.indexOf(a)};var Pf=function(a,b,c){this.g=c===Of?a:""};Pf.prototype.toString=function(){return this.g.toString()};var Qf=function(a){return a instanceof Pf&&a.constructor===Pf?a.g:"type_error:SafeHtml"},Of={},Rf=new Pf(oa.trustedTypes&&oa.trustedTypes.emptyHTML||"",0,Of);var Sf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Qf(Rf);return!c.parentElement}),Tf=function(a,b){if(Sf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Qf(b)};var Uf=function(a){var b=Gf(),c=b?b.createHTML(a):a;return new Pf(c,null,Of)};var p=window,M=document,Vf=navigator,Wf=M.currentScript&&M.currentScript.src,Xf=function(a,b){var c=p[a];p[a]=void 0===c?b:c;return p[a]},Yf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Zf=function(a,b,c){var d=M.createElement("script");d.type="text/javascript";d.async=!0;var e,f=Gf(),g=f?f.createScriptURL(a):a;e=new If(g,Hf);d.src=e instanceof If&&e.constructor===If?e.g:"type_error:TrustedResourceUrl";
var h=sa(d.ownerDocument&&d.ownerDocument.defaultView);h&&d.setAttribute("nonce",h);Yf(d,b);c&&(d.onerror=c);var l=sa();l&&d.setAttribute("nonce",l);var m=M.getElementsByTagName("script")[0]||M.body||M.head;m.parentNode.insertBefore(d,m);return d},$f=function(){if(Wf){var a=Wf.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},ag=function(a,b){var c=M.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";
var d=M.body&&M.body.lastChild||M.body||M.head;d.parentNode.insertBefore(c,d);Yf(c,b);void 0!==a&&(c.src=a);return c},bg=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},cg=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},dg=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){p.setTimeout(a,
0)},eg=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},fg=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},gg=function(a){var b=M.createElement("div"),c=Uf("A<div>"+a+"</div>");Tf(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},hg=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=
a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},ig=function(a){Vf.sendBeacon&&Vf.sendBeacon(a)||bg(a)},jg=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var mg={},ng=function(){return void 0==mg.gtag_cs_api?!1:mg.gtag_cs_api};var og=[];function pg(){var a=Xf("google_tag_data",{});a.ics||(a.ics={entries:{},set:qg,update:rg,addListener:sg,notifyListeners:tg,active:!1,usedDefault:!1});return a.ics}
function qg(a,b,c,d,e,f){var g=pg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,n=c&&k(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||n===e||(n===d?m!==e:!n&&!m)){var q=!!(f&&0<f&&void 0===l.update),u={region:n,initial:"granted"===b,update:l.update,quiet:q};if(""!==d||!1!==l.initial)h[a]=u;q&&p.setTimeout(function(){h[a]===u&&u.quiet&&(u.quiet=!1,ug(a),tg(),Qa("TAGGING",2))},f)}}}
function rg(a,b){var c=pg();c.active=!0;if(void 0!=b){var d=vg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=vg(a);f.quiet?(f.quiet=!1,ug(a)):g!==d&&ug(a)}}function sg(a,b){og.push({Lf:a,Rh:b})}function ug(a){for(var b=0;b<og.length;++b){var c=og[b];Va(c.Lf)&&-1!==c.Lf.indexOf(a)&&(c.bg=!0)}}function tg(a){for(var b=0;b<og.length;++b){var c=og[b];if(c.bg){c.bg=!1;try{c.Rh({Kf:a})}catch(d){}}}}
var vg=function(a){var b=pg().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},wg=function(a){return(pg().entries[a]||{}).initial},xg=function(a){return!(pg().entries[a]||{}).quiet},yg=function(){return ng()?pg().active:!1},zg=function(){return pg().usedDefault},Ag=function(a,b){pg().addListener(a,b)},Bg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!xg(b[e]))return!0;return!1}if(c()){var d=!1;Ag(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Cg=function(a,
b){if(!1===vg(b)){var c=!1;Ag([b],function(d){!c&&vg(b)&&(a(d),c=!0)})}};function Dg(a){for(var b=[],c=0;c<Eg.length;c++){var d=a(Eg[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Eg=[J.C,J.K],Fg=function(a){var b=a[J.gd];b&&K(40);var c=a[J.De];c&&K(41);for(var d=Va(b)?b:[b],e=0;e<d.length;++e)for(var f in a)if(a.hasOwnProperty(f)&&f!==J.gd&&f!==J.De)if(-1<Wa(Eg,f)){var g=f,h=a[f],l=d[e];pg().set(g,h,l,"CN","CN-51",c)}else{}},Gg=function(a,b){for(var c in a)if(a.hasOwnProperty(c))if(-1<
Wa(Eg,c)){var d=c,e=a[c];pg().update(d,e)}else{}pg().notifyListeners(b)},Hg=function(a){var b=vg(a);return void 0!=b?b:!0},Ig=function(){return"G1"+Dg(vg)},Jg=function(a,b){Ag(a,b)},Kg=function(a,b){Bg(a,b)};var Mg=function(a){return Lg?M.querySelectorAll(a):null},Ng=function(a,b){if(!Lg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!M.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Og=!1;if(M.querySelectorAll)try{var Pg=M.querySelectorAll(":root");Pg&&1==Pg.length&&Pg[0]==M.documentElement&&(Og=!0)}catch(a){}var Lg=Og;var Qg=function(a){if(M.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!p.getComputedStyle)return!0;var c=p.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=p.getComputedStyle(d,
null))}return!1};
var Rg=function(){var a=M.body,b=M.documentElement||a&&a.parentElement,c,d;if(M.compatMode&&"BackCompat"!==M.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};K(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Sg=function(a){var b=Rg(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var Tg=[],Ug=!(!p.IntersectionObserver||!p.IntersectionObserverEntry),Vg=function(a,b,c){for(var d=new p.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Tg.length;f++)if(!Tg[f])return Tg[f]=d,f;return Tg.push(d)-1},Wg=function(a,b,c){function d(h,l){var m={top:0,bottom:0,right:0,left:0,width:0,height:0},n={boundingClientRect:h.getBoundingClientRect(),
intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:h,time:mb()};N(function(){return a(n)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(h,l){return h-l});return function(){for(var h=0;h<b.length;h++){var l=Sg(b[h]);if(l>e[h])for(;f[h]<c.length-1&&l>=c[f[h]+1];)d(b[h],l),f[h]++;else if(l<e[h])for(;0<=f[h]&&l<=c[f[h]];)d(b[h],l),f[h]--;e[h]=l}}},Xg=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Ug){var e=!1;N(function(){e||
Wg(a,b,c)()});return Vg(function(f){e=!0;for(var g={sb:0};g.sb<f.length;g={sb:g.sb},g.sb++)N(function(h){return function(){return a(f[h.sb])}}(g))},b,c)}return p.setInterval(Wg(a,b,c),1E3)},Yg=function(a){Ug?0<=a&&a<Tg.length&&Tg[a]&&(Tg[a].disconnect(),Tg[a]=void 0):p.clearInterval(a)};var Zg=/:[0-9]+$/,$g=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},ch=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ah(a.protocol)||ah(p.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
p.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||p.location.hostname).replace(Zg,"").toLowerCase());return bh(a,b,c,d,e)},bh=function(a,b,c,d,e){var f,g=ah(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=dh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Zg,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Qa("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Wa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=$g(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},ah=function(a){return a?a.replace(":",
"").toLowerCase():""},dh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},eh=function(a){var b=M.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Qa("TAGGING",1),c="/"+c);var d=b.hostname.replace(Zg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},fh=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=eh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var gh=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),hh=new RegExp(/support|noreply/i),ih=["SCRIPT","IMG","SVG","PATH","BR"],jh=["BR"];function kh(a){var b;if(a===M.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=kh(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
var nh=function(){var a=!0;var b=a,c;var d=[],e=M.body;if(e){for(var f=e.querySelectorAll("*"),g=0;g<f.length&&1E4>g;g++){var h=f[g];if(!(0<=ih.indexOf(h.tagName.toUpperCase()))){for(var l=!1,m=0;m<h.childElementCount&&1E4>m;m++)if(!(0<=jh.indexOf(h.children[m].tagName.toUpperCase()))){l=!0;break}l||d.push(h)}}c={elements:d,status:1E4<f.length?"2":"1"}}else c=
{elements:d,status:"4"};for(var n=c,q=n.elements,u=[],r=0;r<q.length;r++){var t=q[r],v=t.textContent;t.value&&(v=t.value);if(v){var w=v.match(gh);if(w){var y=w[0],x;if(p.location){var A=bh(p.location,"host",!0);x=0<=y.toLowerCase().indexOf(A)}else x=!1;x||u.push({element:t,ed:y})}}}var z;for(var C=[],D=10<u.length?"3":n.status,E=0;E<u.length&&
10>E;E++){var I=u[E].element,P=u[E].ed,Q=!1;C.push({ed:P,querySelector:kh(I),tagName:I.tagName,isVisible:!Qg(I),type:1,Sc:!!Q})}return{elements:C,status:D}};var pe={},O=null,Bh=Math.random();pe.F="GTM-5HQXBHF";pe.Ec="2h0";pe.$i="";pe.pg="ChEIgL7ygQYQ0dKMhPWM2vqNARIkAKsdG7Qf/89Q9KSma0HBlYhS+uIzLbdmUamkQP7JsITwnJ5TGgIR1A\x3d\x3d";var Ch={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Dh={__paused:!0,__tg:!0},Eh;for(Eh in Ch)Ch.hasOwnProperty(Eh)&&(Dh[Eh]=!0);var Fh="www.googletagmanager.com/gtm.js";
var Gh=Fh,Hh=jb("true"),Ih=null,Jh=null,Kh="//www.googletagmanager.com/a?id="+pe.F+"&cv=181",Lh={},Mh={},Nh=function(){var a=O.sequence||1;O.sequence=a+1;return a};var Oh={},Ph=new $a,Qh={},Rh={},Uh={name:"dataLayer",set:function(a,b){G(xb(a,b),Qh);Sh()},get:function(a){return Th(a,2)},reset:function(){Ph=new $a;Qh={};Sh()}},Th=function(a,b){return 2!=b?Ph.get(a):Vh(a)},Vh=function(a,b){var c=a.split(".");b=b||[];for(var d=Qh,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Wa(b,d))return}return d},Wh=function(a,b){Rh.hasOwnProperty(a)||(Ph.set(a,b),G(xb(a,b),Qh),Sh())},Sh=function(a){cb(Rh,function(b,c){Ph.set(b,c);G(xb(b,
void 0),Qh);G(xb(b,c),Qh);a&&delete Rh[b]})},Xh=function(a,b,c){Oh[a]=Oh[a]||{};var d=1!==c?Vh(b):Ph.get(b);"array"===Kb(d)||"object"===Kb(d)?Oh[a][b]=G(d):Oh[a][b]=d},Yh=function(a,b){if(Oh[a])return Oh[a][b]},Zh=function(a,b){Oh[a]&&delete Oh[a][b]};var bi={},ci=function(a,b){if(p._gtmexpgrp&&p._gtmexpgrp.hasOwnProperty(a))return p._gtmexpgrp[a];void 0===bi[a]&&(bi[a]=Math.floor(Math.random()*b));return bi[a]};var di=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};function ei(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var gi=function(a,b,c,d){return fi(d)?ei(a,String(b||document.cookie),c):[]},ji=function(a,b,c,d,e){if(fi(e)){var f=hi(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=ii(f,function(g){return g.Mc},b);if(1===f.length)return f[0].id;f=ii(f,function(g){return g.$b},c);return f[0]?f[0].id:void 0}}};function ki(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=gi(b,f,!1,d).indexOf(c)}
var oi=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!fi(c.za))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=li(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.oi);g=e(g,"samesite",
c.Hi);c.Ki&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var n=mi(),q=void 0,u=!1,r=0;r<n.length;++r){var t="none"!==n[r]?n[r]:void 0,v=e(g,"domain",t);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}u=!0;if(!ni(t,c.path)&&ki(v,a,b,c.za))return 0}if(q&&!u)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return ni(m,c.path)?1:ki(g,a,b,c.za)?0:1},pi=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return oi(a,b,c)};
function ii(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function hi(a,b,c){for(var d=[],e=gi(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Mc:1*l[0]||1,$b:1*l[1]||1}))}}return d}
var li=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},qi=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ri=/(^|\.)doubleclick\.net$/i,ni=function(a,b){return ri.test(document.location.hostname)||"/"===b&&qi.test(a)},mi=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;ri.test(e)||qi.test(e)||a.push("none");
return a},fi=function(a){if(!ng()||!a||!yg())return!0;if(!xg(a))return!1;var b=vg(a);return null==b?!0:!!b};var si=function(){for(var a=Vf.userAgent+(M.cookie||"")+(M.referrer||""),b=a.length,c=p.history.length;0<c;)a+=c--^b++;return[Math.round(2147483647*Math.random())^di(a)&2147483647,Math.round(mb()/1E3)].join(".")},vi=function(a,b,c,d,e){var f=ti(b);return ji(a,f,ui(c),d,e)},wi=function(a,b,c,d){var e=""+ti(c),f=ui(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},ti=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},ui=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&
(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function xi(a,b,c){var d,e=a.Zb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||mb())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var yi=["1"],zi={},Ci=function(a){var b=Ai(a.prefix),c=zi[b];c&&Bi(b,c,a)},Ei=function(a){var b=Ai(a.prefix);if(!zi[b]&&!Di(b,a.path,a.domain)){var c=si();if(0===Bi(b,c,a)){var d=Xf("google_tag_data",{});d._gcl_au?Qa("GTM",57):d._gcl_au=c}Di(b,a.path,a.domain)}};function Bi(a,b,c){var d=wi(b,"1",c.domain,c.path),e=xi(c);e.za="ad_storage";return pi(a,d,e)}function Di(a,b,c){var d=vi(a,b,c,yi,"ad_storage");d&&(zi[a]=d);return d}function Ai(a){return(a||"_gcl")+"_au"};function Fi(){for(var a=Gi,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Hi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Gi,Ii;
function Ji(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Ii[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Gi=Gi||Hi();Ii=Ii||Fi();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Ki;var Oi=function(){var a=Li,b=Mi,c=Ni(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){cg(M,"mousedown",d);cg(M,"keyup",d);cg(M,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Pi=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Ni().decorators.push(f)},Qi=function(a,b,c){for(var d=Ni().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,n=!!g.sameHost;if(l&&(n||m!==M.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[q])||n&&0<=l[q].indexOf(m)){h=!0;break a}h=!1}if(h){var u=g.placement;void 0==u&&(u=g.fragment?2:1);u===b&&rb(e,g.callback())}}return e},Ni=function(){var a=Xf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Ri=/(.*?)\*(.*?)\*(.*)/,Si=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Ti=/^(?:www\.|m\.|amp\.)+/,Ui=/([^?#]+)(\?[^#]*)?(#.*)?/;function Zi(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var aj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);Gi=Gi||Hi();Ii=Ii||Fi();for(var l=[],m=0;m<h.length;m+=3){var n=m+1<h.length,q=m+2<h.length,u=h.charCodeAt(m),r=n?h.charCodeAt(m+1):0,t=q?h.charCodeAt(m+2):0,v=u>>2,w=(u&3)<<4|r>>4,y=(r&15)<<2|t>>6,x=t&63;q||(x=64,n||(y=64));l.push(Gi[v],Gi[w],Gi[y],Gi[x])}g=l.join("");f.call(e,g)}}var A=b.join("*");return["1",$i(A),
A].join("*")},$i=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ki)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Ki=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Ki[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},cj=function(){return function(a){var b=eh(p.location.href),
c=b.search.replace("?",""),d=$g(c,"_gl",!1,!0)||"";a.query=bj(d)||{};var e=ch(b,"fragment").match(Zi("_gl"));a.fragment=bj(e&&e[3]||"")||{}}},dj=function(a){var b=cj(),c=Ni();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(rb(d,e.query),a&&rb(d,e.fragment));return d},bj=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Ri.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],n=
0;n<b;++n)if(m===$i(h,n)){l=!0;break a}l=!1}if(l){for(var q={},u=h?h.split("*"):[],r=0;r<u.length;r+=2)q[u[r]]=Ji(u[r+1]);return q}}}}catch(t){}};function ej(a,b,c,d){function e(n){var q=n,u=Zi(a).exec(q),r=q;if(u){var t=u[2],v=u[4];r=u[1];v&&(r=r+t+v)}n=r;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=Ui.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function fj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Qi(b,1,c),e=Qi(b,2,c),f=Qi(b,3,c);if(tb(d)){var g=aj(d);c?gj("_gl",g,a):hj("_gl",g,a,!1)}if(!c&&tb(e)){var h=aj(e);hj("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){hj(m,n,q,void 0);break a}if("form"===q.tagName.toLowerCase()){gj(m,n,q);break a}}"string"==typeof q&&ej(m,n,q,void 0)}}
function hj(a,b,c,d){if(c.href){var e=ej(a,b,c.href,void 0===d?!1:d);Jf.test(e)&&(c.href=e)}}
function gj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=M.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=ej(a,b,c.action);Jf.test(m)&&(c.action=m)}}}
var Li=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||fj(e,e.hostname)}}catch(g){}},Mi=function(a){try{if(a.action){var b=ch(eh(a.action),"host");fj(a,b)}}catch(c){}},ij=function(a,b,c,d){Oi();Pi(a,b,"fragment"===c?2:1,!!d,!1)},jj=function(a,b){Oi();Pi(a,[bh(p.location,"host",!0)],b,!0,!0)},kj=function(){var a=M.location.hostname,b=Si.exec(M.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Ti,""),l=e.replace(Ti,""),m;if(!(m=h===l)){var n="."+l;m=h.substring(h.length-n.length,h.length)===n}return m},lj=function(a,b){return!1===a?!1:a||b||kj()};var mj=/^\w+$/,nj=/^[\w-]+$/,oj=/^~?[\w-]+$/,pj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},qj=function(){if(!ng()||!yg())return!0;var a=vg("ad_storage");return null==a?!0:!!a},rj=function(a,b){xg("ad_storage")?qj()?a():Cg(a,"ad_storage"):b?Qa("TAGGING",3):Bg(function(){rj(a,!0)},["ad_storage"])},tj=function(a){return sj(a).map(function(b){return b.Na})},sj=function(a){var b=[];if(!M.cookie)return b;var c=gi(a,M.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{rb:d.rb},e++){d.rb=uj(c[e]);var f=vj(c[e]);if(d.rb&&f){var g=Xa(b,function(h){return function(l){return l.Na===h.rb}}(d));g&&g.timestamp<f?g.timestamp=f:g||b.push({Na:d.rb,timestamp:f})}}return wj(b)};function xj(a){return a&&"string"==typeof a&&a.match(mj)?a:"_gcl"}
var zj=function(){var a=eh(p.location.href),b=ch(a,"query",!1,void 0,"gclid"),c=ch(a,"query",!1,void 0,"gclsrc"),d=ch(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||$g(e,"gclid",!1,void 0);c=c||$g(e,"gclsrc",!1,void 0)}return yj(b,c,d)},yj=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(nj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":e(a,
"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Aj=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b;case "gp":return"gp"===b}return!1},Cj=function(a){var b=zj();rj(function(){Bj(b,a)})};
function Bj(a,b,c){function d(l,m){var n=Dj(l,e);n&&pi(n,m,f)}b=b||{};var e=xj(b.prefix);c=c||mb();var f=xi(b,c,!0);f.za="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.vj?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var Ej=function(a,b){var c=dj(!0);rj(function(){for(var d=xj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==pj[f]){var g=Dj(f,d),h=c[g];if(h){var l=Math.min(vj(h),mb()),m;b:{for(var n=l,q=gi(g,M.cookie,void 0,"ad_storage"),u=0;u<q.length;++u)if(vj(q[u])>n){m=!0;break b}m=!1}if(!m){var r=xi(b,l,!0);r.za="ad_storage";pi(g,h,r)}}}}Bj(yj(c.gclid,c.gclsrc),b)})},Dj=function(a,b){var c=pj[a];if(void 0!==c)return b+c},vj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function uj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Fj=function(a,b,c,d,e){if(Va(b)){var f=xj(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=Dj(a[l],f);if(m){var n=gi(m,M.cookie,void 0,"ad_storage");n.length&&(h[m]=n.sort()[n.length-1])}}return h};rj(function(){ij(g,b,c,d)})}},wj=function(a){return a.filter(function(b){return oj.test(b.Na)})},Gj=function(a,b){for(var c=xj(b.prefix),d={},e=0;e<a.length;e++)pj[a[e]]&&(d[a[e]]=pj[a[e]]);rj(function(){cb(d,function(f,g){var h=gi(c+g,M.cookie,void 0,"ad_storage");if(h.length){var l=h[0],m=vj(l),
n={};n[f]=[uj(l)];Bj(n,b,m)}})})};function Hj(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Ij=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(yg()){var c=zj();if(Hj(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);jj(function(){return d},3);jj(function(){var e={};return e._up="1",e},1)}}},Jj=function(){var a;if(qj()){for(var b=[],c=M.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({xe:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].xe]||(g[b[h].xe]=[]),g[b[h].xe].push({timestamp:l[1],Na:l[2]}))}a=g}else a={};return a};var Kj=/^\d+\.fls\.doubleclick\.net$/,Lj=!1;function Mj(a,b){xg(J.C)?Hg(J.C)?a():Cg(a,J.C):b?K(42):Kg(function(){Mj(a,!0)},[J.C])}function Nj(a){var b=eh(p.location.href),c=ch(b,"host",!1);if(c&&c.match(Kj)){var d=ch(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Oj(a,b,c){if("aw"==a||"dc"==a){var d=Nj("gcl"+a);if(d)return d.split(".")}var e=xj(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Hg(J.C)&&c,g;g=zj()[a]||[];if(0<g.length)return f?["0"]:g}var h=Dj(a,e);return h?tj(h):[]}
var Pj=function(a){var b=Nj("gac");if(b)return!Hg(J.C)&&a?"0":decodeURIComponent(b);var c=Jj(),d=[];cb(c,function(e,f){f=wj(f);for(var g=[],h=0;h<f.length;h++)g.push(f[h].Na);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Rj=function(a,b){if(Lj)Qj(a,b,"dc");else{var c=zj().dc||[];Mj(function(){Ei(b);var d=zi[Ai(b.prefix)],e=!1;if(d&&0<c.length){var f=O.joined_au=O.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="http://ad.doubleclick.net/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+
d;ig(l);e=f[g]=!0}}null==a&&(a=e);a&&d&&Ci(b)})}},Qj=function(a,b,c){var d=zj(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!Aj(h,c)||e.push({Na:f,Uf:h});!g||c&&"dc"!==c||e.push({Na:g,Uf:"ds"});Mj(function(){Ei(b);var l=zi[Ai(b.prefix)],m=!1;if(l&&0<e.length)for(var n=O.joined_auid=O.joined_auid||{},q=0;q<e.length;q++){var u=e[q],r=u.Na,t=u.Uf,v=(b.prefix||"_gcl")+"."+t+"."+r;if(!n[v]){var w="http://ad.doubleclick.net/pagead/regclk";w=w+"?gclid="+r+"&auid="+l+"&gclsrc="+t;ig(w);
m=n[v]=!0}}null==a&&(a=m);a&&l&&Ci(b)})};var Sj=/[A-Z]+/,Tj=/\s/,Uj=function(a){if(k(a)&&(a=lb(a),!Tj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Sj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],H:d}}}}},Wj=function(a){for(var b={},c=0;c<a.length;++c){var d=Uj(a[c]);d&&(b[d.id]=d)}Vj(b);var e=[];cb(b,function(f,g){e.push(g)});return e};
function Vj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.H[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Xj=function(){var a=!1;return a};var Zj=function(a,b,c,d){return(2===Yj()||d||"http:"!=p.location.protocol?a:b)+c},Yj=function(){var a=$f(),b;if(1===a)a:{var c=Gh;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=M.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var nk=function(a){return Hg(J.C)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=fh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},ok=function(){var a;if(!(a=Hh)){var b;if(!0===p._gtmdgs)b=!0;else{var c=Vf&&Vf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=ib("1");return ci(1,100)<d?ci(2,2):-1},pk=function(a){var b;
if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var qk=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),rk={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},sk={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},tk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var vk=function(a){var b=Th("gtm.allowlist")||Th("gtm.whitelist");b&&K(9);var c=b&&vb(kb(b),rk),d=Th("gtm.blocklist")||Th("gtm.blacklist");d||(d=Th("tagTypeBlacklist"))&&
K(3);d?K(8):d=[];uk()&&(d=kb(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Wa(kb(d),"google")&&K(2);var e=d&&vb(kb(d),sk),f={};return function(g){var h=g&&g[qd.Sa];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Mh[h]||[],m=a(h,l);if(b){var n;if(n=m)a:{if(0>Wa(c,h))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>
Wa(c,l[q])){K(11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var r=0<=Wa(e,h);if(r)u=r;else{var t=ab(e,l||[]);t&&K(10);u=t}}var v=!m||u;v||!(0<=Wa(l,"sandboxedScripts"))||c&&-1!==Wa(c,"sandboxedScripts")||(v=ab(e,tk));return f[h]=v}},uk=function(){return qk.test(p.location&&p.location.hostname)};var wk={active:!0,isAllowed:function(){return!0}},xk=function(a){var b=O.zones;return b?b.checkState(pe.F,a):wk},yk=function(a){var b=O.zones;!b&&a&&(b=O.zones=a());return b};var zk=function(){},Ak=function(){};var Bk=!1,Ck=0,Dk=[];function Ek(a){if(!Bk){var b=M.createEventObject,c="complete"==M.readyState,d="interactive"==M.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Bk=!0;for(var e=0;e<Dk.length;e++)N(Dk[e])}Dk.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function Fk(){if(!Bk&&140>Ck){Ck++;try{M.documentElement.doScroll("left"),Ek()}catch(a){p.setTimeout(Fk,50)}}}var Gk=function(a){Bk?a():Dk.push(a)};var Ik=function(a,b){this.g=!1;this.D=[];this.J={tags:[]};this.N=!1;this.o=this.s=0;Hk(this,a,b)},Jk=function(a,b,c,d){if(Dh.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Ob(d)&&(e=G(d,e));e.id=c;e.status="timeout";return a.J.tags.push(e)-1},Kk=function(a,b,c,d){var e=a.J.tags[b];e&&(e.status=c,e.executionTime=d)},Lk=function(a){if(!a.g){for(var b=a.D,c=0;c<b.length;c++)b[c]();a.g=!0;a.D.length=0}},Hk=function(a,b,c){Ta(b)&&a.Nb(b);c&&p.setTimeout(function(){return Lk(a)},Number(c))};
Ik.prototype.Nb=function(a){var b=this,c=qb(function(){return N(function(){a(pe.F,b.J)})});this.g?c():this.D.push(c)};var Mk=function(a){a.s++;return qb(function(){a.o++;a.N&&a.o>=a.s&&Lk(a)})};var Nk=function(){function a(d){return!Ua(d)||0>d?0:d}if(!O._li&&p.performance&&p.performance.timing){var b=p.performance.timing.navigationStart,c=Ua(Uh.get("gtm.start"))?Uh.get("gtm.start"):0;O._li={cst:a(c-b),cbt:a(Jh-b)}}};var Rk={},Sk=function(){return p.GoogleAnalyticsObject&&p[p.GoogleAnalyticsObject]},Tk=!1;
var Uk=function(a){p.GoogleAnalyticsObject||(p.GoogleAnalyticsObject=a||"ga");var b=p.GoogleAnalyticsObject;if(p[b])p.hasOwnProperty(b)||K(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);p[b]=c}Nk();return p[b]},Vk=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Sk();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Wk=function(a){};
var Yk=function(a){},Xk=function(){return p.GoogleAnalyticsObject||"ga"},Zk=function(a,b){return function(){var c=Sk(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var dl=function(){return"&tc="+Sd.filter(function(a){return a}).length},gl=function(){2022<=el().length&&fl()},il=function(){hl||(hl=p.setTimeout(fl,500))},fl=function(){hl&&(p.clearTimeout(hl),hl=void 0);void 0===jl||kl[jl]&&!ll&&!ml||(nl[jl]||ol.fi()||0>=pl--?(K(1),nl[jl]=!0):(ol.Ei(),bg(el()),kl[jl]=!0,ql=rl=sl=ml=ll=""))},el=function(){var a=jl;if(void 0===a)return"";var b=Ra("GTM"),c=Ra("TAGGING");return[tl,kl[a]?"":"&es=1",ul[a],b?"&u="+b:"",c?"&ut="+c:"",dl(),ll,ml,sl?sl:"",rl,ql,"&z=0"].join("")},
vl=function(){return[Kh,"&v=3&t=t","&pid="+Ya(),"&rv="+pe.Ec].join("")},wl="0.005000">Math.random(),tl=vl(),xl=function(){tl=vl()},kl={},ll="",ml="",ql="",rl="",sl="",jl=void 0,ul={},nl={},hl=void 0,ol=function(a,b){var c=0,d=0;return{fi:function(){if(c<a)return!1;mb()-d>=b&&(c=0);return c>=a},Ei:function(){mb()-d>=b&&(c=0);c++;d=mb()}}}(2,1E3),pl=1E3,yl=function(a,b,c){if(wl&&!nl[a]&&b){a!==jl&&(fl(),jl=a);var d,e=String(b[qd.Sa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;ll=ll?ll+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(Ud[g]?"1":"2")+d;ql=ql?ql+"."+h:"&ti="+h;il();gl()}},zl=function(a,b,c){if(wl&&!nl[a]){a!==jl&&(fl(),jl=a);var d=c+b;ml=ml?ml+"."+d:"&epr="+d;il();gl()}},Al=function(a,b,c){};
var Bl=function(){return!1},Cl=function(){var a={};return function(b,c,d){}};function Dl(a,b,c,d){var e=Sd[a],f=El(a,b,c,d);if(!f)return null;var g=$d(e[qd.Df],c,[]);if(g&&g.length){var h=g[0];f=Dl(h.index,{onSuccess:f,onFailure:1===h.Qf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function El(a,b,c,d){function e(){if(f[qd.fh])h();else{var w=ae(f,c,[]);var A=Jk(c.Ka,String(f[qd.Sa]),Number(f[qd.Ef]),w[qd.gh]),z=!1;w.vtp_gtmOnSuccess=function(){if(!z){z=!0;var E=mb()-D;yl(c.id,Sd[a],"5");Kk(c.Ka,A,"success",
E);g()}};w.vtp_gtmOnFailure=function(){if(!z){z=!0;var E=mb()-D;yl(c.id,Sd[a],"6");Kk(c.Ka,A,"failure",E);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;yl(c.id,f,"1");var C=function(){var E=mb()-D;yl(c.id,f,"7");Kk(c.Ka,A,"exception",E);z||(z=!0,h())};var D=mb();try{Zd(w,c)}catch(E){C(E)}}}var f=Sd[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.Zd(f))return null;var m=$d(f[qd.Ff],c,[]);if(m&&m.length){var n=m[0],q=Dl(n.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!q)return null;g=q;h=2===n.Qf?l:q}if(f[qd.zf]||f[qd.ih]){var u=f[qd.zf]?Td:
c.Pi,r=g,t=h;if(!u[a]){e=qb(e);var v=Fl(a,u,e);g=v.onSuccess;h=v.onFailure}return function(){u[a](r,t)}}return e}function Fl(a,b,c){var d=[],e=[];b[a]=Gl(d,e,c);return{onSuccess:function(){b[a]=Hl;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=Il;for(var f=0;f<e.length;f++)e[f]()}}}function Gl(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Hl(a){a()}function Il(a,b){b()};var Ll=function(a,b){for(var c=[],d=0;d<Sd.length;d++)if(a[d]){var e=Sd[d];var f=Mk(b.Ka);try{var g=Dl(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=c,l=h.push,m=d,n=e["function"];if(!n)throw"Error: No function name given for function call.";var q=Ud[n];l.call(h,{jg:m,cg:q?q.priorityOverride||0:0,Nc:g})}else Jl(d,b),f()}catch(t){f()}}var u=b.Ka;u.N=!0;u.o>=u.s&&Lk(u);c.sort(Kl);for(var r=0;r<c.length;r++)c[r].Nc();
return 0<c.length};function Kl(a,b){var c,d=b.cg,e=a.cg;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.jg,h=b.jg;f=g>h?1:g<h?-1:0}return f}function Jl(a,b){if(!wl)return;var c=function(d){var e=b.Zd(Sd[d])?"3":"4",f=$d(Sd[d][qd.Df],b,[]);f&&f.length&&c(f[0].index);yl(b.id,Sd[d],e);var g=$d(Sd[d][qd.Ff],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Ml=!1,Rl=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Ml)return!1;Ml=!0}var d=xk(b),e=!1;if(!d.active){if("gtm.js"!==c)return!1;e=!0;d=xk(Number.MAX_SAFE_INTEGER)}wl&&!nl[b]&&jl!==b&&(fl(),jl=b,ql=ll="",ul[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,il());var f=a.eventCallback,g=a.eventTimeout,h={id:b,name:c,Zd:vk(d.isAllowed),Pi:[],Zf:function(){K(6)},Jf:Nl(b),Ka:new Ik(f,
g)};Ol(b,h.Ka);var l=ke(h);e&&(l=Pl(l));var m=Ll(l,h);"gtm.js"!==c&&"gtm.sync"!==c||Yk(pe.F);switch(c){case "gtm.init":m&&K(20)}return Ql(l,m)};function Nl(a){return function(b){wl&&(Tb(b)||Al(a,"input",b))}}
function Ol(a,b){Xh(a,"event",1);Xh(a,"ecommerce",1);Xh(a,"gtm");Xh(a,"eventModel");}function Pl(a){for(var b=[],c=0;c<a.length;c++)a[c]&&Ch[String(Sd[c][qd.Sa])]&&(b[c]=!0);return b}function Ql(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Sd[c]&&!Dh[String(Sd[c][qd.Sa])])return!0;return!1}function Sl(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return eh(""+c+b).href}}function Tl(a,b){return Ul()?Sl(a,b):void 0}function Ul(){var a=!1;return a};var Vl=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0},Wl=function(a){var b=new Vl;b.eventModel=a;return b},Xl=function(a,b){a.targetConfig=b;return a},Yl=function(a,b){a.containerConfig=b;return a},Zl=function(a,b){a.remoteConfig=b;return a},$l=function(a,b){a.globalConfig=
b;return a},am=function(a,b){a.onSuccess=b;return a},bm=function(a,b){a.setContainerTypeLoaded=b;return a},cm=function(a,b){a.getContainerTypeLoaded=b;return a},dm=function(a,b){a.onFailure=b;return a};Vl.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var em=function(a){function b(e){cb(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];cb(c,function(e){d.push(e)});return d};var fm;if(3===pe.Ec.length)fm="g";else{var gm="G";fm=gm}
var hm={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:fm,OPT:"o"},im=function(a){var b=pe.F.split("-"),c=b[0].toUpperCase(),d=hm[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===pe.Ec.length){var g="w";f="2"+g}else f="";return f+d+pe.Ec+e};var jm=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var km=function(){return Nf("iPhone")&&!Nf("iPod")&&!Nf("iPad")};Nf("Opera");Nf("Trident")||Nf("MSIE");Nf("Edge");!Nf("Gecko")||-1!=Kf.toLowerCase().indexOf("webkit")&&!Nf("Edge")||Nf("Trident")||Nf("MSIE")||Nf("Edge");-1!=Kf.toLowerCase().indexOf("webkit")&&!Nf("Edge")&&Nf("Mobile");Nf("Macintosh");Nf("Windows");Nf("Linux")||Nf("CrOS");var lm=oa.navigator||null;lm&&(lm.appVersion||"").indexOf("X11");Nf("Android");km();Nf("iPad");Nf("iPod");km()||Nf("iPad")||Nf("iPod");Kf.toLowerCase().indexOf("kaios");var mm=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var nm=function(){};var om=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},pm=function(a,b){this.o=a;this.g=null;this.D={};this.N=0;this.J=void 0===b?500:b;this.s=null};na(pm,nm);
var rm=function(a){return"function"===typeof a.o.__tcfapi||null!=qm(a)};
pm.prototype.addEventListener=function(a){var b={},c=Ef(function(){return a(b)}),d=0;-1!==this.J&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.J));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=om(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{sm(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};pm.prototype.removeEventListener=function(a){a&&a.listenerId&&sm(this,"removeEventListener",null,a.listenerId)};
var um=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=tm(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:m&&tm(a.purpose.consents,b)}else l=!0;else l=1===h?a.purpose&&a.vendor?tm(a.purpose.legitimateInterests,
b)&&tm(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},tm=function(a,b){return!(!a||!a[b])},sm=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(qm(a)){vm(a);var f=++a.N;a.D[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},qm=function(a){if(a.g)return a.g;a.g=mm(a.o,"__tcfapiLocator");return a.g},vm=function(a){a.s||(a.s=function(b){try{var c;c=("string"===
typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.D[c.callId](c.returnValue,c.success)}catch(d){}},jm(a.o,a.s))};var wm=!0;var xm={1:0,3:0,4:0,7:3,9:3,10:3};function ym(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var zm=ym("",550),Am=ym("",500);function Bm(){var a=O.tcf||{};return O.tcf=a}
var Cm=function(a,b){this.s=a;this.g=b;this.o=mb();},Dm=function(a){},Em=function(a){},Km=function(){var a=Bm(),b=new pm(p,wm?3E3:-1),c=new Cm(b,a);if((Fm()?!0===p.gtag_enable_tcf_support:!1!==p.gtag_enable_tcf_support)&&!a.active&&("function"===typeof p.__tcfapi||rm(b))){a.active=!0;a.bc={};Gm();var d=null;wm?d=p.setTimeout(function(){Hm(a);Im(a);d=null},Am):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Hm(a),Im(a),Dm(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=Jm(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in xm)if(xm.hasOwnProperty(h))if("1"===h){var l=e,m=!0;m=void 0===m?!1:m;var n;var q=l;!1===q.gdprApplies?n=!0:(void 0===q.internalErrorState&&(q.internalErrorState=om(q)),n="error"===q.cmpStatus||0!==q.internalErrorState||"loaded"===q.cmpStatus&&("tcloaded"===q.eventStatus||"useractioncomplete"===
q.eventStatus)?!0:!1);g["1"]=n?!1===l.gdprApplies||"tcunavailable"===l.tcString||void 0===l.gdprApplies&&!m||"string"!==typeof l.tcString||!l.tcString.length?!0:um(l,"1",0):!1}else g[h]=um(e,h,xm[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.bc=f,Im(a),Dm(c))}}),Em(c)}catch(e){d&&(clearTimeout(d),d=null),Hm(a),Im(a)}}};function Hm(a){a.type="e";a.tcString="tcunavailable";wm&&(a.bc=Jm())}function Gm(){var a={};Fg((a.ad_storage="denied",a.wait_for_update=zm,a))}
var Fm=function(){var a=!1;a=!0;return a};function Jm(){var a={},b;for(b in xm)xm.hasOwnProperty(b)&&(a[b]=!0);return a}function Im(a){var b={};Gg((b.ad_storage=a.bc["1"]?"granted":"denied",b))}
var Lm=function(){var a=Bm();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Mm=function(){var a=Bm();return a.active?a.tcString||"":""},Nm=function(){var a=Bm();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},Om=function(a){if(!xm.hasOwnProperty(String(a)))return!0;var b=Bm();return b.active&&b.bc?!!b.bc[String(a)]:!0};var Pm=!1;function Qm(a){var b=String(p.location).split(/[?#]/)[0],c=pe.pg||p._CONSENT_MODE_SALT;return a?c?String(di(b+a+c)):"0":""}
function Rm(a){function b(r){var t;O.reported_gclid||(O.reported_gclid={});t=O.reported_gclid;var v;v=Pm&&g&&(!yg()||Hg(J.C))?l+"."+(f.prefix||"_gcl")+(r?"gcu":"gcs"):l+(r?"gcu":"gcs");if(!t[v]){t[v]=!0;var w=[],y=function(D,E){E&&w.push(D+"="+encodeURIComponent(E))},x="https://www.google.com";if(yg()){var A=Hg(J.C);y("gcs",Ig());r&&y("gcu","1");O.dedupe_gclid||(O.dedupe_gclid=
""+si());y("rnd",O.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&Hg(J.C)){var z=tj("_gcl_aw");y("gclaw",z.join("."))}y("url",String(p.location).split(/[?#]/)[0]);y("dclid",Sm(d,n));!A&&d&&(x="https://pagead2.googlesyndication.com")}y("gdpr_consent",Mm()),y("gdpr",Nm());"1"===dj(!1)._up&&y("gtm_up","1");y("gclid",Sm(d,
l));y("gclsrc",m);y("gtm",im(!e));Pm&&g&&Hg(J.C)&&(Ei(f||{}),y("auid",zi[Ai(f.prefix)]||""));var C=x+"/pagead/landing?"+w.join("&");ig(C)}}var c=!!a.Md,d=!!a.xa,e=a.U,f=void 0===a.Jc?{}:a.Jc,g=void 0===a.Rc?!0:a.Rc,h=zj(),l=h.gclid||"",m=h.gclsrc,n=h.dclid||"",q=!c&&(!l||m&&"aw.ds"!==m?!1:!0),u=yg();if(q||u)u?Kg(function(){b();Hg(J.C)||Cg(function(r){return b(!0,r.Kf)},
J.C)},[J.C]):b()}function Sm(a,b){var c=a&&!Hg(J.C);return b&&c?"0":b}var Cn=function(){var a=!0;Om(7)&&Om(9)&&Om(10)||(a=!1);var b=!0;b=!1;b&&!Bn()&&(a=!1);return a},Bn=function(){var a=!0;Om(3)&&Om(4)||(a=!1);return a};var $n=!1;function ao(){var a=O;return a.gcq=a.gcq||new bo}
var co=function(a,b,c){ao().register(a,b,c)},eo=function(a,b,c,d){ao().push("event",[b,a],c,d)},fo=function(a,b){ao().push("config",[a],b)},go=function(a,b,c,d){ao().push("get",[a,b],c,d)},ho=function(a){return ao().getRemoteConfig(a)},io={},jo=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.o=null;this.g=!1},ko=function(a,b,c,d,e){this.type=a;this.s=b;this.U=c||"";this.g=d;this.o=e},bo=function(){this.D={};this.o={};this.g=[];this.s={AW:!1,UA:!1}},
lo=function(a,b){var c=Uj(b);return a.D[c.containerId]=a.D[c.containerId]||new jo},mo=function(a,b,c){if(b){var d=Uj(b);if(d&&1===lo(a,b).status){lo(a,b).status=2;var e={};wl&&(e.timeoutId=p.setTimeout(function(){K(38);il()},3E3));a.push("require",[e],d.containerId);io[d.containerId]=mb();if(Xj()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=p.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Tl(c,g)||h;Zf(l)}}}},no=function(a,b,c,d){if(d.U){var e=lo(a,d.U),f=e.o;if(f){var g=G(c),h=G(e.targetConfig[d.U]),l=G(e.containerConfig),m=G(e.remoteConfig),n=G(a.o),q=Th("gtm.uniqueEventId"),u=Uj(d.U).prefix,r=cm(bm(dm(am($l(Zl(Yl(Xl(Wl(g),h),l),m),n),function(){
zl(q,u,"2");}),function(){zl(q,u,"3");}),function(t,v){a.s[t]=v}),function(t){return a.s[t]});try{zl(q,u,"1");f(d.U,b,d.s,r)}catch(t){zl(q,u,"4");}}}};ca=bo.prototype;
ca.register=function(a,b,c){var d=lo(this,a);if(3!==d.status){d.o=b;d.status=3;if(c){G(d.remoteConfig,c);d.remoteConfig=c}var e=Uj(a),f=io[e.containerId];if(void 0!==f){var g=O[e.containerId].bootstrap,h=e.prefix.toUpperCase();O[e.containerId]._spx&&(h=h.toLowerCase());var l=Th("gtm.uniqueEventId"),m=h,n=mb()-g;if(wl&&!nl[l]){l!==jl&&(fl(),jl=l);var q=m+"."+Math.floor(g-f)+
"."+Math.floor(n);rl=rl?rl+","+q:"&cl="+q}delete io[e.containerId]}this.flush()}};ca.push=function(a,b,c,d){var e=Math.floor(mb()/1E3);mo(this,c,b[0][J.Ha]||this.o[J.Ha]);$n&&c&&lo(this,c).g&&(d=!1);this.g.push(new ko(a,e,c,b,d));d||this.flush()};ca.insert=function(a,b,c){var d=Math.floor(mb()/1E3);0<this.g.length?this.g.splice(1,0,new ko(a,d,c,b,!1)):this.g.push(new ko(a,d,c,b,!1))};
ca.flush=function(a){for(var b=this,c=[],d=!1;this.g.length;){var e=this.g[0];if(e.o)$n?!e.U||lo(this,e.U).g?(e.o=!1,this.g.push(e)):c.push(e):(e.o=!1,this.g.push(e));else switch(e.type){case "require":if(3!==lo(this,e.U).status&&!a){$n&&this.g.push.apply(this.g,c);return}wl&&p.clearTimeout(e.g[0].timeoutId);break;case "set":cb(e.g[0],function(u,r){G(xb(u,r),b.o)});break;case "config":var f=e.g[0],g=!!f[J.zc];delete f[J.zc];var h=lo(this,e.U),l=Uj(e.U),m=l.containerId===l.id;g||(m?h.containerConfig=
{}:h.targetConfig[e.U]={});h.g&&g||no(this,J.aa,f,e);h.g=!0;delete f[J.Hb];m?G(f,h.containerConfig):G(f,h.targetConfig[e.U]);$n&&(d=!0);break;case "event":no(this,e.g[1],e.g[0],e);break;case "get":var n={},q=(n[J.Fa]=e.g[0],n[J.Ea]=e.g[1],n);no(this,J.Ca,q,e)}this.g.shift()}$n&&(this.g.push.apply(this.g,c),d&&this.flush())};ca.getRemoteConfig=function(a){return lo(this,a).remoteConfig};function oo(a,b){var c=this;};function po(a,b,c){};function qo(a,b,c,d){};function ro(a){};var so=function(a,b,c){function d(f,g){var h=f[g];h=jg(f,g);return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||eg(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},to=function(a){O.hasOwnProperty("autoEventsSettings")||(O.autoEventsSettings={});var b=O.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},uo=function(a,b,c){to(a)[b]=c},vo=function(a,b,c,d){var e=to(a),f=pb(e,b,d);e[b]=c(f)},wo=function(a,b,c){var d=to(a);return pb(d,b,c)};var xo={},yo=[];
var Fo=function(a,b){};

function Io(a,b){};var Jo=/^\s*$/,Ko,Lo=!1;
function Wo(a,b){}function Xo(a,b,c){};var Yo=!!p.MutationObserver,Zo=void 0,$o=function(a){if(!Zo){var b=function(){var c=M.body;if(c)if(Yo)(new MutationObserver(function(){for(var e=0;e<Zo.length;e++)N(Zo[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;cg(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<Zo.length;e++)N(Zo[e])}))})}};Zo=[];M.body?b():N(b)}Zo.push(a)};var bp=["www.youtube.com","www.youtube-nocookie.com"],cp,dp=!1,ep=0;
function op(a,b){}function pp(a,b){
return!0};function qp(a,b,c){};function rp(a,b){var c;return c};function sp(a){};function tp(a){};var up=!1,vp=[];function wp(){if(!up){up=!0;for(var a=0;a<vp.length;a++)N(vp[a])}}var xp=function(a){up?N(a):vp.push(a)};function yp(a){H(F(this),["listener:!Fn"],arguments);pf(this,"process_dom_events","window","load");xp(Qb(a))};function zp(a){var b;return b};function Ap(a,b){var c;if(H(F(this),["key:!string","dataLayerVersion:?number"],arguments),pf(this,"read_data_layer",a),2!==(b||2))c=Th(a,1);else{var d=[];c=Vh(a,d)}var e=!1;var f=Pb(c,this.g,e);void 0===f&&void 0!==c&&K(45);return f};function Bp(a){var b;H(F(this),["path:!string"],arguments);pf(this,"access_globals","read",a);var c=a.split("."),d=p,e;for(e=0;e<c.length-1;e++){d=d[c[e]];if(null==d)return;}b=d[c[e]];var f=!1;var g=Pb(b,this.g,f);void 0===g&&void 0!==b&&K(45);return g};function Cp(a,b){var c=null,d=!1;
return Pb(c,this.g,d)};function Dp(a){var b;H(F(this),["path:!string"],arguments);pf(this,"access_globals","readwrite",a);var c=a.split("."),d=[];var e=wb(c,d),f=c[c.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var g=e[f];void 0===g&&(g=[],e[f]=g);b=function(){if(!Ta(g.push))throw Error("Object at "+a+" in window is not an array.");
g.push.apply(g,Array.prototype.slice.call(arguments,0))};var h=!1;return Pb(b,this.g,h)};var Ep=function(a){var b;return b};function Fp(a,b){b=void 0===b?!0:b;var c;H(F(this),["name:!string","decode:?boolean"],arguments),pf(this,"get_cookies",a),c=Pb(gi(a,void 0,!!b),this.g);return c};function Gp(a){var b=null;return b};function Hp(a,b){var c;return c};function Ip(a,b){var c;return c};function Jp(a){var b="";return b};function Kp(a,b){var c;return c};function Lp(a){var b="";H(F(this),["component:?string"],arguments),pf(this,"get_url",a),b=ch(eh(p.location.href),a);return b};function Mp(){pf(this,"get_user_agent");return p.navigator.userAgent};function Np(a,b){};var Op={};
function Pp(a,b,c,d){H(F(this),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);pf(this,"inject_script",a);var e=this.g,f=function(){b instanceof zb&&b.s(e)},g=function(){c instanceof zb&&c.s(e)};if(!d){Zf(a,f,g);return}var h=d;Op[h]?(Op[h].onSuccess.push(f),Op[h].onFailure.push(g)):(Op[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Op[h].onSuccess,m=0;m<l.length;m++)N(l[m]);l.push=function(n){N(n);return 0}},
g=function(){for(var l=Op[h].onFailure,m=0;m<l.length;m++)N(l[m]);Op[h]=null},Zf(a,f,g));};function Qp(a){var b=!0;return b};var Rp=function(){return!1},Sp={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function Tp(){try{pf(this,"logging")}catch(c){return}if(!console)return;for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=Qb(a[b],this.g);console.log.apply(console,a);};function Up(a){var b=void 0;return b};function Vp(a,b){var c=!1;H(F(this),["permission:!string"],[a]);for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;++e)d[e]=Qb(d[e],this.g);d.unshift(this);try{pf.apply(null,d),c=!0}catch(f){return!1}return c};function Wp(){var a="";return a};function Xp(){var a="";return a};function Yp(a,b,c,d){d=void 0===d?!1:d;};function Zp(a,b,c){};function $p(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;H(F(this),["name:!string","value:?string","options:?DustMap","encode:?boolean"],arguments);var g=c?Qb(c,this.g):void 0,h={};h.encode=!!d;g&&(h.path=g.path,h.domain=g.domain,h.expires=g.expires,h.Hi=g.samesite,h.oi=g["max-age"],h.Ki=g.secure);f=0===oi(a,b,h,function(l,m){return pf(e,"set_cookies",l,m)});return f};function aq(a){H(F(this),["consentSettings:!DustMap"],arguments);for(var b=a.Ub(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==J.gd&&pf(this,"access_consent",e,"write")}Fg(Qb(a))};function bq(a,b,c){H(F(this),["path:!string","value:?*","overrideExisting:?boolean"],arguments);pf(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=p,g;for(g=0;g<e.length-1;g++){f=f[e[g]];if(void 0===f)return!1;}if(void 0===
f[e[g]]||c)return f[e[g]]=Qb(b,this.g,d),!0;return!1};function cq(a,b,c){}
;var dq=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function eq(a,b,c,d){var e=this;};function fq(a,b,c){}
;var gq={},hq={};gq.getItem=function(a){var b=null;return b};
gq.setItem=function(a,b){};
gq.removeItem=function(a){};gq.clear=function(){};var iq=function(a){var b;return b};function jq(a){H(F(this),["consentSettings:!DustMap"],arguments);var b=Qb(a),c;for(c in b)b.hasOwnProperty(c)&&pf(this,"access_consent",c,"write");Gg(b)};var nd=function(){var a=new Af;Xj()?(a.add("injectHiddenIframe",Sa),a.add("injectScript",Sa)):(a.add("injectHiddenIframe",Np),a.add("injectScript",Pp));var b=Zp;a.add("Math",hf());a.add("TestHelper",Cf());a.add("addEventCallback",ro);a.add("aliasInWindow",pp);a.add("assertApi",df);a.add("assertThat",ef);a.add("callInWindow",
rp);a.add("callLater",sp);a.add("copyFromDataLayer",Ap);a.add("copyFromWindow",Bp);a.add("createArgumentsQueue",Cp);a.add("createQueue",Dp);a.add("decodeUri",jf);a.add("decodeUriComponent",kf);a.add("encodeUri",lf);a.add("encodeUriComponent",mf);a.add("fail",nf);a.add("fromBase64",Ep,!("atob"in p));a.add("generateRandom",of);a.add("getContainerVersion",qf);a.add("getCookieValues",Fp);a.add("getQueryParameters",Hp);a.add("getReferrerQueryParameters",Ip);a.add("getReferrerUrl",Jp);a.add("getTimestamp",
rf);a.add("getTimestampMillis",rf);a.add("getType",sf);a.add("getUrl",Lp);a.add("localStorage",Sp,!Rp());a.add("logToConsole",Tp);a.add("makeInteger",uf);a.add("makeNumber",vf);a.add("makeString",wf);a.add("makeTableMap",xf);a.add("mock",zf);a.add("parseUrl",Up);a.add("queryPermission",Vp);a.add("readCharacterSet",Wp);a.add("readTitle",Xp);a.add("sendPixel",b);a.add("setCookie",$p);a.add("setInWindow",bq);a.add("sha256",eq);a.add("templateStorage",gq);a.add("toBase64",iq,!("btoa"in p));a.add("JSON",tf(function(c){var d=this.g.g;d&&d.log.call(this,"error",c)}));return function(c){var d;if(a.g.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.o.hasOwnProperty(c)){var f=!1,g=this.g.g;if(g){var h=g.Tb();if(h){0!==h.indexOf("__cvt_")&&(f=!0);}}e=f}if(e)d=a.o.hasOwnProperty(c)?a.o[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var ld,te;
function kq(){var a=data.runtime||[],b=data.runtime_lines;ld=new hd;lq();Od=function(e,f,g){mq(f);var h=new Eb;cb(f,function(r,t){var v=Pb(t);void 0===v&&void 0!==t&&K(44);h.set(r,v)});ld.g.g.J=ge();var l={wh:ue(e),eventId:void 0!==g?g.id:void 0,Nb:void 0!==g?function(r){return g.Ka.Nb(r)}:void 0,Tb:function(){return e},log:function(){}};if(Bl()){var m=Cl(),
n=void 0,q=void 0;l.ja={Ob:{},nb:function(r,t,v){1===t&&(n=r);7===t&&(q=v);m(r,t,v)},ce:yf()};l.log=function(r,t){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:r,source:q,message:v})}}}var u=md(l,[e,h]);ld.g.g.J=void 0;u instanceof ya&&"return"===u.g&&(u=u.o);return Qb(u)};od();for(var c=0;c<a.length;c++){var d=a[c];if(!Va(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&de(d,b[c]);ld.Nc(d)}}
function mq(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ta(b)&&(a.gtmOnSuccess=function(){N(b)});Ta(c)&&(a.gtmOnFailure=function(){N(c)})}function lq(){var a=ld;O.SANDBOXED_JS_SEMAPHORE=O.SANDBOXED_JS_SEMAPHORE||0;pd(a,function(b,c,d){O.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{O.SANDBOXED_JS_SEMAPHORE--}})}function nq(a){void 0!==a&&cb(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Mh[e]=Mh[e]||[];Mh[e].push(b)}})};var oq="HA GF G UA AW DC".split(" "),pq=!1,qq={},rq=!1;function sq(a,b){var c={event:a};b&&(c.eventModel=G(b),b[J.od]&&(c.eventCallback=b[J.od]),b[J.uc]&&(c.eventTimeout=b[J.uc]));return c}function tq(){return pq}
var wq={config:function(a){var b;return b},consent:function(a){function b(){tq()&&
G(a[2],{subcommand:a[1]})}if(3===a.length){K(39);var c=Nh(),d=a[1];"default"===d?(b(),Fg(a[2])):"update"===d&&(b(),Gg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&k(b)){var c;if(2<a.length){if(!Ob(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=sq(b,c);return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime)return rq=!0,tq(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=te.o;d.g[b]?d.g[b].push(c):d.g[b]=[c]}},set:function(a){var b;2==a.length&&Ob(a[1])?b=G(a[1]):3==a.length&&k(a[1])&&(b={},Ob(a[2])||Va(a[2])?b[a[1]]=
G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},xq={policy:!0};var yq=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Aq=function(a){var b=zq(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Rq=function(a){if(Qq(a))return a;this.g=a};Rq.prototype.Yh=function(){return this.g};var Qq=function(a){return!a||"object"!==Kb(a)||Ob(a)?!1:"getUntrustedUpdateValue"in a};Rq.prototype.getUntrustedUpdateValue=Rq.prototype.Yh;var Sq=[],Tq=!1,Uq=!1,Vq=!1,Wq=function(a){return p["dataLayer"].push(a)},Xq=function(a){var b=O["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Yq(a){var b=a._clear;cb(a,function(d,e){"_clear"!==d&&(b&&Wh(d,void 0),Wh(d,e))});Ih||(Ih=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Nh(),a["gtm.uniqueEventId"]=c,Wh("gtm.uniqueEventId",c));return Rl(a)}function Zq(){var a=Sq[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(hb(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function $q(){for(var a=!1;!Vq&&0<Sq.length;){var b=!1;if(b&&!Uq&&Zq()){var c={};Sq.unshift((c.event=
"gtm.init",c));Uq=!0}var d=!1;if(d&&!Tq&&Zq()){var e={};Sq.unshift((e.event="gtm.init_consent",e));Tq=!0}Vq=!0;delete Qh.eventModel;Sh();var f=Sq.shift();if(null!=f){var g=Qq(f);
if(g){var h=f;f=Qq(h)?h.getUntrustedUpdateValue():void 0;for(var l=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],m=0;m<l.length;m++){var n=l[m],q=Th(n,1);if(Va(q)||Ob(q))q=G(q);Rh[n]=q}}try{if(Ta(f))try{f.call(Uh)}catch(A){}else if(Va(f)){var u=f;if(k(u[0])){var r=u[0].split("."),t=r.pop(),v=u.slice(1),w=Th(r.join("."),2);if(void 0!==w&&null!==w)try{w[t].apply(w,v)}catch(A){}}}else{if(hb(f)){a:{var y=f;if(y.length&&k(y[0])){var x=wq[y[0]];if(x&&(!g||!xq[y[0]])){f=
x(y);break a}}f=void 0}if(!f){Vq=!1;continue}}a=Yq(f)||a}}finally{g&&Sh(!0)}}Vq=!1}return!a}function ar(){var a=$q();try{yq(p["dataLayer"],pe.F)}catch(b){}return a}
var cr=function(){var a=Xf("dataLayer",[]),b=Xf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Gk(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});xp(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<O.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Rq(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Sq.push.apply(Sq,e);if(300<
this.length)for(K(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return $q()&&h};var d=a.slice(0);Sq.push.apply(Sq,d);br()&&N(ar)},br=function(){var a=!0;return a};var dr={};dr.Ac=new String("undefined");
var er=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===dr.Ac?b:a[d]);return c.join("")}};er.prototype.toString=function(){return this.g("undefined")};er.prototype.valueOf=er.prototype.toString;dr.lh=er;dr.Ed={};dr.Lh=function(a){return new er(a)};var fr={};dr.Fi=function(a,b){var c=Nh();fr[c]=[a,b];return c};dr.Nf=function(a){var b=a?0:1;return function(c){var d=fr[c];if(d&&"function"===typeof d[b])d[b]();fr[c]=void 0}};dr.ei=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};dr.Ai=function(a){if(a===dr.Ac)return a;var b=Nh();dr.Ed[b]=a;return'google_tag_manager["'+pe.F+'"].macro('+b+")"};dr.ri=function(a,b,c){a instanceof dr.lh&&(a=a.g(dr.Fi(b,c)),b=Sa);return{Xd:a,onSuccess:b}};var gr=["input","select","textarea"],hr=["button","hidden","image","reset","submit"],ir=function(a){var b=a.tagName.toLowerCase();return!Xa(gr,function(c){return c===b})||"input"===b&&Xa(hr,function(c){return c===a.type.toLowerCase()})?!1:!0},jr=function(a){return a.form?a.form.tagName?a.form:M.getElementById(a.form):hg(a,["form"],100)},kr=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(ir(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var vr=p.clearTimeout,wr=p.setTimeout,S=function(a,b,c){if(Xj()){b&&N(b)}else return Zf(a,b,c)},xr=function(){return new Date},yr=function(){return p.location.href},zr=function(a){return ch(eh(a),"fragment")},Ar=function(a){return dh(eh(a))},Br=function(a,b){return Th(a,b||2)},Cr=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Wq(a)):d=Wq(a);return d},Dr=function(a,b){p[a]=b},V=function(a,b,c){b&&
(void 0===p[a]||c&&!p[a])&&(p[a]=b);return p[a]},Er=function(a,b,c){return gi(a,b,void 0===c?!0:!!c)},Fr=function(a,b,c){return 0===pi(a,b,c)},Gr=function(a,b){if(Xj()){b&&N(b)}else ag(a,b)},Hr=function(a){return!!wo(a,"init",!1)},Ir=function(a){uo(a,"init",!0)},Jr=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Gh;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(Zj("https://","http://",c))},Kr=function(a,
b){var c=a[b];c=jg(a,b);return c},Lr=function(a,b,c){wl&&(Tb(a)||Al(c,b,a))};
var Mr=dr.ri;function is(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var js=new $a;function ks(a,b){function c(g){var h=eh(g),l=ch(h,"protocol"),m=ch(h,"host",!0),n=ch(h,"port"),q=ch(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function ls(a){return ms(a)?1:0}
function ms(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Va(c)){for(var d=0;d<c.length;d++){var e=G(a,{});G({arg1:c[d],any_of:void 0},e);if(ls(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(r){}}f=!1}return f;case "_ew":return is(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Wa(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var m;var n=a.ignore_case?"i":void 0;try{var q=String(c)+n,u=js.get(q);u||(u=new RegExp(c,n),js.set(q,u));m=u.test(b)}catch(r){m=!1}return m;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ks(b,c)}return!1};var ns=encodeURI,W=encodeURIComponent,os=bg;var ps=function(a,b){if(!a)return!1;var c=ch(eh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var qs=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Wt(){return p.gaGlobal=p.gaGlobal||{}}var Xt=function(){var a=Wt();a.hid=a.hid||Ya();return a.hid},Yt=function(a,b){var c=Wt();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Iu=window,Ju=document,Ku=function(a){var b=Iu._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Iu["ga-disable-"+a])return!0;try{var c=Iu.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=ei("AMP_TOKEN",String(Ju.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Ju.getElementById("__gaOptOutExtension")?!0:!1};var Lu={};function Nu(a){delete a.eventModel[J.Hb];Pu(a.eventModel)}var Pu=function(a){cb(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[J.ra]||{};cb(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Su=function(a,b,c){eo(b,c,a)},Tu=function(a,b,c){eo(b,c,a,!0)},Yu=function(a,b){};
function Uu(a,b){}var Y={h:{}};
Y.h.vis=["google"],function(){var a={};(function(b){Y.__vis=b;Y.__vis.i="vis";Y.__vis.m=!0;Y.__vis.priorityOverride=0})(function(b){var c,d=[];d.push("CSS"===b.vtp_selectorType?b.vtp_elementSelector:"#"+b.vtp_elementId);d.push(b.vtp_outputMethod);"BOOLEAN"==b.vtp_outputMethod&&d.push(b.vtp_onScreenRatio);c=d.join("&");var e=a[c],f=Number(xr());if(e&&250>f-e.time)return e.value;e={time:f,value:null};var g=b.vtp_outputMethod,h=null;if("CSS"==b.vtp_selectorType)try{var l=Mg(b.vtp_elementSelector);l&&
0<l.length&&(h=l[0])}catch(n){h=null}else h=M.getElementById(b.vtp_elementId);if(h)switch(g){case "BOOLEAN":var m=(Number(b.vtp_onScreenRatio)||50)/100;e.value=Sg(h)>=m&&!Qg(h);break;case "PERCENT":e.value=0,Qg(h)||(e.value=Math.round(1E3*Sg(h))/10)}a[c]=e;return e.value})}();

Y.h.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.i="jsm";Y.__jsm.m=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");var d=c&&c.e&&c.e(b);Lr(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Y.h.c=["google"],function(){(function(a){Y.__c=a;Y.__c.i="c";Y.__c.m=!0;Y.__c.priorityOverride=0})(function(a){Lr(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Y.h.d=["google"],function(){(function(a){Y.__d=a;Y.__d.i="d";Y.__d.m=!0;Y.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType)try{var e=Mg(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}catch(f){b=null}else b=M.getElementById(a.vtp_elementId);b&&(d?c=eg(b,d):c=fg(b));return lb(String(b&&c))})}();
Y.h.e=["google"],function(){(function(a){Y.__e=a;Y.__e.i="e";Y.__e.m=!0;Y.__e.priorityOverride=0})(function(a){return String(Yh(a.vtp_gtmEventId,"event"))})}();
Y.h.f=["google"],function(){(function(a){Y.__f=a;Y.__f.i="f";Y.__f.m=!0;Y.__f.priorityOverride=0})(function(a){var b=Br("gtm.referrer",1)||M.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?ch(eh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Ar(String(b)):String(b)})}();
Y.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=so(c,"gtm.click");Cr(d)}}(function(b){Y.__cl=b;Y.__cl.i="cl";Y.__cl.m=!0;Y.__cl.priorityOverride=0})(function(b){if(!Hr("cl")){var c=V("document");cg(c,"click",a,!0);Ir("cl")}N(b.vtp_gtmOnSuccess)})}();
Y.h.j=["google"],function(){(function(a){Y.__j=a;Y.__j.i="j";Y.__j.m=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=V(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];Lr(c,"j",a.vtp_gtmEventId);return c})}();Y.h.k=["google"],function(){(function(a){Y.__k=a;Y.__k.i="k";Y.__k.m=!0;Y.__k.priorityOverride=0})(function(a){return Er(a.vtp_name,Br("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Y.__access_globals=b;Y.__access_globals.i="access_globals";Y.__access_globals.m=!0;Y.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,q,u){if(!k(u))throw d(n,{},"Key must be a string.");if("read"===q){if(-1<Wa(e,u))return}else if("write"===q){if(-1<Wa(f,u))return}else if("readwrite"===q){if(-1<Wa(f,u)&&-1<Wa(e,u))return}else if("execute"===q){if(-1<Wa(g,u))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(n,{},"Prohibited "+q+" on global variable: "+
u+".");},O:a}})}();Y.h.r=["google"],function(){(function(a){Y.__r=a;Y.__r.i="r";Y.__r.m=!0;Y.__r.priorityOverride=0})(function(a){return Ya(a.vtp_min,a.vtp_max)})}();
Y.h.t=["google"],function(){(function(a){Y.__t=a;Y.__t.i="t";Y.__t.m=!0;Y.__t.priorityOverride=0})(function(){return xr().getTime()})}();
Y.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.i="u";Y.__u.m=!0;Y.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Br("gtm.url",1))||yr();var d=b[a("vtp_component")];if(!d||"URL"==d)return Ar(String(c));var e=eh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Va(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var n=0;n<m.length;n++){var q=ch(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=ch(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.h.v=["google"],function(){(function(a){Y.__v=a;Y.__v.i="v";Y.__v.m=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Br(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Lr(d,"v",a.vtp_gtmEventId);return d})}();
Y.h.ua=["google"],function(){function a(q){return Hg(q)}function b(q,u){var r=!1;if(yg()&&!r&&!e[q]){var t=function(){var v=Sk(),w="gtm"+Nh(),y=m(u),x={name:w};l(y,x,!0);v("create",q,x);v(function(){v.remove(w)})};Cg(t,J.K);Cg(t,J.C);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,
allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},
l=function(q,u,r){var t=0;if(q)for(var v in q)if(!h[v]&&q.hasOwnProperty(v)&&(r&&f[v]||!r&&void 0===f[v])){var w=g[v]?jb(q[v]):q[v];"anonymizeIp"!=v||w||(w=void 0);u[v]=w;t++}return t},m=function(q){var u={};q.vtp_gaSettings&&G(qs(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),u);G(qs(q.vtp_fieldsToSet,"fieldName","value"),u);Hg(J.K)||(u.storage="none");Hg(J.C)||(u.allowAdFeatures=!1,u.storeGac=!1);Cn()||(u.allowAdFeatures=!1);Bn()||(u.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&
(u._x_19=q.vtp_transportUrl);return u},
n=function(q){function u(pa,Z){void 0!==Z&&E("set",pa,Z)}var r={},t={},v={},w={};if(q.vtp_gaSettings){var y=q.vtp_gaSettings;G(qs(y.vtp_contentGroup,"index","group"),t);G(qs(y.vtp_dimension,"index","dimension"),v);G(qs(y.vtp_metric,"index","metric"),w);var x=G(y);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=void 0;x.vtp_metric=void 0;q=G(q,x)}G(qs(q.vtp_contentGroup,"index","group"),t);G(qs(q.vtp_dimension,"index","dimension"),v);G(qs(q.vtp_metric,"index","metric"),w);var A=
m(q),z=Uk(q.vtp_functionName);if(Ta(z)){var C="",D="";q.vtp_setTrackerName&&"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(D=q.vtp_trackerName,C=D+"."):(D="gtm"+Nh(),C=D+".");var E=function(pa){var Z=[].slice.call(arguments,0);Z[0]=C+Z[0];z.apply(window,Z)},I=function(pa,Z){return void 0===Z?Z:pa(Z)},P=function(pa,Z){if(Z)for(var Oa in Z)Z.hasOwnProperty(Oa)&&E("set",pa+Oa,Z[Oa])},Q=function(){},aa={name:D};l(A,aa,!0);var ta=q.vtp_trackingId||r.trackingId;z("create",ta,aa);E("set","&gtm",im(!0));var R=!1;
yg()&&!R&&(E("set","&gcs",Ig()),b(ta,q));A._x_19&&(null==Wf&&delete A._x_19,A._x_20&&!d[D]&&(d[D]=!0,z(Zk(D,String(A._x_20)))));q.vtp_enableRecaptcha&&E("require","recaptcha","recaptcha.js");(function(pa,Z){void 0!==q[Z]&&E("set",pa,q[Z])})("nonInteraction","vtp_nonInteraction");P("contentGroup",t);P("dimension",v);P("metric",w);var L={};l(A,L,!1)&&E("set",L);var U;
q.vtp_enableLinkId&&E("require","linkid","linkid.js");E("set","hitCallback",function(){var pa=A&&A.hitCallback;Ta(pa)&&pa();q.vtp_gtmOnSuccess()});var ba=function(pa,Z){return void 0===q[pa]?r[Z]:q[pa]};if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(E("require","ec","ec.js"),Q());var ua={hitType:"event",eventCategory:String(ba("vtp_eventCategory","category")),eventAction:String(ba("vtp_eventAction","action")),eventLabel:I(String,
ba("vtp_eventLabel","label")),eventValue:I(ib,ba("vtp_eventValue","value"))};l(U,ua,!1);E("send",ua);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==
q.vtp_trackType){}else if("TRACK_TIMING"==q.vtp_trackType){}else if("DECORATE_LINK"==
q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&
(E("require","ec","ec.js"),Q());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var Na="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","displayfeatures",void 0,{cookieName:Na})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var Mb="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","adfeatures",{cookieName:Mb})}U?E("send","pageview",U):E("send","pageview");jb(A.urlPassthrough)&&Wk(C)}if(!c){var Cb=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(Cb="internal/"+Cb);c=!0;var sb=Tl(A._x_19,"/analytics.js"),bb=Zj("https:","http:","//www.google-analytics.com/"+Cb,A&&!!A.forceSSL);S("analytics.js"===Cb&&sb?sb:bb,function(){var pa=
Sk();pa&&pa.loaded||q.vtp_gtmOnFailure();},q.vtp_gtmOnFailure)}}else N(q.vtp_gtmOnFailure)};(function(q){Y.__ua=q;Y.__ua.i="ua";Y.__ua.m=!0;Y.__ua.priorityOverride=0})(function(q){Kg(function(){n(q)},
[J.K,J.C])})}();
Y.h.get_url=["google"],function(){function a(b,c,d){return{component:c,queryKey:d}}(function(b){Y.__get_url=b;Y.__get_url.i="get_url";Y.__get_url.m=!0;Y.__get_url.priorityOverride=0})(function(b){var c="any"===b.vtp_urlParts?null:[];c&&(b.vtp_protocol&&c.push("protocol"),b.vtp_host&&c.push("host"),b.vtp_port&&c.push("port"),b.vtp_path&&c.push("path"),b.vtp_extension&&c.push("extension"),b.vtp_query&&c.push("query"),b.vtp_fragment&&c.push("fragment"));var d=c&&"any"!==b.vtp_queriesAllowed?b.vtp_queryKeys||
[]:null,e=b.vtp_createPermissionError;return{assert:function(f,g,h){if(g){if(!k(g))throw e(f,{},"URL component must be a string.");if(c&&0>Wa(c,g))throw e(f,{},"Prohibited URL component: "+g);if("query"===g&&d){if(!h)throw e(f,{},"Prohibited from getting entire URL query when query keys are specified.");if(!k(h))throw e(f,{},"Query key must be a string.");if(0>Wa(d,h))throw e(f,{},"Prohibited query key: "+h);}}else if(c)throw e(f,{},"Prohibited from getting entire URL when components are specified.");
},O:a}})}();


Y.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__inject_script=b;Y.__inject_script.i="inject_script";Y.__inject_script.m=!0;Y.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!k(f))throw d(e,{},"Script URL must be a string.");try{if(Ve(eh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},O:a}})}();





Y.h.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.i="gas";Y.__gas.m=!0;Y.__gas.priorityOverride=0})(function(a){var b=G(a),c=b;c[qd.Sa]=null;c[qd.bh]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Y.h.read_data_layer=["google"],function(){function a(b,c){return{key:c}}(function(b){Y.__read_data_layer=b;Y.__read_data_layer.i="read_data_layer";Y.__read_data_layer.m=!0;Y.__read_data_layer.priorityOverride=0})(function(b){var c=b.vtp_keyPatterns||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!k(f))throw d(e,{},"Keys must be strings.");try{var g;a:{for(var h=0;h<c.length;h++){var l=f,m=c[h];if(!Pe.exec(m))throw Error("Invalid key wildcard");var n=m.indexOf(".*"),q=-1!==n&&n===
m.length-2,u=q?m.slice(0,m.length-2):m,r;b:if(0===l.length)r=!1;else{for(var t=l.split("."),v=0;v<t.length;v++)if(!Oe.exec(t[v])){r=!1;break b}r=!0}if(!r||u.length>l.length||!q&&l.length!=m.length?0:q?0===l.indexOf(u)&&(l===u||"."==l.charAt(u.length)):l===u){g=!0;break a}}g=!1}if(g)return}catch(w){throw d(e,{},"Invalid key filter.");}throw d(e,{},"Prohibited read from data layer variable: "+f+".");},O:a}})}();
Y.h.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:yr()}function b(f,g){cg(f,"hashchange",function(h){var l=a(h);g({source:"hashchange",state:null,url:Ar(l),L:zr(l)})})}function c(f,g){cg(f,"popstate",function(h){var l=a(h);g({source:"popstate",state:h.state,url:Ar(l),L:zr(l)})})}function d(f,g,h){var l=g.history,m=l[f];if(Ta(m))try{l[f]=function(n,q,u){m.apply(l,[].slice.call(arguments,0));h({source:f,state:n,url:Ar(yr()),
L:zr(yr())})}}catch(n){}}function e(){var f={source:null,state:V("history").state||null,url:Ar(yr()),L:zr(yr())};return function(g){var h=f,l={};l[h.source]=!0;l[g.source]=!0;if(!l.popstate||!l.hashchange||h.L!=g.L){var m={event:"gtm.historyChange","gtm.historyChangeSource":g.source,"gtm.oldUrlFragment":f.L,"gtm.newUrlFragment":g.L,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":g.state,"gtm.oldUrl":f.url,"gtm.newUrl":g.url};f=g;Cr(m)}}}(function(f){Y.__hl=f;Y.__hl.i="hl";Y.__hl.m=!0;Y.__hl.priorityOverride=
0})(function(f){var g=V("self");if(!Hr("hl")){var h=e();b(g,h);c(g,h);d("pushState",g,h);d("replaceState",g,h);Ir("hl")}N(f.vtp_gtmOnSuccess)})}();

Y.h.logging=["google"],function(){function a(){return{}}(function(b){Y.__logging=b;Y.__logging.i="logging";Y.__logging.m=!0;Y.__logging.priorityOverride=0})(function(b){var c=b.vtp_environments||"debug",d=b.vtp_createPermissionError;return{assert:function(e){var f;if(f="all"!==c&&!0){var g=!1;f=!g}if(f)throw d(e,{},"Logging is not enabled in all environments");},O:a}})}();Y.h.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.i="smm";Y.__smm.m=!0;Y.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=qs(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;Lr(d,"smm",a.vtp_gtmEventId);return d})}();



Y.h.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.i="paused";Y.__paused.m=!0;Y.__paused.priorityOverride=0})(function(a){N(a.vtp_gtmOnFailure)})}();

Y.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=M.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var n=h.getAttribute("data-gtmsrc");n&&(m.src=n,Yf(m,l));d.insertBefore(m,null);n||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(u){N(g)}}}var c=function(d){if(M.body){var e=d.vtp_gtmOnFailure,f=Mr(d.vtp_html,d.vtp_gtmOnSuccess,
e),g=f.Xd,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(M.body,gg(g),h,e)()}else wr(function(){c(d)},200)};Y.__html=c;Y.__html.i="html";
Y.__html.m=!0;Y.__html.priorityOverride=0}();

Y.h.dbg=["google"],function(){(function(a){Y.__dbg=a;Y.__dbg.i="dbg";Y.__dbg.m=!0;Y.__dbg.priorityOverride=0})(function(){return!1})}();


Y.h.set_cookies=["google"],function(){function a(c,d,e){var f=c.name;if("*"!==f&&f!==d)return!1;var g=c.domain;if("*"!==g){var h=(e||{}).domain;if(""===g){if(null!=h&&""!==h)return!1}else if(g!==h)return!1}var l=c.path;if("*"!==l){var m=(e||{}).path;if(""===l){if(null!=m&&""!==m)return!1}else if(l!==m)return!1}switch(c.secure){case "any":break;case "secure":if(!(e||{}).secure)return!1;break;case "non_secure":if((e||{}).secure)return!1;break;default:throw Error("Unexpected cookie secure configuration setting: "+c.secure);
}var n=void 0!==(e||{}).expires||void 0!==(e||{})["max-age"];switch(c.session){case "any":break;case "session":if(n)return!1;break;case "non_session":if(!n)return!1;break;default:throw Error("Unexpected cookie session configuration value: "+c.session);}return!0}function b(c,d,e){return{name:d,options:e}}(function(c){Y.__set_cookies=c;Y.__set_cookies.i="set_cookies";Y.__set_cookies.m=!0;Y.__set_cookies.priorityOverride=0})(function(c){var d=c.vtp_allowedCookies||[],e=c.vtp_createPermissionError;return{assert:function(f,
g,h){if(!k(g))throw e(f,{},"Cookie name must be a string.");for(var l=0;l<d.length;++l)if(a(d[l],g,h))return;throw e(f,{},"Prohibited from setting cookie "+g+" with options: "+JSON.stringify(h));},O:b}})}();


Y.h.lcl=[],function(){function a(){var c=V("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Xf||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=hg(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=wo("lcl",h?"nv.mwt":"mwt",0),m;m=h?wo("lcl","nv.ids",[]):wo("lcl","ids",[]);if(m.length){var n=so(g,"gtm.linkClick",m);if(b(f,g,c)&&!h&&l&&g.href){var q=String(Kr(g,"rel")||""),u=!!Xa(q.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
u&&K(36);var r=V((Kr(g,"target")||"_self").substring(1)),t=!0;if(Cr(n,Xq(function(){var v;if(v=t&&r){var w;a:if(u){var y;try{y=new MouseEvent(f.type,{bubbles:!0})}catch(x){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Xf=!0;f.target.dispatchEvent(y);w=!0}else w=!1;v=!w}v&&(r.location.href=Kr(g,"href"))}),l))t=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Cr(n,function(){},l||2E3);return!0}}};cg(c,"click",e,!1);cg(c,"auxclick",
e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=Kr(d,"href"),g=f.indexOf("#"),h=Kr(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=Ar(f),m=Ar(e.location);return l!==m}return!0}(function(c){Y.__lcl=c;Y.__lcl.i="lcl";Y.__lcl.m=!0;Y.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);
if(!f||0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(m){return Math.max(f,m)};vo("lcl","mwt",h,0);e||vo("lcl","nv.mwt",h,0)}var l=function(m){m.push(g);return m};vo("lcl","ids",l,[]);e||vo("lcl","nv.ids",l,[]);Hr("lcl")||(a(),Ir("lcl"));N(c.vtp_gtmOnSuccess)})}();
Y.h.evl=["google"],function(){function a(){var f=Number(Br("gtm.start"))||0;return xr().getTime()-f}function b(f,g,h,l){function m(){if(!Qg(f.target)){g.has(d.Dc)||g.set(d.Dc,""+a());g.has(d.Bd)||g.set(d.Bd,""+a());var q=0;g.has(d.Fc)&&(q=Number(g.get(d.Fc)));q+=100;g.set(d.Fc,""+q);if(q>=h){var u=so(f.target,"gtm.elementVisibility",[g.g]),r=Sg(f.target);u["gtm.visibleRatio"]=Math.round(1E3*r)/10;u["gtm.visibleTime"]=h;u["gtm.visibleFirstTime"]=Number(g.get(d.Bd));u["gtm.visibleLastTime"]=Number(g.get(d.Dc));
Cr(u);l()}}}if(!g.has(d.Kb)&&(0==h&&m(),!g.has(d.jb))){var n=V("self").setInterval(m,100);g.set(d.Kb,n)}}function c(f){f.has(d.Kb)&&(V("self").clearInterval(Number(f.get(d.Kb))),f.o(d.Kb))}var d={Kb:"polling-id-",Bd:"first-on-screen-",Dc:"recent-on-screen-",Fc:"total-visible-time-",jb:"has-fired-"},e=function(f,g){this.element=f;this.g=g};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.g)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.g)};e.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.g,g)};e.prototype.o=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.g)};(function(f){Y.__evl=f;Y.__evl.i="evl";Y.__evl.m=!0;Y.__evl.priorityOverride=0})(function(f){function g(){var y=!1,x=null;if("CSS"===l){try{x=Mg(m)}catch(E){K(46)}y=!!x&&v.length!=x.length}else if("ID"===l){var A=M.getElementById(m);A&&(x=[A],y=1!=v.length||v[0]!==A)}x||(x=[],y=0<v.length);if(y){for(var z=0;z<v.length;z++){var C=
new e(v[z],r);c(C)}v=[];for(var D=0;D<x.length;D++)v.push(x[D]);0<=w&&Yg(w);0<v.length&&(w=Xg(h,v,[u]))}}function h(y){var x=new e(y.target,r);y.intersectionRatio>=u?x.has(d.jb)||b(y,x,q,"ONCE"===t?function(){for(var A=0;A<v.length;A++){var z=new e(v[A],r);z.set(d.jb,"1");c(z)}Yg(w);if(n&&Zo)for(var C=0;C<Zo.length;C++)Zo[C]===g&&Zo.splice(C,1)}:function(){x.set(d.jb,"1");c(x)}):(c(x),"MANY_PER_ELEMENT"===t&&x.has(d.jb)&&(x.o(d.jb),x.o(d.Fc)),x.o(d.Dc))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,q=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,u=(Number(f.vtp_onScreenRatio)||50)/100,r=f.vtp_uniqueTriggerId,t=f.vtp_firingFrequency,v=[],w=-1;g();n&&$o(g);N(f.vtp_gtmOnSuccess)})}();


Y.h.get_cookies=["google"],function(){function a(b,c){return{name:c}}(function(b){Y.__get_cookies=b;Y.__get_cookies.i="get_cookies";Y.__get_cookies.m=!0;Y.__get_cookies.priorityOverride=0})(function(b){var c=b.vtp_cookieAccess||"specific",d=b.vtp_cookieNames||[],e=b.vtp_createPermissionError;return{assert:function(f,g){if(!k(g))throw e(f,{},"Cookie name must be a string.");if("any"!==c&&!("specific"===c&&0<=Wa(d,g)))throw e(f,{},'Access to cookie "'+g+'" is prohibited.');},O:a}})}();
var Zu={};Zu.macro=function(a){if(dr.Ed.hasOwnProperty(a))return dr.Ed[a]},Zu.onHtmlSuccess=dr.Nf(!0),Zu.onHtmlFailure=dr.Nf(!1);Zu.dataLayer=Uh;Zu.callback=function(a){Lh.hasOwnProperty(a)&&Ta(Lh[a])&&Lh[a]();delete Lh[a]};Zu.bootstrap=0;Zu._spx=!1;function $u(){O[pe.F]=Zu;rb(Mh,Y.h);Wd=Wd||dr;Xd=le}
function av(){mg.gtag_cs_api=!0;O=p.google_tag_manager=p.google_tag_manager||{};Km();if(O[pe.F]){var a=O.zones;a&&a.unregisterChild(pe.F);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Pd.push(c[d]);
for(var e=b.tags||[],f=0;f<e.length;f++)Sd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)Rd.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},u=0;u<n.length;u++)q[n[u][0]]=Array.prototype.slice.call(n[u],1);Qd.push(q)}Ud=Y;Vd=ls;var r=data.permissions||{},t=data.sandboxed_scripts,v=data.security_groups;kq();te=new se(r);if(void 0!==t)for(var w=["sandboxedScripts"],y=0;y<t.length;y++){var x=t[y].replace(/^_*/,"");Mh[x]=w}nq(v);$u();cr();Bk=!1;Ck=0;if("interactive"==
M.readyState&&!M.createEventObject||"complete"==M.readyState)Ek();else{cg(M,"DOMContentLoaded",Ek);cg(M,"readystatechange",Ek);if(M.createEventObject&&M.documentElement.doScroll){var A=!0;try{A=!p.frameElement}catch(I){}A&&Fk()}cg(p,"load",Ek)}up=!1;"complete"===M.readyState?wp():cg(p,"load",wp);a:{
if(!wl)break a;p.setInterval(xl,864E5);}Jh=(new Date).getTime();}}
(function(a){if(!p["__TAGGY_INSTALLED"]){var b=!1;if(M.referrer){var c=eh(M.referrer);b="cct.google"===bh(c,"host")}if(!b){var d=gi("googTaggyReferrer");b=d.length&&d[0].length}b&&(p["__TAGGY_INSTALLED"]=!0,Zf("https://cct.google/taggy/agent.js"))}var f=function(){var m=p["google.tagmanager.debugui2.queue"];m||(m=[],p["google.tagmanager.debugui2.queue"]=m,Zf("https://www.googletagmanager.com/debug/bootstrap"));return m},g="x"===ch(p.location,"query",!1,void 0,"gtm_debug");if(!g&&M.referrer){var h=eh(M.referrer);g="tagassistant.google.com"===bh(h,"host")}if(!g){var l=gi("__TAG_ASSISTANT");g=l.length&&l[0].length}p.__TAG_ASSISTANT_API&&(g=!0);g&&Wf?f().push({messageType:"CONTAINER_STARTING",
data:{scriptSource:Wf,resume:function(){a()}}}):a()})(av);

})()
