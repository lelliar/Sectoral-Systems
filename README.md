# uni-app-nestjs-jyb-

# uni-app-nestjs-jyb-

## 架构:
#### 分类：
1. 服务端（客户端）: nestjs
2. 服务端（管理端）: elementui+typescript
3. 客户端: Vant-Weapp+vue
#### 各技术优势
1. 为何使用nestjs不使用基于express与koa的eggjs

        nestjs相对于express与eggjs来说代码风格更加规范,也基于TS提供了一套更加完美的解决包含认证，数据库，路由，http状态码等等.同时最关键的一点是，nestjs的可扩展性，可维护性高
2. 为何后台使用elementUI，客户端使用Vant-weapp:
    
         elementUI是饿了么平台的独有代码风格生成的UI库，库中风格更适合做后台界面。而Vant-weapp是基于uni-app整合出来的UI库，代码风格更加多样。
3. 为何使用vue+typescript

        vue能与typescript很好的结合，ts又采用了更多的规范化编程类似于（js+any！！！！！），同时，vue的名字简单方便，使用react懒得敲

#### 接口需求
1. 轮播图接口
2. 视频接口，封面图接口
3. 成员接口
4. 报名接口
5. 反馈接口
6. 本周电影接口
7. 兼职接口
8. 文章接口
9. 分类接口
10. 评论接口
11. 预热 倒计时
12. 实习接口

## 开始
#### 使用.env文件忽略关键信息，类似于密钥等
更安全更方便,使别人也能自定以接口地址
#### 使用nestjs-mongoose-crud
封装的crud,不至于手写crud
#### 使用nestjs-swagger自动生成接口文档
