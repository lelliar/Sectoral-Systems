// require
// 端口号
var http = require('http')

var server = http.createServer()

server.on('request', function (request, response) {
    // 在服务端默认发送的数据，其实是 utf8 编码的内容
    // 但是浏览器不知道你是 utf8 编码的内容
    // 浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析
    // 中文操作系统默认是 gbk
    // 解决方法就是告诉浏览器我给你发的内容是什么编码
    response.setHeader('Content-Type', 'text/plain;charset = utf-8')
    response.end('hello 世界')
})

server.listen(5000, function () {
    console.log('Server is rsunning.....')
})