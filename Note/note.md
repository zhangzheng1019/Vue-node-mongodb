前导课程：
express框架：接口服务
    what: 对nodejs封装，快速对构建服务端web应用
MongoDB：进行数据存储

VueJs概况：

    · Vue本身不是一个框架
    · Vue结合周边生态构成了一个灵活的、渐进式的框架
    · 声明式渲染(Render)->组件系统(Component)->客户端路由(Router)->大规模状态管理(State)->构建工具(Build)
VueJs核心思想：

    · 数据驱动(更关注 数据层面)
    · 组件化
    · 如何实现双向数据绑定(见demo1.html)：Object.defineProperty();

Vue和React:
不同点：

    Vue
    · Vue 模板和渲染函数的弹性选择
    · 简单的语法及项目创建
    · 更快渲染速度和更小的体积

    React:
    · 更实用大型应用和更好的可测试性
    · 同时使用与Web端和原生App
    · 更大的生态圈代买的更多的支持和工具

相同点：

    · 利用虚拟DOM实现快速渲染
    · 轻量级
    · 响应式组件
    · 服务端渲染(ssr)
    · 易于集成路由工具、打包工具以及状态管理工具
    · 优秀的支持和社区


文件目录详解：
初始化：
vue init webpack ImoocMall 

ESlint（代码检查，建议不安装，coding过程不顺利）
unit tests（单元测试，建议不安装）
e2e tests（集成测试，建议不安装）

build: 打包文件

    build.js: 构建生成版本,
    check-versions.js: 版本检查
        插件：
        chalk： 设置对日志输出进行操作，比如设置字体颜色等
        semver: 版本检查工具（vaild：校验；clean：清除左右空格；lt；gt;）
    dev-client.js: 热重载插件
    dev-server.js: 在开发下的服务器（为啥会启动localhost）
    utils.js: 工具的输出
    vue-loader.js: 
    webpack.base.conf.js: 
    webpack.dev.conf.js: 
    webpack.prod.conf.js: 


config: 打包配置文件

    dev.env.js:
    index.js: 核心关注
    prod.env.js: 

.babelrc: es6配置，不然没有办法解析es6
.editorconfig: 编辑器的配置
.gitignore: 忽略git提交的配置 
.postcssrc.js: html添加前缀的配置
index.html : 入口
package.json : 
README.md :

插件：

process.env.NODE_ENV: 全局配置
需要修改的index.js
build.js文件
webpack：打包插件
（index.js可以省略）
assetsPublicPath

webpack.prod.conf.js: 生产环境中的配置；
webpack-merge: 继承配置


package.json
    · script : dev（看项目配置文件，不一定是dev）
    ·  
    · 
    · 


Vue 基础语法介绍
    
    事件处理器
        v-on:click.stop: 阻止冒泡
        v-on:click.stop.prevent: 阻止模式事件（原效果）
        v-on:click.self: 对象本身，对子元素没有作用
        v-on:click.once: 一次
        v-on:keyup.enter   等等。。。

Vue组件

        全局组件和局部组件
        父子组件通讯-数据传递
        Slot： 插槽

Vue 路由：
    
    优点：用户体验好，不需要每次都从服务器全部获取，快速展现给用户
    缺点：
        不利于SEO
        使用浏览器的前进，后退键的时候会重新发请求，没有合理地利用缓存
        单页面无法记住之前滚动的位置，无法在前进、后退的时候记住滚动的位置
    <router-link></router-link> OR this.$router.push({path:''});
    <router-view></router-view>
    

Vue 路由分类（3-2节)：

    动态路由匹配
        /user/:username(/post/:post_id)
        控制路由机制：使用的history
        history.go(1)
        history.go(-1)
        history.pushState({})
    嵌套路由
        <router-view></router-view>
        <router-link></router-link>
    编程式路由
        通过js实现页面的跳转
        $router.push('name');
        $router.push({path:"name"});
        $router.push({path:"name?a=123"});
        $router.push({path:"name",query:{a:121}});
        $router.go(1);
        注意：
            定义路由：$router.push
            获取路由参数：$route.query.
    命名路由和命名视图
        给路由定义不同的名字，根据名字匹配
        

Vue GoodsList.vue

    @/components/Hello:中的@是 resoleve("src")别名



