(function(m,l){var j=/(opera)(?:.*version)?[ \/]([\w.]+)/,k=/(msie) ([\w.]+)/,s=/(mozilla)(?:.*? rv:([\w.]+))?/,h=navigator.userAgent.toLowerCase();navigator.platform.toLowerCase();var i;i={webkit:!1,opera:!1,msie:!1,mozilla:!1,version:""};j=/(webkit)[ \/]([\w.]+)/.exec(h)||j.exec(h)||k.exec(h)||h.indexOf("compatible")<0&&s.exec(h)||["","0"];i[j[1]]=!0;i.version=j[2];(new Date).getTime();var n=function(a,c){c="undefined"==typeof c||!c||!("undefined"!=typeof c.nodeType&&c.nodeType==1)?l:c;return c.getElementsByTagName(a)},
p=function(a,c){for(var a=a.replace(/^(#|\?|\s)*/g,""),b=a.split("&"),g=0;g<b.length;g++){var e=b[g];if(e.indexOf(c+"=")==0)return e.substring((c+"=").length)}return""},q=function(a,c){a=parseInt(a);return isNaN(a)?c:a},j=function(a,c,b,g){var e="undefined"==typeof afc_rand||!afc_rand?Math.floor(Math.random()*2147483647):afc_rand,d=function(){typeof __sosoafc_ids=="undefined"&&(__sosoafc_ids=[]);for(var c=[],b=0;b<__sosoafc_ids.length;++b)c.push(__sosoafc_ids[b].id);__sosoafc_ids.push({id:a});return c.join(",")}();
r.ids=d;d="http://rh.qq.com/afc?"+function(d){var e=["placement_id="+a,"width="+c,"height="+b],g=0,f;f=["sosoafc_previewid","sosoafc_placementid","title","ids","meta","headg","page","links","fulltext"];for(var o=["sosoafc_previewid","sosoafc_placementid","title","url","ids","meta","refer","headg","page","links","fulltext"],o=i.msie&&i.version>6?f:o;f=o.shift();)if(typeof d[f]!="undefined")if(f+="="+("undefined"==typeof encodeURIComponent?m.escape:encodeURIComponent)(String(d[f]).replace(/(?:"|&quot;|&amp;quot;|\'|&#039;|<|&lt;|>|&gt;|\\)/g,
"")),g+f.length<=2040)e.push(f),g+=f.length;else break;return e.join("&")}(r);e='<div id="afc_div_dz_'+e+'"><iframe allowtransparency="true" style="background:transparent" id="afc_iframe_dz_'+e+'" name="afc_frame_dz_'+e+'" scrolling="no" frameborder="0" marginheight="0" marginwidth="0" width="'+c+'" height="'+b+'" allowtransparency="true" src="'+d+'"></iframe></div>';if(g=l.getElementById(g))g.innerHTML=e},d;if(!(typeof afcads_params_for_dz!="object"||afcads_params_for_dz===null)){var r=function(a){a=
"undefined"==typeof a||!a?{}:a;a.maxHeadingsCount="undefined"==typeof a.maxHeadingsCount?q(a.maxHeadingsCount,10):10;a.maxTextCount="undefined"==typeof a.maxTextCount?q(a.maxTextCount,100):100;var c={},b={},d=function(){var a=n("head",l),a=(a=a.length>0?a[0]:null)?n("meta",a):null,b=["",""];if(a)for(var c in a)if("undefined"!=typeof a[c].name&&a[c].name)if(a[c].name.toLowerCase()=="keywords")b[0]=a[c].content;else if(a[c].name.toLowerCase()=="description")b[1]=a[c].content;return b}(),e=m.location.href,
j=l.referrer,k=function(){for(var c=[1,2,3,4,5],b,d=[],e=0,g=!1;b=c.shift();){if(g)break;if((b=n("h"+b,l))&&!(typeof b=="undefined"||b.length<1))for(var f=0,h=b.length;f<h;f+=1){if(++e>a.maxHeadingsCount){g=!0;break}var i=b[f].innerHTML.replace(/<.*?>/g,"").replace(/[\r\n\t]/g,"");d.push(i)}}return d}(),h=function(){var a=p(m.location.search,"sosoafc_previewid"),b=p(m.location.search,"sosoafc_placementid"),a=parseInt(a),b=parseInt(b);return!isNaN(a)&&a>0&&!isNaN(b)&&b>0?{sosoafc_previewid:a,sosoafc_placementid:b}:
null}();b.title=function(){return l.title};b.url=function(){return e};b.meta=function(){return d.join("\t")};b.refer=function(){return j};b.headg=function(){return k.join("\t")};b.page=function(){return""};b.links=function(){return""};b.fulltext=function(){return""};b.ids=function(){return neighbor_ids};if(h)b.sosoafc_previewid=function(){return h.sosoafc_previewid},b.sosoafc_placementid=function(){return h.sosoafc_placementid};for(var i in b)try{c[i]=b[i]()}catch(f){c[i]="-99"}return c}();for(d in afcads_params_for_dz)if(!(typeof afcads_params_for_dz[d]!=
"object"||afcads_params_for_dz[d]===null||"showed"in afcads_params_for_dz[d]&&afcads_params_for_dz[d].showed)){afcads_params_for_dz[d].showed=!0;k=afcads_params_for_dz[d];try{j(k.afc_placementid,k.afc_width,k.afc_height,d)}catch(t){}}}})(window,document);
