if(typeof NetFunnel == "object"){
	// add stylesheet
	var sheet = document.createElement('style');
	var sheet_strLRT = "@font-face{font-family:SamsungOne;src:url(https://samsung.com/etc/designs/smg/global/fonts/SamsungOne-400.eot);src:url(https://samsung.com/etc/designs/smg/global/fonts/SamsungOne-400.eot?#iefix) format(\"embedded-opentype\"),url(https://samsung.com/etc/designs/smg/global/fonts/SamsungOne-400.woff2) format(\"woff2\"),url(https://samsung.com/etc/designs/smg/global/fonts/SamsungOne-400.woff) format(\"woff\"),url(https://samsung.com/etc/designs/smg/global/fonts/SamsungOne-400.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:SamsungOne;src:url(https://samsung.com/etc/designs/smg/global/fonts/SamsungOne-700.eot);src:url(https://samsung.com/etc/designs/smg/global/fonts/SamsungOne-700.eot?#iefix) format(\"embedded-opentype\"),url(https://samsung.com/etc/designs/smg/global/fonts/SamsungOne-700.woff2) format(\"woff2\"),url(https://samsung.com/etc/designs/smg/global/fonts/SamsungOne-700.woff) format(\"woff\"),url(https://samsung.com/etc/designs/smg/global/fonts/SamsungOne-700.ttf) format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:SamsungSharpSans;src:url(https://samsung.com/etc/designs/smg/global/fonts/SamsungSharpSansBd.eot);src:url(https://samsung.com/etc/designs/smg/global/fonts/SamsungSharpSansBd.eot?#iefix) format(\"embedded-opentype\"),url(https://samsung.com/etc/designs/smg/global/fonts/SamsungSharpSansBd.woff) format(\"woff\");font-weight:700;font-style:normal}@keyframes blink{0%{opacity:0}49%{opacity:0}50%{opacity:1}}.flipdown .rotor,.flipdown .rotor-bottom,.flipdown .rotor-leaf-front,.flipdown .rotor-leaf-rear,.flipdown .rotor-top{background-color:#373737}.flipdown .rotor:after{border-top:solid 1px rgba(0,0,0,.5)}.flipdown{font-size:0}.flipdown .rotor-group{display:inline-block;position:relative;width:50%;padding:0 .7em;font-size:10px;color:#60adc5;vertical-align:top;-webkit-box-sizing:border-box;box-sizing:border-box}.flipdown .rotor-group:first-child:before{position:absolute;right:-.7em;top:4em;width:1.4em;height:1.4em;background-color:#60adc5;-webkit-border-radius:50%;border-radius:50%;animation:blink 1s linear infinite both;content:''}.flipdown .rotor-group:first-child:after{position:absolute;right:-.7em;top:6.8em;width:1.4em;height:1.4em;background-color:#60adc5;-webkit-border-radius:50%;border-radius:50%;animation:blink 1s linear infinite both;content:''}.flipdown .rotor-group:first-child{padding:0 1.35em 0 .7em}.flipdown .rotor-group:last-child{padding-left:1.3em}.flipdown .rotor{position:relative;display:inline-block;width:-webkit-calc(50% - 1.4em);width:calc(50% - 1.4em);height:12.2em;margin:0 .7em;-webkit-border-radius:.4em;border-radius:.4em;font-size:10px;text-align:center;-webkit-perspective:200px;perspective:200px;-webkit-box-sizing:border-box;box-sizing:border-box;backface-visibility:hidden;-webkit-backface-visibility:hidden}.flipdown .rotor-bottom,.flipdown .rotor-top{overflow:hidden;position:absolute;width:100%;height:6.1em;backface-visibility:hidden;-webkit-backface-visibility:hidden}.flipdown .rotor-bottom span,.flipdown .rotor-leaf-front span,.flipdown .rotor-leaf-rear span,.flipdown .rotor-top span{font-size:11em;-webkit-transform:translateZ(0);transform:translateZ(0);backface-visibility:hidden;-webkit-backface-visibility:hidden}.flipdown .rotor-leaf{z-index:1;position:absolute;width:100%;height:12.2em;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition:-webkit-transform 0s;transition:-webkit-transform 0s;transition:transform 0s;transition:transform 0s,-webkit-transform 0s}.flipdown .rotor-leaf.flipped{-webkit-transform:rotateX(-180deg);transform:rotateX(-180deg);-webkit-transition:all .525s ease-in-out;transition:all .525s ease-in-out}.flipdown .rotor-leaf-front,.flipdown .rotor-leaf-rear{overflow:hidden;position:absolute;width:100%;height:6.1em;margin:0;-webkit-transform:rotateX(0);transform:rotateX(0);backface-visibility:hidden;-webkit-backface-visibility:hidden}.rotor-leaf-front:after{position:absolute;top:0;right:0;left:0;bottom:0;opacity:0;background:0 0;content:'';-webkit-transition:opacity .3s cubic-bezier(.4,0,1,1);transition:opacity .3s cubic-bezier(.4,0,1,1)}.flipped .rotor-leaf-front{-webkit-box-shadow:0 0 5px 1px rgba(0,0,0,.7);box-shadow:0 0 5px 1px rgba(0,0,0,.7)}.flipped .rotor-leaf-front:after{opacity:1;background:-moz-linear-gradient(top,rgba(0,0,0,.1) 0,#000 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,rgba(0,0,0,.1)),color-stop(100%,#000));background:linear-gradient(top,rgba(0,0,0,.1) 0,#000 100%);background:-o-linear-gradient(top,rgba(0,0,0,.1) 0,#000 100%);background:-ms-linear-gradient(top,rgba(0,0,0,.1) 0,#000 100%);background:linear-gradient(to bottom,rgba(0,0,0,.1) 0,#000 100%)}.flipdown .rotor-leaf-front{line-height:12.2em;-webkit-border-radius:.6em .6em 0 0;border-radius:.6em .6em 0 0}.flipdown .rotor-leaf-rear{line-height:0;-webkit-border-radius:0 0 .6em .6em;border-radius:0 0 .6em .6em;-webkit-transform:rotateX(-180deg);transform:rotateX(-180deg)}.flipdown .rotor-top{line-height:12.2em;-webkit-border-radius:.6em .6em 0 0;border-radius:.6em .6em 0 0}.flipdown .rotor-bottom{bottom:0;line-height:0;-webkit-border-radius:0 0 .6em .6em;border-radius:0 0 .6em .6em}.flipdown .rotor-bottom:after{position:absolute;top:0;right:0;left:0;bottom:0;opacity:0;background:0 0;content:'';-webkit-transition:opacity .3s cubic-bezier(.4,0,1,1);transition:opacity .3s cubic-bezier(.4,0,1,1)}.flipped~.rotor-bottom:after{opacity:1;background:-moz-linear-gradient(top,#000 0,rgba(0,0,0,.1) 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#000),color-stop(100%,rgba(0,0,0,.1)));background:linear-gradient(top,#000 0,rgba(0,0,0,.1) 100%);background:-o-linear-gradient(top,#000 0,rgba(0,0,0,.1) 100%);background:-ms-linear-gradient(top,#000 0,rgba(0,0,0,.1) 100%);background:linear-gradient(to bottom,#000 0,rgba(0,0,0,.1) 100%)}.flipdown .rotor:after{content:'';z-index:2;position:absolute;bottom:0;left:0;width:100%;height:50%;-webkit-border-radius:0 0 .6em .6em;border-radius:0 0 .6em .6em}.queuing-page{position:fixed;left:0;top:0;width:100%;bottom:0}.queuing-page-wrap{position:relative;top:50%;max-width:50em;width:100%;margin:0 auto;padding:1em;font-size:10px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);-webkit-box-sizing:border-box;box-sizing:border-box}.queuing-page-content{max-height:-webkit-calc(100vh - 2em);max-height:calc(100vh - 2em);padding:9em 4.2em 7.2em;background-color:#000;font-family:SamsungSharpSans,arial;color:#fff;text-align:center;overflow-x:hidden;overflow-y:auto;-webkit-box-sizing:border-box;box-sizing:border-box}.queuing-page-title{font-size:5.6em;line-height:1.2em;color:#FFFFFF;}.queuing-page-timer{height:12.2em;margin:5.4em -1.4em 8.6em}.queuing-page-desc{font-size:2.9em;line-height:1.32em}.queuing-page-disc{font-size:2.2em;font-family:SamsungOne,arial;line-height:1.4em;letter-spacing:-.035em;color:#FFFFFF;}.queuing-page-desc strong span,.queuing-page-title span{color:#60adc5}.times{margin-top:.4em;padding:0 .49em;font-size:2em;text-align:right}@media screen and (max-width:768px){.queuing-page-wrap{max-width:45em}.queuing-page-content{padding:6.5em 4.2em 5em}.queuing-page-title{font-size:4.6em}.queuing-page-timer{margin:6em -4.5em 5.9em}.flipdown{max-width:38em;margin:0 auto;font-size:10px}.flipdown .rotor-group:first-child{padding:0 .4em}.flipdown .rotor-group:last-child{padding-left:.3em}.flipdown .rotor{margin:0 .5em}.flipdown .rotor-group{padding:0 .4em}.flipdown .rotor-group:first-child:before{right:-.6em;top:4.1em;width:1.2em;height:1.2em}.flipdown .rotor-group:first-child::after{right:-.6em;top:6.9em;width:1.2em;height:1.2em}.flipdown .rotor-bottom span,.flipdown .rotor-leaf-front span,.flipdown .rotor-leaf-rear span,.flipdown .rotor-top span{font-size:9em}.queuing-page-desc{font-size:1.9em}.queuing-page-disc{font-size:1.6em}.times{margin-top:.3em;padding:0 .6em;font-size:1.7em}}";
	var sheet_strRTL = "@font-face{font-family:SamsungOne;src:url(https://samsung.com/etc/designs/smg/global/fonts/SamsungOne-400.eot);src:url(https://samsung.com/etc/designs/smg/global/fonts/SamsungOne-400.eot?#iefix) format('embedded-opentype'),url(https://samsung.com/etc/designs/smg/global/fonts/SamsungOne-400.woff2) format('woff2'),url(https://samsung.com/etc/designs/smg/global/fonts/SamsungOne-400.woff) format('woff');font-weight:400;font-style:normal}@font-face{font-family:SamsungOne;src:url(https://samsung.com/etc/designs/smg/global/fonts/SamsungOne-700.eot);src:url(https://samsung.com/etc/designs/smg/global/fonts/SamsungOne-700.eot?#iefix) format('embedded-opentype'),url(https://samsung.com/etc/designs/smg/global/fonts/SamsungOne-700.woff2) format('woff2'),url(https://samsung.com/etc/designs/smg/global/fonts/SamsungOne-700.woff) format('woff');font-weight:700;font-style:normal}@font-face{font-family:SamsungSharpSans;src:url(https://samsung.com/etc/designs/smg/global/fonts/SamsungSharpSansBd.eot);src:url(https://samsung.com/etc/designs/smg/global/fonts/SamsungSharpSansBd.eot?#iefix) format('embedded-opentype'),url(https://samsung.com/etc/designs/smg/global/fonts/SamsungSharpSansBd.woff2) format('woff2'),url(https://samsung.com/etc/designs/smg/global/fonts/SamsungSharpSansBd.woff) format('woff');font-weight:700;font-style:normal}@keyframes blink{0%{opacity:0}49%{opacity:0}50%{opacity:1}}.flipdown .rotor,.flipdown .rotor-bottom,.flipdown .rotor-leaf-front,.flipdown .rotor-leaf-rear,.flipdown .rotor-top{background-color:#373737}.flipdown .rotor:after{border-top:solid 1px rgba(0,0,0,.5)}.flipdown{font-size:0}.flipdown .rotor-group{display:inline-block;position:relative;width:50%;padding:0 .7em;font-size:10px;color:#60adc5;vertical-align:top;-webkit-box-sizing:border-box;box-sizing:border-box}.flipdown .rotor-group:first-child:before{position:absolute;right:-.7em;top:4em;width:1.4em;height:1.4em;background-color:#60adc5;-webkit-border-radius:50%;border-radius:50%;animation:blink 1s linear infinite both;content:''}.flipdown .rotor-group:first-child:after{position:absolute;right:-.7em;top:6.8em;width:1.4em;height:1.4em;background-color:#60adc5;-webkit-border-radius:50%;border-radius:50%;animation:blink 1s linear infinite both;content:''}.flipdown .rotor-group:first-child{padding:0 1.35em 0 .7em}.flipdown .rotor-group:last-child{padding-left:1.3em}.flipdown .rotor{position:relative;display:inline-block;width:-webkit-calc(50% - 1.4em);width:calc(50% - 1.4em);height:12.2em;margin:0 .7em;-webkit-border-radius:.4em;border-radius:.4em;font-size:10px;text-align:center;-webkit-perspective:200px;perspective:200px;-webkit-box-sizing:border-box;box-sizing:border-box;backface-visibility:hidden;-webkit-backface-visibility:hidden}.flipdown .rotor-bottom,.flipdown .rotor-top{overflow:hidden;position:absolute;width:100%;height:6.1em;backface-visibility:hidden;-webkit-backface-visibility:hidden}.flipdown .rotor-bottom span,.flipdown .rotor-leaf-front span,.flipdown .rotor-leaf-rear span,.flipdown .rotor-top span{font-size:11em;-webkit-transform:translateZ(0);transform:translateZ(0);backface-visibility:hidden;-webkit-backface-visibility:hidden}.flipdown .rotor-leaf{z-index:1;position:absolute;width:100%;height:12.2em;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition:-webkit-transform 0s;transition:-webkit-transform 0s;transition:transform 0s;transition:transform 0s,-webkit-transform 0s}.flipdown .rotor-leaf.flipped{-webkit-transform:rotateX(-180deg);transform:rotateX(-180deg);-webkit-transition:all .525s ease-in-out;transition:all .525s ease-in-out}.flipdown .rotor-leaf-front,.flipdown .rotor-leaf-rear{overflow:hidden;position:absolute;width:100%;height:6.1em;margin:0;-webkit-transform:rotateX(0);transform:rotateX(0);backface-visibility:hidden;-webkit-backface-visibility:hidden}.rotor-leaf-front:after{position:absolute;top:0;right:0;left:0;bottom:0;opacity:0;background:0 0;content:'';-webkit-transition:opacity .3s cubic-bezier(.4,0,1,1);transition:opacity .3s cubic-bezier(.4,0,1,1)}.flipped .rotor-leaf-front{-webkit-box-shadow:0 0 5px 1px rgba(0,0,0,.7);box-shadow:0 0 5px 1px rgba(0,0,0,.7)}.flipped .rotor-leaf-front:after{opacity:1;background:-moz-linear-gradient(top,rgba(0,0,0,.1) 0,#000 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,rgba(0,0,0,.1)),color-stop(100%,#000));background:linear-gradient(top,rgba(0,0,0,.1) 0,#000 100%);background:-o-linear-gradient(top,rgba(0,0,0,.1) 0,#000 100%);background:-ms-linear-gradient(top,rgba(0,0,0,.1) 0,#000 100%);background:linear-gradient(to bottom,rgba(0,0,0,.1) 0,#000 100%)}.flipdown .rotor-leaf-front{line-height:12.2em;-webkit-border-radius:.6em .6em 0 0;border-radius:.6em .6em 0 0}.flipdown .rotor-leaf-rear{line-height:0;-webkit-border-radius:0 0 .6em .6em;border-radius:0 0 .6em .6em;-webkit-transform:rotateX(-180deg);transform:rotateX(-180deg)}.flipdown .rotor-top{line-height:12.2em;-webkit-border-radius:.6em .6em 0 0;border-radius:.6em .6em 0 0}.flipdown .rotor-bottom{bottom:0;line-height:0;-webkit-border-radius:0 0 .6em .6em;border-radius:0 0 .6em .6em}.flipdown .rotor-bottom:after{position:absolute;top:0;right:0;left:0;bottom:0;opacity:0;background:0 0;content:'';-webkit-transition:opacity .3s cubic-bezier(.4,0,1,1);transition:opacity .3s cubic-bezier(.4,0,1,1)}.flipped~.rotor-bottom:after{opacity:1;background:-moz-linear-gradient(top,#000 0,rgba(0,0,0,.1) 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#000),color-stop(100%,rgba(0,0,0,.1)));background:linear-gradient(top,#000 0,rgba(0,0,0,.1) 100%);background:-o-linear-gradient(top,#000 0,rgba(0,0,0,.1) 100%);background:-ms-linear-gradient(top,#000 0,rgba(0,0,0,.1) 100%);background:linear-gradient(to bottom,#000 0,rgba(0,0,0,.1) 100%)}.flipdown .rotor:after{content:'';z-index:2;position:absolute;bottom:0;left:0;width:100%;height:50%;-webkit-border-radius:0 0 .6em .6em;border-radius:0 0 .6em .6em}.queuing-page{position:fixed;left:0;top:0;width:100%;bottom:0;direction:rtl}.queuing-page-wrap{position:relative;top:50%;max-width:50em;width:100%;margin:0 auto;padding:1em;font-size:10px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);-webkit-box-sizing:border-box;box-sizing:border-box}.queuing-page-content{max-height:-webkit-calc(100vh - 2em);max-height:calc(100vh - 2em);padding:9em 4.2em 7.2em;background-color:#000;font-family:SamsungSharpSans,arial;color:#fff;text-align:center;overflow-x:hidden;overflow-y:auto;-webkit-box-sizing:border-box;box-sizing:border-box}.queuing-page-title{font-size:5.6em;line-height:1.2em; color:#FFFFFF;}.queuing-page-timer{height:12.2em;margin:5.4em -1.4em 8.6em;direction:ltr}.queuing-page-desc{font-size:2.9em;line-height:1.32em}.queuing-page-disc{font-size:2.2em;font-family:SamsungOne,arial;line-height:1.4em;letter-spacing:-.035em;color:#FFFFFF;}.queuing-page-desc strong span,.queuing-page-title span{color:#60adc5}.times{margin-top:.4em;padding:0 .49em;font-size:2em;text-align:right}@media screen and (max-width:768px){.queuing-page-wrap{max-width:45em}.queuing-page-content{padding:6.5em 4.2em 5em}.queuing-page-title{font-size:4.6em}.queuing-page-timer{margin:6em -4.5em 5.9em}.flipdown{max-width:38em;margin:0 auto;font-size:10px}.flipdown .rotor-group:first-child{padding:0 .4em}.flipdown .rotor-group:last-child{padding-left:.3em}.flipdown .rotor{margin:0 .5em}.flipdown .rotor-group{padding:0 .4em}.flipdown .rotor-group:first-child:before{right:-.6em;top:4.1em;width:1.2em;height:1.2em}.flipdown .rotor-group:first-child::after{right:-.6em;top:6.9em;width:1.2em;height:1.2em}.flipdown .rotor-bottom span,.flipdown .rotor-leaf-front span,.flipdown .rotor-leaf-rear span,.flipdown .rotor-top span{font-size:9em}.queuing-page-desc{font-size:1.9em}.queuing-page-disc{font-size:1.6em}.times{margin-top:.3em;padding:0 .6em;font-size:1.7em}}";
	var head = document.head || document.getElementsByTagName('head')[0];
	var contents = ACC.config.netfunnelConfig.contents; //queuing contents and translations
	var sheet_str = ACC.config.isRtlSite == "true" ? sheet_strRTL:sheet_strLRT;
	sheet.type='text/css';
	if (sheet.styleSheet) {	// for under ie9
		sheet.styleSheet.cssText=sheet_str;
	} else { // for recently browsers(ie9 and over, chrome, firefox, safari etc...)
		sheet.appendChild(document.createTextNode(sheet_str));
	}
	head.appendChild(sheet);

	var queuingTime = {
		opts : {
			speed : 500,
			activeClass : 'flipped',
			timeData : {
				'MINUTE' : {
					'F' : null,
					'S' : null
				},
				'SECOND' : {
					'F' : null,
					'S' : null
				}
			},
			isIE : document.documentMode && document.documentMode <= 11,
			debugData : {
				isDebugging : false, // true 설정시 애니메이션 테스트
				time : 60,
				debug : function () {
					var stringParse = function (num) {
						var num = String(num);
						return num.length <= 1 ? '0' + num : num;
					};
					this.timeLeft.text('00 ' + stringParse(this.opts.debugData.time));
					this.opts.debugData.time--;
					window.setTimeout($.proxy(function () {
						this.opts.debugData.debug.call(this);
						this.setLayout();
					}, this), 1000);
				}
			}
		},
		init : function () {
			this.setElements();
			this.initOpts();
			if (this.opts.debugData.isDebugging) {
				this.opts.debugData.debug.call(this);
			}
		},
		setElements : function () {
			this.flipDown = $('#flipdown');
			this.flipRotorGroup = this.flipDown.find('.rotor-group');
			this.flipMinute = this.flipRotorGroup.eq(0);
			this.flipMinute_f = this.flipMinute.find('.rotor').eq(0);
			this.flipMinute_s = this.flipMinute.find('.rotor').eq(1);
			this.flipSecond = this.flipRotorGroup.eq(1);
			this.flipSecond_f = this.flipSecond.find('.rotor').eq(0);
			this.flipSecond_s = this.flipSecond.find('.rotor').eq(1);
			this.timeLeft = $('#NetFunnel_Loading_Popup_TimeLeft');
		},
		initOpts : function () {
			var timeLeft = this.timeLeft,
				timeVal = $.trim(timeLeft.text()),
				timeArray = timeVal.split(' '),
				props = {
					'MINUTE' : timeVal.length ? timeArray[0] : '00',
					'SECOND' : timeVal.length ? timeArray[1] : '00'
				};
			for (var key in props) {
				if (key == 'MINUTE') {
					this.flipMinute_f.find('.rotor-leaf-rear span').text(props[key][0]);
					this.flipMinute_f.find('.rotor-leaf-front span').text(props[key][0]);
					this.flipMinute_f.find('.rotor-top span').text(props[key][0]);
					this.flipMinute_f.find('.rotor-bottom span').text(props[key][0]);
					this.flipMinute_s.find('.rotor-leaf-rear span').text(props[key][1]);
					this.flipMinute_s.find('.rotor-leaf-front span').text(props[key][1]);
					this.flipMinute_s.find('.rotor-top span').text(props[key][1]);
					this.flipMinute_s.find('.rotor-bottom span').text(props[key][1]);
				}
				if (key == 'SECOND') {
					this.flipSecond_f.find('.rotor-leaf-rear span').text(props[key][0]);
					this.flipSecond_f.find('.rotor-leaf-front span').text(props[key][0]);
					this.flipSecond_f.find('.rotor-top span').text(props[key][0]);
					this.flipSecond_f.find('.rotor-bottom span').text(props[key][0]);
					this.flipSecond_s.find('.rotor-leaf-rear span').text(props[key][1]);
					this.flipSecond_s.find('.rotor-leaf-front span').text(props[key][1]);
					this.flipSecond_s.find('.rotor-top span').text(props[key][1]);
					this.flipSecond_s.find('.rotor-bottom span').text(props[key][1]);
				}
				this.opts.timeData[key]['F'] = props[key][0];
				this.opts.timeData[key]['S'] = props[key][1];
			}
		},
		update : function () {
			if (this.opts.debugData.isDebugging) return;
			this.setLayout();
		},
		setLayout : function () {
			var timeLeft = this.timeLeft,
				timeVal = $.trim(timeLeft.text()),
				timeArray = timeVal.split(' '),
				props = {
					'MINUTE' : timeArray[0],
					'SECOND' : timeArray[1]
				},
				timeData = this.opts.timeData,
				stepFunc = $.proxy(function (obj, value) {
					var _this = this;
					(function () {
						animateClass(obj, $.proxy(function () {
							obj.find('.rotor-leaf-front span').text(value);
							obj.find('.rotor-bottom span').text(value);
						}, _this));
						obj.find('.rotor-leaf-rear span').text(value);
						obj.find('.rotor-top span').text(value);
					})();
				}, this),
				animateClass = $.proxy(function (obj, callback) {
					var _this = this;
					(function () {
						var cb = callback || function () {};
						if (!_this.opts.isIE) {
							obj.find('.rotor-leaf').addClass(_this.opts.activeClass);
						}
						window.setTimeout($.proxy(function () {
							if (!_this.opts.isIE) {
								obj.find('.rotor-leaf').removeClass(_this.opts.activeClass);
							}
							cb();
						}, _this), _this.opts.speed);
					})();
				}, this);
			for (var key in props) {
				if (key == 'MINUTE') {
					if (timeData[key]['F'] !== props[key][0]) {
						stepFunc(this.flipMinute_f, props[key][0]);
					}
					if (timeData[key]['S'] !== props[key][1]) {
						stepFunc(this.flipMinute_s, props[key][1]);
					}
				}
				if (key == 'SECOND') {
					if (timeData[key]['F'] !== props[key][0]) {
						stepFunc(this.flipSecond_f, props[key][0]);
					}
					if (timeData[key]['S'] !== props[key][1]) {
						stepFunc(this.flipSecond_s, props[key][1]);
					}
				}
				this.opts.timeData[key]['F'] = props[key][0];
				this.opts.timeData[key]['S'] = props[key][1];
			}
		}
	};

	var countDom = '<span id="NetFunnel_Loading_Popup_Count" class="다수" style="text-decoration: none;">1</span>';
	//queuing page
	NetFunnel.tstr =' \
	<div id="NetFunnel_Skin_Top" class="queuing-page"> \
		<div class="queuing-page-wrap"> \
			<div class="queuing-page-content"> \
				<h2 class="queuing-page-title">'+contents.line1+'</h2> \
				<div class="queuing-page-timer"> \
					<!--<span id="NetFunnel_Loading_Popup_TimeLeft" class="%H시간 %M분 %02S초^ ^false" style="text-decoration: underline;">01초</span>--> \
						<div id="flipdown" class="flipdown flipdown__theme-light"><div class="rotor-group"><div class="rotor"><div class="rotor-leaf"><figure class="rotor-leaf-rear"><span>0</span></figure><figure class="rotor-leaf-front"><span>0</span></figure></div><div class="rotor-top"><span>0</span></div><div class="rotor-bottom"><span>0</span></div></div><div class="rotor"><div class="rotor-leaf"><figure class="rotor-leaf-rear"><span>0</span></figure><figure class="rotor-leaf-front"><span>0</span></figure></div><div class="rotor-top"><span>0</span></div><div class="rotor-bottom"><span>0</span></div></div><div class="times">Min</div></div><div class="rotor-group"><div class="rotor"><div class="rotor-leaf"><figure class="rotor-leaf-rear"><span>0</span></figure><figure class="rotor-leaf-front"><span>0</span></figure></div><div class="rotor-top"><span>0</span></div><div class="rotor-bottom"><span>0</span></div></div><div class="rotor"><div class="rotor-leaf"><figure class="rotor-leaf-rear"><span>7</span></figure><figure class="rotor-leaf-front"><span>7</span></figure></div><div class="rotor-top"><span>7</span></div><div class="rotor-bottom"><span>7</span></div></div><div class="times">Sec</div></div></div> \
				</div> \
				<div class="queuing-page-desc"> \
					<strong>'+contents.line2.replace('{x}',countDom)+'</strong> \
				</div> \
				<div style="display:none"><span id="NetFunnel_Loading_Popup_TimeLeft" class="%02M %02S^ ^true"></span></div> \
				<div style="margin: 2.3em -2.5em 0;"> \
					<p class="queuing-page-disc">'+contents.line3+'</p> \
				</div> \
			</div> \
		</div> \
	</div>';
    NetFunnel.SkinUtil.add('queuingPage',{
        prepareCallback:function(){
        	queuingTime.init();
        },
        updateCallback:function(percent,nwait,totwait,timeleft){
        	queuingTime.update();
        },
       htmlStr:NetFunnel.tstr
    },'normal');
}
