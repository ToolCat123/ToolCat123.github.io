(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{512:function(s,a,n){"use strict";n.r(a);var t=n(4),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),n("h3",{attrs:{id:"centos8安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#centos8安装"}},[s._v("#")]),s._v(" CentOS8安装")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1.yum包更新到最新\nyum update\n2.安装所需软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的\nyum install -y yum-utils device-mapper-persistent-data lvm2\n3.安装containerd.io（centos8默认使用podman代替docker，所以需要containerd.io）\nyum install https://download.docker.com/linux/fedora/30/x86_64/stable/Packages/containerd.io-1.2.6-3.3.fc30.x86_64.rpm\n4.安装docer-ce\nyum install docker-ce\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"配置阿里云"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置阿里云"}},[s._v("#")]),s._v(" 配置阿里云")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('mkdir -p /etc/docker\ntee /etc/docker/daemon.json <<-\'EOF\'\n{\n  "registry-mirrors": ["https://1nuqxifb.mirror.aliyuncs.com"]\n}\nEOF\nsystemctl daemon-reload\nsystemctl restart docker\nsystemctl enable docker\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"镜像命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#镜像命令"}},[s._v("#")]),s._v(" 镜像命令")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("查看本地镜像\ndocker images\n搜索镜像\ndocker search 镜像名称\n拉取镜像\ndocker pull 镜像名称:版本\n删除镜像\ndocker rmi 镜像名称(镜像名称ID)\n修改镜像名称\ndocker tag 镜像id 新名称:新版本\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"容器命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#容器命令"}},[s._v("#")]),s._v(" 容器命令")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("查看所有容器\ndocker ps -a\n查看正在运行的容器\ndocker ps\n查看停止的容器\ndocker ps -f status=exited\n查看最后一次运行的容器\ndocker ps –l\n停止（启动）容器：\ndocker stop（start） 容器名称（或者容器ID）\n删除容器\ndocker rm 容器名称（容器ID）\n查看容器IP地址\ndocker inspect 容器名称（容器ID）\n将文件拷贝到容器里\ndocker cp 文件 容器名称:容器目录\n将文件从容器内拷贝出来\ndocker cp 容器名称:容器目录 需要拷贝的文件\n查看指定容器详情\ndocker inspect 容器名称\n查看指定容器目录挂载\ndocker inspect 容器名称 | grep Mounts -A 行数\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("h3",{attrs:{id:"创建与启动容器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建与启动容器"}},[s._v("#")]),s._v(" 创建与启动容器")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker run\n-i：表示运行容器\n-t：表示容器启动后会进入其命令行。加入这两个参数后，容器创建就能登录进去。即分配一个伪终端。\n--name :为创建的容器命名。\n-v：表示目录映射关系（前者是宿主机目录，后者是映射到宿主机上的目录），可以使用多个－v做多个目录或文件映射。注意：最好做目录映射，在宿主机上做修改，然后共享到容器上。\n-d：在run后面加上-d参数,则会创建一个守护式容器在后台运行（这样创建容器后不会自动登录容器，如果只加-i -t两个参数，创建后就会自动进去容器）。\n-p：表示端口映射，前者是宿主机端口，后者是容器内的映射端口。可以使用多个-p做多个端口映射\n\n创建挂在目录\nmkdir -p /data/mysql/{data,conf,logs}\n\n使用镜像创建容器\ndocker run --name mysql -p 3307:3306 -v /data/mysql/data:/var/lib/mysql -v /data/mysql/conf:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=123456 -d mysql:xx\n\n1.交互式方式创建容器\ndocker run -it --name=容器名称 镜像名称:标签 /bin/bash\n退出当前容器\nexit\n\n2.守护式方式创建容器\ndocker run -id --name=容器名称 镜像名称:标签\n登录守护式容器方式：\ndocker exec -it 容器名称 (或者容器ID)  /bin/bash\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h3",{attrs:{id:"迁移与备份"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#迁移与备份"}},[s._v("#")]),s._v(" 迁移与备份")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("将容器保存为镜像\ndocker commit 容器名称 新镜像名称\n将镜像保存为tar文件\ndocker save -o 备份名称.tar 镜像名\n恢复镜像.tar文件\ndocker load -i 备份名称.tar\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"dockerfile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" Dockerfile")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("命令")]),s._v(" "),n("th",[s._v("作用")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("FROM image_name:tag")]),s._v(" "),n("td",[s._v("定义了使用哪个基础镜像启动构建流程")])]),s._v(" "),n("tr",[n("td",[s._v("MAINTAINER user_name")]),s._v(" "),n("td",[s._v("声明镜像的创建者")])]),s._v(" "),n("tr",[n("td",[s._v("ENV key value")]),s._v(" "),n("td",[s._v("设置环境变量 (可以写多条)")])]),s._v(" "),n("tr",[n("td",[s._v("RUN command")]),s._v(" "),n("td",[s._v("是Dockerfile的核心部分(可以写多条)")])]),s._v(" "),n("tr",[n("td",[s._v("ADD source_dir/file dest_dir/file")]),s._v(" "),n("td",[s._v("将宿主机的文件复制到容器内，如果是一个压缩文件，将会在复制后自动解压")])]),s._v(" "),n("tr",[n("td",[s._v("COPY source_dir/file dest_dir/file")]),s._v(" "),n("td",[s._v("和ADD相似，但是如果有压缩文件并不能解压")])]),s._v(" "),n("tr",[n("td",[s._v("WORKDIR path_dir")]),s._v(" "),n("td",[s._v("设置工作目录")])])])]),s._v(" "),n("h3",{attrs:{id:"使用脚本创建镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用脚本创建镜像"}},[s._v("#")]),s._v(" 使用脚本创建镜像")]),s._v(" "),n("p",[s._v("步骤：")]),s._v(" "),n("p",[s._v("（1）创建目录")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mkdir –p /usr/local/dockerjdk8\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("（2）下载jdk-8u181-linux-x64.tar.gz并上传到服务器（虚拟机）中的/usr/local/dockerjdk8目录\n（3）创建文件Dockerfile "),n("code",[s._v("vi Dockerfile")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#依赖镜像名称和ID\nFROM centos:7\n#指定镜像创建者信息\nMAINTAINER ITCAST\n#切换工作目录\nWORKDIR /usr\nRUN mkdir  /usr/local/java\n#ADD 是相对路径jar,把java添加到容器中\nADD jdk-8u181-linux-x64.tar.gz /usr/local/java/\n\n#配置java环境变量\nENV JAVA_HOME /usr/local/java/jdk1.8.0_171\nENV JRE_HOME $JAVA_HOME/jre\nENV CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib:$CLASSPATH\nENV PATH $JAVA_HOME/bin:$PATH\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("（4）执行命令构建镜像")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker build -t='jdk1.8' .\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("注意后边的空格和点，不要省略\n（5）查看镜像是否建立完成")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker images\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"创建docker私有仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建docker私有仓库"}},[s._v("#")]),s._v(" 创建Docker私有仓库")]),s._v(" "),n("p",[s._v("（1）拉取私有仓库镜像")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker pull registry\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("（2）启动私有仓库容器")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker run -di --name=localRegistry -p 端口:5000 registry\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("（3）浏览器访问http://ip:端口/v2/_catalog；看到"),n("code",[s._v('{"repositories":[]}')]),s._v(" 表示私有仓库搭建成功并且内容为空")]),s._v(" "),n("p",[s._v("（4）修改daemon.json")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("vi /etc/docker/daemon.json\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"insecure-registries"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ip:端口"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("（5）重启docker 服务")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  systemctl restart docker\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"镜像上传至私有仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#镜像上传至私有仓库"}},[s._v("#")]),s._v(" 镜像上传至私有仓库")]),s._v(" "),n("p",[s._v("（1）标记此镜像为私有仓库的镜像")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker tag 目标镜像 ip:端口/新名称\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("（2）再次启动私服容器")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker start localRegistry\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("（3）上传标记的镜像")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker push ip:端口/新名称\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#日志"}},[s._v("#")]),s._v(" 日志")]),s._v(" "),n("p",[s._v("查看日志：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("$ docker logs "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" CONTAINER\n  Options:\n        --details        显示更多的信息\n    -f, --follow         跟踪实时日志\n        --since string   显示自某个timestamp之后的日志，或相对时间，如42m（即42分钟）\n        --tail string    从日志末尾显示多少行日志， 默认是all\n    -t, --timestamps     显示时间戳\n        --until string   显示自某个timestamp之前的日志，或相对时间，如42m（即42分钟）\n\n例子：\n查看指定时间后的日志，只显示最后100行：\n\n$ docker logs -f -t --since"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2018-02-08"')]),s._v(" --tail"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" mysql\n\n查看最近30分钟的日志:\n\n$ docker logs --since 30m mysql\n\n查看某时间之后的日志：\n\n$ docker logs -t --since"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2018-02-08T13:23:37"')]),s._v(" mysql\n\n查看某时间段日志：\n\n$ docker logs -t --since"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2018-02-08T13:23:37"')]),s._v(" --until "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2018-02-09T12:23:37"')]),s._v(" mysql\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("p",[s._v("删除日志：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/var/lib/docker/containers/ 日志存放在该目录下\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"启动其他项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动其他项目"}},[s._v("#")]),s._v(" 启动其他项目")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('启动halo项目\ndocker run -it -d --name halo -p 8090:8090  -v ~/.halo:/root/.halo ruibaby/halo\n启动mwp项目\ndocker run -it -d --name mwp -e WORDPRESS_DB_HOST=mysql -e WORDPRESS_DB_PASSWORD=123456 -p 1080:80 --link myMysql:mysql wordpress\n"WORDPRESS_DB_HOST": 链接的docker的MySQL的IP地址和端口，一般设置成mysql表示用默认的设置\n"WORDPRESS_DB_USER": 以什么用户使用MySQL，默认是root\n"WORDPRESS_DB_PASSWORD" 这设置MySQL的登陆用户密码，由于上一项是默认的root\n"WORDPRESS_DB_NAME": 数据库的表名，不需要修改，用默认的”wordpress"就行\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"redis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[s._v("#")]),s._v(" redis")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('mkdir -p /data/redis/{data,conf,log}\ndocker run --name redis -p 6379:6379 --restart=always -v /data/redis/conf/redis.conf:/etc/redis/redis.conf -v /data/redis/data:/data -d redis:latest --appendonly yes --requirepass "123456"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"mysql-8"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mysql-8"}},[s._v("#")]),s._v(" mysql-8")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /data/mysql/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("data,conf,log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\ndocker run --name mysql -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 --restart"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always  -v /data/mysql/data:/var/lib/mysql -v /data/mysql/conf:/etc/mysql/conf.d -e "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" -d mysql:latest\n\n其他命令\ndocker "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it mysql "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\nmysql -uroot -p123456\nALTER "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" IDENTIFIED WITH mysql_native_password BY "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nGRANT ALL PRIVILEGES ON *.* TO "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v("WITH GRANT OPTION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nflush privileges"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nCREATE "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),s._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" IDENTIFIED BY "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nALTER "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),s._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" IDENTIFIED WITH mysql_native_password BY "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nGRANT ALL PRIVILEGES ON *.* TO "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),s._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nSET GLOBAL innodb_fast_shutdown "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nshow variables like "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'max_connections'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" global "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max_connections")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h3",{attrs:{id:"nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" nginx")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mkdir -p /data/nginx/{conf,conf.d,html,log}\nvi /data/nginx/conf/nginx.conf\ndocker run --name nginx -p 80:80 --restart=always --privileged=true -v /data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /data/nginx/conf.d/default.conf:/etc/nginx/conf.d/default.conf -v /data/nginx/html:/tmp -v /data/nginx/log:/var/log/nginx  -d nginx:latest\ndocker exec -it nginx bash\nnginx -s reload\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"rabbitmq"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq"}},[s._v("#")]),s._v(" rabbitMQ")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker pull rabbitmq:management\nmkdir -p /data/rabbitmq/{lib,etc,log}\ndocker run --name rabbitmq -p 1883:1883 -p 5672:5672 -p 15672:15672 -p 25672:25672 -p 61613:61613 -d rabbitmq:management\ndocker exec -it rabbit bash\ndocker cp -a rabbitmq:/etc/rabbitmq /data/rabbitmq/etc/\ndocker cp -a rabbitmq:/var/lib/rabbitmq /data/rabbitmq/lib/\ndocker cp -a rabbitmq:/var/log/rabbitmq /data/rabbitmq/log/\ndocker stop rabbitmq\ndocker rm rabbitmq\ndocker run --name rabbitmq -p 1883:1883 -p 5672:5672 -p 15672:15672 -p 25672:25672 -p 61613:61613 --restart=always -v /data/rabbitmq/etc/rabbitmq:/etc/rabbitmq -v /data/rabbitmq/lib/rabbitmq:/var/lib/rabbitmq -v /data/rabbitmq/log/rabbitmq:/var/log/rabbitmq -d rabbitmq:management\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);