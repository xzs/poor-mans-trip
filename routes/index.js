/* ===================================================
 * index.js
 *
 * Home Page.
 */

exports.index = function(req, res){
	res.render('index', { title: 'Travel App'});
};
