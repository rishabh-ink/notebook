/*
 MIT License - http://www.opensource.org/licenses/mit-license.php

 For usage and examples, visit:
 http://timeago.yarp.com/

 Copyright (c) 2008-2012, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
*/
(function(d){function i(){var a;a=d(this);if(!a.data("timeago")){a.data("timeago",{datetime:e.datetime(a)});var b=d.trim(a.text());b.length>0&&(!e.isTime(a)||!a.attr("title"))&&a.attr("title",b)}a=a.data("timeago");isNaN(a.datetime)||d(this).text(f(a.datetime));return this}function f(a){return e.inWords((new Date).getTime()-a.getTime())}d.timeago=function(a){return a instanceof Date?f(a):typeof a==="string"?f(d.timeago.parse(a)):typeof a==="number"?f(new Date(a)):f(d.timeago.datetime(a))};var e=d.timeago;
d.extend(d.timeago,{settings:{refreshMillis:6E4,allowFuture:!1,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(a){function b(b,e){return(d.isFunction(b)?b(e,a):b).replace(/%d/i,c.numbers&&c.numbers[e]||
e)}var c=this.settings.strings,e=c.prefixAgo,f=c.suffixAgo;if(this.settings.allowFuture&&a<0)e=c.prefixFromNow,f=c.suffixFromNow;var g=Math.abs(a)/1E3,j=g/60,k=j/60,h=k/24,i=h/365,g=g<45&&b(c.seconds,Math.round(g))||g<90&&b(c.minute,1)||j<45&&b(c.minutes,Math.round(j))||j<90&&b(c.hour,1)||k<24&&b(c.hours,Math.round(k))||k<42&&b(c.day,1)||h<30&&b(c.days,Math.round(h))||h<45&&b(c.month,1)||h<365&&b(c.months,Math.round(h/30))||i<1.5&&b(c.year,1)||b(c.years,Math.round(i));return d.trim([e,g,f].join(c.wordSeparator===
void 0?" ":c.wordSeparator))},parse:function(a){a=d.trim(a);a=a.replace(/\.\d\d\d+/,"");a=a.replace(/-/,"/").replace(/-/,"/");a=a.replace(/T/," ").replace(/Z/," UTC");a=a.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");return new Date(a)},datetime:function(a){a=e.isTime(a)?d(a).attr("datetime"):d(a).attr("title");return e.parse(a)},isTime:function(a){return d(a).get(0).tagName.toLowerCase()==="time"}});d.fn.timeago=function(){var a=this;a.each(i);var b=e.settings;b.refreshMillis>0&&setInterval(function(){a.each(i)},
b.refreshMillis);return a};document.createElement("abbr");document.createElement("time")})(jQuery);
