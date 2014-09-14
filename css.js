/*
*
* @Author : Prasanth S <prasanthwebdeveloper@gmail.com>
* 
*/

(function(win) {
	var doc = win.document,
		docBody = doc.body,
		createLink = function(src) {
			var link = doc.createElement('link');
			link.type = 'text/css';
			link.rel = 'stylesheet';
			link.href = src;
			return link;
		};

	define({
		load: function (name, req, load) {
		var head = doc.getElementsByTagName('head')[0],	link;
		link = createLink(name),
		head.appendChild(link);
		load(link);
		}
	});
})(window);
