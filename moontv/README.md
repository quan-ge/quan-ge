# 影视资源订阅发布页

#### 持续更新中，上次更新日期更新：26.8.11

---

[> > 前往GitHub查看](https://github.com/quan-ge/quan-ge/tree/main/moontv)

[> > 前往网页查看](https://quan-ge.github.io/quan-ge/moontv/)

## 订阅链接

通用订阅（推荐使用）:`https://quan-ge.github.io/quan-ge/moontv/moontv_sub.txt`

R18版：`https://quan-ge.github.io/quan-ge/moontv/moontv_sub_r18.txt`

完整版：`https://quan-ge.github.io/quan-ge/moontv/moontv_sub_all.txt`


**使用完整版时，可能会因为源过多，导致速度变慢，部分部署方式会导致应用部署失败**

---

# 备注：

<details><summary>A. 三个版本的区别(点击展开查看)</summary>

| 版本   | R18源 | 影视源 | 源数量 |
| ------ | ----- | ------ | ------ |
| 通用版 | ❌     | ✅      | 36     |
| R18版  | ✅     | 小部分 | 28     |
| 完整版 | ✅     | ✅      | 59     |

✅：包含

❌：不包含

小部分：为了保证性能，只包含一部分
</details>

---

B. 几乎所有版本都不会同步订阅中被删除的源，请在`管理员设置`中手动删除

---

C. 不支持订阅时可手动导入配置方法（旧版或其他衍生项目）

 - 访问订阅的URL，将订阅复制下来，如：`https://quan-ge.github.io/quan-ge/moontv/moontv_sub.txt`
 - 前往[https://www.udtool.com/toolbox/base58-encoder-decoder.html?charsetInput=12](https://www.udtool.com/toolbox/base58-encoder-decoder.html?charsetInput=12)
 - 点击`点击解码`，进行Base58解码，将订阅转为配置文件
 - 手动导入配置文件

---

### 对各软件的兼容情况

| 软件名                                               | 可直接导入订阅 | **需手动配置 | 测试结果 |
| ---------------------------------------------------- | -------------- | ---------- | -------- |
| [LunaTV](https://github.com/MoonTechLab/LunaTV)      | ✅              | -          | ✅可用    |
| *[Helios](https://github.com/MoonTechLab/Selene)     | ✅              | -          | -        |
| [EchoTV](https://github.com/hoowhoami/EchoTV)        | ✅              | -          | ✅兼容    |
| [MoonTV](https://github.com/senshinya/MoonTV)        | ❌              | 是          | ✅兼容    |
| *[KatelyaTV](https://github.com/katelya77/KatelyaTV) | ❌              | 是          | ✅可用    |
| [DecoTV](https://github.com/Decohererk/DecoTV)       | ✅              | -          | -        |
| *[MoonTVPlus](https://github.com/mtvpls/MoonTVPlus)  | ❌              | 是          | -        |

*待测试，理论支持，欢迎提交测试结果

**参照上方备注的C部分，手动导入配置文件
