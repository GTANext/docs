// 部署打包：构建后整理启动目录与部署目录
// server 目录放清单入口与环境文件，部署时整体上传不易遗漏
import {
    cpSync,
    copyFileSync,
    existsSync,
    mkdirSync,
    readFileSync,
    rmSync,
    writeFileSync,
} from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const buildDir = join(root, 'build');
const serverDir = join(root, 'server');
const deployDir = join(root, 'deploy');

const manifest = join(buildDir, 'server', 'index.js');
if (!existsSync(manifest)) {
    console.error('未找到构建产物，请先执行 pnpm deploy:pack');
    process.exit(1);
}

// 环境文件缺失时用示例兜底，保证启动命令里的环境文件参数始终可读
const envSource = existsSync(join(root, '.env')) ? join(root, '.env') : join(root, '.env.example');
if (!existsSync(envSource)) {
    console.error('缺少 .env 与 .env.example，无法生成启动环境文件');
    process.exit(1);
}
if (envSource.endsWith('.env.example')) {
    console.warn('[deploy] 未找到 .env，使用 .env.example 占位');
}

// 项目内启动结构，与部署保持一致
// 服务端产物有按路由拆分的分块，整目录复制才能保留相对引用
rmSync(serverDir, { recursive: true, force: true });
mkdirSync(serverDir, { recursive: true });
cpSync(join(buildDir, 'server'), serverDir, { recursive: true });
copyFileSync(join(root, 'server.mjs'), join(serverDir, 'server.mjs'));
copyFileSync(envSource, join(serverDir, '.env'));

// 部署目录：public 静态资源，server 服务端，package.json 供目标机安装依赖
rmSync(deployDir, { recursive: true, force: true });
mkdirSync(deployDir, { recursive: true });
cpSync(join(buildDir, 'client'), join(deployDir, 'public'), { recursive: true });
cpSync(serverDir, join(deployDir, 'server'), { recursive: true });

// 清单只保留运行期依赖与启动脚本，避免目标机执行构建钩子
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
writeFileSync(
    join(deployDir, 'package.json'),
    `${JSON.stringify(
        {
            name: pkg.name,
            private: true,
            type: pkg.type,
            scripts: {
                start: pkg.scripts.start,
            },
            dependencies: pkg.dependencies,
        },
        null,
        2,
    )}\n`,
);

console.log('[deploy] 已生成启动结构与部署目录');
console.log('  server/  启动结构 清单入口 启动文件 环境文件');
console.log('  deploy/  部署目录 public 静态资源 server 服务端');
