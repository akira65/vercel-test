(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [671],
  {
    69304: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 34278));
    },
    34278: function (e, t, n) {
      'use strict';
      n.d(t, {
        Template: function () {
          return c;
        },
      });
      var s = n(57437),
        a = n(59646),
        o = n(14861);
      let r = () => {
          let e = '<iframe id="popupIframe" src="'
              .concat(
                'https://cv.syokunin.tokyo',
                '/popup" style="display:none"></iframe><script>document.addEventListener("DOMContentLoaded",()=>{const iframe=document.getElementById("popupIframe");let hasReached50Percent=false,hasReached100Percent=false;const handleScroll=()=>{const scrollTop=window.scrollY,windowHeight=window.innerHeight,documentHeight=document.documentElement.scrollHeight,scrollPercentage=(scrollTop+windowHeight)/documentHeight*100;if(!hasReached50Percent&&scrollPercentage>=50){hasReached50Percent=true;iframe.contentWindow.postMessage({state:"center"},"'
              )
              .concat(
                'https://cv.syokunin.tokyo',
                '");}if(!hasReached100Percent&&scrollPercentage>=100){hasReached100Percent=true;iframe.contentWindow.postMessage({state:"bottom"},"'
              )
              .concat(
                'https://cv.syokunin.tokyo',
                '");}};iframe.onload=()=>{const intervalId=setInterval(()=>{iframe.contentWindow.postMessage({url:window.location.href,state:"top"},"'
              )
              .concat(
                'https://cv.syokunin.tokyo',
                '");},100);const messageListener=event=>{if(event.data.loaded){clearInterval(intervalId);}if(event.data.style){iframe.style.cssText=event.data.style;}if(event.data.closed){clearInterval(intervalId);iframe.remove();window.removeEventListener("message",messageListener);window.removeEventListener("scroll",handleScroll);}};window.addEventListener("message",messageListener);window.addEventListener("scroll",handleScroll);};});</script>\n'
              ),
            t = () => {
              navigator.clipboard
                .writeText(e)
                .then(() => {
                  o.Am.success('クリップボードにコピーしました！');
                })
                .catch(() => {
                  o.Am.error('コピーに失敗しました');
                });
            };
          return (0, s.jsxs)('div', {
            className: 'min-h-screen bg-gray-100 p-6',
            children: [
              (0, s.jsx)(o.Ix, {}),
              (0, s.jsxs)('div', {
                className: 'mx-auto max-w-3xl',
                children: [
                  (0, s.jsx)('h1', {
                    className: 'mb-4 text-2xl font-bold',
                    children: '設定',
                  }),
                  (0, s.jsx)('h2', {
                    className: 'mb-6 text-xl',
                    children: 'htmlタグの先頭に追加してください',
                  }),
                  (0, s.jsxs)('div', {
                    className:
                      'relative overflow-x-auto rounded-md bg-gray-800 p-4 text-white',
                    children: [
                      (0, s.jsx)('button', {
                        onClick: () => t(),
                        title: 'クリップボードにコピー',
                        className:
                          'absolute right-2 top-2 rounded-full p-2 text-white hover:bg-gray-600',
                        children: (0, s.jsx)(a.JO, {
                          icon: 'mdi:content-copy',
                          className: 'size-4',
                        }),
                      }),
                      (0, s.jsx)('pre', {
                        className: 'whitespace-pre-wrap break-words',
                        children: (0, s.jsx)('code', { children: e }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        c = () => (0, s.jsx)(r, {});
    },
  },
  function (e) {
    e.O(0, [861, 646, 971, 117, 744], function () {
      return e((e.s = 69304));
    }),
      (_N_E = e.O());
  },
]);
