/* ===================================================
>>> TABLE OF CONTENTS:
======================================================
1. Avoid `console` errors in browsers that lack a console.
2. jQuery v3.6.0
3. Popper Bootstrap
4. Bootstrap v5.0.2
5. Slick slider jQuery
6. Isotope jQuery
7. imagesLoaded jQuery
8. Lightcase - Popup jQuery
9. CounterUp jQuery
10. Countdown jQuery
11. Instafeed jQuery
12. Waypoints jQuery
13. Nice Select
14. jQuery UI / price range 
15. scrollup jquery 
16. One Page Navigation ( jQuery Easing Plugin )
17. WOW jQuery  (da import)
18. Parallax jQuery
19. Maplace.js

 
=================================================== */


/*-------------------------------------------------------------
  1. Avoid `console` errors in browsers that lack a console.
---------------------------------------------------------------*/
(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*-------------------------------------------------------------
  # Modernizr
---------------------------------------------------------------*/
//  đã import 


/*-------------------------------------------------------------
  2. jQuery v3.6.0
---------------------------------------------------------------*/
// / đã import 
/*-------------------------------------------------------------
  3. Popper Bootstrap
  đã import
---------------------------------------------------------------*/
/**
 * @popperjs/core v2.9.3 - MIT License
 */


/*-------------------------------------------------------------
  4. Bootstrap v5.0.2
  đã import
---------------------------------------------------------------*/
/*!
 * Bootstrap v5.0.2 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */

//# sourceMappingURL=bootstrap.min.js.map


/*-------------------------------------------------------------
  5. Slick slider jQuery

  đã import
---------------------------------------------------------------*/
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/
 Version: 1.6.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues
 */
!

/*-------------------------------------------------------------
  6. Isotope jQuery
  đã import
---------------------------------------------------------------*/
/*!
 * Isotope PACKAGED v3.0.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */







/*-------------------------------------------------------------
  7. imagesLoaded jQuery
  đã import
---------------------------------------------------------------*/
/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */


/*-------------------------------------------------------------
  8. Lightcase - Popup jQuery
---------------------------------------------------------------*/



/*-------------------------------------------------------------
  9. CounterUp jQuery
---------------------------------------------------------------*/
/*!
 *
 * jquery.counterup.js
 * https://github.com/bfintal/Counter-Up
 * v1.0
 * 
 */
(function($) {
    "use strict";
    $.fn.counterUp = function(options) {
        var settings = $.extend({ time: 400, delay: 10, offset: 100, beginAt: 0, formatter: false, context: "window", callback: function() {} }, options),
            s;
        return this.each(function() {
            var $this = $(this),
                counter = { time: $(this).data("counterup-time") || settings.time, delay: $(this).data("counterup-delay") || settings.delay, offset: $(this).data("counterup-offset") || settings.offset, beginAt: $(this).data("counterup-beginat") || settings.beginAt, context: $(this).data("counterup-context") || settings.context };
            var counterUpper = function() {
                var nums = [];
                var divisions = counter.time / counter.delay;
                var num = $(this).attr("data-num") ? $(this).attr("data-num") : $this.text();
                var isComma = /[0-9]+,[0-9]+/.test(num);
                num = num.replace(/,/g, "");
                var decimalPlaces = (num.split(".")[1] || []).length;
                if (counter.beginAt > num) counter.beginAt = num;
                var isTime = /[0-9]+:[0-9]+:[0-9]+/.test(num);
                if (isTime) {
                    var times = num.split(":"),
                        m = 1;
                    s = 0;
                    while (times.length > 0) {
                        s += m * parseInt(times.pop(), 10);
                        m *= 60
                    }
                }
                for (var i = divisions; i >= counter.beginAt / num * divisions; i--) {
                    var newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
                    if (isTime) {
                        newNum = parseInt(s / divisions * i);
                        var hours = parseInt(newNum / 3600) % 24;
                        var minutes = parseInt(newNum / 60) % 60;
                        var seconds = parseInt(newNum % 60, 10);
                        newNum = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds)
                    }
                    if (isComma) { while (/(\d+)(\d{3})/.test(newNum.toString())) { newNum = newNum.toString().replace(/(\d+)(\d{3})/, "$1" + "," + "$2") } }
                    if (settings.formatter) { newNum = settings.formatter.call(this, newNum) }
                    nums.unshift(newNum)
                }
                $this.data("counterup-nums", nums);
                $this.text(counter.beginAt);
                var f = function() {
                    if (!$this.data("counterup-nums")) { settings.callback.call(this); return }
                    $this.html($this.data("counterup-nums").shift());
                    if ($this.data("counterup-nums").length) { setTimeout($this.data("counterup-func"), counter.delay) } else {
                        $this.data("counterup-nums", null);
                        $this.data("counterup-func", null);
                        settings.callback.call(this)
                    }
                };
                $this.data("counterup-func", f);
                setTimeout($this.data("counterup-func"), counter.delay)
            };
            $this.waypoint(function(direction) {
                counterUpper();
                this.destroy()
            }, { offset: counter.offset + "%", context: counter.context })
        })
    }
})(jQuery);


/*-------------------------------------------------------------
  10. Countdown jQuery
---------------------------------------------------------------*/
/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
! function(a) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery) }(function(a) {
    "use strict";

    function b(a) { if (a instanceof Date) return a; if (String(a).match(g)) return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")), new Date(a); throw new Error("Couldn't cast `" + a + "` to a date object.") }

    function c(a) { var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"); return new RegExp(b) }

    function d(a) {
        return function(b) {
            var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (d)
                for (var f = 0, g = d.length; f < g; ++f) {
                    var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        j = c(h[0]),
                        k = h[1] || "",
                        l = h[3] || "",
                        m = null;
                    h = h[2], i.hasOwnProperty(h) && (m = i[h], m = Number(a[m])), null !== m && ("!" === k && (m = e(l, m)), "" === k && m < 10 && (m = "0" + m.toString()), b = b.replace(j, m.toString()))
                }
            return b = b.replace(/%%/, "%")
        }
    }

    function e(a, b) {
        var c = "s",
            d = "";
        return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === a.length ? c = a[0] : (d = a[0], c = a[1])), Math.abs(b) > 1 ? c : d
    }
    var f = [],
        g = [],
        h = { precision: 100, elapse: !1, defer: !1 };
    g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g = new RegExp(g.join("|"));
    var i = { Y: "years", m: "months", n: "daysToMonth", d: "daysToWeek", w: "weeks", W: "weeksToMonth", H: "hours", M: "minutes", S: "seconds", D: "totalDays", I: "totalHours", N: "totalMinutes", T: "totalSeconds" },
        j = function(b, c, d) { this.el = b, this.$el = a(b), this.interval = null, this.offset = {}, this.options = a.extend({}, h), this.firstTick = !0, this.instanceNumber = f.length, f.push(this), this.$el.data("countdown-instance", this.instanceNumber), d && ("function" == typeof d ? (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)) : this.options = a.extend({}, h, d)), this.setFinalDate(c), this.options.defer === !1 && this.start() };
    a.extend(j.prototype, {
        start: function() {
            null !== this.interval && clearInterval(this.interval);
            var a = this;
            this.update(), this.interval = setInterval(function() { a.update.call(a) }, this.options.precision)
        },
        stop: function() { clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped") },
        toggle: function() { this.interval ? this.stop() : this.start() },
        pause: function() { this.stop() },
        resume: function() { this.start() },
        remove: function() { this.stop.call(this), f[this.instanceNumber] = null, delete this.$el.data().countdownInstance },
        setFinalDate: function(a) { this.finalDate = b(a) },
        update: function() { if (0 === this.$el.closest("html").length) return void this.remove(); var a, b = new Date; return a = this.finalDate.getTime() - b.getTime(), a = Math.ceil(a / 1e3), a = !this.options.elapse && a < 0 ? 0 : Math.abs(a), this.totalSecsLeft === a || this.firstTick ? void(this.firstTick = !1) : (this.totalSecsLeft = a, this.elapsed = b >= this.finalDate, this.offset = { seconds: this.totalSecsLeft % 60, minutes: Math.floor(this.totalSecsLeft / 60) % 60, hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24, days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7, daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7, daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368), weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7), weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4, months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368), years: Math.abs(this.finalDate.getFullYear() - b.getFullYear()), totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24), totalHours: Math.floor(this.totalSecsLeft / 60 / 60), totalMinutes: Math.floor(this.totalSecsLeft / 60), totalSeconds: this.totalSecsLeft }, void(this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))) },
        dispatchEvent: function(b) {
            var c = a.Event(b + ".countdown");
            c.finalDate = this.finalDate, c.elapsed = this.elapsed, c.offset = a.extend({}, this.offset), c.strftime = d(this.offset), this.$el.trigger(c)
        }
    }), a.fn.countdown = function() {
        var b = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var c = a(this).data("countdown-instance");
            if (void 0 !== c) {
                var d = f[c],
                    e = b[0];
                j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))
            } else new j(this, b[0], b[1])
        })
    }
});


/*-------------------------------------------------------------
  11. Instafeed jQuery
---------------------------------------------------------------*/
/*!
 * jquery.instagramFeed
 *
 * @version 1.3.2
 *
 * @author Javier Sanahuja Liebana <bannss1@gmail.com>
 * @contributor csanahuja <csanahuja10@gmail.com>
 *
 * https://github.com/jsanahuja/jquery.instagramFeed
 *
 */
