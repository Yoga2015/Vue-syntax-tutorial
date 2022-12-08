// 使用node.js中的导出语法，向外导出一个webpack的配置对象
module.exports = {
    // 在 开发环境 调试阶段，建议大家 把 devtool 设置为 eval-source-map
    // devtool: 'eval-source-map',

    // 在实际发布的时候，建议大家把devtool的值设置为 nosources-source-map 或者 直接关闭 SourceMap
    devtool: 'nosources-source-map',

    // mode 用来指定构建模式。可选值 有 development 和 production
    mode: 'development'
}
