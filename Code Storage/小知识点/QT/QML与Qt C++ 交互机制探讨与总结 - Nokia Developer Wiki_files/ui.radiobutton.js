(function($){if($.browser.msie){try{document.execCommand("BackgroundImageCache",false,true);}catch(e){}if(!document.namespaces.v){$("head").prepend("<xml:namespace ns='urn:schemas-microsoft-com:vml' prefix='v' />");$("head").prepend("<?import namespace='v' implementation='#default#VML' ?>");}}$.widget("ui.checkbox",{_init:function(){if(!this.element.is(":radio,:checkbox")){return false;}if(this.element.is(":radio")){this._radio=$(this.element[0].form).find("input:radio").filter('[name="'+this.element[0].name+'"]');}else{this._radio=false;}var self=this,o=this.options;this.element.attr({role:(this._radio?"radio":"checkbox"),"aria-checked":!!this.element[0].checked});this._wrapper=this.element.wrap($("<span />")).parent().addClass((this._radio?"ui-radio":"ui-checkbox")+" ui-state-default").attr({title:$(this.element).attr("title")});var ui_icon_disabled="";o.disabled=false;if(this.element[0].disabled){ui_icon_disabled=" ui-icon-disabled";o.disabled=true;}this._wrapper.prepend($("<span/>").addClass("ui-icon "+this._icon(false)+""+ui_icon_disabled).click(function(event){self.element[0].click();event.preventDefault();event.stopImmediatePropagation();return false;}));$("label[for="+this.element.attr("id")+"]").click(function(event){self.element[0].click();event.preventDefault();event.stopImmediatePropagation();return false;});if($.browser.msie){this._wrapper[0].insertAdjacentHTML("afterBegin","<v:roundrect arcsize='"+(this._radio?"1":"0.1")+"'><v:stroke /><v:fill /></v:roundrect>");this._vml=this._wrapper[0].childNodes[0];var ss=this._wrapper[0].currentStyle;this._vml.style.top="-1px";this._vml.style.left="-1px";this._vml.style.width=parseInt(ss.width)+1+"px";this._vml.style.height=parseInt(ss.height)+1+"px";this._doVML();this._vml.style.visibility="visible";this._wrapper.css("visibility","hidden");this._wrapper[0].onpropertychange=function(){switch(event.propertyName){case"className":case"style.borderTopWidth":case"style.borderTopColor":case"style.backgroundColor":case"style.filter":self._doVML();break;}};$().bind("ui-theme-switch",function(){setTimeout(function(){self._doVML();},500);return false;});}this._wrapper.hover(function(event){if(!o.disabled){$(this).addClass("ui-state-hover");}},function(event){if(!o.disabled){$(this).removeClass("ui-state-hover");}}).bind("mousedown",function(event){if(!o.disabled){$(this).addClass("ui-state-active");}}).bind("mouseup",function(event){if(!o.disabled){$(this).removeClass("ui-state-active");}}).bind(this.widgetEventPrefix+"focus",function(event){if(!o.disabled){if(self._radio){self._radio.not(self.element).removeClass("ui-state-focus");}$(this).addClass("ui-state-focus");}}).bind(this.widgetEventPrefix+"blur",function(event){if(!o.disabled){$(this).removeClass("ui-state-focus");}}).bind(this.widgetEventPrefix+"click",function(event){if(!o.disabled){if(self._radio){self._radio.not(self.element).checkbox("uncheck");self.check();}else{self.toggle();}}});this.element.bind("focus."+this.widgetName,function(event){self._trigger("focus",event);}).bind("blur."+this.widgetName,function(event){self._trigger("blur",event);}).bind("click."+this.widgetName,function(event){self._trigger("click",event);});this._setData("checked",!!this.element[0].checked);},destroy:function(){this._wrapper.replaceWith(this.element);this.element.removeAttr("role").removeAttr("aria-checked").unbind("."+this.widgetName);$.widget.prototype.destroy.apply(this,arguments);},_setData:function(key,value){$.widget.prototype._setData.apply(this,arguments);if(key=="disabled"){if(value){this.element.attr("disabled","disabled");this._wrapper.removeClass("ui-state-focus ui-state-hover ui-state-active");}else{this.element.removeAttr("disabled");}this._wrapper[value?"addClass":"removeClass"](this.widgetName+"-disabled "+this.namespace+"-state-disabled");}else{if(key=="checked"){this.element[0].checked=!!value;this.element.attr("aria-checked",!!value);this._wrapper.find(".ui-icon").addClass(this._icon(!!value)).removeClass(this._icon(!value));}}},check:function(){this._setData("checked",true);},uncheck:function(){this._setData("checked",false);},toggle:function(){this._setData("checked",!this._getData("checked"));},_icon:function(state){if(this._radio){return"ui-icon-"+this.options[state?"radioChecked":"radioUnchecked"];}else{return"ui-icon-"+this.options[state?"checkboxChecked":"checkboxUnchecked"];}},_opacityFixed:false,_inFixup:false,_fixStyle:function(jq,re){var s=jq.attr("style").replace(re,"");if(s!==""){jq.attr("style",s);}else{jq.removeAttr("style");}},_doVML:function(){if(!this._vml||this._inFixup){return;}this._inFixup=true;var ss,op;if(this._opacityFixed){this._vml.childNodes[0].opacity="1";this._vml.childNodes[1].opacity="1";this._fixStyle(this._wrapper.find(".ui-icon"),/filter[^;]*\;?/i);this._fixStyle(this._wrapper,/filter[^;]*\;?/i);this._opacityFixed=false;}ss=this._wrapper[0].currentStyle;this._vml.strokecolor=ss.borderTopColor;this._vml.strokeweight=ss.borderTopWidth;this._vml.fillcolor=ss.backgroundColor;this._vml.childNodes[0].color=ss.borderTopColor;this._vml.childNodes[0].weight=ss.borderTopWidth;this._vml.childNodes[1].color=ss.backgroundColor;if(ss.filter&&ss.filter.search(/Alpha/i)!==-1){op=/(\d+)/.exec(ss.filter);this._wrapper.find(".ui-icon").css("filter",ss.filter);this._vml.childNodes[0].opacity=op[1]/100;this._vml.childNodes[1].opacity=op[1]/100;this._wrapper.css("filter","");this._opacityFixed=true;}this._inFixup=false;},_doSVG:function(){if(!this._svg||this._inFixup){return;}this._inFixup=true;var ss,op;if(this._opacityFixed){this._fixStyle(this._wrapper.find(".ui-icon"),/opacity[^;]*\;?/i);this._fixStyle(this._wrapper.find("rect"),/opacity[^;]*\;?/i);this._fixStyle(this._wrapper,/opacity[^;]*\;?/i);this._opacityFixed=false;}ss=this._wrapper[0].currentStyle;this._svg.firstChild.style.stroke=ss.borderTopColor;this._svg.firstChild.style.strokeWidth=ss.borderTopWidth;this._svg.firstChild.style.fill=ss.backgroundColor;if(ss.opacity&&ss.opacity!==1){op=ss.opacity;this._wrapper.find(".ui-icon").css("opacity",op);this._wrapper.find("rect").css("opacity",op);this._wrapper[0].style.opacity="1";this._opacityFixed=true;}this._inFixup=false;}});$.ui.checkbox.defaults={checkboxChecked:"check",checkboxUnchecked:"empty",radioChecked:"bullet",radioUnchecked:"empty"};})(jQuery);