(function(a) {
    function b(a) { return a.replace(/[&<>"'`=\/]/g, function(a) { return e[a] }) }
    var c = { host: "https://www.instagram.com/", username: "", tag: "", container: "", display_profile: !0, display_biography: !0, display_gallery: !0, display_igtv: !1, callback: null, styling: !0, items: 8, items_per_row: 4, margin: .5, image_size: 640, lazy_load: !1, on_error: console.error },
        d = { 150: 0, 240: 1, 320: 2, 480: 3, 640: 4 },
        e = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" };
    a.instagramFeed = function(e) {
        var f = a.fn.extend({}, c, e);
        if ("" == f.username && "" == f.tag) return f.on_error("Instagram Feed: Error, no username nor tag defined.", 1), !1;
        if ("undefined" != typeof f.get_data && console.warn("Instagram Feed: options.get_data is deprecated, options.callback is always called if defined"), null == f.callback && "" == f.container) return f.on_error("Instagram Feed: Error, neither container found nor callback defined.", 2), !1;
        var g = "" == f.username,
            h = g ? f.host + "explore/tags/" + f.tag + "/" : f.host + f.username + "/";
        return a.get(h, function(c) {
            try { c = c.split("window._sharedData = ")[1].split("</script>")[0] } catch (a) { return void f.on_error("Instagram Feed: It looks like the profile you are trying to fetch is age restricted. See https://github.com/jsanahuja/InstagramFeed/issues/26", 3) }
            if (c = JSON.parse(c.substr(0, c.length - 1)), c = c.entry_data.ProfilePage || c.entry_data.TagPage, "undefined" == typeof c) return void f.on_error("Instagram Feed: It looks like YOUR network has been temporary banned because of too many requests. See https://github.com/jsanahuja/jquery.instagramFeed/issues/25", 4);
            if (c = c[0].graphql.user || c[0].graphql.hashtag, "" != f.container) {
                var e = { profile_container: "", profile_image: "", profile_name: "", profile_biography: "", gallery_image: "" };
                if (f.styling) {
                    e.profile_container = " style='text-align:center;'", e.profile_image = " style='border-radius:10em;width:15%;max-width:125px;min-width:50px;'", e.profile_name = " style='font-size:1.2em;'", e.profile_biography = " style='font-size:1em;'";
                    var h = (100 - 2 * f.margin * f.items_per_row) / f.items_per_row;
                    e.gallery_image = " style='margin:" + f.margin + "% " + f.margin + "%;width:" + h + "%;float:left;'"
                }
                var j = "";
                f.display_profile && (j += "<div class='instagram_profile'" + e.profile_container + ">", j += "<img class='instagram_profile_image' src='" + c.profile_pic_url + "' alt='" + (g ? c.name + " tag pic" : c.username + " profile pic") + "'" + e.profile_image + (f.lazy_load ? " loading='lazy'" : "") + " />", j += g ? "<p class='instagram_tag'" + e.profile_name + "><a href='https://www.instagram.com/explore/tags/" + f.tag + "' rel='noopener' target='_blank'>#" + f.tag + "</a></p>" : "<p class='instagram_username'" + e.profile_name + ">@" + c.full_name + " (<a href='https://www.instagram.com/" + f.username + "' rel='noopener' target='_blank'>@" + f.username + "</a>)</p>", !g && f.display_biography && (j += "<p class='instagram_biography'" + e.profile_biography + ">" + c.biography + "</p>"), j += "</div>");
                var k = "undefined" == typeof d[f.image_size] ? d[640] : d[f.image_size];
                if (f.display_gallery)
                    if ("undefined" != typeof c.is_private && !0 === c.is_private) j += "<p class='instagram_private'><strong>This profile is private</strong></p>";
                    else {
                        var l = (c.edge_owner_to_timeline_media || c.edge_hashtag_to_media).edges;
                        s = l.length > f.items ? f.items : l.length, j += "<div class='instagram_gallery'>";
                        for (var m = 0; m < s; m++) {
                            var n, o, p, q = "https://www.instagram.com/p/" + l[m].node.shortcode;
                            switch (l[m].node.__typename) {
                                case "GraphSidecar":
                                    o = "sidecar", n = l[m].node.thumbnail_resources[k].src;
                                    break;
                                case "GraphVideo":
                                    o = "video", n = l[m].node.thumbnail_src;
                                    break;
                                default:
                                    o = "image", n = l[m].node.thumbnail_resources[k].src;
                            }
                            p = "undefined" != typeof l[m].node.edge_media_to_caption.edges[0] && "undefined" != typeof l[m].node.edge_media_to_caption.edges[0].node && "undefined" != typeof l[m].node.edge_media_to_caption.edges[0].node.text && null !== l[m].node.edge_media_to_caption.edges[0].node.text ? l[m].node.edge_media_to_caption.edges[0].node.text : "undefined" != typeof l[m].node.accessibility_caption && null !== l[m].node.accessibility_caption ? l[m].node.accessibility_caption : (g ? c.name : c.username) + " image " + m, j += "<a href='" + q + "' class='instagram-" + o + "' rel='noopener' target='_blank'>", j += "<img" + (f.lazy_load ? " loading='lazy'" : "") + " src='" + n + "' alt='" + b(p) + "'" + e.gallery_image + " />", j += "</a>"
                        }
                        j += "</div>"
                    }
                if (f.display_igtv && "undefined" != typeof c.edge_felix_video_timeline) {
                    var r = c.edge_felix_video_timeline.edges,
                        s = r.length > f.items ? f.items : r.length;
                    if (0 < r.length) {
                        j += "<div class='instagram_igtv'>";
                        for (var m = 0; m < s; m++) j += "<a href='https://www.instagram.com/p/" + r[m].node.shortcode + "' rel='noopener' target='_blank'>", j += "<img" + (f.lazy_load ? " loading='lazy'" : "") + " src='" + r[m].node.thumbnail_src + "' alt='" + f.username + " instagram image " + m + "'" + e.gallery_image + " />", j += "</a>";
                        j += "</div>"
                    }
                }
                a(f.container).html(j)
            }
            null != f.callback && f.callback(c)
        }).fail(function(a) { f.on_error("Instagram Feed: Unable to fetch the given user/tag. Instagram responded with the status code: " + a.status, 5) }), !0
    }
})(jQuery);



/*-------------------------------------------------------------
  12. Waypoints jQuery
---------------------------------------------------------------*/
/*!
Waypoints - 4.0.1
Copyright Â© 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
! function() {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) { this.group.queueTrigger(this, t) }, t.prototype.trigger = function(t) { this.enabled && this.callback && this.callback.apply(this, t) }, t.prototype.destroy = function() { this.context.remove(this), this.group.remove(this), delete i[this.key] }, t.prototype.disable = function() { return this.enabled = !1, this }, t.prototype.enable = function() { return this.context.refresh(), this.enabled = !0, this }, t.prototype.next = function() { return this.group.next(this) }, t.prototype.previous = function() { return this.group.previous(this) }, t.invokeAll = function(t) { var e = []; for (var o in i) e.push(i[o]); for (var n = 0, r = e.length; r > n; n++) e[n][t]() }, t.destroyAll = function() { t.invokeAll("destroy") }, t.disableAll = function() { t.invokeAll("disable") }, t.enableAll = function() { t.Context.refreshAll(); for (var e in i) i[e].enabled = !0; return this }, t.refreshAll = function() { t.Context.refreshAll() }, t.viewportHeight = function() { return window.innerHeight || document.documentElement.clientHeight }, t.viewportWidth = function() { return document.documentElement.clientWidth }, t.adapters = [], t.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }, t.offsetAliases = { "bottom-in-view": function() { return this.context.innerHeight() - this.adapter.outerHeight() }, "right-in-view": function() { return this.context.innerWidth() - this.adapter.outerWidth() } }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) { window.setTimeout(t, 1e3 / 60) }

    function e(t) { this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }, this.waypoints = { vertical: {}, horizontal: {} }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler() }
    var i = 0,
        o = {},
        n = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical),
            i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() { e.handleResize(), e.didResize = !1 }
        var e = this;
        this.adapter.on("resize.waypoints", function() { e.didResize || (e.didResize = !0, n.requestAnimationFrame(t)) })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() { e.handleScroll(), e.didScroll = !1 }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() { n.Context.refreshAll() }, e.prototype.handleScroll = function() {
        var t = {},
            e = { horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } };
        for (var i in e) {
            var o = e[i],
                n = o.newScroll > o.oldScroll,
                r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s];
                if (null !== a.triggerPoint) {
                    var l = o.oldScroll < a.triggerPoint,
                        h = o.newScroll >= a.triggerPoint,
                        p = l && h,
                        u = !l && !h;
                    (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
                }
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll }
    }, e.prototype.innerHeight = function() { return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight() }, e.prototype.remove = function(t) { delete this.waypoints[t.axis][t.key], this.checkEmpty() }, e.prototype.innerWidth = function() { return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth() }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            o = {};
        this.handleScroll(), t = { horizontal: { contextOffset: e ? 0 : i.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: e ? 0 : i.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } };
        for (var r in t) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, h, p, u, c, d = this.waypoints[r][a],
                    f = d.options.offset,
                    w = d.triggerPoint,
                    y = 0,
                    g = null == w;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
            }
        }
        return n.requestAnimationFrame(function() { for (var t in o) o[t].flushTriggers() }), this
    }, e.findOrCreateByElement = function(t) { return e.findByElement(t) || new e(t) }, e.refreshAll = function() { for (var t in o) o[t].refresh() }, e.findByElement = function(t) { return o[t.waypointContextKey] }, window.onload = function() { r && r(), e.refreshAll() }, n.requestAnimationFrame = function(e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, n.Context = e
}(),
function() {
    "use strict";

    function t(t, e) { return t.triggerPoint - e.triggerPoint }

    function e(t, e) { return e.triggerPoint - t.triggerPoint }

    function i(t) { this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this }
    var o = { vertical: {}, horizontal: {} },
        n = window.Waypoint;
    i.prototype.add = function(t) { this.waypoints.push(t) }, i.prototype.clearTriggerQueues = function() { this.triggerQueues = { up: [], down: [], left: [], right: [] } }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
                n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
            o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function(e) { this.waypoints.sort(t); var i = n.Adapter.inArray(e, this.waypoints); return i ? this.waypoints[i - 1] : null }, i.prototype.queueTrigger = function(t, e) { this.triggerQueues[e].push(t) }, i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() { return this.waypoints[0] }, i.prototype.last = function() { return this.waypoints[this.waypoints.length - 1] }, i.findOrCreate = function(t) { return o[t.axis][t.name] || new i(t) }, n.Group = i
}(),
function() {
    "use strict";

    function t(t) { this.$element = e(t) }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) { t.prototype[i] = function() { var t = Array.prototype.slice.call(arguments); return this.$element[i].apply(this.$element, t) } }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) { t[o] = e[o] }), i.adapters.push({ name: "jquery", Adapter: t }), i.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() { var n = t.extend({}, o, { element: this }); "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n)) }), i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();



/*-------------------------------------------------------------
  13. Nice Select
---------------------------------------------------------------*/
/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
! function(e) {
    e.fn.niceSelect = function(t) {
        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var s = t.next(),
                n = t.find("option"),
                i = t.find("option:selected");
            s.find(".current").html(i.data("display") || i.text()), n.each(function(t) {
                var n = e(this),
                    i = n.data("display");
                s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
            })
        }
        if ("string" == typeof t) return "update" == t ? this.each(function() {
            var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");
            n.length && (n.remove(), s(t), i && t.next().trigger("click"))
        }) : "destroy" == t ? (this.each(function() {
            var t = e(this),
                s = e(this).next(".nice-select");
            s.length && (s.remove(), t.css("display", ""))
        }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;
        this.hide(), this.each(function() {
            var t = e(this);
            t.next().hasClass("nice-select") || s(t)
        }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function(t) {
            var s = e(this);
            e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus()
        }), e(document).on("click.nice_select", function(t) { 0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option") }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(t) {
            var s = e(this),
                n = s.closest(".nice-select");
            n.find(".selected").removeClass("selected"), s.addClass("selected");
            var i = s.data("display") || s.text();
            n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change")
        }), e(document).on("keydown.nice_select", ".nice-select", function(t) {
            var s = e(this),
                n = e(s.find(".focus") || s.find(".list .option.selected"));
            if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;
            if (40 == t.keyCode) {
                if (s.hasClass("open")) {
                    var i = n.nextAll(".option:not(.disabled)").first();
                    i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (38 == t.keyCode) {
                if (s.hasClass("open")) {
                    var l = n.prevAll(".option:not(.disabled)").first();
                    l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
            else if (9 == t.keyCode && s.hasClass("open")) return !1
        });
        var n = document.createElement("a").style;
        return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this
    }
}(jQuery);



/*-------------------------------------------------------------
  14. jQuery UI / price range 
---------------------------------------------------------------*/
/*! jQuery UI - v1.11.4 - 2016-06-07
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, slider.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery) })(function(e) {
    function t(t, s) { var n, a, o, r = t.nodeName.toLowerCase(); return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t) }

    function i(t) { return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() { return "hidden" === e.css(this, "visibility") }).length }
    e.ui = e.ui || {}, e.extend(e.ui, { version: "1.11.4", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), e.fn.extend({
        scrollParent: function(t) {
            var i = this.css("position"),
                s = "absolute" === i,
                n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                a = this.parents().filter(function() { var t = e(this); return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x")) }).eq(0);
            return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
        },
        uniqueId: function() { var e = 0; return function() { return this.each(function() { this.id || (this.id = "ui-id-" + ++e) }) } }(),
        removeUniqueId: function() { return this.each(function() { /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id") }) }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) { return function(i) { return !!e.data(i, t) } }) : function(t, i, s) { return !!e.data(t, s[3]) },
        focusable: function(i) { return t(i, !isNaN(e.attr(i, "tabindex"))) },
        tabbable: function(i) {
            var s = e.attr(i, "tabindex"),
                n = isNaN(s);
            return (n || s >= 0) && t(i, !n)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, i) {
        function s(t, i, s, a) { return e.each(n, function() { i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0) }), i }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            a = i.toLowerCase(),
            o = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight };
        e.fn["inner" + i] = function(t) { return void 0 === t ? o["inner" + i].call(this) : this.each(function() { e(this).css(a, s(this, t) + "px") }) }, e.fn["outer" + i] = function(t, n) { return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function() { e(this).css(a, s(this, t, !0, n) + "px") }) }
    }), e.fn.addBack || (e.fn.addBack = function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) { return function(i) { return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this) } }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function(t) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() { e(t).focus(), s && s.call(t) }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        disableSelection: function() { var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function() { return this.bind(e + ".ui-disableSelection", function(e) { e.preventDefault() }) } }(),
        enableSelection: function() { return this.unbind(".ui-disableSelection") },
        zIndex: function(t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length)
                for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
                    if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    n = n.parent()
                }
            return 0
        }
    }), e.ui.plugin = {
        add: function(t, i, s) { var n, a = e.ui[t].prototype; for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]]) },
        call: function(e, t, i, s) {
            var n, a = e.plugins[t];
            if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i)
        }
    };
    var s = 0,
        n = Array.prototype.slice;
    e.cleanData = function(t) {
        return function(i) {
            var s, n, a;
            for (a = 0; null != (n = i[a]); a++) try { s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove") } catch (o) {}
            t(i)
        }
    }(e.cleanData), e.widget = function(t, i, s) {
        var n, a, o, r, h = {},
            l = t.split(".")[0];
        return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function(t) { return !!e.data(t, n) }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function(e, t) { return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t) }, e.extend(o, a, { version: s.version, _proto: e.extend({}, s), _childConstructors: [] }), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function(t, s) {
            return e.isFunction(s) ? (h[t] = function() {
                var e = function() { return i.prototype[t].apply(this, arguments) },
                    n = function(e) { return i.prototype[t].apply(this, e) };
                return function() {
                    var t, i = this._super,
                        a = this._superApply;
                    return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
                }
            }(), void 0) : (h[t] = s, void 0)
        }), o.prototype = e.widget.extend(r, { widgetEventPrefix: a ? r.widgetEventPrefix || t : t }, h, { constructor: o, namespace: l, widgetName: t, widgetFullName: n }), a ? (e.each(a._childConstructors, function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
    }, e.widget.extend = function(t) {
        for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++)
            for (i in a[o]) s = a[o][i], a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
        return t
    }, e.widget.bridge = function(t, i) {
        var s = i.prototype.widgetFullName || t;
        e.fn[t] = function(a) {
            var o = "string" == typeof a,
                r = n.call(arguments, 1),
                h = this;
            return o ? this.each(function() { var i, n = e.data(this, s); return "instance" === a ? (h = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + a + "'") }) : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))), this.each(function() {
                var t = e.data(this, s);
                t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this))
            })), h
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: { disabled: !1, create: null },
        _createWidget: function(t, i) { i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function(e) { e.target === i && this.destroy() } }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init() },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() { this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus") },
        _destroy: e.noop,
        widget: function() { return this.element },
        option: function(t, i) {
            var s, n, a, o = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (o = {}, s = t.split("."), t = s.shift(), s.length) {
                    for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) n[s[a]] = n[s[a]] || {}, n = n[s[a]];
                    if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                    n[t] = i
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    o[t] = i
                }
            return this._setOptions(o), this
        },
        _setOptions: function(e) { var t; for (t in e) this._setOption(t, e[t]); return this },
        _setOption: function(e, t) { return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this },
        enable: function() { return this._setOptions({ disabled: !1 }) },
        disable: function() { return this._setOptions({ disabled: !0 }) },
        _on: function(t, i, s) {
            var n, a = this;
            "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function(s, o) {
                function r() { return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0 }
                "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
                var h = s.match(/^([\w:-]*)\s*(.*)$/),
                    l = h[1] + a.eventNamespace,
                    u = h[2];
                u ? n.delegate(u, l, r) : i.bind(l, r)
            })
        },
        _off: function(t, i) { i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get()) },
        _delay: function(e, t) {
            function i() { return ("string" == typeof e ? s[e] : e).apply(s, arguments) }
            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function(t) { this.hoverable = this.hoverable.add(t), this._on(t, { mouseenter: function(t) { e(t.currentTarget).addClass("ui-state-hover") }, mouseleave: function(t) { e(t.currentTarget).removeClass("ui-state-hover") } }) },
        _focusable: function(t) { this.focusable = this.focusable.add(t), this._on(t, { focusin: function(t) { e(t.currentTarget).addClass("ui-state-focus") }, focusout: function(t) { e(t.currentTarget).removeClass("ui-state-focus") } }) },
        _trigger: function(t, i, s) {
            var n, a, o = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                for (n in a) n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({ show: "fadeIn", hide: "fadeOut" }, function(t, i) {
        e.Widget.prototype["_" + t] = function(s, n, a) {
            "string" == typeof n && (n = { effect: n });
            var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = { duration: n }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function(i) { e(this)[t](), a && a.call(s[0]), i() })
        }
    }), e.widget;
    var a = !1;
    e(document).mouseup(function() { a = !1 }), e.widget("ui.mouse", {
        version: "1.11.4",
        options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) { return t._mouseDown(e) }).bind("click." + this.widgetName, function(i) { return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0 }), this.started = !1
        },
        _mouseDestroy: function() { this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate) },
        _mouseDown: function(t) {
            if (!a) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var i = this,
                    s = 1 === t.which,
                    n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() { i.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) { return i._mouseMove(e) }, this._mouseUpDelegate = function(e) { return i._mouseUp(e) }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), a = !0, !0)) : !0
            }
        },
        _mouseMove: function(t) { if (this._mouseMoved) { if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t); if (!t.which) return this._mouseUp(t) } return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) },
        _mouseUp: function(t) { return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), a = !1, !1 },
        _mouseDistanceMet: function(e) { return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance },
        _mouseDelayMet: function() { return this.mouseDelayMet },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() { return !0 }
    }), e.widget("ui.slider", e.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",
        options: { animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null },
        numPages: 5,
        _create: function() { this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1 },
        _refresh: function() { this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue() },
        _createHandles: function() {
            var t, i, s = this.options,
                n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
                o = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++) o.push(a);
            this.handles = n.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) { e(this).data("ui-slider-handle-index", t) })
        },
        _createRange: function() {
            var t = this.options,
                i = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({ left: "", bottom: "" }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() { this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles) },
        _destroy: function() { this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy() },
        _mouseCapture: function(t) {
            var i, s, n, a, o, r, h, l, u = this,
                c = this.options;
            return c.disabled ? !1 : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i = { x: t.pageX, y: t.pageY }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                var i = Math.abs(s - u.values(t));
                (n > i || n === i && (t === u._lastChangedValue || u.values(t) === c.min)) && (n = i, a = e(this), o = t)
            }), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? { left: 0, top: 0 } : { left: t.pageX - h.left - a.width() / 2, top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0))
        },
        _mouseStart: function() { return !0 },
        _mouseDrag: function(e) {
            var t = { x: e.pageX, y: e.pageY },
                i = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, i), !1
        },
        _mouseStop: function(e) { return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1 },
        _detectOrientation: function() { this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal" },
        _normValueFromMouse: function(e) { var t, i, s, n, a; return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a) },
        _start: function(e, t) { var i = { handle: this.handles[t], value: this.value() }; return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i) },
        _slide: function(e, t, i) {
            var s, n, a;
            this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger("slide", e, { handle: this.handles[t], value: i, values: n }), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger("slide", e, { handle: this.handles[t], value: i }), a !== !1 && this.value(i))
        },
        _stop: function(e, t) {
            var i = { handle: this.handles[t], value: this.value() };
            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
        },
        _change: function(e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = { handle: this.handles[t], value: this.value() };
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i)
            }
        },
        value: function(e) { return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value() },
        values: function(t, i) {
            var s, n, a;
            if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0;
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
            this._refreshValue()
        },
        _setOption: function(t, i) {
            var s, n = 0;
            switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function() { var e = this.options.value; return e = this._trimAlignValue(e) },
        _values: function(e) { var t, i, s; if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t); if (this.options.values && this.options.values.length) { for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]); return i } return [] },
        _trimAlignValue: function(e) {
            if (this._valueMin() >= e) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                i = (e - this._valueMin()) % t,
                s = e - i;
            return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5))
        },
        _calculateNewMax: function() {
            var e = this.options.max,
                t = this._valueMin(),
                i = this.options.step,
                s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;
            e = s + t, this.max = parseFloat(e.toFixed(this._precision()))
        },
        _precision: function() { var e = this._precisionOf(this.options.step); return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e },
        _precisionOf: function(e) {
            var t = "" + e,
                i = t.indexOf(".");
            return -1 === i ? 0 : t.length - i - 1
        },
        _valueMin: function() { return this.options.min },
        _valueMax: function() { return this.max },
        _refreshValue: function() {
            var t, i, s, n, a, o = this.options.range,
                r = this.options,
                h = this,
                l = this._animateOff ? !1 : r.animate,
                u = {};
            this.options.values && this.options.values.length ? this.handles.each(function(s) { i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ left: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ width: i - t + "%" }, { queue: !1, duration: r.animate })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ bottom: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ height: i - t + "%" }, { queue: !1, duration: r.animate }))), t = i }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: i + "%" }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({ width: 100 - i + "%" }, { queue: !1, duration: r.animate }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: i + "%" }, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({ height: 100 - i + "%" }, { queue: !1, duration: r.animate }))
        },
        _handleEvents: {
            keydown: function(t) {
                var i, s, n, a, o = e(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, o), i === !1)) return
                }
                switch (a = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {
                    case e.ui.keyCode.HOME:
                        n = this._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        n = this._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (s === this._valueMax()) return;
                        n = this._trimAlignValue(s + a);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (s === this._valueMin()) return;
                        n = this._trimAlignValue(s - a)
                }
                this._slide(t, o, n)
            },
            keyup: function(t) {
                var i = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
            }
        }
    })
});


/*-------------------------------------------------------------
  15. scrollup jquery 
---------------------------------------------------------------*/
/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear â€” @markgdyr â€” http://markgoodyear.com
 * License: MIT
 */
! function(l, o, e) {
    "use strict";
    l.fn.scrollUp = function(o) { l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o)) }, l.fn.scrollUp.init = function(r) {
        var s, t, c, i, n, a, d, p = l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r),
            f = !1;
        switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", { id: p.scrollName, href: "#top" }), p.scrollTitle && d.attr("title", p.scrollTitle), d.appendTo("body"), p.scrollImg || p.scrollTrigger || d.html(p.scrollText), d.css({ display: "none", position: "fixed", zIndex: p.zIndex }), p.activeOverlay && l("<div/>", { id: p.scrollName + "-active" }).css({ position: "absolute", top: p.scrollDistance + "px", width: "100%", borderTop: "1px dotted" + p.activeOverlay, zIndex: p.zIndex }).appendTo("body"), p.animation) {
            case "fade":
                s = "fadeIn", t = "fadeOut", c = p.animationSpeed;
                break;
            case "slide":
                s = "slideDown", t = "slideUp", c = p.animationSpeed;
                break;
            default:
                s = "show", t = "hide", c = 0
        }
        i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance, n = l(o).scroll(function() { l(o).scrollTop() > i ? f || (d[s](c), f = !0) : f && (d[t](c), f = !1) }), p.scrollTarget ? "number" == typeof p.scrollTarget ? a = p.scrollTarget : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top)) : a = 0, d.click(function(o) { o.preventDefault(), l("html, body").animate({ scrollTop: a }, p.scrollSpeed, p.easingType) })
    }, l.fn.scrollUp.defaults = { scrollName: "scrollUp", scrollDistance: 300, scrollFrom: "top", scrollSpeed: 300, easingType: "linear", animation: "fade", animationSpeed: 200, scrollTrigger: !1, scrollTarget: !1, scrollText: "Scroll to top", scrollTitle: !1, scrollImg: !1, activeOverlay: !1, zIndex: 2147483647 }, l.fn.scrollUp.destroy = function(r) { l.removeData(e.body, "scrollUp"), l("#" + l.fn.scrollUp.settings.scrollName).remove(), l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(), l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r) }, l.scrollUp = l.fn.scrollUp
}(jQuery, window, document);


/*-------------------------------------------------------------
  16. One Page Navigation ( jQuery Easing Plugin )
---------------------------------------------------------------*/
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 *
 */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function(e, f, a, h, g) { return jQuery.easing[jQuery.easing.def](e, f, a, h, g) }, easeInQuad: function(e, f, a, h, g) { return h * (f /= g) * f + a }, easeOutQuad: function(e, f, a, h, g) { return -h * (f /= g) * (f - 2) + a }, easeInOutQuad: function(e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f + a } return -h / 2 * ((--f) * (f - 2) - 1) + a }, easeInCubic: function(e, f, a, h, g) { return h * (f /= g) * f * f + a }, easeOutCubic: function(e, f, a, h, g) { return h * ((f = f / g - 1) * f * f + 1) + a }, easeInOutCubic: function(e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f + a } return h / 2 * ((f -= 2) * f * f + 2) + a }, easeInQuart: function(e, f, a, h, g) { return h * (f /= g) * f * f * f + a }, easeOutQuart: function(e, f, a, h, g) { return -h * ((f = f / g - 1) * f * f * f - 1) + a }, easeInOutQuart: function(e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f * f + a } return -h / 2 * ((f -= 2) * f * f * f - 2) + a }, easeInQuint: function(e, f, a, h, g) { return h * (f /= g) * f * f * f * f + a }, easeOutQuint: function(e, f, a, h, g) { return h * ((f = f / g - 1) * f * f * f * f + 1) + a }, easeInOutQuint: function(e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f * f * f + a } return h / 2 * ((f -= 2) * f * f * f * f + 2) + a }, easeInSine: function(e, f, a, h, g) { return -h * Math.cos(f / g * (Math.PI / 2)) + h + a }, easeOutSine: function(e, f, a, h, g) { return h * Math.sin(f / g * (Math.PI / 2)) + a }, easeInOutSine: function(e, f, a, h, g) { return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a }, easeInExpo: function(e, f, a, h, g) { return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a }, easeOutExpo: function(e, f, a, h, g) { return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a }, easeInOutExpo: function(e, f, a, h, g) { if (f == 0) { return a } if (f == g) { return a + h } if ((f /= g / 2) < 1) { return h / 2 * Math.pow(2, 10 * (f - 1)) + a } return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a }, easeInCirc: function(e, f, a, h, g) { return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a }, easeOutCirc: function(e, f, a, h, g) { return h * Math.sqrt(1 - (f = f / g - 1) * f) + a }, easeInOutCirc: function(e, f, a, h, g) { if ((f /= g / 2) < 1) { return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a } return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a }, easeInElastic: function(f, h, e, l, k) { var i = 1.70158; var j = 0; var g = l; if (h == 0) { return e } if ((h /= k) == 1) { return e + l } if (!j) { j = k * 0.3 } if (g < Math.abs(l)) { g = l; var i = j / 4 } else { var i = j / (2 * Math.PI) * Math.asin(l / g) } return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e }, easeOutElastic: function(f, h, e, l, k) { var i = 1.70158; var j = 0; var g = l; if (h == 0) { return e } if ((h /= k) == 1) { return e + l } if (!j) { j = k * 0.3 } if (g < Math.abs(l)) { g = l; var i = j / 4 } else { var i = j / (2 * Math.PI) * Math.asin(l / g) } return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e }, easeInOutElastic: function(f, h, e, l, k) { var i = 1.70158; var j = 0; var g = l; if (h == 0) { return e } if ((h /= k / 2) == 2) { return e + l } if (!j) { j = k * (0.3 * 1.5) } if (g < Math.abs(l)) { g = l; var i = j / 4 } else { var i = j / (2 * Math.PI) * Math.asin(l / g) } if (h < 1) { return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e } return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e }, easeInBack: function(e, f, a, i, h, g) { if (g == undefined) { g = 1.70158 } return i * (f /= h) * f * ((g + 1) * f - g) + a }, easeOutBack: function(e, f, a, i, h, g) { if (g == undefined) { g = 1.70158 } return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a }, easeInOutBack: function(e, f, a, i, h, g) { if (g == undefined) { g = 1.70158 } if ((f /= h / 2) < 1) { return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a } return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a }, easeInBounce: function(e, f, a, h, g) { return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a }, easeOutBounce: function(e, f, a, h, g) { if ((f /= g) < (1 / 2.75)) { return h * (7.5625 * f * f) + a } else { if (f < (2 / 2.75)) { return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a } else { if (f < (2.5 / 2.75)) { return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a } else { return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a } } } }, easeInOutBounce: function(e, f, a, h, g) { if (f < g / 2) { return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a } return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a } });


