$(function(){
$('body').prepend('<style>'+
'div.ad-footer{'+
	'position: fixed;'+
	'bottom: 0;'+
	'width: 100%;'+
	'text-align: center;'+
	'z-index: 20;'+
'}'+
'#ad-footer-background, #ad-footer-collapse{'+
    'display: none;'+
    'margin: 0 auto;'+
    'position: relative;'+
	'</style>'+    

        '<div class="ad-footer">'+
            '<img id="ad-footer-float" src="http://adcontent1.allaccess.com.ph/gmanetwork/gatorade/1020x30_EBA_float.jpg" alt=""/>'+
            '<a href="'+gatorade_url+'" target="_blank">'+
                '<div id="ad-footer-background" style="background-image: url(http://adcontent1.allaccess.com.ph/gmanetwork/gatorade/gatorade_background.jpg); width: 1020px; height: 360px;">'+
                    '<div style="position: absolute;margin: auto;top: 0px;bottom: 0px;left: 30px;width: 45%;height: 300px;z-index: 2;"></div>'+
                    '<div id="iframe_container"></div>'+
                    '<video poster="img/Blank.gif" style="position: absolute; width: 45%; height: 250px; margin: auto; top: 0; bottom: 0; right: 30px;">'+
                        '<source src="http://adcontent1.allaccess.com.ph/gmanetwork/gatorade/gatorade_expandable_boarder_animation.mp4"/>'+
                    '</video>'+
                '</div>'+
            '</a>'+
            '<img id="ad-footer-collapse" src="http://adcontent1.allaccess.com.ph/gmanetwork/gatorade/1020x30_collapse_EBA.jpg" alt=""/>'+
        '</div>');
                var footerAd = function(){
                    var _this = this;
                    this.adFooter = $('div.ad-footer');
                    this.handlers = {
                        mouseenter: function(){
							_this.adFooter.find('#ad-footer-collapse').hide();
                            _this.adFooter.find('#ad-footer-float').slideUp('fast');
                            var background = _this.adFooter.find('#ad-footer-background');
                            background.slideDown('fast');
                            background.find('video').get(0).muted = false;
                            background.find('video').get(0).play();
                            _this.adFooter.find('#iframe_container').html('<iframe volume="0" src="https://www.youtube.com/embed/rleP_gEv_wQ?autoplay=1&fs=0" frameborder="0" allowfullscreen="false" style="position: absolute; margin: auto; top: 0px; bottom: 0px; left: 30px; width: 45%; height: 300px;"></iframe>');
                        },
                        mouseleave: function(){
                            var background = _this.adFooter.find('#ad-footer-background');
                            background.slideUp('fast');
                            background.find('video').get(0).muted = true;
                            background.find('video').get(0).pause();
                            background.find('video').get(0).currentTime = 0;
                            background.find('video').get(0).load();
                            _this.adFooter.find('#ad-footer-collapse').slideDown('fast');
                            _this.adFooter.find('#iframe_container').html('');
                        }
                    }
                    this.main = {
                        init: function(){
                            _this.adFooter.find('#ad-footer-float, #ad-footer-collapse').bind(
                                {'mouseenter': _this.handlers.mouseenter});
                            _this.adFooter.find('#ad-footer-background').bind(
                                'mouseleave', _this.handlers.mouseleave);
                        }
                    }
                }
                var footerAd_instance = new footerAd();
                footerAd_instance.main.init(); 
            });