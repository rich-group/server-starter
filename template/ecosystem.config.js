module.exports = {
  apps : [{
    name   : "node-monitor",           // 应用程序名称
    script: "dist/src/index.js",       // 脚本路径
    instances: 1,                      // 启动的应用程序实例数
    max_memory_restart: "500M",        // 超过配置的内存，应用程序将重新启动
    env_dev: {
      "PORT": 3000,
      "ENV": "dev",
      "NODE_ENV": "development"
    },
    env_sit: {
      "PORT": 3001,
      "ENV": "sit",
      "NODE_ENV": "development"
    },
    env_pre: {
      "PORT": 3002,
      "ENV": "pre",
      "NODE_ENV": "development"
    },
    env_prd: {
      "PORT": 3003,
      "ENV": "prd",
      "NODE_ENV": "production"
    }
  }]
}
