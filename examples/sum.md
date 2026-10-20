# 累加和示例

累加和是编程中最常见的操作之一。本示例展示如何在 ChickenStack 中计算各种累加和。

## 基本累加和

### 示例1: 1+2+3+4+5 = 15

```ch
# 计算 1+2+3+4+5 = 15
0 T 1 A 5 [ t a + T a 1 + A a 5 > 0 = ] t .
```

**输出**:
```
15
```

**执行过程**:
```
初始: 累加器 T = 0，计数器 A = 1
1. t a +      → 累加器加上当前项
2. a 1 +      → 计数器加 1
3. a 5 > 0 =  → 计数器超过 5 时得到 0，循环结束
4. ] 跳回 [   → 检查栈顶条件是否非 0
5. 循环结束后输出累加器 = 15
```

### 示例2: 1+2+...+10 = 55

```ch
# 计算 1+2+...+10 = 55
0 T 1 A 10 [ t a + T a 1 + A a 10 > 0 = ] t .
```

**输出**:
```
55
```

### 示例3: 1+2+...+100 = 5050

```ch
# 计算 1+2+...+100 = 5050
0 T 1 A 100 [ t a + T a 1 + A a 100 > 0 = ] t .
```

**输出**:
```
5050
```

## 累加和方法

### 方法1: 标准方法

```ch
# 方法1: 标准方法 —— 累加器放 T，计数器放 A，栈顶只留循环条件（算 1..100）
0 T 1 A 100 [ t a + T a 1 + A a 100 > 0 = ] t .
```

**示例**:
```ch
# 1+2+3+4+5 = 15
0 T 1 A 5 [ t a + T a 1 + A a 5 > 0 = ] t .
```

### 方法2: 从 0 开始

```ch
# 方法2: 从 0 开始 —— 累加 0..9
0 T 0 A 9 [ t a + T a 1 + A a 9 > 0 = ] t .
```

**示例**:
```ch
# 0+1+2+3+4 = 10
0 T 0 A 5 [ t a + T a 1 + A a 4 > 0 = ] t .
```

### 方法3: 使用交换

```ch
# 方法3: 使用交换 —— 先用 \ 交换两个加数，加法结果不变（算 1..5）
0 T 1 A 5 [ t a \ + T a 1 + A a 5 > 0 = ] t .
```

## 累加和应用

### 示例1: 偶数和

```ch
# 计算 2+4+6+8+10 = 30
0 T 2 A 5 [ t a + T a 2 + A a 10 > 0 = ] t .
```

**输出**:
```
30
```

### 示例2: 奇数和

```ch
# 计算 1+3+5+7+9 = 25
0 T 1 A 5 [ t a + T a 2 + A a 9 > 0 = ] t .
```

**输出**:
```
25
```

### 示例3: 平方和

```ch
# 计算 1²+2²+3²+4²+5² = 55
0 T 1 A 5 [ t a a * + T a 1 + A a 5 > 0 = ] t .
```

**输出**:
```
55
```

### 示例4: 立方和

```ch
# 计算 1³+2³+3³+4³+5³ = 225
0 T 1 A 5 [ t a a * a * + T a 1 + A a 5 > 0 = ] t .
```

**输出**:
```
225
```

### 示例5: 阶乘和

```ch
# 计算 1!+2!+3!+4!+5! = 1+2+6+24+120 = 153
# S 存累加和，F 存当前的阶乘
0 S 1 F 1 A 5 [ f a * F s f + S a 1 + A a 5 > 0 = ] s .
```

**输出**:
```
153
```

## 使用 Python API

### 示例1: 基本累加和

```python
from chicken_stack import ChickenStackVM

def sum_range(n):
    """计算 1+2+...+n"""
    vm = ChickenStackVM()
    vm.push(0)
    vm.push(1)
    vm.push(n)
    for _ in range(n):
        vm.op_add()
        vm.push(1)
        vm.op_add()
    return vm.pop()

# 计算 1+2+...+100
result = sum_range(100)
print(f"1+2+...+100 = {result}")  # 5050
```

### 示例2: 累加和函数

```python
from chicken_stack import ChickenStackVM

class SumVM(ChickenStackVM):
    def sum_range(self, start, end):
        """计算 start 到 end 的和"""
        self.push(0)
        self.push(start)
        self.push(end - start + 1)
        for _ in range(end - start + 1):
            self.op_add()
            self.push(1)
            self.op_add()
        return self.pop()

# 使用累加和函数
vm = SumVM()
result = vm.sum_range(1, 100)
print(f"1+2+...+100 = {result}")  # 5050
```