/*-------------------------------------------------------------
  17. WOW jQuery 
---------------------------------------------------------------*/
/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/
(function() {
    var a, b, c, d, e, f = function(a, b) { return function() { return a.apply(b, arguments) } },
        g = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) { var c, d; for (c in b) d = b[c], null == a[c] && (a[c] = d); return a }, a.prototype.isMobile = function(a) { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a) }, a.prototype.createEvent = function(a, b, c, d) { var e; return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e }, a.prototype.emitEvent = function(a, b) { return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0 }, a.prototype.addEvent = function(a, b, c) { return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c }, a.prototype.removeEvent = function(a, b, c) { return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b] }, a.prototype.innerHeight = function() { return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() { this.keys = [], this.values = [] }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b]
        }, a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b)
        }, a
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() { "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.") }
        return a.notSupported = !0, a.prototype.observe = function() {}, a
    }()), d = this.getComputedStyle || function(a, b) { return this.getPropertyValue = function(b) { var c; return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) { return b.toUpperCase() }), (null != (c = a.currentStyle) ? c[b] : void 0) || null }, this }, e = /(\-([a-z]){1})/g, this.WOW = function() {
        function e(a) { null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass) }
        return e.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null }, e.prototype.init = function() { var a; return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [] }, e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function() { var a, c, d, e; for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.all = function() { var a, c, d, e; for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) { return function(b) { var c, d, e, f, g; for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() { var a, b, c, d; for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e)); return d }.call(a)); return g } }(this)).observe(document.body, { childList: !0, subtree: !0 }) : void 0
        }, e.prototype.stop = function() { return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0 }, e.prototype.sync = function(b) { return a.notSupported ? this.doSync(this.element) : void 0 }, e.prototype.doSync = function(a) { var b, c, d, e, f; if (null == a && (a = this.element), 1 === a.nodeType) { for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0); return f } }, e.prototype.show = function(a) { return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a }, e.prototype.applyStyle = function(a, b) { var c, d, e; return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) { return function() { return f.customStyle(a, b, d, c, e) } }(this)) }, e.prototype.animate = function() { return "requestAnimationFrame" in window ? function(a) { return window.requestAnimationFrame(a) } : function(a) { return a() } }(), e.prototype.resetStyle = function() { var a, b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible"); return e }, e.prototype.resetAnimation = function(a) { var b; return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0 }, e.prototype.customStyle = function(a, b, c, d, e) { return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }), a }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b) e = b[c], a["" + c] = e, d.push(function() { var b, d, g, h; for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e); return h }.call(this));
            return d
        }, e.prototype.vendorCSS = function(a, b) { var c, e, f, g, h, i; for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b); return g }, e.prototype.animationName = function(a) { var b; try { b = this.vendorCSS(a, "animation-name").cssText } catch (c) { b = d(a).getPropertyValue("animation-name") } return "none" === b ? "" : b }, e.prototype.cacheAnimationName = function(a) { return this.animationNameCache.set(a, this.animationName(a)) }, e.prototype.cachedAnimationName = function(a) { return this.animationNameCache.get(a) }, e.prototype.scrollHandler = function() { return this.scrolled = !0 }, e.prototype.scrollCallback = function() { var a; return !this.scrolled || (this.scrolled = !1, this.boxes = function() { var b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a)); return e }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop() }, e.prototype.offsetTop = function(a) { for (var b; void 0 === a.offsetTop;) a = a.parentNode; for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop; return b }, e.prototype.isVisible = function(a) { var b, c, d, e, f; return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f }, e.prototype.util = function() { return null != this._util ? this._util : this._util = new b }, e.prototype.disabled = function() { return !this.config.mobile && this.util().isMobile(navigator.userAgent) }, e
    }()
}).call(this);



