# 阶乘计算示例

阶乘是数学中的重要概念，n! = n × (n-1) × ... × 2 × 1。本示例展示如何在 ChickenStack 中计算阶乘。

## 基本阶乘

### 示例1: 5! = 120

```ch
# 计算 5! = 120
# t 是累乘器，a 是计数器
1 T 1 A 5 [ t a * T a 1 + A a 5 > 0 = ] t .
```

**输出**:
```
120
```

**执行过程**:
```
初始: 栈 = [5], t = 1, a = 1
入栈的 5 是哨兵：[ 只检查栈顶，栈顶非 0 才进入循环

每轮循环:
  1. t a *     计算 t × a，结果压栈
  2. T         弹出并写回 t（累乘器更新）
  3. a 1 + A   计数器 a 加 1 后写回
  4. a 5 > 0 = 判断 a 是否已超过 5：未超过得 1（继续），超过得 0（退出）

第1轮: t = 1 × 1 = 1,   a → 2
第2轮: t = 1 × 2 = 2,   a → 3
第3轮: t = 2 × 3 = 6,   a → 4
第4轮: t = 6 × 4 = 24,  a → 5
第5轮: t = 24 × 5 = 120, a → 6，判断得 0，退出循环

循环结束后 t . 输出 120
```

每轮末尾的判断值会留在栈上，作为下一轮 `[` 的检查对象；哨兵 5 和历轮留下的判断值
都不影响结果，需要干净栈的话可以在结尾用 `$` 清理。

注意累乘器必须放在寄存器里：`:` 只是复制栈顶，用它配合 `*` 会把栈顶平方，数值迅速失控。

### 示例2: 3! = 6

```ch
# 计算 3! = 6
1 T 1 A 3 [ t a * T a 1 + A a 3 > 0 = ] t .
```

**输出**:
```
6
```

### 示例3: 10! = 3628800

```ch
# 计算 10! = 3628800
1 T 1 A 10 [ t a * T a 1 + A a 10 > 0 = ] t .
```

**输出**:
```
3628800
```

## 阶乘实现方法

### 方法1: 使用循环

```ch
# 方法1: 计数器 a 从 1 递增到 n（这里 n = 5）
1 T 1 A 5 [ t a * T a 1 + A a 5 > 0 = ] t .
```

**示例**:
```ch
# 5! = 120
1 T 1 A 5 [ t a * T a 1 + A a 5 > 0 = ] t .
```

### 方法2: 使用累乘

```ch
# 方法2: 计数器从 n 递减到 1，t 始终保存当前的连乘结果
1 T 5 A 5 [ t a * T a 1 - A a 0 > ] t .
```

**示例**:
```ch
# 5! = 120
1 T 5 A 5 [ t a * T a 1 - A a 0 > ] t .
```

### 方法3: 处理 0! 的边界

0! = 1。让循环一次都不执行即可：计数器为 0 时 `[` 直接跳过循环体，累乘器保持初值。

```ch
# 0! = 1
1 T 1 A 0 [ t a * T a 1 + A a 0 > 0 = ] t .
```

## 阶乘应用

### 示例1: 排列数

```ch
# 计算 P(n, k) = n! / (n-k)!
# P(5, 3) = 5! / 2! = 120 / 2 = 60
# 两个阶乘分别存进 t 和 u，最后再相除
1 T 1 A 5 [ t a * T a 1 + A a 5 > 0 = ]
1 U 1 B 2 [ u b * U b 1 + B b 2 > 0 = ]
t u / .
```

**输出**:
```
60
```

### 示例2: 组合数

```ch
# 计算 C(n, k) = n! / (k! * (n-k)!)
# C(5, 2) = 5! / (2! * 3!) = 120 / (2 * 6) = 10
1 T 1 A 5 [ t a * T a 1 + A a 5 > 0 = ]
1 U 1 B 2 [ u b * U b 1 + B b 2 > 0 = ]
1 V 1 C 3 [ v c * V c 1 + C c 3 > 0 = ]
t u v * / .
```

**输出**:
```
10
```

### 示例3: 阶乘和

```ch
# 计算 1! + 2! + 3! + 4! + 5! = 1 + 2 + 6 + 24 + 120 = 153
# t 是当前阶乘，s 是累加和
0 S 1 T 1 A 5 [ t a * T t s + S a 1 + A a 5 > 0 = ] s .
```

**输出**:
```
153
```

### 示例4: 双阶乘

```ch
# 计算 n!! = n × (n-2) × (n-4) × ...
# 5!! = 5 × 3 × 1 = 15
1 T 5 A 5 [ t a * T a 2 - A a 0 > ] t .
```

**输出**:
```
15
```

### 示例5: 阶乘倒数

```ch
# 计算 1/n!
# 1/5! = 1/120 = 0 (整数除法)
1 T 1 A 5 [ t a * T a 1 + A a 5 > 0 = ]
1 t / .
```

**输出**:
```
0
```

## 使用 Python API

### 示例1: 基本阶乘

用 `ChickenStackInterpreter` 直接运行一段源码，`verbose=False` 只保留程序本身的输出。

```python
from chicken_stack import ChickenStackInterpreter

# t 存累乘器，a 存计数器
source = "1 T 1 A 5 [ t a * T a 1 + A a 5 > 0 = ] t ."

interpreter = ChickenStackInterpreter()
interpreter.run(source, verbose=False)
# 输出: 120
```

### 示例2: 阶乘函数

需要拿回数值时，用 `compile_source` 编译并运行，再把输出文本转成整数。

```python
from chicken_stack import compile_source

def factorial(n):
    """用 ChickenStack 源码计算 n!，返回整数结果"""
    source = f"1 T 1 A {n} [ t a * T a 1 + A a {n} > 0 = ] t ."
    return int(compile_source(source).run())

# 计算 10!
result = factorial(10)
print(f"10! = {result}")  # 10! = 3628800
```

