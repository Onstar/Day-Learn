# 1.7 $http 

$http(
{
    method: 'GET',//发送get请求
    url: 'http://127.0.0.1:3000/in_theaters/'
}
).then(function(data){},function(error){})

.then的成功方法里面返回的data是整个报文，如果取里面json数据需要data.data
.success的方式去取的data是报文体，data就是数据