### 示例3: 自定义累加

```python
from chicken_stack import ChickenStackVM

def custom_sum(start, end, step):
    """计算自定义累加和"""
    vm = ChickenStackVM()
    vm.push(0)
    vm.push(start)
    count = (end - start) // step + 1
    vm.push(count)
    for _ in range(count):
        vm.op_add()
        vm.push(step)
        vm.op_add()
    return vm.pop()

# 计算 2+4+6+8+10
result = custom_sum(2, 10, 2)
print(f"2+4+6+8+10 = {result}")  # 30
```

## 数学公式

### 公式1: 等差数列求和

```ch
# 使用公式: S = n * (a1 + an) / 2
# 1+2+...+100 = 100 * (1 + 100) / 2 = 5050
100 1 100 + * 2 / .
```

**输出**:
```
5050
```

### 公式2: 平方和公式

```ch
# 使用公式: S = n * (n + 1) * (2n + 1) / 6
# 1²+2²+...+5² = 5 * 6 * 11 / 6 = 55
5 6 * 11 * 6 / .
```

**输出**:
```
55
```

### 公式3: 立方和公式

```ch
# 使用公式: S = [n * (n + 1) / 2]²
# 1³+2³+...+5³ = (5 * 6 / 2)² = 225
5 6 * 2 / : * .
```

**输出**:
```
225
```

## 特殊累加和

### 示例1: 斐波那契和

```ch
# 前 5 个斐波那契数 0 1 1 2 3 的和 = 7
# S 存和，A 和 B 是相邻两项，C 是剩余项数
0 S 0 A 1 B 5 C c 0 > [ s a + S a b + T b A t B c 1 - C c 0 > ] s .
```

**输出**:
```
7
```

### 示例2: 倒数和

```ch
# 计算 1/1+1/2+1/3+1/4+1/5（整数除法，只有 1/1 得 1）
0 T 1 A 5 [ t 1 a / + T a 1 + A a 5 > 0 = ] t .
```

**输出**:
```
1
```

### 示例3: 交错和

```ch
# 计算 1-2+3-4+5 = 3
# 当前项是奇数就加，是偶数就减
0 T 1 A 5 [ a 2 % 1 = { t a + T | t a - T } a 1 + A a 5 > 0 = ] t .
```

**输出**:
```
3
```

### 示例4: 绝对值和

```ch
# 计算 |1|+|2|+|3|+|4|+|5| = 15
# 取绝对值：当前项非正时先用 ~ 取负，再累加
0 T 1 A 5 [ a 0 > { t a + T | t a ~ + T } a 1 + A a 5 > 0 = ] t .
```

**输出**:
```
15
```

### 示例5: 倒序和

```ch
# 计算 5+4+3+2+1 = 15
0 T 5 A 5 [ t a + T a 1 - A a 0 > ] t .
```

**输出**:
```
15
```

## 累加和表

### 示例1: 1 到 10 的累加和

```ch
# 打印 1 到 10 的累加和
0 T 1 A 10 [ t a + T t . a 1 + A a 10 > 0 = ]
```

**输出**:
```
1 3 6 10 15 21 28 36 45 55
```

### 示例2: 偶数累加和

```ch
# 打印偶数累加和
0 T 2 A 10 [ t a + T t . a 2 + A a 20 > 0 = ]
```

**输出**:
```
2 6 12 20 30 42 56 72 90 110
```

### 示例3: 奇数累加和

```ch
# 打印奇数累加和
0 T 1 A 10 [ t a + T t . a 2 + A a 19 > 0 = ]
```

**输出**:
```
1 4 9 16 25 36 49 64 81 100
```

## 调试技巧

### 技巧1: 打印每一步

```ch
# 打印每一步：当前项和累加结果
0 T 1 A 5 [ a . t a + T t . a 1 + A a 5 > 0 = ]
```

### 技巧2: 使用 Python 调试

```python
from chicken_stack import ChickenStackVM

class DebugVM(ChickenStackVM):
    def sum_range(self, n):
        """带调试的累加和计算"""
        print(f"计算 1+2+...+{n}")
        self.push(0)
        self.push(1)
        self.push(n)
        for i in range(n):
            print(f"  步骤 {i+1}: 栈 = {self.get_stack_state()}")
            self.op_add()
            self.push(1)
            self.op_add()
        result = self.pop()
        print(f"  结果: {result}")
        return result

# 使用调试虚拟机
vm = DebugVM()
vm.sum_range(5)
```

