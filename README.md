
# 知途家教-小程序

## 技术栈参考地址

* mpvue开发文档: http://mpvue.com/
* 美团微信小程序框架mpvue源码: https://github.com/Meituan-Dianping/mpvue
* 美团技术团队原创博客: https://mp.weixin.qq.com/s/fY3HMV__wiXLF1G2pOCBaA

## 构建过程

```
# 安装依赖包
npm install

# 编译监听
npm run dev
```

## 查看效果

* 下载并打开小程序开发工具: [下载地址](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
* 新建小程序项目: 选中zhitu-xcx/dist文件夹，打开后即可看到效果

## 目录说明
```
zhitu-xcx
|--build
|--config
|--dist  产出的小程序相关文件结构，放在小程序开发工具中看效果
|--src  项目主要代码文件夹
   |--commponents  公共组件文件夹
   |--pages  页面目录
      |--index 主页
         |--index.vue  主页相关css样式 逻辑 模版
   |--utils  公共方法目录
   |--App.vue 感觉没啥用
   |--main.js  相当于小程序中的app.json
|--static  静态资源
|--index.html  vue.js 单页面应用主入口文件
```

