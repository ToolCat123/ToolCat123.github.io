(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{509:function(s,a,n){"use strict";n.r(a);var e=n(4),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"其他命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他命令"}},[s._v("#")]),s._v(" 其他命令")]),s._v(" "),n("h3",{attrs:{id:"maven常见命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven常见命令"}},[s._v("#")]),s._v(" maven常见命令")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mvn -version                 查看maven的版本及配置信息\nmvn archetype:create   -DgroupId=    DartifactId=    构建java项目\nmvn archetype:create   -DgroupId=    DartifactId=    -DarchetypeArtifactId=maven-archetype-webapp 创建web项目\nmvn compile                编译项目代码\nmvn package               打包项目\nmvn package -Dmaven.test.skip=true   打包项目时跳过单元测试\nmvn test                      运行单元测试\nmvn clean                    清除编译产生的target文件夹内容，可以配合相应命令一起使用，如mvn clean package， mvn clean test\nmvn install                   打包后将其安装在本地仓库\nmvn deploy                  打包后将其安装到pom文件中配置的远程仓库\nmvn eclipse:eclipse      将maven生成eclipse项目结构\nmvn eclipse:clean         清除maven项目中eclipse的项目结构\nmvn site                       生成站点目录\nmvn dependency:list      显示所有已经解析的所有依赖\nmvn dependency:tree     以树的结构展示项目中的依赖\nmvn dependency:analyze  对项目中的依赖进行分析，依赖未使用，使用单未引入\nmvn tomcat:run              启动tomcat\nmvn clean package -Dmaven.test.skip=true    清理打包跳过测试\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h3",{attrs:{id:"jps命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jps命令"}},[s._v("#")]),s._v(" jps命令")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("jps -help\nusage: jps [-help]\n       jps [-q] [-mlvV] [<hostid>]\n\nDefinitions:\n    <hostid>:      <hostname>[:<port>]\n\n-q 只显示pid，不显示class名称,jar文件名和传递给main方法的参数\n-m 输出传递给main方法的参数，在嵌入式jvm上可能是null\n-l 输出应用程序main class的完整package名或者应用程序的jar文件完整路径名\n-v 输出传递给JVM的参数\n-V 隐藏输出传递给JVM的参数\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"jstack命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jstack命令"}},[s._v("#")]),s._v(" jstack命令")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("jstack -help\n\nUsage:\n    jstack [-l] <pid>\n        (to connect to running process) 连接活动线程\n    jstack -F [-m] [-l] <pid>\n        (to connect to a hung process) 连接阻塞线程\n    jstack [-m] [-l] <executable> <core>\n        (to connect to a core file) 连接dump的文件\n    jstack [-m] [-l] [server_id@]<remote server IP or hostname>\n        (to connect to a remote debug server) 连接远程服务器\n\nOptions:\n    -F  to force a thread dump. Use when jstack <pid> does not respond (process is hung)\n    -m  to print both java and native frames (mixed mode)\n    -l  long listing. Prints additional information about locks\n    -h or -help to print this help message\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h3",{attrs:{id:"keytool"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keytool"}},[s._v("#")]),s._v(" Keytool")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v(" -certreq            生成证书请求\n -changealias        更改条目的别名\n -delete             删除条目\n -exportcert         导出证书\n -genkeypair         生成密钥对\n -genseckey          生成密钥\n -gencert            根据证书请求生成证书\n -importcert         导入证书或证书链\n -importpass         导入口令\n -importkeystore     从其他密钥库导入一个或所有条目\n -keypasswd          更改条目的密钥口令\n -list               列出密钥库中的条目\n -printcert          打印证书内容\n -printcertreq       打印证书请求的内容\n -printcrl           打印 CRL 文件的内容\n -storepasswd        更改密钥库的存储口令\n -keysize            密钥大小\n -validity           有效时间\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("生成密钥:\nkeytool -genkeypair -alias oauth2 -keyalg RSA -keypass oauth2 -keystore oauth2.jks -storepass oauth2\n解析公钥:\nkeytool -list -rfc -keystore oauth2.jks -storepass oauth2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" openssl x509 -inform pem -pubkey\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"windows中端口命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows中端口命令"}},[s._v("#")]),s._v(" Windows中端口命令")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("查看指定端口\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -ano"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("findstr "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"port"')]),s._v("\n查看指定pid的名称\ntasklist"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("findstr "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pid"')]),s._v("\n结束指定pid的程序\ntaskkill /pid\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"mysql自动创建时间自动更新时间"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mysql自动创建时间自动更新时间"}},[s._v("#")]),s._v(" mysql自动创建时间自动更新时间")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("alter table tenant_config modify create_time datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'创建时间'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nalter table tenant_config modify update_time datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'更新时间'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);