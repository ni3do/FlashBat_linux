/*! For license information please see 28.b4574151.chunk.js.LICENSE.txt */
(this["webpackJsonpstreamlit-browser"]=this["webpackJsonpstreamlit-browser"]||[]).push([[28],{5763:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return c}));var i=r(0),o=r(213),n=r(5);var c=Object(o.a)((function(t){var e=t.width,r=t.element,o=t.height,c="bokeh-chart-".concat(r.elementId),a=Object(i.useCallback)((function(){return JSON.parse(r.figure)}),[r]),s=Object(i.useCallback)((function(t){var i=window.Bokeh,n=document.getElementById(c),a=t&&t.doc&&t.doc.roots&&t.doc.roots.references?t.doc.roots.references.find((function(t){return"Plot"===t.type})):void 0;if(a){var s=function(t){var i=t.attributes.plot_width,n=t.attributes.plot_height;return o?(i=e,n=o):r.useContainerWidth&&(i=e),{chartWidth:i,chartHeight:n}}(a),h=s.chartWidth,u=s.chartHeight;h>0&&(a.attributes.plot_width=h),u>0&&(a.attributes.plot_height=u)}null!==n&&(!function(t){for(;t.lastChild;)t.lastChild.remove()}(n),i.embed.embed_item(t,c))}),[e,o,r]);return Object(i.useEffect)((function(){s(a())}),[e,o,r,a,s]),Object(n.jsx)("div",{id:c,className:"stBokehChart"})}))}}]);