**输出**:
```
计算 1+2+...+5
  步骤 1: 栈 = [0, 1, 5]
  步骤 2: 栈 = [1, 5]
  步骤 3: 栈 = [3, 5]
  步骤 4: 栈 = [6, 5]
  步骤 5: 栈 = [10, 5]
  结果: 15
```

## 性能优化

### 技巧1: 使用数学公式

```ch
# 优化前: 循环计算
0 T 1 A 100 [ t a + T a 1 + A a 100 > 0 = ] t .

# 优化后: 使用公式
100 101 * 2 / .
```

### 技巧2: 减少循环次数

```ch
# 优化前: 同一个和算两遍
0 T 1 A 5 [ t a + T a 1 + A a 5 > 0 = ] t .
0 T 1 A 5 [ t a + T a 1 + A a 5 > 0 = ] t .

# 优化后: 算一次，存进寄存器后重复使用
0 T 1 A 5 [ t a + T a 1 + A a 5 > 0 = ] t S s . s .
```

### 技巧3: 使用缓存

```python
from chicken_stack import ChickenStackVM

class CachedSumVM(ChickenStackVM):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.cache = {}

    def sum_range(self, n):
        """带缓存的累加和计算"""
        if n in self.cache:
            return self.cache[n]

        self.push(0)
        self.push(1)
        self.push(n)
        for _ in range(n):
            self.op_add()
            self.push(1)
            self.op_add()
        result = self.pop()
        self.cache[n] = result
        return result

# 使用缓存
vm = CachedSumVM()
print(vm.sum_range(100))  # 计算并缓存
print(vm.sum_range(100))  # 从缓存读取
```

## 常见错误

`[` 只检查栈顶、不弹出，所以累加结果必须放在寄存器里：一旦把它写回栈顶，每轮被检查的就不再是计数，
而是累加和，循环永远等不到 0。下面三块把「算错」和「算对」写在一起对比，错误段都改成了能正常结束的版本；
原本会挂死的写法不要直接执行，它停不下来。

### 错误1: 初始值错误

```ch
# 错误: 累加器初值写成 1，比正确结果多算 1
1 T 1 A 5 [ t a + T a 1 + A a 5 > 0 = ] t .  # 输出 16

# 正确: 累加器初值为 0
0 T 1 A 5 [ t a + T a 1 + A a 5 > 0 = ] t .  # 输出 15
```

### 错误2: 循环次数错误

```ch
# 错误: 循环守卫写成 4，少累加最后一项
0 T 1 A 4 [ t a + T a 1 + A a 4 > 0 = ] t .  # 输出 10

# 正确: 守卫与项数一致
0 T 1 A 5 [ t a + T a 1 + A a 5 > 0 = ] t .  # 输出 15
```

### 错误3: 增量错误

```ch
# 错误: 增量写成 2，只累加了 1+3+5，漏掉所有偶数
0 T 1 A 5 [ t a + T a 2 + A a 5 > 0 = ] t .  # 输出 9

# 正确: 增量为 1
0 T 1 A 5 [ t a + T a 1 + A a 5 > 0 = ] t .  # 输出 15
```

还要区分两种容易混的挂死：《循环控制》里的「错误1: 无限循环」是计数器根本没有更新；这里说的是计数器在更新，
但栈顶被累加结果覆盖。两者现象一样，病因不同。

## 累加和性质

### 性质1: 1+2+...+n = n(n+1)/2

```ch
# 验证性质
100 101 * 2 / .
```

### 性质2: 1²+2²+...+n² = n(n+1)(2n+1)/6

```ch
# 验证性质
5 6 * 11 * 6 / .
```

### 性质3: 1³+2³+...+n³ = [n(n+1)/2]²

```ch
# 验证性质
5 6 * 2 / : * .
```

## 总结

累加和是基本的数学运算：

1. **基本计算**: 使用循环实现
2. **多种方法**: 标准方法、公式方法
3. **实际应用**: 数学计算、统计
4. **性能优化**: 公式、缓存

通过这些示例，您可以：
- 掌握累加和计算
- 理解数学公式
- 应用累加和解决问题

继续探索更多数学示例！
