"use strict";
(self.webpackChunkyoutube_clone = self.webpackChunkyoutube_clone || []).push([
  [394],
  {
    6394: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return A;
          },
        });
      var n = s(9439),
        l = s(2791),
        r = s(9434),
        a = s(1087),
        i = s(8499),
        c = s(4165),
        o = s(5861),
        u = s(7710),
        d = s(184),
        x = function (e) {
          var t,
            s,
            n,
            l = e.info,
            r = l.snippet,
            a = l.statistics,
            i = r.channelTitle,
            c = r.title,
            o = r.thumbnails;
          return (0, d.jsxs)("div", {
            className: "flex h-24  mb-4",
            children: [
              (0, d.jsx)("img", {
                className: "rounded-lg w-44",
                src:
                  void 0 !==
                  (null === o ||
                  void 0 === o ||
                  null === (t = o.maxres) ||
                  void 0 === t
                    ? void 0
                    : t.url)
                    ? null === o ||
                      void 0 === o ||
                      null === (s = o.maxres) ||
                      void 0 === s
                      ? void 0
                      : s.url
                    : null === o ||
                      void 0 === o ||
                      null === (n = o.high) ||
                      void 0 === n
                    ? void 0
                    : n.url,
                alt: "video-thumbnail",
              }),
              (0, d.jsxs)("ul", {
                className: "text-xs pl-2",
                children: [
                  (0, d.jsx)("li", {
                    className: "font-bold leading-[1.2rem] pb-2 text-sm",
                    children: c.slice(0, 30) + (c.length > 30 ? "..." : ""),
                  }),
                  (0, d.jsx)("li", {
                    className: "text-gray-600 pb-1",
                    children: i,
                  }),
                  (0, d.jsxs)("li", {
                    className: "text-gray-600",
                    children: [
                      (0, d.jsxs)("span", {
                        children: [" ", u.V2.format(a.viewCount), " views"],
                      }),
                      (0, d.jsxs)("span", {
                        children: [
                          " ",
                          (0, d.jsx)("span", {
                            className: "font-bold",
                            children: "\xb7",
                          }),
                          " ",
                          (0, u.Bh)(r.publishedAt),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        p = s(3596),
        m = function () {
          var e = (0, a.lr)(),
            t = (0, n.Z)(e, 1)[0],
            s = (0, l.useState)([]),
            r = (0, n.Z)(s, 2),
            i = r[0],
            u = r[1],
            m = (0, l.useState)([]),
            f = (0, n.Z)(m, 2),
            h = f[0],
            v = f[1],
            g = (0, l.useState)(""),
            b = (0, n.Z)(g, 2),
            j = (b[0], b[1], (0, l.useState)(1)),
            y = (0, n.Z)(j, 2);
          y[0], y[1];
          console.log(i, "RELATED ID LIST"),
            (0, l.useEffect)(
              function () {
                N(t.get("v"));
              },
              [t]
            );
          var N = (function () {
            var e = (0, o.Z)(
              (0, c.Z)().mark(function e() {
                var s, n, l;
                return (0, c.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), fetch((0, p.dV)(t.get("v")));
                      case 2:
                        return (n = e.sent), (e.next = 5), n.json();
                      case 5:
                        (l = e.sent),
                          console.log(l, "JSON"),
                          u(
                            null === (s = l.items) || void 0 === s
                              ? void 0
                              : s
                                  .map(function (e) {
                                    var t;
                                    return null === e ||
                                      void 0 === e ||
                                      null === (t = e.id) ||
                                      void 0 === t
                                      ? void 0
                                      : t.videoId;
                                  })
                                  .filter(function (e) {
                                    return void 0 !== e;
                                  })
                          );
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          (0, l.useEffect)(
            function () {
              w();
            },
            [i]
          );
          var w = (function () {
            var e = (0, o.Z)(
              (0, c.Z)().mark(function e() {
                var t, s;
                return (0, c.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), fetch((0, p.EU)(i.toString()));
                      case 2:
                        return (t = e.sent), (e.next = 5), t.json();
                      case 5:
                        (s = e.sent), console.log(s, "JSON"), v(s.items);
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return (0, d.jsx)("div", {
            className: "py-4",
            children: h.map(function (e) {
              return (0,
              d.jsx)(a.rU, { to: "/watch?v=" + (null === e || void 0 === e ? void 0 : e.id), children: (0, d.jsx)(x, { info: e }, e.id) }, null === e || void 0 === e ? void 0 : e.id);
            }),
          });
        },
        f = function (e) {
          var t = e.isVideoDescriptionVisible,
            s = e.setIsVideoDescriptionVisible,
            n = e.statistics,
            l = e.snippet;
          return (0, d.jsxs)("div", {
            className:
              "bg-gray-100 mt-3 py-3 px-4 rounded-lg relative -z-10 lg:z-10 hover:bg-gray-200 group " +
              (!t && "h-32 overflow-hidden pb-8"),
            children: [
              (0, d.jsxs)("div", {
                className: "text-sm font-bold",
                children: [
                  (0, d.jsxs)("span", {
                    className: "pr-3",
                    children: [u.V2.format(n.viewCount), " views"],
                  }),
                  (0, d.jsx)("span", { children: (0, u.Bh)(l.publishedAt) }),
                ],
              }),
              (0, d.jsx)("div", {
                className: "text-sm whitespace-pre-line",
                children: l.description,
              }),
              !t &&
                (0, d.jsx)("button", {
                  className:
                    "font-bold text-sm absolute bottom-[0px] w-full bg-gray-100 text-gray-700 text-left pb-2 group-hover:bg-slate-200 hover:text-black ",
                  onClick: function () {
                    return s(!0);
                  },
                  children: "Show more",
                }),
              (0, d.jsx)("button", {
                className: "font-bold text-sm pt-6 hover:text-black",
                onClick: function () {
                  return s(!1);
                },
                children: "Show less",
              }),
            ],
          });
        },
        h = s(8820),
        v = s(7425),
        g = s(860),
        b = function (e) {
          var t = e.statistics;
          return (0, d.jsxs)("div", {
            className: "flex gap-2 text-[10px]",
            children: [
              (0, d.jsxs)("div", {
                className: "flex ",
                children: [
                  (0, d.jsxs)("button", {
                    className:
                      "bg-gray-100 text-black font-bold  rounded-l-full flex items-center px-2 py-1 hover:bg-gray-200 group gap-1 lg:text-sm lg:py-2 lg:px-3",
                    children: [
                      (0, d.jsx)(h.DZs, { className: "" }),
                      u.V2.format(t.likeCount),
                    ],
                  }),
                  (0, d.jsx)("button", {
                    className:
                      "bg-gray-100 text-black font-bold  rounded-r-full hover:bg-gray-200 group  px-2 py-1 lg:text-sm lg:py-2 lg:px-3",
                    children: (0, d.jsx)(h.qBr, { className: "" }),
                  }),
                ],
              }),
              (0, d.jsxs)("button", {
                className:
                  "bg-gray-100 text-black font-bold rounded-full flex items-center gap-1 px-2 py-1 hover:bg-gray-200 group lg:text-sm lg:py-2 lg:px-3",
                children: [(0, d.jsx)(v.cql, { className: "" }), "Share"],
              }),
              (0, d.jsxs)("button", {
                className:
                  "bg-gray-100 text-black font-bold rounded-full flex items-center hover:bg-gray-200 group  px-2 py-1 gap-1 lg:text-sm lg:py-2 lg:px-3",
                children: [(0, d.jsx)(g.YOW, { className: "" }), "Download"],
              }),
              (0, d.jsx)("button", {
                className:
                  "bg-gray-100 text-black font-bold rounded-full hover:bg-gray-200 px-2 py-1 lg:text-sm lg:py-2 lg:px-3",
                children: "\xb7\xb7\xb7",
              }),
            ],
          });
        },
        j = function (e) {
          var t,
            s,
            n,
            l,
            r = e.channelDetails,
            a = e.channelTitle;
          return (0, d.jsxs)("div", {
            className: "flex items-center justify-between pb-3",
            children: [
              (0, d.jsxs)("div", {
                className: "flex gap-1 items-center",
                children: [
                  (0, d.jsx)("img", {
                    className: "w-12 h-12 rounded-full ",
                    src:
                      null === r ||
                      void 0 === r ||
                      null === (t = r.snippet) ||
                      void 0 === t ||
                      null === (s = t.thumbnails) ||
                      void 0 === s ||
                      null === (n = s.high) ||
                      void 0 === n
                        ? void 0
                        : n.url,
                    alt: "channel-profile",
                  }),
                  (0, d.jsxs)("ul", {
                    className: " ",
                    children: [
                      (0, d.jsx)("li", {
                        className: "font-bold text-xs lg:text-base",
                        children: a,
                      }),
                      (0, d.jsxs)("li", {
                        className: "text-gray-600 text-[10px] lg:text-xs",
                        children: [
                          u.V2.format(
                            null === r ||
                              void 0 === r ||
                              null === (l = r.statistics) ||
                              void 0 === l
                              ? void 0
                              : l.subscriberCount
                          ),
                          " ",
                          "subscribers",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, d.jsx)("button", {
                className:
                  "bg-black text-white font-bold text-[10px] rounded-full py-1 px-2 hover:bg-neutral-800 lg:text-sm lg:py-2 lg:px-3",
                children: "Subscribe",
              }),
            ],
          });
        },
        y = function () {
          var e = (0, a.lr)(),
            t = (0, n.Z)(e, 1)[0].get("v"),
            s = (0, l.useState)(),
            r = (0, n.Z)(s, 2),
            i = r[0],
            u = r[1],
            x = (0, l.useState)(),
            m = (0, n.Z)(x, 2),
            h = m[0],
            v = m[1],
            g = (0, l.useState)(!1),
            y = (0, n.Z)(g, 2),
            N = y[0],
            w = y[1];
          (0, l.useEffect)(
            function () {
              k(t);
            },
            [t]
          );
          var k = (function () {
            var e = (0, o.Z)(
              (0, c.Z)().mark(function e(t) {
                var s, n;
                return (0, c.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), fetch((0, p.XC)(t));
                      case 2:
                        return (s = e.sent), (e.next = 5), s.json();
                      case 5:
                        (n = e.sent), u(n.items[0]);
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          (0, l.useEffect)(
            function () {
              var e;
              void 0 !== i &&
                Z(
                  null === i ||
                    void 0 === i ||
                    null === (e = i.snippet) ||
                    void 0 === e
                    ? void 0
                    : e.channelId
                );
            },
            [i]
          );
          var Z = (function () {
            var e = (0, o.Z)(
              (0, c.Z)().mark(function e(t) {
                var s, n;
                return (0, c.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), fetch((0, p.Dl)(t));
                      case 2:
                        return (s = e.sent), (e.next = 5), s.json();
                      case 5:
                        (n = e.sent), v(n.items[0]);
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          if (void 0 !== i) {
            var S = i.snippet,
              C = i.statistics,
              V = S.channelTitle,
              D = S.title;
            return (0, d.jsxs)("div", {
              className: "px-2",
              children: [
                (0, d.jsx)("h2", {
                  className: "font-bold leading-none py-3 text-sm lg:text-lg",
                  children: D,
                }),
                (0, d.jsxs)("div", {
                  className: "justify-between items-center",
                  children: [
                    (0, d.jsx)(j, { channelDetails: h, channelTitle: V }),
                    (0, d.jsx)(b, { statistics: C }),
                  ],
                }),
                (0, d.jsx)(f, {
                  isVideoDescriptionVisible: N,
                  setIsVideoDescriptionVisible: w,
                  statistics: C,
                  snippet: S,
                }),
                (0, d.jsxs)("div", {
                  className: "py-6 flex gap-10 items-center",
                  children: [
                    (0, d.jsxs)("span", {
                      className: "text-base",
                      children: [
                        Number(C.commentCount).toLocaleString(),
                        " Comments",
                      ],
                    }),
                    (0, d.jsx)("span", {
                      className: "text-sm",
                      children: "Sort by",
                    }),
                  ],
                }),
                (0, d.jsxs)("div", {
                  className: "flex gap-4 mb-8 w-full pl-5",
                  children: [
                    (0, d.jsx)("img", {
                      className: "w-10 rounded-full",
                      src: "https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj",
                      alt: "user-profile",
                    }),
                    (0, d.jsx)("input", {
                      type: "text",
                      className:
                        "border-b border-gray-300 outline-none focus:border-black w-full self-baseline py-1 placeholder:text-gray-600",
                      placeholder: "Add a comment...",
                    }),
                  ],
                }),
              ],
            });
          }
        },
        N = s(3433),
        w = s(7692),
        k = function (e) {
          var t = e.data,
            s = e.replyCount,
            n = e.isVisible,
            l = e.setVisibleReply,
            r = e.id;
          if (void 0 !== t) {
            var a = t.authorDisplayName,
              i = t.authorProfileImageUrl,
              c = t.textOriginal,
              o = t.likeCount,
              x = t.publishedAt;
            return (0, d.jsxs)("div", {
              className: "flex bg-gray-100 rounded-lg py-3 px-5 ",
              children: [
                (0, d.jsx)("img", {
                  className:
                    void 0 === s
                      ? "w-8 h-8 rounded-full"
                      : "w-10 h-10 rounded-full",
                  src: i,
                  alt: "profile-img",
                }),
                (0, d.jsxs)("ul", {
                  className: "px-4",
                  children: [
                    (0, d.jsxs)("li", {
                      className: "flex items-baseline gap-2",
                      children: [
                        (0, d.jsx)("span", {
                          className: "font-bold text-sm",
                          children: a,
                        }),
                        (0, d.jsx)("span", {
                          className: "text-xs text-gray-600 py-1",
                          children: (0, u.Bh)(x),
                        }),
                      ],
                    }),
                    (0, d.jsx)("li", {
                      className: "text-sm py-1 break-all",
                      children: c,
                    }),
                    (0, d.jsxs)("li", {
                      className:
                        "text-xs text-gray-600 py-1 flex items-center gap-1",
                      children: [
                        (0, d.jsx)(h.DZs, { className: "text-xl text-black" }),
                        u.V2.format(o),
                        (0, d.jsx)(h.qBr, {
                          className: "text-xl text-black ml-1 ",
                        }),
                        (0, d.jsx)("span", {
                          className: "pl-4 font-bold text-black text-xs",
                          children: "Reply",
                        }),
                      ],
                    }),
                    s > 0 &&
                      (0, d.jsx)("li", {
                        className: "",
                        children: n
                          ? (0, d.jsxs)("button", {
                              className:
                                "font-bold text-blue-600 text-sm hover:bg-blue-100 px-3 py-2 rounded-full flex gap-1",
                              onClick: function () {
                                return l(!1);
                              },
                              children: [
                                (0, d.jsx)(w.Djz, { className: "text-xl" }),
                                s,
                                " replies",
                              ],
                            })
                          : (0, d.jsxs)("button", {
                              className:
                                "font-bold text-blue-600 text-sm hover:bg-blue-100 px-3 py-2 rounded-full flex gap-1",
                              onClick: function () {
                                return l(r);
                              },
                              children: [
                                (0, d.jsx)(w.QBW, { className: "text-xl" }),
                                s,
                                " replies",
                              ],
                            }),
                      }),
                  ],
                }),
              ],
            });
          }
        },
        Z = function e(t) {
          var s = t.comments,
            r = (0, l.useState)(""),
            a = (0, n.Z)(r, 2),
            i = a[0],
            c = a[1];
          if (void 0 !== s)
            return s.map(function (t) {
              var s, n;
              return (0,
              d.jsxs)("div", { className: "my-2 max-w-[85vw]", children: [(0, d.jsx)(k, { data: void 0 !== t.snippet.topLevelComment ? t.snippet.topLevelComment.snippet : t.snippet, replyCount: null === t || void 0 === t || null === (s = t.snippet) || void 0 === s ? void 0 : s.totalReplyCount, id: t.id, isVisible: i === t.id, setVisibleReply: c }), i === t.id && (0, d.jsx)("div", { className: "pl-14 ", children: (0, d.jsx)(e, { comments: null === t || void 0 === t || null === (n = t.replies) || void 0 === n ? void 0 : n.comments }) })] }, t.id);
            });
        },
        S = function () {
          var e = (0, l.useState)([]),
            t = (0, n.Z)(e, 2),
            s = t[0],
            r = t[1],
            i = (0, l.useState)(""),
            u = (0, n.Z)(i, 2),
            x = u[0],
            m = u[1],
            f = (0, a.lr)(),
            h = (0, n.Z)(f, 1)[0].get("v");
          (0, l.useEffect)(
            function () {
              v(h);
            },
            [h]
          );
          var v = (function () {
            var e = (0, o.Z)(
              (0, c.Z)().mark(function e() {
                var t, n, l;
                return (0, c.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), fetch((0, p.TA)(h, x));
                      case 2:
                        return (t = e.sent), (e.next = 5), t.json();
                      case 5:
                        (n = e.sent),
                          (l = [].concat((0, N.Z)(s), (0, N.Z)(n.items))),
                          r(l),
                          m(n.nextPageToken);
                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return void 0 === s
            ? null
            : (0, d.jsx)("div", {
                className: "mx-6",
                children: (0, d.jsx)(Z, { comments: s }),
              });
        },
        C = s(5100),
        V = s(5166),
        D = function (e) {
          var t = e.name,
            s = e.message;
          return (0, d.jsxs)("div", {
            className:
              "flex items-center py-2 px-4 shadow-md bg-white mb-4 rounded-md",
            children: [
              (0, d.jsx)("img", {
                className: "w-7",
                src: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png",
                alt: "user-profile",
              }),
              (0, d.jsxs)("div", {
                children: [
                  (0, d.jsx)("div", {
                    className: "font-bold text-sm px-2 flex-shrink-0",
                    children: t,
                  }),
                  (0, d.jsx)("div", { className: "text-sm px-2", children: s }),
                ],
              }),
            ],
          });
        },
        I = function () {
          var e = (0, r.v9)(function (e) {
            return e.chat.messages;
          });
          return (0, d.jsx)("div", {
            className:
              "w-full h-[350px] bg-gray-100 overflow-y-scroll flex flex-col-reverse px-2",
            children: e.map(function (e, t) {
              return (0, d.jsx)(D, { name: e.name, message: e.message }, t);
            }),
          });
        },
        T = function () {
          var e = (0, l.useState)(""),
            t = (0, n.Z)(e, 2),
            s = t[0],
            a = t[1],
            i = (0, r.I0)();
          return (0, d.jsxs)("form", {
            className: "w-full py-4 bg-gray-100 px-2",
            onSubmit: function (e) {
              return (function (e) {
                e.preventDefault(),
                  i((0, C.H)({ name: "Tonny kh", message: s })),
                  a("");
              })(e);
            },
            children: [
              (0, d.jsxs)("div", {
                className: "flex items-center ml-4",
                children: [
                  (0, d.jsx)("img", {
                    className: "w-7",
                    src: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png",
                    alt: "user-profile",
                  }),
                  (0, d.jsx)("span", {
                    className: "font-bold text-sm px-2",
                    children: "Tonny kh \ud83d\ude80",
                  }),
                ],
              }),
              (0, d.jsx)("input", {
                type: "text",
                className:
                  "w-2/3 ml-7 border border-gray-200 px-3 py-2 rounded-full",
                placeholder: "Say something...",
                value: s,
                onChange: function (e) {
                  return a(e.target.value);
                },
              }),
              (0, d.jsx)("button", {
                className:
                  "bg-gray-100 border border-gray-300  text-black ml-1 px-2 py-2 rounded-full font-bold hover:bg-gray-200 hover:border-gray-200",
                children: "send",
              }),
            ],
          });
        },
        E = function () {
          var e = (0, l.useState)(!0),
            t = (0, n.Z)(e, 2),
            s = t[0],
            a = t[1],
            i = (0, r.I0)();
          (0, l.useEffect)(function () {
            var e = setInterval(function () {
              console.log("---------API POOLING"),
                i(
                  (0, C.H)({
                    name: V.We.name.fullName(),
                    message: V.We.lorem.sentence(3),
                  })
                );
            }, 1500);
            return function () {
              return clearInterval(e);
            };
          }, []);
          var c = function () {
            a(!s);
          };
          return (0, d.jsx)(d.Fragment, {
            children: s
              ? (0, d.jsxs)("div", {
                  className: " rounded-xl mt-4 bg-gray-100 ",
                  children: [
                    (0, d.jsx)("div", {
                      className:
                        "text-center py-2 font-bold border-b border-gray-300 mx-5",
                      children: "Live Chat",
                    }),
                    (0, d.jsxs)("div", {
                      className: "px-5",
                      children: [(0, d.jsx)(I, {}), (0, d.jsx)(T, {})],
                    }),
                    (0, d.jsx)("button", {
                      className:
                        "block w-full rounded-b-xl font-bold text-sm border-t-[1px] border-t-gray-200 py-3 hover:bg-gray-200 hover:border-gray-100",
                      onClick: function () {
                        return c();
                      },
                      children: "Hide chat",
                    }),
                  ],
                })
              : (0, d.jsx)("button", {
                  className:
                    "border border-gray-200 block w-full rounded-full font-bold text-sm py-2 hover:bg-gray-100 hover:border-gray-100",
                  onClick: function () {
                    return c();
                  },
                  children: "Show chat",
                }),
          });
        },
        A = function () {
          var e = (0, a.lr)(),
            t = (0, n.Z)(e, 1)[0],
            s = (0, r.I0)(),
            c = (0, r.v9)(function (e) {
              return e.app.isMenuOpen;
            });
          return (
            (0, l.useEffect)(
              function () {
                s((0, i.Wj)());
              },
              [s]
            ),
            (0, d.jsx)("div", {
              className: c ? "pointer-events-none blur-3xl fixed" : " ",
              children: (0, d.jsxs)("div", {
                className: "lg:flex lg:justify-center lg:px-12",
                children: [
                  (0, d.jsxs)("div", {
                    className: "lg:pr-6 lg:lg:max-w-[820px] ",
                    children: [
                      (0, d.jsx)("div", {
                        className: "sticky top-14 sm:static",
                        children: (0, d.jsx)("div", {
                          className:
                            "relative pb-[56%] h-0 md:pb-[calc(43%)] lg:static lg:pb-0 lg:h-full",
                          children: (0, d.jsx)("iframe", {
                            className:
                              "absolute w-full h-full md:min-h-[340px] lg:min-h-[415px] lg:static ",
                            src:
                              "https://www.youtube.com/embed/" +
                              t.get("v") +
                              "?autoplay=1",
                            title: "YouTube video player",
                            frameBorder: "0",
                            allow:
                              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                            allowFullScreen: !0,
                          }),
                        }),
                      }),
                      (0, d.jsx)(y, {}),
                      (0, d.jsx)(S, {}),
                    ],
                  }),
                  (0, d.jsxs)("div", {
                    className: "lg:min-w-[350px]",
                    children: [(0, d.jsx)(E, {}), (0, d.jsx)(m, {})],
                  }),
                ],
              }),
            })
          );
        };
    },
  },
]);
//# sourceMappingURL=394.21b9737d.chunk.js.map
