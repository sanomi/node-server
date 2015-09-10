const mdn5 = require('md5');

let gravatarPic = () => {
		let gravatar = "http://gravatar.com/avatar/" + (mdn5(fun[2])).toString();
		let html = "<img src='"+gravatar+"'></img>"
		res.setHeader("Content-Type", "text/html");
		res.end(html);
}

module.exports = gravatarPic;