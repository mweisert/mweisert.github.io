webpackJsonp([0x67ef26645b2a,60335399758886],{108:function(e,t){e.exports={layoutContext:{}}},210:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},u=l(2),o=n(u),r=l(219),i=n(r),c=l(108),s=n(c);t.default=function(e){return o.default.createElement(i.default,a({},e,s.default))},e.exports=t.default},424:function(e,t){},215:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=l(2),u=n(a),o=function(e){return u.default.createElement("section",{id:"contact"},u.default.createElement("div",{className:"inner"},u.default.createElement("section",null,u.default.createElement("section",null,u.default.createElement("div",{className:"contact-method"},u.default.createElement("span",{className:"icon alt fa-envelope"}),u.default.createElement("h3",null,"Email"),u.default.createElement("a",{href:"mailto:mweisert@gmail.com"},"mweisert@gmail.com"))),u.default.createElement("section",null,u.default.createElement("div",{className:"contact-method"},u.default.createElement("span",{className:"icon alt fa-phone"}),u.default.createElement("h3",null,"Phone"),u.default.createElement("span",null,"312.857.4499"))))))};t.default=o,e.exports=t.default},216:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=l(2),u=n(a),o=function(e){return u.default.createElement("footer",{id:"footer"},u.default.createElement("div",{className:"inner"},u.default.createElement("ul",{className:"icons"},u.default.createElement("li",null,u.default.createElement("a",{href:"mailto:mweisert@gmail.com"},"mweisert@gmail.com")),u.default.createElement("li",null,u.default.createElement("a",{href:"https://www.linkedin.com/in/weisertm/",className:"icon fa-linkedin"},u.default.createElement("span",{className:"label"},"LinkedIn")))),u.default.createElement("h6",null,"Portfolio site for Mike Weisert |  UX Designer / Developer based in Northbrook, IL")))};t.default=o,e.exports=t.default},217:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=l(2),u=n(a),o=l(8),r=n(o),i=l(12),c=n(i),s=function(e){return u.default.createElement("header",{id:"header",className:"alt"},u.default.createElement(c.default,{to:"/",className:"logo"},u.default.createElement("span",null,"Mike Weisert"),u.default.createElement("span",null," UX Designer")),u.default.createElement("nav",null,u.default.createElement("a",{href:"https://docs.google.com/document/d/1ZhrqCdPchfWBGle1xf4eP5e0IdhJwJ7ucKjC78AdlU4/edit?usp=sharing",target:"_blank"},"Resume ",u.default.createElement("span",{className:"icon fa-download"})),u.default.createElement("a",{className:"menu-link",onClick:e.onToggleMenu,href:"javascript:;"},"Menu")))};s.propTypes={onToggleMenu:r.default.func},t.default=s,e.exports=t.default},218:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=l(2),u=n(a),o=l(8),r=n(o),i=l(12),c=n(i),s=function(e){return u.default.createElement("nav",{id:"menu"},u.default.createElement("div",{className:"inner"},u.default.createElement("h3",null,"Experience"),u.default.createElement("ul",{className:"links"},u.default.createElement("li",null,u.default.createElement(c.default,{onClick:e.onToggleMenu,to:"/fleetmanagement"},"Redefining Fleet Management")),u.default.createElement("li",null,u.default.createElement(c.default,{onClick:e.onToggleMenu,to:"/ci"},"Children International")),u.default.createElement("li",null,u.default.createElement(c.default,{onClick:e.onToggleMenu,to:"/professional-services"},"Relationship-based Business Strategy & Design")),u.default.createElement("li",null,u.default.createElement(c.default,{onClick:e.onToggleMenu,to:"/audio-visual"},"Enterprise Application Design in Audio Visual"))),u.default.createElement("a",{href:"https://docs.google.com/document/d/1ZhrqCdPchfWBGle1xf4eP5e0IdhJwJ7ucKjC78AdlU4/edit?usp=sharing",className:"button icon fa-download",target:"_blank"},"Resume"),u.default.createElement("hr",null),u.default.createElement(c.default,{onClick:e.onToggleMenu,to:"/"},"Home")),u.default.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"javascript:;"},"Close"))};s.propTypes={onToggleMenu:r.default.func},t.default=s,e.exports=t.default},219:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var r=l(2),i=n(r),c=l(8),s=n(c),f=l(20),d=n(f),m=l(12);l(424);var p=l(217),h=n(p),g=l(218),E=n(g),M=l(215),v=(n(M),l(216)),_=n(v),b=function(e){function t(l){a(this,t);var n=u(this,e.call(this,l));return n.state={isMenuVisible:!1,loading:"is-loading"},n.handleToggleMenu=n.handleToggleMenu.bind(n),n}return o(t,e),t.prototype.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},t.prototype.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.prototype.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},t.prototype.render=function(){var e=this.props.children;return i.default.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},i.default.createElement(d.default,null,i.default.createElement("link",{rel:"stylesheet",href:(0,m.withPrefix)("skel.css")})),i.default.createElement("div",{id:"wrapper"},i.default.createElement(h.default,{onToggleMenu:this.handleToggleMenu}),e(),i.default.createElement(_.default,null)),i.default.createElement(E.default,{onToggleMenu:this.handleToggleMenu}))},t}(i.default.Component);b.propTypes={children:s.default.func},t.default=b,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-f74947533c82073db816.js.map