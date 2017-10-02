// **Github:** https://github.com/teambition/gulp-ejs-template
//
// **License:** MIT
/* global module, define, setImmediate, window */

;(function(root, factory) {

  if (typeof module === 'object' && module.exports) module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else root.moduleName = factory();
}(typeof window === 'object' ? window : this, function() {
  var templates = {};

/*PLACEHOLDER*/

  var ejs = {
    locals: {},
    get: getTpl,
    render: render
  };
  return templates;

	function render(tplName, data) {
		var it  = copy({}, ejs.locals);
		with(it)
			var html = getTpl(tplName)(copy(it, data));
		return html;
	}

  function getTpl(tplName) {
    return templates[tplName];
  }

  function escape(markup) {
    if (!markup) return '';
    return String(markup)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/'/g, '&#39;')
      .replace(/"/g, '&quot;');
  }

  function copy(to, from) {
    from = from || {};
    for (var key in from) to[key] = from[key];
    return to;
  }
}));
