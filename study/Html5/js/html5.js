var list = [
    {
        title:"Html5学习记录",
        content: [
            {
                id:0,
                "title": "html页面初始化认识",
                "content": {
                    "page": [
                        {
                            "key": "&lt;!DOCTYPE html&gt;",
                            "value": "是HTML5的一个网页申明"
                        },
                        {
                            "key": "&lt;html lang='en' &gt;",
                            "value": "标签&lt;html&gt;&lt;/html&gt;网页，lang是语言，en是表示英语"
                        },
                        {
                            "key": "&lt;meta charset='UTF-8'&gt;",
                            "value": "编码为UTF-8"
                        },
                        {
                            "key": "&lt;meta name='viewport' content='width=device-width, initial-scale=1.0'&gt;",
                            "value": "对于移动端的配置"
                        },
                        {
                            "key": "&lt;meta http-equiv='X-UA-Compatible' content='ie=edge'&gt;",
                            "value": "对于IE的兼容处理"
                        },
                        {
                            "key": "&lt;title&gt;&lt;/title&gt;",
                            "value": "标题，出现在网页顶部"
                        },
                        {
                            "key": "&lt;head&gt;&lt;/head&gt;",
                            "value": "头部，中间有很多头部信息"
                        },
                        {
                            "key": "&lt;body&gt;&lt;/body&gt;",
                            "value": "主体，我们的代码就写在这里面"
                        }
                    ]
                }
            },
            {
                id:1,
                "title":"常用的html代码",
                "content":{
                    "page":[
                        {
                            "key":"&lt;h1&gt;hello world&lt;/h1&gt;",
                            "value":"标题由h1到h6从大到小"
                        },
                        {
                            "key":"&lt;p&gt;hello world&lt;/p&gt;",
                            "value":"p标签是段落"
                        },
                        {
                            "key":"&lt;a href='http://www.baidu.com'&gt;点击跳转&lt;/a&gt;",
                            "value":"标签是超链接标签，这个标签可以点击跳转，例如下面的代码，点击就可以跳转到百度"
                        },
                        {
                            "key":"&lt;div&gt;&lt;/div&gt;",
                            "value":"一个容器标签，不添加样式是没有效果的，空标签"
                        },
                        {
                            "key":"&lt;img src='img/wx.png' alt='出错了' title='我是标题'&gt;",
                            "value":"少有的单标签 src是图片地址 alt是图片加载出错显示 title是鼠标移上显示"
                        },
                        {
                            "key":"&lt;span&gt;&lt;/span&gt;",
                            "value":"文本标签"
                        },
                        {
                            "key":"&lt;ul&gt;&lt;li&gt;无序列表&lt;/li&gt;&lt;/ul&gt;",
                            "value":"无序 HTML 列表 ，圆点开头"
                        },
                        {
                            "key":"&lt;dl&gt;&lt;dt&gt;列表&lt;/dt&gt;&lt;/dl&gt;",
                            "value":"HTML 列表，没有开头"
                        },
                        {
                            "key":"&lt;ol&gt;&lt;li&gt;有序列表&lt;/li&gt;&lt;/ol&gt;",
                            "value":"有序 HTML 列表 ，数字开头"
                        },
                        {
                            "key":"&lt;form&gt;&lt;/form&gt;",
                            "value":"form表单"
                        },
                        {
                            "key":"&lt;input type='text'&gt;",
                            "value":"text文本输入框"
                        },
                        {
                            "key":"&lt;input type='button'&gt;",
                            "value":"button按钮"
                        },
                        {
                            "key":"&lt;input type='checkbox' name='man'&gt;",
                            "value":"checkbox多选"
                        },
                        {
                            "key":"&lt;input type='file'&gt;",
                            "value":"file 文件上传"
                        },
                        {
                            "key":"&lt;input type='hidden'&gt;",
                            "value":"hidden隐藏，不显示"
                        },
                        {
                            "key":"&lt;input type='password'&gt;",
                            "value":"密码框 输入密码会自动隐藏"
                        },
                        {
                            "key":"&lt;input type='radio' name='sex'&gt;",
                            "value":"单选框 没有name控制就会选中，有就会交替选中，只会有一个选中"
                        },
                        {
                            "key":"&lt;input type='reset'&gt;",
                            "value":"reset 重置，会将选中的选项清空"
                        },
                        {
                            "key":"&lt;input type='submit'&gt;",
                            "value":"submit 提交，会刷新页面"
                        },
                        {
                            "key":"&lt;button&gt;按钮&lt;/button&gt;",
                            "value":"button按钮"
                        },
                        {
                            "key":"&lt;table&gt;&lt;/table&gt;",
                            "value":"table表格"
                        },
                        {
                            "key":"&lt;tr&gt;&lt;/tr&gt;",
                            "value":"tr行"
                        },
                        {
                            "key":"&lt;th&gt;&lt;/th&gt;",
                            "value":"th表头"
                        },
                        {
                            "key":"&lt;td&gt;&lt;/td&gt;",
                            "value":"td单元格"
                        }
                    ]
                }
            },
            {
                'id':2,
                "title":"Html5",
                "content":{
                    "page":[
                        {
                            "key":"data-",
                            "value":"为前端开发者提供自定义的属性，这些属性集可以通过对象的dataset属性获取，不支持该属性的浏览器可以通过getAttribute方法获取"
                        },
                        {
                            "key":"cookies",
                            "value":"每个域名存储量比较小（各浏览器不同，大致4K）<br>所有域名的存储量有限制（各浏览器不同，大致4K）<br>有个数限制（各浏览器不同）<br>会随请求发送到服务器"
                        },
                        {
                            "key":"sessionStorage",
                            "value":"是HTML5 Web Storage API 提供的,关闭窗口后，sessionStorage 即被销毁，每个tab的sessionStorage都是独立的"
                        },
                        {
                            "key":"localStorage",
                            "value":"是HTML5 Web Storage API 提供的，<br>永久存储；<br>单个域名存储量比较大（推荐5MB，各浏览器不同）；<br>总体数量无限制"
                        },
                        {
                            "key":"HTML语义化",
                            "value":"自我理解就是让正确的代码做正确的事，降低后续的维护更新成本,并且语义化还利于搜索引擎SEO"
                        },
                        {
                            "key":"HTTP 状态码",
                            "value":"1XX代表请求已经被接收;<br>2xx代表请求已成功被服务器接收、理解、并接受;<br>3xx代表重定向;<br>4xx代表客户端错误;<br>5xx代表服务器错误;<br>200表示成功、404表示网页不存在、500表示服务器内部错误，503表示服务器暂时不可用"
                        },
                        {
                            "key":"Canvas",
                            "value":"用于在网页上绘制图形，该元素标签强大之处在于可以直接在 HTML 上进行图形操作"
                        },
                        {
                            "key":"优雅降级",
                            "value":"以高版本进行开发，最后对低版本进行兼容"
                        },
                        {
                            "key":"渐进增强",
                            "value":"以低版本进行开发，最后对高版本进行丰富"
                        },
                        {
                            "key":"行内元素",
                            "value":"a、b、span、img、input、strong、select、label、em、button、textarea"
                        },
                        {
                            "key":"块级元素",
                            "value":"div、ul、li、dl、dt、dd、p、h1-h6、blockquote"
                        },
                        {
                            "key":"空元素",
                            "value":"br、meta、hr、link、input、img"
                        }
                    ]
                }
            }
        ]
    }
]