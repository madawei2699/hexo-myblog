---

title: template
date: 2016-01-31 18:33:55
categories:
- Template
tags:
- Markdown
- Hexo

---
### 标题一
#### 图片引用
![本地图片](template/test.jpg)
***
![网络图片](http://ww2.sinaimg.cn/large/5e8cb366jw1e62o63tkv3j20dh078q5a.jpg)
#### 名言引用
{% blockquote %}  
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}
### 标题二
#### 段落
距离就是，你发一条微博，这条微博要途经北上广，进出九九八十一台路由器，中间还要被拆包解包合并包，被两百个CPU进行过处理，再显示在我的电脑上。而你明明坐在离我几米的地方。
#### 代码块
{% codeblock %}
alert('Hello World!');
{% endcodeblock %}
#### 外部超链接
{% link 知乎 http://zhihu.com [external] %}
#### 内部超链接
{% post_link test test %}  


  