### 示例3: 批量计算

```python
from chicken_stack import compile_source

def factorial(n):
    """用 ChickenStack 源码计算 n!，返回整数结果"""
    source = f"1 T 1 A {n} [ t a * T a 1 + A a {n} > 0 = ] t ."
    return int(compile_source(source).run())

# 计算 1! 到 10!
for i in range(1, 11):
    print(f"{i}! = {factorial(i)}")
```

**输出**:
```
1! = 1
2! = 2
3! = 6
4! = 24
5! = 120
6! = 720
7! = 5040
8! = 40320
9! = 362880
10! = 3628800
```

## 阶乘表

### 示例1: 1! 到 10!

```ch
# 打印 1! 到 10!，每行 "n n!"
1 T 1 A 10 [ t a * T a . t . 10 " a 1 + A a 10 > 0 = ]
```

**输出**:
```
1 1
2 2
3 6
4 24
5 120
6 720
7 5040
8 40320
9 362880
10 3628800
```

### 示例2: 阶乘增长

```ch
# 展示阶乘的快速增长
1 T 1 A 5 [ t a * T a . t . 10 " a 1 + A a 5 > 0 = ]
```

**输出**:
```
1 1
2 2
3 6
4 24
5 120
```

## 调试技巧

### 技巧1: 打印中间结果

```ch
# 打印每一步的累乘结果
1 T 1 A 5 [ t a * T a . '->' t . 10 " a 1 + A a 5 > 0 = ]
```

**输出**:
```
1 ->1
2 ->2
3 ->6
4 ->24
5 ->120
```

### 技巧2: 使用 Python 调试

```python
from chicken_stack import ChickenStackInterpreter

# 结尾不写 . ，结果会留在栈顶，方便检查
source = "1 T 1 A 3 [ t a * T a 1 + A a 3 > 0 = ] t"

interpreter = ChickenStackInterpreter()
interpreter.run(source, verbose=False)

# 寄存器 a=0 ... z=25
print("t =", interpreter.vm.registers[ord("t") - ord("a")])
print("a =", interpreter.vm.registers[ord("a") - ord("a")])
print("栈 =", interpreter.vm.get_stack_state())
```

**输出**:
```
t = 6
a = 4
栈 = [3, 1, 1, 0, 6]
```

栈里的 3 是循环入口的哨兵，中间两个 1 和 0 是历轮留下的判断值，末尾的 6 是最后压入的结果。

## 性能优化

### 技巧1: 减少循环次数

```ch
# 优化前: 同一个阶乘算了两遍
1 T 1 A 5 [ t a * T a 1 + A a 5 > 0 = ] t .
1 T 1 A 5 [ t a * T a 1 + A a 5 > 0 = ] t .

# 优化后: 只算一遍，结果留在寄存器里复用
1 T 1 A 5 [ t a * T a 1 + A a 5 > 0 = ] t . t .
```

### 技巧2: 使用缓存

```python
from chicken_stack import compile_source

_cache = {}

def factorial(n):
    """带缓存的阶乘计算"""
    if n in _cache:
        return _cache[n]

    source = f"1 T 1 A {n} [ t a * T a 1 + A a {n} > 0 = ] t ."
    _cache[n] = int(compile_source(source).run())
    return _cache[n]

# 使用缓存
print(factorial(10))  # 计算并缓存
print(factorial(10))  # 从缓存读取
```

## 常见错误

### 错误1: 循环次数错误

```ch
# 错误: 循环只跑 4 轮，算出的是 4! = 24，不是 5!
1 T 1 A 4 [ t a * T a 1 + A a 4 > 0 = ] t .  # 输出 24

# 正确: 循环次数 = n
1 T 1 A 5 [ t a * T a 1 + A a 5 > 0 = ] t .  # 输出 120
```

### 错误2: 初始值错误

```ch
# 错误: 累乘器初值是 0，怎么乘都是 0
0 T 1 A 5 [ t a * T a 1 + A a 5 > 0 = ] t .  # 输出 0

# 正确: 累乘器初值为 1
1 T 1 A 5 [ t a * T a 1 + A a 5 > 0 = ] t .  # 输出 120
```

### 错误3: 大数阶乘

阶乘增长极快，25! 已经超出 64 位整数范围。Python 的大整数能算出结果，结果也只占一个栈位，
真正要小心的是循环条件写错导致数值失控（每轮把栈顶平方，几轮就会卡死）。

```ch
# 25! = 15511210043330985984000000
1 T 1 A 25 [ t a * T a 1 + A a 25 > 0 = ] t .
```

## 阶乘性质

### 性质1: 0! = 1

```ch
# 0! = 1：循环一次都不执行，累乘器保持初值
1 T 1 A 0 [ t a * T a 1 + A a 0 > 0 = ] t .  # 结果为 1
```

### 性质2: 1! = 1

```ch
# 1! = 1
1 T 1 A 1 [ t a * T a 1 + A a 1 > 0 = ] t .  # 结果为 1
```

### 性质3: n! = n × (n-1)!

```ch
# 5! = 5 × 4!
1 T 1 A 4 [ t a * T a 1 + A a 4 > 0 = ]
5 t * .
```

**输出**:
```
120
```

## 总结

阶乘是重要的数学概念：

1. **基本计算**: 使用循环实现
2. **多种方法**: 递增循环、递减累乘、边界处理
3. **实际应用**: 排列、组合
4. **性能优化**: 缓存、减少计算

通过这些示例，您可以：
- 理解阶乘概念
- 掌握阶乘计算
- 应用阶乘解决问题

继续探索更多数学示例！