/*-------------------------------------------------------------
  18. Parallax jQuery
---------------------------------------------------------------*/
/**
 * Parallax.js
 * @author Matthew Wagerfield - @wagerfield, René Roth - mail@reneroth.org
 * @description Creates a parallax effect between an array of layers,
 *              driving the motion from the gyroscope output of a smartdevice.
 *              If no gyroscope is available, the cursor position is used.
 * https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js
 */

! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Parallax = t()
    }
}(function() {
    return function t(e, i, n) {
        function o(r, a) {
            if (!i[r]) {
                if (!e[r]) { var l = "function" == typeof require && require; if (!a && l) return l(r, !0); if (s) return s(r, !0); var h = new Error("Cannot find module '" + r + "'"); throw h.code = "MODULE_NOT_FOUND", h }
                var u = i[r] = { exports: {} };
                e[r][0].call(u.exports, function(t) { var i = e[r][1][t]; return o(i || t) }, u, u.exports, t, e, i, n)
            }
            return i[r].exports
        }
        for (var s = "function" == typeof require && require, r = 0; r < n.length; r++) o(n[r]);
        return o
    }({
        1: [function(t, e, i) {
            "use strict";

            function n(t) { if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined"); return Object(t) }
            var o = Object.getOwnPropertySymbols,
                s = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable;
            e.exports = function() { try { if (!Object.assign) return !1; var t = new String("abc"); if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1; for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i; if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) { return e[t] }).join("")) return !1; var n = {}; return "abcdefghijklmnopqrst".split("").forEach(function(t) { n[t] = t }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("") } catch (t) { return !1 } }() ? Object.assign : function(t, e) { for (var i, a, l = n(t), h = 1; h < arguments.length; h++) { i = Object(arguments[h]); for (var u in i) s.call(i, u) && (l[u] = i[u]); if (o) { a = o(i); for (var c = 0; c < a.length; c++) r.call(i, a[c]) && (l[a[c]] = i[a[c]]) } } return l }
        }, {}],
        2: [function(t, e, i) {
            (function(t) {
                (function() { var i, n, o, s, r, a; "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() { return performance.now() } : void 0 !== t && null !== t && t.hrtime ? (e.exports = function() { return (i() - r) / 1e6 }, n = t.hrtime, s = (i = function() { var t; return 1e9 * (t = n())[0] + t[1] })(), a = 1e9 * t.uptime(), r = s - a) : Date.now ? (e.exports = function() { return Date.now() - o }, o = Date.now()) : (e.exports = function() { return (new Date).getTime() - o }, o = (new Date).getTime()) }).call(this)
            }).call(this, t("_process"))
        }, { _process: 3 }],
        3: [function(t, e, i) {
            function n() { throw new Error("setTimeout has not been defined") }

            function o() { throw new Error("clearTimeout has not been defined") }

            function s(t) { if (c === setTimeout) return setTimeout(t, 0); if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0); try { return c(t, 0) } catch (e) { try { return c.call(null, t, 0) } catch (e) { return c.call(this, t, 0) } } }

            function r(t) { if (d === clearTimeout) return clearTimeout(t); if ((d === o || !d) && clearTimeout) return d = clearTimeout, clearTimeout(t); try { return d(t) } catch (e) { try { return d.call(null, t) } catch (e) { return d.call(this, t) } } }

            function a() { v && p && (v = !1, p.length ? f = p.concat(f) : y = -1, f.length && l()) }

            function l() {
                if (!v) {
                    var t = s(a);
                    v = !0;
                    for (var e = f.length; e;) {
                        for (p = f, f = []; ++y < e;) p && p[y].run();
                        y = -1, e = f.length
                    }
                    p = null, v = !1, r(t)
                }
            }

            function h(t, e) { this.fun = t, this.array = e }

            function u() {}
            var c, d, m = e.exports = {};
            ! function() { try { c = "function" == typeof setTimeout ? setTimeout : n } catch (t) { c = n } try { d = "function" == typeof clearTimeout ? clearTimeout : o } catch (t) { d = o } }();
            var p, f = [],
                v = !1,
                y = -1;
            m.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                f.push(new h(t, e)), 1 !== f.length || v || s(l)
            }, h.prototype.run = function() { this.fun.apply(null, this.array) }, m.title = "browser", m.browser = !0, m.env = {}, m.argv = [], m.version = "", m.versions = {}, m.on = u, m.addListener = u, m.once = u, m.off = u, m.removeListener = u, m.removeAllListeners = u, m.emit = u, m.prependListener = u, m.prependOnceListener = u, m.listeners = function(t) { return [] }, m.binding = function(t) { throw new Error("process.binding is not supported") }, m.cwd = function() { return "/" }, m.chdir = function(t) { throw new Error("process.chdir is not supported") }, m.umask = function() { return 0 }
        }, {}],
        4: [function(t, e, i) {
            (function(i) {
                for (var n = t("performance-now"), o = "undefined" == typeof window ? i : window, s = ["moz", "webkit"], r = "AnimationFrame", a = o["request" + r], l = o["cancel" + r] || o["cancelRequest" + r], h = 0; !a && h < s.length; h++) a = o[s[h] + "Request" + r], l = o[s[h] + "Cancel" + r] || o[s[h] + "CancelRequest" + r];
                if (!a || !l) {
                    var u = 0,
                        c = 0,
                        d = [];
                    a = function(t) {
                        if (0 === d.length) {
                            var e = n(),
                                i = Math.max(0, 1e3 / 60 - (e - u));
                            u = i + e, setTimeout(function() {
                                var t = d.slice(0);
                                d.length = 0;
                                for (var e = 0; e < t.length; e++)
                                    if (!t[e].cancelled) try { t[e].callback(u) } catch (t) { setTimeout(function() { throw t }, 0) }
                            }, Math.round(i))
                        }
                        return d.push({ handle: ++c, callback: t, cancelled: !1 }), c
                    }, l = function(t) { for (var e = 0; e < d.length; e++) d[e].handle === t && (d[e].cancelled = !0) }
                }
                e.exports = function(t) { return a.call(o, t) }, e.exports.cancel = function() { l.apply(o, arguments) }, e.exports.polyfill = function() { o.requestAnimationFrame = a, o.cancelAnimationFrame = l }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { "performance-now": 2 }],
        5: [function(t, e, i) {
            "use strict";

            function n(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
            var o = function() {
                    function t(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
                }(),
                s = t("raf"),
                r = t("object-assign"),
                a = {
                    propertyCache: {},
                    vendors: [null, ["-webkit-", "webkit"],
                        ["-moz-", "Moz"],
                        ["-o-", "O"],
                        ["-ms-", "ms"]
                    ],
                    clamp: function(t, e, i) { return e < i ? t < e ? e : t > i ? i : t : t < i ? i : t > e ? e : t },
                    data: function(t, e) { return a.deserialize(t.getAttribute("data-" + e)) },
                    deserialize: function(t) { return "true" === t || "false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t) },
                    camelCase: function(t) { return t.replace(/-+(.)?/g, function(t, e) { return e ? e.toUpperCase() : "" }) },
                    accelerate: function(t) { a.css(t, "transform", "translate3d(0,0,0) rotate(0.0001deg)"), a.css(t, "transform-style", "preserve-3d"), a.css(t, "backface-visibility", "hidden") },
                    transformSupport: function(t) {
                        for (var e = document.createElement("div"), i = !1, n = null, o = !1, s = null, r = null, l = 0, h = a.vendors.length; l < h; l++)
                            if (null !== a.vendors[l] ? (s = a.vendors[l][0] + "transform", r = a.vendors[l][1] + "Transform") : (s = "transform", r = "transform"), void 0 !== e.style[r]) { i = !0; break }
                        switch (t) {
                            case "2D":
                                o = i;
                                break;
                            case "3D":
                                if (i) {
                                    var u = document.body || document.createElement("body"),
                                        c = document.documentElement,
                                        d = c.style.overflow,
                                        m = !1;
                                    document.body || (m = !0, c.style.overflow = "hidden", c.appendChild(u), u.style.overflow = "hidden", u.style.background = ""), u.appendChild(e), e.style[r] = "translate3d(1px,1px,1px)", o = void 0 !== (n = window.getComputedStyle(e).getPropertyValue(s)) && n.length > 0 && "none" !== n, c.style.overflow = d, u.removeChild(e), m && (u.removeAttribute("style"), u.parentNode.removeChild(u))
                                }
                        }
                        return o
                    },
                    css: function(t, e, i) {
                        var n = a.propertyCache[e];
                        if (!n)
                            for (var o = 0, s = a.vendors.length; o < s; o++)
                                if (n = null !== a.vendors[o] ? a.camelCase(a.vendors[o][1] + "-" + e) : e, void 0 !== t.style[n]) { a.propertyCache[e] = n; break }
                        t.style[n] = i
                    }
                },
                l = { relativeInput: !1, clipRelativeInput: !1, inputElement: null, hoverOnly: !1, calibrationThreshold: 100, calibrationDelay: 500, supportDelay: 500, calibrateX: !1, calibrateY: !0, invertX: !0, invertY: !0, limitX: !1, limitY: !1, scalarX: 10, scalarY: 10, frictionX: .1, frictionY: .1, originX: .5, originY: .5, pointerEvents: !1, precision: 1, onReady: null, selector: null },
                h = function() {
                    function t(e, i) {
                        n(this, t), this.element = e;
                        var o = { calibrateX: a.data(this.element, "calibrate-x"), calibrateY: a.data(this.element, "calibrate-y"), invertX: a.data(this.element, "invert-x"), invertY: a.data(this.element, "invert-y"), limitX: a.data(this.element, "limit-x"), limitY: a.data(this.element, "limit-y"), scalarX: a.data(this.element, "scalar-x"), scalarY: a.data(this.element, "scalar-y"), frictionX: a.data(this.element, "friction-x"), frictionY: a.data(this.element, "friction-y"), originX: a.data(this.element, "origin-x"), originY: a.data(this.element, "origin-y"), pointerEvents: a.data(this.element, "pointer-events"), precision: a.data(this.element, "precision"), relativeInput: a.data(this.element, "relative-input"), clipRelativeInput: a.data(this.element, "clip-relative-input"), hoverOnly: a.data(this.element, "hover-only"), inputElement: document.querySelector(a.data(this.element, "input-element")), selector: a.data(this.element, "selector") };
                        for (var s in o) null === o[s] && delete o[s];
                        r(this, l, o, i), this.inputElement || (this.inputElement = this.element), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depthsX = [], this.depthsY = [], this.raf = null, this.bounds = null, this.elementPositionX = 0, this.elementPositionY = 0, this.elementWidth = 0, this.elementHeight = 0, this.elementCenterX = 0, this.elementCenterY = 0, this.elementRangeX = 0, this.elementRangeY = 0, this.calibrationX = 0, this.calibrationY = 0, this.inputX = 0, this.inputY = 0, this.motionX = 0, this.motionY = 0, this.velocityX = 0, this.velocityY = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onDeviceMotion = this.onDeviceMotion.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onMotionTimer = this.onMotionTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.windowWidth = null, this.windowHeight = null, this.windowCenterX = null, this.windowCenterY = null, this.windowRadiusX = null, this.windowRadiusY = null, this.portrait = !1, this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), this.motionSupport = !!window.DeviceMotionEvent && !this.desktop, this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop, this.orientationStatus = 0, this.motionStatus = 0, this.initialise()
                    }
                    return o(t, [{ key: "initialise", value: function() { void 0 === this.transform2DSupport && (this.transform2DSupport = a.transformSupport("2D"), this.transform3DSupport = a.transformSupport("3D")), this.transform3DSupport && a.accelerate(this.element), "static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"), this.pointerEvents || (this.element.style.pointerEvents = "none"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay) } }, { key: "doReadyCallback", value: function() { this.onReady && this.onReady() } }, {
                        key: "updateLayers",
                        value: function() {
                            this.selector ? this.layers = this.element.querySelectorAll(this.selector) : this.layers = this.element.children, this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."), this.depthsX = [], this.depthsY = [];
                            for (var t = 0; t < this.layers.length; t++) {
                                var e = this.layers[t];
                                this.transform3DSupport && a.accelerate(e), e.style.position = t ? "absolute" : "relative", e.style.display = "block", e.style.left = 0, e.style.top = 0;
                                var i = a.data(e, "depth") || 0;
                                this.depthsX.push(a.data(e, "depth-x") || i), this.depthsY.push(a.data(e, "depth-y") || i)
                            }
                        }
                    }, { key: "updateDimensions", value: function() { this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.windowCenterX = this.windowWidth * this.originX, this.windowCenterY = this.windowHeight * this.originY, this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX), this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY) } }, { key: "updateBounds", value: function() { this.bounds = this.inputElement.getBoundingClientRect(), this.elementPositionX = this.bounds.left, this.elementPositionY = this.bounds.top, this.elementWidth = this.bounds.width, this.elementHeight = this.bounds.height, this.elementCenterX = this.elementWidth * this.originX, this.elementCenterY = this.elementHeight * this.originY, this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX), this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY) } }, { key: "queueCalibration", value: function(t) { clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t) } }, { key: "enable", value: function() { this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = !1, window.addEventListener("deviceorientation", this.onDeviceOrientation), this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)) : this.motionSupport ? (this.portrait = !1, window.addEventListener("devicemotion", this.onDeviceMotion), this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)) : (this.calibrationX = 0, this.calibrationY = 0, this.portrait = !1, window.addEventListener("mousemove", this.onMouseMove), this.doReadyCallback()), window.addEventListener("resize", this.onWindowResize), this.raf = s(this.onAnimationFrame)) } }, { key: "disable", value: function() { this.enabled && (this.enabled = !1, this.orientationSupport ? window.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? window.removeEventListener("devicemotion", this.onDeviceMotion) : window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("resize", this.onWindowResize), s.cancel(this.raf)) } }, { key: "calibrate", value: function(t, e) { this.calibrateX = void 0 === t ? this.calibrateX : t, this.calibrateY = void 0 === e ? this.calibrateY : e } }, { key: "invert", value: function(t, e) { this.invertX = void 0 === t ? this.invertX : t, this.invertY = void 0 === e ? this.invertY : e } }, { key: "friction", value: function(t, e) { this.frictionX = void 0 === t ? this.frictionX : t, this.frictionY = void 0 === e ? this.frictionY : e } }, { key: "scalar", value: function(t, e) { this.scalarX = void 0 === t ? this.scalarX : t, this.scalarY = void 0 === e ? this.scalarY : e } }, { key: "limit", value: function(t, e) { this.limitX = void 0 === t ? this.limitX : t, this.limitY = void 0 === e ? this.limitY : e } }, { key: "origin", value: function(t, e) { this.originX = void 0 === t ? this.originX : t, this.originY = void 0 === e ? this.originY : e } }, { key: "setInputElement", value: function(t) { this.inputElement = t, this.updateDimensions() } }, { key: "setPosition", value: function(t, e, i) { e = e.toFixed(this.precision) + "px", i = i.toFixed(this.precision) + "px", this.transform3DSupport ? a.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? a.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i) } }, { key: "onOrientationTimer", value: function() { this.orientationSupport && 0 === this.orientationStatus ? (this.disable(), this.orientationSupport = !1, this.enable()) : this.doReadyCallback() } }, { key: "onMotionTimer", value: function() { this.motionSupport && 0 === this.motionStatus ? (this.disable(), this.motionSupport = !1, this.enable()) : this.doReadyCallback() } }, { key: "onCalibrationTimer", value: function() { this.calibrationFlag = !0 } }, { key: "onWindowResize", value: function() { this.updateDimensions() } }, {
                        key: "onAnimationFrame",
                        value: function() {
                            this.updateBounds();
                            var t = this.inputX - this.calibrationX,
                                e = this.inputY - this.calibrationY;
                            (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.motionX = this.calibrateX ? e : this.inputY, this.motionY = this.calibrateY ? t : this.inputX) : (this.motionX = this.calibrateX ? t : this.inputX, this.motionY = this.calibrateY ? e : this.inputY), this.motionX *= this.elementWidth * (this.scalarX / 100), this.motionY *= this.elementHeight * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.motionX = a.clamp(this.motionX, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.motionY = a.clamp(this.motionY, -this.limitY, this.limitY)), this.velocityX += (this.motionX - this.velocityX) * this.frictionX, this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
                            for (var i = 0; i < this.layers.length; i++) {
                                var n = this.layers[i],
                                    o = this.depthsX[i],
                                    r = this.depthsY[i],
                                    l = this.velocityX * (o * (this.invertX ? -1 : 1)),
                                    h = this.velocityY * (r * (this.invertY ? -1 : 1));
                                this.setPosition(n, l, h)
                            }
                            this.raf = s(this.onAnimationFrame)
                        }
                    }, {
                        key: "rotate",
                        value: function(t, e) {
                            var i = (t || 0) / 30,
                                n = (e || 0) / 30,
                                o = this.windowHeight > this.windowWidth;
                            this.portrait !== o && (this.portrait = o, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.calibrationX = i, this.calibrationY = n), this.inputX = i, this.inputY = n
                        }
                    }, {
                        key: "onDeviceOrientation",
                        value: function(t) {
                            var e = t.beta,
                                i = t.gamma;
                            null !== e && null !== i && (this.orientationStatus = 1, this.rotate(e, i))
                        }
                    }, {
                        key: "onDeviceMotion",
                        value: function(t) {
                            var e = t.rotationRate.beta,
                                i = t.rotationRate.gamma;
                            null !== e && null !== i && (this.motionStatus = 1, this.rotate(e, i))
                        }
                    }, {
                        key: "onMouseMove",
                        value: function(t) {
                            var e = t.clientX,
                                i = t.clientY;
                            if (this.hoverOnly && (e < this.elementPositionX || e > this.elementPositionX + this.elementWidth || i < this.elementPositionY || i > this.elementPositionY + this.elementHeight)) return this.inputX = 0, void(this.inputY = 0);
                            this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.elementPositionX), e = Math.min(e, this.elementPositionX + this.elementWidth), i = Math.max(i, this.elementPositionY), i = Math.min(i, this.elementPositionY + this.elementHeight)), this.elementRangeX && this.elementRangeY && (this.inputX = (e - this.elementPositionX - this.elementCenterX) / this.elementRangeX, this.inputY = (i - this.elementPositionY - this.elementCenterY) / this.elementRangeY)) : this.windowRadiusX && this.windowRadiusY && (this.inputX = (e - this.windowCenterX) / this.windowRadiusX, this.inputY = (i - this.windowCenterY) / this.windowRadiusY)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.disable(), clearTimeout(this.calibrationTimer), clearTimeout(this.detectionTimer), this.element.removeAttribute("style");
                            for (var t = 0; t < this.layers.length; t++) this.layers[t].removeAttribute("style");
                            delete this.element, delete this.layers
                        }
                    }, { key: "version", value: function() { return "3.1.0" } }]), t
                }();
            e.exports = h
        }, { "object-assign": 1, raf: 4 }]
    }, {}, [5])(5)
});


