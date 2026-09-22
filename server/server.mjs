// 启动入口，先锁定生产模式再加载 serve
// serve 自身的 NODE_ENV 赋值晚于模块加载 依赖会按开发构建解析导致 SSR 崩溃
process.env.NODE_ENV = 'production';
// serve 从命令行参数读清单路径 这里以脚本参数补齐
process.argv.push('./server/index.js');

// 依赖装在项目根目录 按启动目录定位而不是脚本所在目录
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const cliPath = join(process.cwd(), 'node_modules', '@react-router', 'serve', 'dist', 'cli.js');

await import(pathToFileURL(cliPath).href);
