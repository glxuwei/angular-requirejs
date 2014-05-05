/*
 *author:xuwei
 * lastUpdateTime:2014.5.2
 * 后续更新：轮播头尾循环及用resize()随窗口自适应。
 * */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(jQuery);
    }
}(function($,undefined){
	$.fn.xw_carousel=function(data){
		var _defaults={
			interval:true,
			arraws:true,
			dots:true
		};
		var _config=$.extend({},_defaults,data);
		var _this=this;
		_this.css({
			"position":"relative",
			"margin":"0 auto",
			"text-align":"center"
		});
		var _div_temp="<div class='xw-carousel xl'></div><div class='xw-inner-div'><ul>";
		$.each(_config.dataAry,function(){
			_div_temp+="<li><a><img src="+this.url+"/></a></li>";
		});
		_div_temp+="</ul></div><div class='xw-carousel xr'></div>";
		_this.append(_div_temp);
		var _xw_inner_div=$(".xw-inner-div");
		var _width=_this.width();
		var inner_div_width=_xw_inner_div.width(_width*0.8).width();
		var _ul_li=$(".xw-inner-div li");
		var _img=$(".xw-inner-div img");
		var _total_img_width=0;
		var maxHeight=0;
		var ul_li_dots="<ul class='xw-carousel-dots'>";
		$.each(_img,function(index,item){
			var _indexTemp=Number(index)+1;
			ul_li_dots+="<li></li>";
			_img[index].onload=function(){
				this.onload=null;
					var hw=this.height/this.width;
					$(this).attr("width",inner_div_width);
					$(this).attr("height",inner_div_width*hw);
					_total_img_width+=$(this).parents("li").width();
					var _par_height=$(this).parents("li").height();
					if(_par_height>maxHeight){
						maxHeight=_par_height;
					}
					$(".xw-inner-div ul").width(_total_img_width).height(maxHeight);
					_xw_inner_div.height(maxHeight);
			};
		});
		ul_li_dots+="</ul>";
		var jq_ul_dots=$(ul_li_dots);
		_this.append(jq_ul_dots);
		jq_ul_dots.find("li.active").removeClass("active");
		jq_ul_dots.find("li").eq(0).addClass("active");
		var _index=0;
		var _len=_config.dataAry.length;
		var next_temp=0;
		var _r_handler=function(){
				next_temp=next_temp===(_total_img_width-inner_div_width)?0:next_temp+inner_div_width;
				var _index=next_temp/inner_div_width;
				_xw_inner_div.find("ul").animate({
					left:-next_temp
				},1000,function(){
					jq_ul_dots.find("li.active").removeClass("active");
					jq_ul_dots.find("li").eq(_index).addClass("active");
				});
		};
		var _l_handler=function(){
			next_temp=next_temp===0?_total_img_width-inner_div_width:next_temp-inner_div_width;
			var _index=next_temp/inner_div_width;
			_xw_inner_div.find("ul").animate({
				left:-next_temp
			},1000,function(){
				jq_ul_dots.find("li.active").removeClass("active");
				jq_ul_dots.find("li").eq(_index).addClass("active");
			});
		};
		$(".xw-carousel.xr").on("click",_r_handler);
		$(".xw-carousel.xl").on("click",_l_handler);
		jq_ul_dots.delegate("li","click",function(){
			var _index=$(this).index();
			var index_left=_index*inner_div_width;
			_xw_inner_div.find("ul").animate({
				left:-index_left
			},1000,function(){
				jq_ul_dots.find("li.active").removeClass("active");
				jq_ul_dots.find("li").eq(_index).addClass("active");
			});
		});
		if(_config.interval){
			var _carouselinter=setInterval(_r_handler,3000);
			_this.hover(function(){
				clearInterval(_carouselinter);
			},function(){
				_carouselinter=setInterval(_r_handler,3000);
			});
		}
		if(_img && _img.length<=1){
			console.log(_img,"_img")
			jq_ul_dots.css("display","none");
			$(".xw-carousel").css("display","none");
		}
		!_config.dots && jq_ul_dots.css("display","none");
		!_config.arraws && $(".xw-carousel").css("display","none");
	};
}));
