## 人流检测项目**演示**客户端

### 技术栈

1. react hooks + typescript
2. ant design UI library
3. create-react-app cli

### 本地测试

#### 安装依赖

如果没有代理请使用 `cnpm` 替代 `npm`。

```sh
npm install
```

#### 修复一个 "@types/react": "^16.8.6" ref.current 定义为 readonly 的 bug

将 `node_modules\@types\react\index.d.ts` 中 72 行的 `readonly` 删掉。

#### 启动项目

```sh
npm start
```

### 用户首页

![home](https://github.com/tjx666/flow-detection-client/blob/master/screenshots/home.png?raw=true)

### 监管部门首页

![admin home](https://github.com/tjx666/flow-detection-client/blob/master/screenshots/admin-home.png?raw=true)

### 详情页

![detail](https://github.com/tjx666/flow-detection-client/blob/master/screenshots/detail.png?raw=true)

### 登入页

![login](https://github.com/tjx666/flow-detection-client/blob/master/screenshots/login.png?raw=true)

### 推荐路线

![login](https://github.com/tjx666/flow-detection-client/blob/master/screenshots/recommend.png?raw=true)
