const merge = require('webpack-merge');
const R = require('ramda');
/**
 * Replace default wbepack configuration except for 'plugins' and `module` part
 * @param  {[type]} key    [description]
 * @param  {[type]} first  [description]
 * @param  {[type]} second [description]
 * @return {[type]}        [description]
 */
function concatValues (key, first, second){
	return key!="module" && key!="plugins" ? second : first;
}
/**
 * Unique webpack rule
 * @param  {[type]} defaultWebpackConfig [description]
 * @return {[type]}                      [description]
 */
function dedupeItem(defaultWebpackConfig,customConfig){
//k represent `key` while `l` is value of first object and `r` of second 
  defaultWebpackConfig = R.mergeWithKey(concatValues, defaultWebpackConfig,customConfig);
  return defaultWebpackConfig;
}

module.exports = {
	dedupeItem
}


