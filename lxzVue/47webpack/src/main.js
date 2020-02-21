//commonjs 规范写法-引入：
let str = require('./a.js');
console.log(str);

// 如上是node的写法，一般情况下是不能在浏览器上跑的，webpack支持这种写法，可以转译成浏览器可识别的；

// 1. 我们需要在配置文件 webpack.config.js上写点东西进行配置：
// 2. 配置完后，运行webpack.js进行打包，使用我们在packaeg.json里配的脚本：npm run build

// 打开生成的bundle.js可以看到引入的js都被变成了闭包,转译成了可以识别的,