/*-------------------------------------------------------------
  19. Maplace.js
---------------------------------------------------------------*/
/**
 * Maplace.js
 *
 * Copyright (c) 2013 Daniele Moraschi
 * Licensed under the MIT license
 * For all details and documentation:
 * http://maplacejs.com
 *
 * @version  0.2.10
 * @preserve
 */
! function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : a.Maplace = b(a.jQuery) }(this, function(a) {
    "use strict";

    function b(b) { this.VERSION = "0.2.10", this.loaded = !1, this.markers = [], this.circles = [], this.oMap = !1, this.view_all_key = "all", this.infowindow = null, this.maxZIndex = 0, this.ln = 0, this.oMap = !1, this.oBounds = null, this.map_div = null, this.canvas_map = null, this.controls_wrapper = null, this.current_control = null, this.current_index = null, this.Polyline = null, this.Polygon = null, this.Fusion = null, this.directionsService = null, this.directionsDisplay = null, this.o = { debug: !1, map_div: "#gmap", controls_div: "#controls", generate_controls: !0, controls_type: "dropdown", controls_cssclass: "", controls_title: "", controls_on_map: !0, controls_applycss: !0, controls_position: google.maps.ControlPosition.RIGHT_TOP, type: "marker", view_all: !0, view_all_text: "View All", pan_on_click: !0, start: 0, locations: [], shared: {}, map_options: { mapTypeId: google.maps.MapTypeId.ROADMAP }, stroke_options: { strokeColor: "#0000FF", strokeOpacity: .8, strokeWeight: 2, fillColor: "#0000FF", fillOpacity: .4 }, directions_options: { travelMode: google.maps.TravelMode.DRIVING, unitSystem: google.maps.UnitSystem.METRIC, optimizeWaypoints: !1, provideRouteAlternatives: !1, avoidHighways: !1, avoidTolls: !1 }, circle_options: { radius: 100, visible: !0 }, styles: {}, fusion_options: {}, directions_panel: null, draggable: !1, editable: !1, show_infowindows: !0, show_markers: !0, infowindow_type: "bubble", listeners: {}, beforeViewAll: function() {}, afterViewAll: function() {}, beforeShow: function(a, b, c) {}, afterShow: function(a, b, c) {}, afterCreateMarker: function(a, b, c) {}, beforeCloseInfowindow: function(a, b) {}, afterCloseInfowindow: function(a, b) {}, beforeOpenInfowindow: function(a, b, c) {}, afterOpenInfowindow: function(a, b, c) {}, afterRoute: function(a, b, c) {}, onPolylineClick: function(a) {}, onPolygonClick: function(a) {}, circleRadiusChanged: function(a, b, c) {}, circleCenterChanged: function(a, b, c) {}, drag: function(a, b, c) {}, dragEnd: function(a, b, c) {}, dragStart: function(a, b, c) {} }, this.AddControl("dropdown", c), this.AddControl("list", d), b && "directions" === b.type && (!b.show_markers && (b.show_markers = !1), !b.show_infowindows && (b.show_infowindows = !1)), a.extend(!0, this.o, b) }
    var c, d;
    return c = {
        activateCurrent: function(a) { this.html_element.find("select").val(a) },
        getHtml: function() {
            var b, c, d = this,
                e = "";
            if (this.ln > 1) {
                for (e += '<select class="dropdown controls ' + this.o.controls_cssclass + '">', this.ShowOnMenu(this.view_all_key) && (e += '<option value="' + this.view_all_key + '">' + this.o.view_all_text + "</option>"), c = 0; c < this.ln; c += 1) this.ShowOnMenu(c) && (e += '<option value="' + (c + 1) + '">' + (this.o.locations[c].title || "#" + (c + 1)) + "</option>");
                e += "</select>", e = a(e).bind("change", function() { d.ViewOnMap(this.value) })
            }
            return b = this.o.controls_title, this.o.controls_title && (b = a('<div class="controls_title"></div>').css(this.o.controls_applycss ? { fontWeight: "bold", fontSize: this.o.controls_on_map ? "12px" : "inherit", padding: "3px 10px 5px 0" } : {}).append(this.o.controls_title)), this.html_element = a('<div class="wrap_controls"></div>').append(b).append(e), this.html_element
        }
    }, d = {
        html_a: function(b, c, d) {
            var e = this,
                f = c || b + 1,
                g = d || this.o.locations[b].title,
                h = a('<a data-load="' + f + '" id="ullist_a_' + f + '" href="#' + f + '" title="' + g + '"><span>' + (g || "#" + (b + 1)) + "</span></a>");
            return h.css(this.o.controls_applycss ? { color: "#666", display: "block", padding: "5px", fontSize: this.o.controls_on_map ? "12px" : "inherit", textDecoration: "none" } : {}), h.on("click", function(b) {
                b.preventDefault();
                var c = a(this).attr("data-load");
                e.ViewOnMap(c)
            }), h
        },
        activateCurrent: function(a) { this.html_element.find("li").removeClass("active"), this.html_element.find("#ullist_a_" + a).parent().addClass("active") },
        getHtml: function() { var b, c, e = a("<ul class='ullist controls " + this.o.controls_cssclass + "'></ul>").css(this.o.controls_applycss ? { margin: 0, padding: 0, listStyleType: "none" } : {}); for (this.ShowOnMenu(this.view_all_key) && e.append(a("<li></li>").append(d.html_a.call(this, !1, this.view_all_key, this.o.view_all_text))), c = 0; c < this.ln; c++) this.ShowOnMenu(c) && e.append(a("<li></li>").append(d.html_a.call(this, c))); return b = this.o.controls_title, this.o.controls_title && (b = a('<div class="controls_title"></div>').css(this.o.controls_applycss ? { fontWeight: "bold", padding: "3px 10px 5px 0", fontSize: this.o.controls_on_map ? "12px" : "inherit" } : {}).append(this.o.controls_title)), this.html_element = a('<div class="wrap_controls"></div>').append(b).append(e), this.html_element }
    }, b.prototype.controls = {}, b.prototype.create_objMap = function() {
        var b, c = this,
            d = 0;
        for (b in this.o.styles) this.o.styles.hasOwnProperty(b) && (0 === d && (this.o.map_options.mapTypeControlOptions = { mapTypeIds: [google.maps.MapTypeId.ROADMAP] }), d++, this.o.map_options.mapTypeControlOptions.mapTypeIds.push("map_style_" + d));
        if (this.loaded) c.oMap.setOptions(this.o.map_options);
        else try { this.map_div.css({ position: "relative", overflow: "hidden" }), this.canvas_map = a("<div>").addClass("canvas_map").css({ width: "100%", height: "100%" }).appendTo(this.map_div), this.oMap = new google.maps.Map(this.canvas_map.get(0), this.o.map_options) } catch (e) { this.debug("create_objMap::" + this.map_div.selector, e.toString()) }
        d = 0;
        for (b in this.o.styles) this.o.styles.hasOwnProperty(b) && (d++, this.oMap.mapTypes.set("map_style_" + d, new google.maps.StyledMapType(this.o.styles[b], { name: b })), this.oMap.setMapTypeId("map_style_" + d))
    }, b.prototype.add_markers_to_objMap = function() {
        var a, b, c = this.o.type || "marker";
        switch (c) {
            case "marker":
                for (a = 0; a < this.ln; a++) b = this.create_objPoint(a), this.create.marker.call(this, a, b);
                break;
            default:
                this.create[c].apply(this)
        }
    }, b.prototype.create_objPoint = function(b) {
        var c = a.extend({}, this.o.locations[b]),
            d = void 0 === c.visible ? void 0 : c.visible;
        return !c.type && (c.type = this.o.type), c.map = this.oMap, c.position = new google.maps.LatLng(c.lat, c.lon), c.zIndex = void 0 === c.zIndex ? 1e4 : c.zIndex + 100, c.visible = void 0 === d ? this.o.show_markers : d, this.o.maxZIndex = c.zIndex > this.maxZIndex ? c.zIndex : this.maxZIndex, c.image && (c.icon = new google.maps.MarkerImage(c.image, new google.maps.Size(c.image_w || 32, c.image_h || 32), new google.maps.Point(0, 0), new google.maps.Point((c.image_w || 32) / 2, (c.image_h || 32) / 2))), c
    }, b.prototype.create_objCircle = function(b) { var c, d, e; return e = a.extend({}, b), c = a.extend({}, this.o.stroke_options), d = a.extend({}, this.o.circle_options), a.extend(c, b.stroke_options || {}), a.extend(e, c), a.extend(d, b.circle_options || {}), a.extend(e, d), e.center = b.position, e.draggable = !1, e.zIndex = b.zIndex > 0 ? b.zIndex - 10 : 1, e }, b.prototype.add_markerEv = function(a, b, c) {
        var d = this;
        google.maps.event.addListener(c, "click", function(e) { d.CloseInfoWindow(), d.o.beforeShow.call(d, a, b, c), d.o.show_infowindows && b.show_infowindow !== !1 && d.open_infowindow(a, c, e), d.o.pan_on_click && b.pan_on_click !== !1 && (d.oMap.panTo(b.position), b.zoom && d.oMap.setZoom(b.zoom)), d.current_control && d.o.generate_controls && d.current_control.activateCurrent && d.current_control.activateCurrent.call(d, a + 1), d.current_index = a, d.o.afterShow.call(d, a, b, c) }), b.draggable && this.add_dragEv(a, b, c)
    }, b.prototype.add_circleEv = function(a, b, c) {
        var d = this;
        google.maps.event.addListener(c, "click", function() { d.ViewOnMap(a + 1) }), google.maps.event.addListener(c, "center_changed", function() { d.o.circleCenterChanged.call(d, a, b, c) }), google.maps.event.addListener(c, "radius_changed", function() { d.o.circleRadiusChanged.call(d, a, b, c) }), b.draggable && this.add_dragEv(a, b, c)
    }, b.prototype.add_dragEv = function(a, b, c) {
        var d = this;
        google.maps.event.addListener(c, "drag", function(e) {
            var f, g;
            if (c.getPosition) f = c.getPosition();
            else {
                if (!c.getCenter) return;
                f = c.getCenter()
            }
            if (d.circles[a] && d.circles[a].setCenter(f), d.Polyline ? g = "Polyline" : d.Polygon && (g = "Polygon"), g) {
                for (var h = d[g].getPath(), i = h.getArray(), j = [], k = 0; k < i.length; ++k) j[k] = a === k ? new google.maps.LatLng(f.lat(), f.lng()) : new google.maps.LatLng(i[k].lat(), i[k].lng());
                d[g].setPath(new google.maps.MVCArray(j)), d.add_polyEv(g)
            }
            d.o.drag.call(d, a, b, c)
        }), google.maps.event.addListener(c, "dragend", function() { d.o.dragEnd.call(d, a, b, c) }), google.maps.event.addListener(c, "dragstart", function() { d.o.dragStart.call(d, a, b, c) }), google.maps.event.addListener(c, "center_changed", function() { d.markers[a] && c.getCenter && d.markers[a].setPosition(c.getCenter()), d.o.drag.call(d, a, b, c) })
    }, b.prototype.add_polyEv = function(a) {
        var b = this;
        google.maps.event.addListener(this[a].getPath(), "set_at", function(c, d) { b.trigger_polyEv(a, c, d) }), google.maps.event.addListener(this[a].getPath(), "insert_at", function(c, d) { b.trigger_polyEv(a, c, d) })
    }, b.prototype.trigger_polyEv = function(a, b, c) {
        var d = this[a].getPath().getAt(b),
            e = new google.maps.LatLng(d.lat(), d.lng());
        this.markers[b] && this.markers[b].setPosition(e), this.circles[b] && this.circles[b].setCenter(e), this.o["on" + a + "Changed"](b, c, this[a].getPath().getArray())
    }, b.prototype.create = {
        marker: function(a, b, c) {
            if ("circle" === b.type && !c) {
                var d = this.create_objCircle(b);
                b.visible || (d.draggable = b.draggable), c = new google.maps.Circle(d), this.add_circleEv(a, d, c), this.circles[a] = c
            }
            return b.type = "marker", c = new google.maps.Marker(b), this.add_markerEv(a, b, c), this.oBounds.extend(b.position), this.markers[a] = c, this.o.afterCreateMarker.call(this, a, b, c), c
        },
        circle: function() { var a, b, c, d; for (a = 0; a < this.ln; a++) b = this.create_objPoint(a), "circle" === b.type && (c = this.create_objCircle(b), b.visible || (c.draggable = b.draggable), d = new google.maps.Circle(c), this.add_circleEv(a, c, d), this.circles[a] = d), b.type = "marker", this.create.marker.call(this, a, b, d) },
        polyline: function() {
            var b, c, d = a.extend({}, this.o.stroke_options);
            for (d.path = [], d.draggable = this.o.draggable, d.editable = this.o.editable, d.map = this.oMap, d.zIndex = this.o.maxZIndex + 100, b = 0; b < this.ln; b++) c = this.create_objPoint(b), this.create.marker.call(this, b, c), d.path.push(c.position);
            this.Polyline ? this.Polyline.setOptions(d) : this.Polyline = new google.maps.Polyline(d), this.add_polyEv("Polyline")
        },
        polygon: function() {
            var b, c, d = this,
                e = a.extend({}, this.o.stroke_options);
            for (e.path = [], e.draggable = this.o.draggable, e.editable = this.o.editable, e.map = this.oMap, e.zIndex = this.o.maxZIndex + 100, b = 0; b < this.ln; b++) c = this.create_objPoint(b), this.create.marker.call(this, b, c), e.path.push(c.position);
            this.Polygon ? this.Polygon.setOptions(e) : this.Polygon = new google.maps.Polygon(e), google.maps.event.addListener(this.Polygon, "click", function(a) { d.o.onPolygonClick.call(d, a) }), this.add_polyEv("Polygon")
        },
        fusion: function() { this.o.fusion_options.styles = [this.o.stroke_options], this.o.fusion_options.map = this.oMap, this.Fusion ? this.Fusion.setOptions(this.o.fusion_options) : this.Fusion = new google.maps.FusionTablesLayer(this.o.fusion_options) },
        directions: function() {
            var b, c, d, e, f, g = this,
                h = [],
                i = 0;
            for (b = 0; b < this.ln; b++) c = this.create_objPoint(b), 0 === b ? e = c.position : b === this.ln - 1 ? f = c.position : (d = this.o.locations[b].stopover === !0, h.push({ location: c.position, stopover: d })), this.create.marker.call(this, b, c);
            this.o.directions_options.origin = e, this.o.directions_options.destination = f, this.o.directions_options.waypoints = h, this.directionsService || (this.directionsService = new google.maps.DirectionsService), this.directionsDisplay ? this.directionsDisplay.setOptions({ draggable: this.o.draggable }) : this.directionsDisplay = new google.maps.DirectionsRenderer({ draggable: this.o.draggable }), this.directionsDisplay.setMap(this.oMap), this.o.directions_panel && (this.o.directions_panel = a(this.o.directions_panel), this.directionsDisplay.setPanel(this.o.directions_panel.get(0))), this.o.draggable && google.maps.event.addListener(this.directionsDisplay, "directions_changed", function() {
                var a = g.directionsDisplay.getDirections();
                i = g.compute_distance(g.directionsDisplay.directions), g.o.afterRoute.call(g, i, a.status, a)
            }), this.directionsService.route(this.o.directions_options, function(a, b) { b === google.maps.DirectionsStatus.OK && (i = g.compute_distance(a), g.directionsDisplay.setDirections(a)), g.o.afterRoute.call(g, i, b, a) })
        }
    }, b.prototype.compute_distance = function(a) {
        var b, c = 0,
            d = a.routes[0],
            e = d.legs.length;
        for (b = 0; b < e; b++) c += d.legs[b].distance.value;
        return c
    }, b.prototype.type_to_open = {
        bubble: function(a) {
            var b = this,
                c = { content: a.html || "" };
            a.infoWindowMaxWidth && (c.maxWidth = a.infoWindowMaxWidth), this.infowindow = new google.maps.InfoWindow(c), google.maps.event.addListener(this.infowindow, "closeclick", function() { b.CloseInfoWindow() })
        }
    }, b.prototype.open_infowindow = function(a, b, c) {
        var d = this.o.locations[a],
            e = this.o.infowindow_type;
        d.html && this.type_to_open[e] && (this.o.beforeOpenInfowindow.call(this, a, d, b), this.type_to_open[e].call(this, d), this.infowindow.open(this.oMap, b), this.o.afterOpenInfowindow.call(this, a, d, b))
    }, b.prototype.get_html_controls = function() { return this.controls[this.o.controls_type] && this.controls[this.o.controls_type].getHtml ? (this.current_control = this.controls[this.o.controls_type], this.current_control.getHtml.apply(this)) : "" }, b.prototype.generate_controls = function() {
        if (!this.o.controls_on_map) return this.controls_wrapper.empty(), void this.controls_wrapper.append(this.get_html_controls());
        var b = a('<div class="on_gmap ' + this.o.controls_type + ' gmap_controls"></div>').css(this.o.controls_applycss ? { margin: "5px" } : {}),
            c = a(this.get_html_controls()).css(this.o.controls_applycss ? { background: "#fff", padding: "5px", border: "1px solid #eee", boxShadow: "rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px", maxHeight: this.map_div.find(".canvas_map").outerHeight() - 80, minWidth: 100, overflowY: "auto", overflowX: "hidden" } : {});
        b.append(c), this.oMap.controls[this.o.controls_position].clear(), this.oMap.controls[this.o.controls_position].push(b.get(0))
    }, b.prototype.init_map = function() {
        var a = this;
        this.Polyline && this.Polyline.setMap(null), this.Polygon && this.Polygon.setMap(null), this.Fusion && this.Fusion.setMap(null), this.directionsDisplay && this.directionsDisplay.setMap(null);
        for (var b = this.markers.length - 1; b >= 0; b -= 1) try { this.markers[b] && this.markers[b].setMap(null) } catch (c) { a.debug("init_map::markers::setMap", c.stack) }
        this.markers.length = 0, this.markers = [];
        for (var d = this.circles.length - 1; d >= 0; d -= 1) try { this.circles[d] && this.circles[d].setMap(null) } catch (c) { a.debug("init_map::circles::setMap", c.stack) }
        this.circles.length = 0, this.circles = [], this.o.controls_on_map && this.oMap.controls && this.oMap.controls[this.o.controls_position].forEach(function(b, c) { try { a.oMap.controls[this.o.controls_position].removeAt(c) } catch (d) { a.debug("init_map::removeAt", d.stack) } }), this.oBounds = new google.maps.LatLngBounds
    }, b.prototype.perform_load = function() { this.CloseInfoWindow(), 1 === this.ln ? (this.o.map_options.set_center ? this.oMap.setCenter(new google.maps.LatLng(this.o.map_options.set_center[0], this.o.map_options.set_center[1])) : (this.oMap.fitBounds(this.oBounds), this.ViewOnMap(1)), this.o.map_options.zoom && this.oMap.setZoom(this.o.map_options.zoom)) : 0 === this.ln ? (this.o.map_options.set_center ? this.oMap.setCenter(new google.maps.LatLng(this.o.map_options.set_center[0], this.o.map_options.set_center[1])) : this.oMap.fitBounds(this.oBounds), this.oMap.setZoom(this.o.map_options.zoom || 1)) : (this.oMap.fitBounds(this.oBounds), "number" == typeof(this.o.start - 0) && this.o.start > 0 && this.o.start <= this.ln ? this.ViewOnMap(this.o.start) : this.o.map_options.set_center ? this.oMap.setCenter(new google.maps.LatLng(this.o.map_options.set_center[0], this.o.map_options.set_center[1])) : this.ViewOnMap(this.view_all_key), this.o.map_options.zoom && this.oMap.setZoom(this.o.map_options.zoom)) }, b.prototype.debug = function(a, b) { return this.o.debug && console.log(a, b), this }, b.prototype.AddControl = function(a, b) { return a && b ? (this.controls[a] = b, this) : (self.debug("AddControl", 'Missing "name" and "func" callback.'), !1) }, b.prototype.CloseInfoWindow = function() { return this.infowindow && (this.current_index || 0 === this.current_index) && (this.o.beforeCloseInfowindow.call(this, this.current_index, this.o.locations[this.current_index]), this.infowindow.close(), this.infowindow = null, this.o.afterCloseInfowindow.call(this, this.current_index, this.o.locations[this.current_index])), this }, b.prototype.ShowOnMenu = function(a) { if (a === this.view_all_key && this.o.view_all && this.ln > 1) return !0; if (a = parseInt(a, 10), "number" == typeof(a - 0) && a >= 0 && a < this.ln) { var b = this.o.locations[a].on_menu !== !1; if (b) return !0 } return !1 }, b.prototype.ViewOnMap = function(a) {
        if (a === this.view_all_key) this.o.beforeViewAll.call(this), this.current_index = a, this.o.locations.length > 0 && this.o.generate_controls && this.current_control && this.current_control.activateCurrent && this.current_control.activateCurrent.apply(this, [a]), this.oMap.fitBounds(this.oBounds), this.o.afterViewAll.call(this);
        else if (a = parseInt(a, 10), "number" == typeof(a - 0) && a > 0 && a <= this.ln) try { google.maps.event.trigger(this.markers[a - 1], "click") } catch (b) { this.debug("ViewOnMap::trigger", b.stack) }
        return this
    }, b.prototype.SetLocations = function(a, b) { return this.o.locations = a, b && this.Load(), this }, b.prototype.AddLocations = function(b, c) { var d = this; return a.isArray(b) && a.each(b, function(a, b) { d.o.locations.push(b) }), a.isPlainObject(b) && this.o.locations.push(b), c && this.Load(), this }, b.prototype.AddLocation = function(b, c, d) { return a.isPlainObject(b) && this.o.locations.splice(c, 0, b), d && this.Load(), this }, b.prototype.RemoveLocations = function(b, c) {
        var d = this,
            e = 0;
        return a.isArray(b) ? a.each(b, function(a, b) { b - e < d.ln && d.o.locations.splice(b - e, 1), e++ }) : b < this.ln && this.o.locations.splice(b, 1), c && this.Load(), this
    }, b.prototype.Loaded = function() { return this.loaded }, b.prototype._init = function() {
        this.ln = this.o.locations.length;
        for (var b = 0; b < this.ln; b++) {
            var c = a.extend({}, this.o.shared);
            this.o.locations[b] = a.extend(c, this.o.locations[b]), this.o.locations[b].html && (this.o.locations[b].html = this.o.locations[b].html.replace("%index", b + 1), this.o.locations[b].html = this.o.locations[b].html.replace("%title", this.o.locations[b].title || ""))
        }
        return this.map_div = a(this.o.map_div), this.controls_wrapper = a(this.o.controls_div), this
    }, b.prototype.Load = function(b) {
        a.extend(!0, this.o, b), b && b.locations && (this.o.locations = b.locations), this._init(), this.o.visualRefresh === !1 ? google.maps.visualRefresh = !1 : google.maps.visualRefresh = !0, this.init_map(), this.create_objMap(), this.add_markers_to_objMap(), this.ln > 1 && this.o.generate_controls || this.o.force_generate_controls ? (this.o.generate_controls = !0, this.generate_controls()) : this.o.generate_controls = !1;
        var c = this;
        if (this.loaded) this.perform_load();
        else { google.maps.event.addListenerOnce(this.oMap, "idle", function() { c.perform_load() }); for (var d in this.o.listeners) this.o.listeners.hasOwnProperty(d) && google.maps.event.addListener(this.oMap, d, this.o.listeners[d]) }
        return this.loaded = !0, this
    }, b
});



/*-------------------------------------------------------------
  jQuery End
---------------------------------------------------------------*/