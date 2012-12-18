mw.loader.implement("ext.vector.collapsibleNav",function($){jQuery(function($){var map={'ltr':{'opera':[['>=',9.6]],'konqueror':[['>=',4.0]],'blackberry':false,'ipod':false,'iphone':false,'ps3':false},'rtl':{'opera':[['>=',9.6]],'konqueror':[['>=',4.0]],'blackberry':false,'ipod':false,'iphone':false,'ps3':false}};if(!$.client.test(map)){return true;}var version=1;if(mediaWiki.config.get('wgCollapsibleNavForceNewVersion')){version=2;}else{if(mediaWiki.config.get('wgCollapsibleNavBucketTest')){version=$.cookie('vector-nav-pref-version');if(version==null){version=Math.round(Math.random()+1);$.cookie('vector-nav-pref-version',version,{'expires':30,'path':'/'});}}}if(version==2){var limit=5;var threshold=3;$('#p-lang ul').addClass('secondary').before('<ul class="primary"></ul>');var languages=['en','fr','de','es','pt','it','ru','ja','nl','pl','zh','sv','ar','tr','uk','fi','no','ca','ro','hu','ksh','id','he','cs','vi','ko','sr','fa','da','eo','sk','th','lt','vo','bg','sl','hr','hi','et','mk'
,'simple','new','ms','nn','gl','el','eu','ka','tl','bn','lv','ml','bs','te','la','az','sh','war','br','is','mr','be-x-old','sq','cy','lb','ta','zh-classical','an','jv','ht','oc','bpy','ceb','ur','zh-yue','pms','scn','be','roa-rup','qu','af','sw','nds','fy','lmo','wa','ku','hy','su','yi','io','os','ga','ast','nap','vec','gu','cv','bat-smg','kn','uz','zh-min-nan','si','als','yo','li','gan','arz','sah','tt','bar','gd','tg','kk','pam','hsb','roa-tara','nah','mn','vls','gv','mi','am','ia','co','ne','fo','nds-nl','glk','mt','ang','wuu','dv','km','sco','bcl','mg','my','diq','tk','szl','ug','fiu-vro','sc','rm','nrm','ps','nv','hif','bo','se','sa','pnb','map-bms','lad','lij','crh','fur','kw','to','pa','jbo','ba','ilo','csb','wo','xal','krc','ckb','pag','ln','frp','mzn','ce','nov','kv','eml','gn','ky','pdc','lo','haw','mhr','dsb','stq','tpi','arc','hak','ie','so','bh','ext','mwl','sd','ig','myv','ay','iu','na','cu','pi','kl','ty','lbe','ab','got','sm','as','mo','ee','zea','av','ace','kg','bm',
'cdo','cbk-zam','kab','om','chr','pap','udm','ks','zu','rmy','cr','ch','st','ik','mdf','kaa','aa','fj','srn','tet','or','pnt','bug','ss','ts','pcd','pih','za','sg','lg','bxr','xh','ak','ha','bi','ve','tn','ff','dz','ti','ki','ny','rw','chy','tw','sn','tum','ng','rn','mh','ii','cho','hz','kr','ho','mus','kj'];var acceptLangCookie=$.cookie('accept-language');if(acceptLangCookie!=null){if(acceptLangCookie!=''){languages=acceptLangCookie.split(',').concat(languages);}}else{$.getJSON(wgScriptPath+'/api.php?action=query&meta=userinfo&uiprop=acceptlang&format=json',function(data){var langs=[];if(typeof data.query!='undefined'&&typeof data.query.userinfo!='undefined'&&typeof data.query.userinfo.acceptlang!='undefined'){for(var j=0;j<data.query.userinfo.acceptlang.length;j++){if(data.query.userinfo.acceptlang[j].q!=0){langs.push(data.query.userinfo.acceptlang[j]['*']);}}}$.cookie('accept-language',langs.join(','),{'path':'/','expires':30});});}var $primary=$('#p-lang ul.primary');var $secondary
=$('#p-lang ul.secondary');if($secondary.children().length<limit+threshold){limit+=threshold;}var count=0;for(var i=0;i<languages.length;i++){var $link=$secondary.find('.interwiki-'+languages[i]);if($link.length){if(count++<limit){$link.appendTo($primary);}else{break;}}}if(count<limit){$secondary.children().each(function(){if(count++<limit){$(this).appendTo($primary);}else{return false;}});}if($secondary.children().length==0){$secondary.remove();}else{$('#p-lang').after('<div id="p-lang-more" class="portal"><h5></h5><div class="body"></div></div>');$('#p-lang-more h5').text(mw.usability.getMsg('vector-collapsiblenav-more'));$secondary.appendTo($('#p-lang-more div.body'));}$('#p-lang').addClass('persistent');}$('#mw-panel').addClass('collapsible-nav');$('#mw-panel > div.portal').each(function(i){var id=$(this).attr('id');var state=$.cookie('vector-nav-'+id);if(state=='true'||(state==null&&i<1)||(state==null&&version==1&&id=='p-lang')){$(this).addClass('expanded').find('div.body').show()
;}else{$(this).addClass('collapsed');}if(state!=null){$.cookie('vector-nav-'+$(this).attr('id'),state,{'expires':30,'path':'/'});}});function toggle($element){$.cookie('vector-nav-'+$element.parent().attr('id'),$element.parent().is('.collapsed'),{'expires':30,'path':'/'});$element.parent().toggleClass('expanded').toggleClass('collapsed').find('div.body').slideToggle('fast');}var $headings=$('#mw-panel > div.portal > h5');var tabIndex=$(document).lastTabIndex()+1;$('#searchInput').attr('tabindex',tabIndex++);$headings.each(function(){$(this).attr('tabindex',tabIndex++);});$('#mw-panel').delegate('div.portal > h5','keydown',function(event){if(event.which==13||event.which==32){toggle($(this));}}).delegate('div.portal > h5','mousedown',function(event){if(event.which!=3){toggle($(this));$(this).blur();}return false;});});;},{"all":
"#mw-panel.collapsible-nav div h5:hover{cursor:pointer;text-decoration:none}#mw-panel.collapsible-nav div.collapsed h5:hover{text-decoration:underline}#mw-panel.collapsible-nav div.portal div.body{display:none}#mw-panel.collapsible-nav div.persistent div.body{display:block}#mw-panel.collapsible-nav div.first h5{display:none}#mw-panel.collapsible-nav div.persistent h5{cursor:default}\n\n/* cache key: wiki:resourceloader:filter:minify-css:4:2b7660b6bc289cb7f97173ab5ed66c64 */"},{"vector-collapsiblenav-more":"More languages"});mw.loader.implement("ext.vector.collapsibleTabs",function($){jQuery(function($){var rtl=$('body').is('.rtl');$.collapsibleTabs.moveToCollapsed=function(ele){var $moving=$(ele);var data=$.collapsibleTabs.getSettings($moving);if(!data){return;}var expContainerSettings=$.collapsibleTabs.getSettings($(data.expandedContainer));if(!expContainerSettings){return;}expContainerSettings.shifting=true;var target=data.collapsedContainer;$moving.css("position","relative").css((
rtl?'left':'right'),0).animate({width:'1px'},"normal",function(){$(this).hide();$('<span class="placeholder" style="display:none;"></span>').insertAfter(this);$(this).detach().prependTo(target).data('collapsibleTabsSettings',data);$(this).attr('style','display:list-item;');var data=$.collapsibleTabs.getSettings($(ele));if(!data){return;}var expContainerSettings=$.collapsibleTabs.getSettings($(data.expandedContainer));if(!expContainerSettings){return;}expContainerSettings.shifting=false;$.collapsibleTabs.handleResize();});};$.collapsibleTabs.moveToExpanded=function(ele){var $moving=$(ele);var data=$.collapsibleTabs.getSettings($moving);if(!data){return;}var expContainerSettings=$.collapsibleTabs.getSettings($(data.expandedContainer));if(!expContainerSettings){return;}expContainerSettings.shifting=true;var $target=$(data.expandedContainer).find('span.placeholder:first');var expandedWidth=data.expandedWidth;$moving.css("position","relative").css((rtl?'right':'left'),0).css('width','1px');
$target.replaceWith($moving.detach().css('width','1px').data('collapsibleTabsSettings',data).animate({width:expandedWidth+"px"},"normal",function(){$(this).attr('style','display:block;');var data=$.collapsibleTabs.getSettings($(this));if(!data){return;}var expContainerSettings=$.collapsibleTabs.getSettings($(data.expandedContainer));if(!expContainerSettings){return;}expContainerSettings.shifting=false;$.collapsibleTabs.handleResize();}));};$('#p-views ul').bind('beforeTabCollapse',function(){if($('#p-cactions').css('display')=='none'){$('#p-cactions').addClass('filledPortlet').removeClass('emptyPortlet').find('h5').css('width','1px').animate({'width':'26px'},390);}}).bind('beforeTabExpand',function(){if($('#p-cactions li').length==1){$('#p-cactions h5').animate({'width':'1px'},370,function(){$(this).attr('style','').parent().addClass('emptyPortlet').removeClass('filledPortlet');});}}).collapsibleTabs({expandCondition:function(eleWidth){if(rtl){return($('#right-navigation').position().
left+$('#right-navigation').width()+1)<($('#left-navigation').position().left-eleWidth);}else{return($('#left-navigation').position().left+$('#left-navigation').width()+1)<($('#right-navigation').position().left-eleWidth);}},collapseCondition:function(){if(rtl){return($('#right-navigation').position().left+$('#right-navigation').width())>$('#left-navigation').position().left;}else{return($('#left-navigation').position().left+$('#left-navigation').width())>$('#right-navigation').position().left;}}});});;},{},{});mw.loader.implement("ext.vector.simpleSearch",function($){jQuery(document).ready(function($){if($('#simpleSearch').length==0){return;}var map={'browsers':{'ltr':{'opera':[['>=',9.6]],'docomo':false,'blackberry':false,'ipod':false,'iphone':false},'rtl':{'opera':[['>=',9.6]],'docomo':false,'blackberry':false,'ipod':false,'iphone':false}}};if(!$.client.test(map)){return true;}if(window.os_MWSuggestDisable){window.os_MWSuggestDisable();}$('#simpleSearch > input#searchInput').attr(
'placeholder',mw.msg('vector-simplesearch-search')).placeholder();$('#searchInput, #searchInput2, #powerSearchText, #searchText').suggestions({fetch:function(query){var $this=$(this);if(query.length!==0){var request=$.ajax({url:mw.util.wikiScript('api'),data:{action:'opensearch',search:query,namespace:0,suggest:''},dataType:'json',success:function(data){if($.isArray(data)&&1 in data){$this.suggestions('suggestions',data[1]);}}});$this.data('request',request);}},cancel:function(){var request=$(this).data('request');if(request&&$.isFunction(request.abort)){request.abort();$(this).removeData('request');}},result:{select:function($input){$input.closest('form').submit();}},delay:120,positionFromLeft:$('body').hasClass('rtl'),highlightInput:true}).bind('paste cut drop',function(e){$(this).trigger('keypress');});$('#searchInput').suggestions({result:{select:function($input){$input.closest('form').submit();}},special:{render:function(query){if($(this).children().length===0){$(this).show();var
$label=$('<div></div>',{'class':'special-label',text:mw.msg('vector-simplesearch-containing')}).appendTo($(this));var $query=$('<div></div>',{'class':'special-query',text:query}).appendTo($(this));$query.autoEllipsis();}else{$(this).find('.special-query').empty().text(query).autoEllipsis();}},select:function($input){$input.closest('form').append($('<input>',{type:'hidden',name:'fulltext',val:'1'}));$input.closest('form').submit();}},$region:$('#simpleSearch')});});;},{},{"vector-simplesearch-search":"Search","vector-simplesearch-containing":"containing..."});

/* cache key: wiki:resourceloader:filter:minify-js:4:72120bf55d154ef1a0f60957aeb20e11 */