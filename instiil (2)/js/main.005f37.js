! function() {
    var e, n = {
            1378: function() {
                var e = document.querySelector(".parallax"),
                    n = document.querySelector(".nav"),
                    r = document.querySelector(".nav-toggle__button");
                e.classList.remove("nav-opened"), e.classList.add("nav-closed"), n.classList.remove("nav_nojs"), n.classList.remove("nav_opened"), n.classList.add("nav_closed"), r.addEventListener("click", (function() { n.classList.contains("nav_closed") ? (e.classList.remove("nav-closed"), e.classList.add("nav-opened"), n.classList.remove("nav_closed"), n.classList.add("nav_opened")) : (e.classList.remove("nav-opened"), e.classList.add("nav-closed"), n.classList.remove("nav_opened"), n.classList.add("nav_closed")) }))
            }
        },
        r = {};

    function t(e) { var o = r[e]; if (void 0 !== o) return o.exports; var s = r[e] = { exports: {} }; return n[e](s, s.exports, t), s.exports }
    t.m = n, e = [], t.O = function(n, r, o, s) {
            if (!r) {
                var a = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    r = e[u][0], o = e[u][1], s = e[u][2];
                    for (var c = !0, i = 0; i < r.length; i++)(!1 & s || a >= s) && Object.keys(t.O).every((function(e) { return t.O[e](r[i]) })) ? r.splice(i--, 1) : (c = !1, s < a && (a = s));
                    if (c) {
                        e.splice(u--, 1);
                        var l = o();
                        void 0 !== l && (n = l)
                    }
                }
                return n
            }
            s = s || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > s; u--) e[u] = e[u - 1];
            e[u] = [r, o, s]
        }, t.n = function(e) { var n = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(n, { a: n }), n }, t.d = function(e, n) { for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: n[r] }) }, t.o = function(e, n) { return Object.prototype.hasOwnProperty.call(e, n) }, t.p = "/",
        function() {
            t.b = document.baseURI || self.location.href;
            var e = { 179: 0 };
            t.O.j = function(n) { return 0 === e[n] };
            var n = function(n, r) {
                    var o, s, a = r[0],
                        c = r[1],
                        i = r[2],
                        l = 0;
                    if (a.some((function(n) { return 0 !== e[n] }))) { for (o in c) t.o(c, o) && (t.m[o] = c[o]); if (i) var u = i(t) }
                    for (n && n(r); l < a.length; l++) s = a[l], t.o(e, s) && e[s] && e[s][0](), e[a[l]] = 0;
                    return t.O(u)
                },
                r = self.webpackChunkLuxTrips_project = self.webpackChunkLuxTrips_project || [];
            r.forEach(n.bind(null, 0)), r.push = n.bind(null, r.push.bind(r))
        }();
    var o = {};
    ! function() {
        "use strict";
        t(1378)
    }(), o = t.O(o)
}();