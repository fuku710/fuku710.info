(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{152:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,required:!0}}},l=r(19),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",[this._v(this._s(this.title))])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(152).default})},153:function(t,e,r){"use strict";r.r(e);var n={props:{screenName:{type:String,required:!0}},computed:{twitterUrl:function(){return"https://twitter.com/".concat(this.screenName)}}},l=r(19),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-1/6 p-2 rounded shadow bg-white"},[e("span",[this._v("Twitter:")]),this._v(" "),e("a",{staticClass:"underline text-blue-500 hover:text-blue-800",attrs:{href:this.twitterUrl}},[this._v("\n    @"+this._s(this.screenName)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},154:function(t,e,r){"use strict";r.r(e);var n={props:{name:{type:String,required:!0}}},l=r(19),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-1/6 p-2 rounded shadow bg-white"},[e("span",[this._v("Name:")]),this._v(this._s(this.name)+"\n")])}),[],!1,null,null,null);e.default=component.exports},155:function(t,e,r){"use strict";r.r(e);var n={props:{userName:{type:String,required:!0}},computed:{githubUrl:function(){return"https://github.com/".concat(this.userName)}}},l=r(19),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-1/6 p-2 rounded shadow bg-white"},[e("span",[this._v("GitHub :")]),this._v(" "),e("a",{staticClass:"underline text-blue-500 hover:text-blue-800",attrs:{href:this.githubUrl}},[this._v("\n    "+this._s(this.userName)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},156:function(t,e,r){"use strict";r.r(e);var n={},l=r(19),component=Object(l.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"w-16 h-16 rounded-full",attrs:{src:"https://avatars2.githubusercontent.com/u/13159978?v=4"}})])}],!1,null,null,null);e.default=component.exports},157:function(t,e,r){"use strict";r.r(e);var n={},l=r(19),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col items-center"},[e("Header",{staticClass:"m-1",attrs:{title:"fuku710"}}),this._v(" "),e("ProfileIcon"),this._v(" "),e("ProfileName",{staticClass:"m-1",attrs:{name:"Fukuda Naoto"}}),this._v(" "),e("ProfileAccountTwitter",{staticClass:"m-1",attrs:{"screen-name":"fuku_710"}}),this._v(" "),e("ProfileAccountGitHub",{staticClass:"m-1",attrs:{"user-name":"fuku710"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(152).default,ProfileIcon:r(156).default,ProfileName:r(154).default,ProfileAccountTwitter:r(153).default,ProfileAccountGitHub:r(155).default})}}]);