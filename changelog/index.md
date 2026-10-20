# 更新日志

## [2026-10-20] 语言补全、实时绘图与字节码编译

### 语言

- 新增条件分支 `{ then | else }`：`{` 弹出栈顶条件，非零执行 then，为零跳到 `|` 之后
- 新增字符串字面量 `'...'`：执行时直接输出，不压栈，不支持转义
- 新增 26 个单字母寄存器：`a`-`z` 读取，`A`-`Z` 写入，初值均为 0
- 新增负数字面量 `~5` 与一元取负 `~`
- 新增小数字面量 `3.14` 与 `~0.25`：整数仍是 `int`，小数是 `float`，混算按 Python 规则提升
- 新增栈指令：`@` 旋转栈顶三个、`&` 复制第二个、`!` 按深度复制
- 修复解析失败时循环跳转表残留的问题
- 移除 `IOHandler` 中未被使用的 `print_num` / `print_char`

### 字节码编译

- 新增 `chicken_stack/compiler.py`：把 token 序列翻译成等价的 Python 源码，交给内置 `compile()` 生成 code object 后执行
- 二元运算编译成「弹出右操作数、原地更新栈顶」，省去解释器中一次 pop 与一次 push
- 控制流直接展开为 Python 的 `while` / `if`，不再依赖运行时跳转表
- 输出改走缓冲区，不再逐条 flush
- 编译期做栈深分析：`[ ]` 循环体净栈变化必须为 0，`{ | }` 两条分支结束时栈深必须相同
- 分析通过后，每个栈槽直接映射成 Python 局部变量（`v0`、`v1`……），彻底去掉 list 的 append / pop
- 含 `!` 的程序索引在运行时才确定，自动退回 list 模式
- 效果：Mandelbrot 演示从约 3.2 秒降到约 0.06 秒（CPU 时间，约 50 倍），输出与解释器逐字符相同
- `main.py` 新增 `--compile` 开关，包导出 `compile_source` 与 `CompiledProgram`

### 文档

- 新增 `GRAMMAR.md`，提供 EBNF 词法定义与语义对照表
- README 不再声明图灵完备，改为如实描述指令集与已知限制

### 工具与示例

- 新增 `repl.py` 交互式解释器，支持 `:help` `:stack` `:clear` `:q`
- 新增 `examples/live_plot.py`：浏览器内实时函数绘图，表达式编译为 ChickenStack 后缀代码，采样点由虚拟机逐个求值
- `live_plot` 支持 `sin` `cos` `tan` `sqrt` `abs`，全部由语言内的定点运算实现，不调用宿主语言的数学库
- 新增示例：`fizzbuzz.ch`、`chicken_quest.ch`、`mandelbrot.ch`、`quadratic.ch`

### 测试

- 新增端到端、栈指令、随机性质、示例回归等测试文件

---

## [2026-01-03] v1.0.1-alpha

### 新功能

#### GitHub Pages 部署

- **在线文档**：部署到 GitHub Pages，可通过 https://SharkMI-0x7E.github.io/ChickenStack_doc/ 访问
- **自动构建**：使用 GitHub Actions 自动构建和部署文档
- **持续集成**：每次推送代码到 master 分支时自动更新文档

#### 项目结构优化

- **主项目**：https://github.com/SharkMI-0x7E/ChickenStack
  - 包含核心代码（chicken_stack/）
  - 测试文件（tests/）
  - 示例文件（examples/）
  - 本地文档副本（docs/）
- **文档系统**：https://github.com/SharkMI-0x7E/ChickenStack_doc
  - 完整的 VitePress 文档系统
  - 独立的 GitHub Pages 部署
  - 自动化构建流程

#### README.md 增强

- **创新设计**：添加了项目名称由来、系统架构图、开发路线图等内容
- **进阶示例**：添加了斐波那契数列等复杂示例
- **贡献指南**：添加了贡献指南链接
- **视觉效果**：使用居中布局、徽章样式等增强可读性

### 功能增强

#### 文档系统修复

- **editLink 修复**：修复了「在 GitHub 上编辑此页面」按钮，现在正确指向 ChickenStack_doc 仓库
- **死链接检查**：禁用了死链接检查，避免构建失败
- **base 路径配置**：添加了 base 路径配置，确保 GitHub Pages 正确加载资源

#### GitHub Release

- **v0.1.0 Release**：创建了第一个正式版本 Release
- **版本标签**：使用语义化版本号管理
- **发布说明**：包含主要特性、快速开始、文档链接等信息

### Bug 修复

#### GitHub Actions 配置

- **pnpm 版本冲突**：修复了 pnpm 版本冲突问题
- **构建失败**：修复了死链接检查导致的构建失败
- **部署配置**：正确配置了 GitHub Pages 部署流程

### 文档

- **README.md**：重新编写，添加项目介绍与使用说明
- **更新日志**：添加了 v1.0.1-alpha 版本记录
- **链接修复**：修复了所有指向主项目和文档系统的链接

### 统计数据

- **代码行数**：约 3000+ 行
- **指令数量**：17 个核心指令
- **测试用例**：50+ 个测试用例
- **示例程序**：10+ 个示例程序
- **文档页面**：20+ 个文档页面

### 链接

- **主项目**：https://github.com/SharkMI-0x7E/ChickenStack
- **文档系统**：https://github.com/SharkMI-0x7E/ChickenStack_doc
- **在线文档**：https://SharkMI-0x7E.github.io/ChickenStack_doc/
- **GitHub Release**：https://github.com/SharkMI-0x7E/ChickenStack/releases

---

## [2026-01-03] v1.0.0-alpha

首个公开版本，包含：

- 基于栈的逆波兰求值模型
- 数学运算、栈操作、逻辑比较、输入输出四类指令
- `[ ]` 循环
- Parser / VM / IOHandler 三层 Python API
- VitePress 文档站与 GitHub Pages 自动部署

---

MIT License
