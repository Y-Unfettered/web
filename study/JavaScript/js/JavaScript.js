var list = [
{
    "title": "JavaScript学习记录",
    "content": [
        {
            "id": 0,
            "title": "浏览器的认识",
            "content": {
                "page": [
                    {
                        "key": "主流浏览器",
                        "value": "浏览器渲染引擎",
                        "jsvalue": "浏览器JS引擎"
                    },
                    {
                        "key": "Chrome浏览器",
                        "value": "Chromium(Webkit)；Blink",
                        "jsvalue": "V8"
                    },
                    {
                        "key": "IE浏览器",
                        "value": "Trident(<=IE10)；EdgeHTML",
                        "jsvalue": "Chakra(IE9+及Edge)"
                    },
                    {
                        "key": "Safari浏览器",
                        "value": "Webkit/Webkit2",
                        "jsvalue": "JSCore/Nitro(4+)"
                    },
                    {
                        "key": "Firefox浏览器",
                        "value": "Gecko",
                        "jsvalue": "SpiderMonkey(<3.0)；TraceMonkey(<3/6)；JaegerMonkey(4.0+)"
                    },
                    {
                        "key": "Opera浏览器",
                        "value": "Presto；Blink",
                        "jsvalue": "Futhark(9.5-10.2)；Carakan(10.5+)"
                    }
                ]
            }
        },
        {
            "id": 1,
            "title": "javaSript三个部分",
            "content": {
                "page": [
                    {
                        "key": "ECMAScript",
                        "value": "国际组织ECMA规定的JavaScript的一个标准，代表JavaScript的基本语句"
                    },
                    {
                        "key": "DOM",
                        "value": "文档对象模型，操作节点的方法"
                    },
                    {
                        "key": "BOM",
                        "value": "浏览器对象模型，操作浏览器的方法"
                    }
                ]
            }
        },
        {
            "id": 2,
            "title": "字符串string",
            "content": {
                "page": [
                    {
                        "key": "charAt()",
                        "value": "返回在指定位置的字符"
                    },
                    {
                        "key": "concat()",
                        "value": "连接字符串"
                    },
                    {
                        "key": "indexOf()",
                        "value": "从后向前搜索字符串"
                    },
                    {
                        "key": "lastIndexOf()",
                        "value": "从后向前搜索字符串"
                    },
                    {
                        "key": "slice()",
                        "value": "提取字符串的片断，并在新的字符串中返回被提取的部分"
                    },
                    {
                        "key": "split()",
                        "value": "把字符串分割为字符串数组"
                    },
                    {
                        "key": "substr()",
                        "value": "从起始索引号提取字符串中指定数目的字符"
                    },
                    {
                        "key": "substring()",
                        "value": "取字符串中两个指定的索引号之间的字符"
                    },
                    {
                        "key": "toLocaleLowerCase()",
                        "value": "把字符串转换为小写"
                    },
                    {
                        "key": "toLocaleUpperCase()",
                        "value": "把字符串转换为大写"
                    },
                    {
                        "key": "toLowerCase()",
                        "value": "把字符串转换为小写"
                    },
                    {
                        "key": "toUpperCase()",
                        "value": "把字符串转换为大写"
                    },
                    {
                        "key": "toString()",
                        "value": "返回字符串"
                    }
                ]
            }
        },
        {
            "id": 3,
            "title": "数组array",
            "content": {
                "page": [
                    {
                        "key": "concat()",
                        "value": "连接两个或更多的数组，并返回结果"
                    },
                    {
                        "key": "join()",
                        "value": "把数组的所有元素放入一个字符串"
                    },
                    {
                        "key": "pop()",
                        "value": "删除并返回数组的最后一个元素"
                    },
                    {
                        "key": "push()",
                        "value": "向数组的末尾添加一个或更多元素，并返回新的长度"
                    },
                    {
                        "key": "reverse()",
                        "value": "颠倒数组中元素的顺序"
                    },
                    {
                        "key": "shift()",
                        "value": "删除并返回数组的第一个元素"
                    },
                    {
                        "key": "slice()",
                        "value": "从某个已有的数组返回选定的元素"
                    },
                    {
                        "key": "sort()",
                        "value": "对数组的元素进行排序"
                    },
                    {
                        "key": "splice()",
                        "value": "删除元素，并向数组添加新元素"
                    }
                ]
            }
        },
        {
            "id": 4,
            "title": "常见的问题",
            "content": {
                "page": [
                    {
                        "key": "闭包",
                        "value": "函数内部可以直接读取全局变量，但是在函数外部无法读取函数内部的局部变量，<br>但是闭包打破了这个，利用闭包可以获取函数内的变量<br>function a(){<br>&nbsp;&nbsp;&nbsp;&nbsp;var c = 1;<br>&nbsp;&nbsp;&nbsp;&nbsp;function b(){<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;consloe.log(c)<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}"
                    },
                    {
                        "key": "join()",
                        "value": "把数组的所有元素放入一个字符串"
                    },
                    {
                        "key": "pop()",
                        "value": "删除并返回数组的最后一个元素"
                    },
                    {
                        "key": "push()",
                        "value": "向数组的末尾添加一个或更多元素，并返回新的长度"
                    },
                    {
                        "key": "reverse()",
                        "value": "颠倒数组中元素的顺序"
                    },
                    {
                        "key": "shift()",
                        "value": "删除并返回数组的第一个元素"
                    },
                    {
                        "key": "slice()",
                        "value": "从某个已有的数组返回选定的元素"
                    },
                    {
                        "key": "sort()",
                        "value": "对数组的元素进行排序"
                    },
                    {
                        "key": "splice()",
                        "value": "删除元素，并向数组添加新元素"
                    }
                ]
            }
        }
    ]
}]