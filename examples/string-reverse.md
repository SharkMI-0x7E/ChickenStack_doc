# 字符串反转示例

字符串反转是编程中常见的操作。本示例展示如何在 ChickenStack 中反转字符串。

反转在栈语言里是很自然的操作：按原序把字符的编码压栈，弹出顺序天然就是倒序。需要记住一条前置规则——`"`（打印字符）和 `.`（打印数字）都会**弹出**栈顶，`65 "` 打印 A 之后栈里不再有 65。

## 基本字符串反转

### 示例1: 反转 "ABC"

```ch
# 反转 "ABC" → "CBA"
# 按原序压入 A B C，弹出顺序就是 C B A
65 66 67 " " "
```

**输出**:
```
CBA
```

**执行过程**:
```
初始: 栈 = []
65 → 栈 = [65]
66 → 栈 = [65, 66]
67 → 栈 = [65, 66, 67]
" → 弹出 67，输出 C，栈 = [65, 66]
" → 弹出 66，输出 B，栈 = [65]
" → 弹出 65，输出 A，栈 = []
```

### 示例2: 反转 "HELLO"

```ch
# 反转 "HELLO" → "OLLEH"
72 69 76 76 79 " " " " "
```

**输出**:
```
OLLEH
```

### 示例3: 反转 "ChickenStack"

```ch
# 反转 "ChickenStack" → "kcatSnekcihC"
67 104 105 99 107 101 110 83 116 97 99 107 " " " " " " " " " " " "
```

**输出**:
```
kcatSnekcihC
```

## 字符串反转方法

### 方法1: 使用栈

```ch
# 方法1: 压入后逐个弹出，LIFO 天然反转
65 66 67 " " "

# 更通用的写法: 循环弹栈，直到栈空自动结束
65 66 67 [ " ]
```

**输出**:
```
CBACBA
```

第二种写法不依赖字符个数：`[` 每轮检查栈顶，栈空时退出循环。

**示例**:
```ch
# 反转 "ABC"
65 66 67 [ " ]
```

### 方法2: 使用寄存器

```ch
# 方法2: 把字符码存进寄存器，再按相反顺序读取
65 A 66 B 67 C c " b " a "
```

**输出**:
```
CBA
```

适合需要保留原字符、反转之后还要继续使用的场景。

### 方法3: 使用深度索引

```ch
# 方法3: 用 ! 按深度取字符，原栈保持不变
65 66 67 0 ! " 1 ! " 2 ! "
```

**输出**:
```
CBA
```

`0 !` 取栈顶、`1 !` 取次栈顶、`2 !` 取第三个，逐个打印即可倒序遍历，栈里仍是 `[65, 66, 67]`。

## 使用 Python API

### 示例1: 基本反转

```python
from chicken_stack import ChickenStackVM

def reverse_string(text):
    """把字符串按倒序打印出来"""
    vm = ChickenStackVM()
    for char in text:
        vm.push(ord(char))
    while vm.get_stack_state():
        vm.op_print_char()

reverse_string("ABC")   # 输出 CBA
```

### 示例2: 使用栈反转

```python
from chicken_stack import ChickenStackVM

def reverse_with_stack(text):
    """使用 Python 列表模拟栈的压入与弹出"""
    vm = ChickenStackVM()
    stack = [ord(char) for char in text]

    while stack:
        vm.push(stack.pop())
        vm.op_print_char()

reverse_with_stack("HELLO")   # 输出 OLLEH
```

### 示例3: 反转函数

```python
from chicken_stack import ChickenStackVM

class ReverseVM(ChickenStackVM):
    def reverse_string(self, text):
        """压入全部字符后逐个弹出打印"""
        for char in text:
            self.push(ord(char))
        while self.get_stack_state():
            self.op_print_char()

vm = ReverseVM()
vm.reverse_string("ChickenStack")   # 输出 kcatSnekcihC
```

## 字符串反转应用

### 示例1: 回文检测

```ch
# 检测 "ABA" 是否是回文
# 先正序打印一次，再倒序打印一次，两次结果相同即为回文
65 A 66 B 65 C a " b " c " c " b " a "
```

**输出**:
```
ABAABA
```

前后两段都是 `ABA`，因此是回文。

### 示例2: 反转数字

```ch
# 反转数字 123 → 321
49 50 51 " " "
```

**输出**:
```
321
```

字符 `'1'` 的编码是 49，`'2'` 是 50，`'3'` 是 51。打印字符而不做运算，结果就是字符序列本身。

### 示例3: 反转句子

```ch
# 反转 "HELLO WORLD" → "DLROW OLLEH"
72 69 76 76 79 32 87 79 82 76 68 [ " ]
```

**输出**:
```
DLROW OLLEH
```

32 是空格。整句一起压栈，空格的位置也随反转一起移动。

### 示例4: 反转单词顺序

```ch
# "HELLO WORLD" → "WORLD HELLO"
# 单词内部顺序不变，只交换两个单词的位置
72 A 69 B 76 C 76 D 79 E      # HELLO 存入寄存器 a-e
32 F                          # 空格存入 f
87 G 79 H 82 I 76 J 68 K      # WORLD 存入寄存器 g-k
g " h " i " j " k " f " a " b " c " d " e "
```

**输出**:
```
WORLD HELLO
```

纯弹出只能整体倒序，想让单词内部保持原序，就得用寄存器分别保存再按指定顺序读出。

### 示例5: 反转句子中的每个单词

```ch
# "HELLO WORLD" → "OLLEH DLROW"
# 单词位置不变，每个单词内部倒序
72 A 69 B 76 C 76 D 79 E
32 F
87 G 79 H 82 I 76 J 68 K
e " d " c " b " a " f " k " j " i " h " g "
```

**输出**:
```
OLLEH DLROW
```

## 高级反转

### 示例1: 双指针反转

```python
from chicken_stack import ChickenStackVM

def reverse_two_pointers(text):
    """使用双指针反转"""
    vm = ChickenStackVM()
    chars = list(text)
    left, right = 0, len(chars) - 1

    while left < right:
        chars[left], chars[right] = chars[right], chars[left]
        left += 1
        right -= 1

    for char in chars:
        vm.push(ord(char))
        vm.op_print_char()

reverse_two_pointers("ABCDEF")   # 输出 FEDCBA
```

### 示例2: 递归反转

```python
def reverse_recursive(text):
    """递归反转字符串"""
    if len(text) <= 1:
        return text
    return reverse_recursive(text[1:]) + text[0]

print(reverse_recursive("HELLO"))   # 输出 OLLEH
```

### 示例3: 分块反转

```python
from chicken_stack import ChickenStackVM

def reverse_chunks(text, chunk_size):
    """按固定大小分块，块内反转，块顺序不变"""
    vm = ChickenStackVM()
    for start in range(0, len(text), chunk_size):
        chunk = text[start:start + chunk_size]
        for char in reversed(chunk):
            vm.push(ord(char))
            vm.op_print_char()

reverse_chunks("ABCDEF", 2)   # 输出 BADCFE
```

## 字符串反转技巧

### 技巧1: 使用切片 (Python)

```python
s = "HELLO"
reversed_s = s[::-1]
print(reversed_s)   # OLLEH
```

### 技巧2: 使用 reversed() 函数

```python
s = "HELLO"
reversed_s = ''.join(reversed(s))
print(reversed_s)   # OLLEH
```

### 技巧3: 使用列表反转

```python
s = "HELLO"
chars = list(s)
chars.reverse()
reversed_s = ''.join(chars)
print(reversed_s)   # OLLEH
```

## 调试技巧

### 技巧1: 打印每一步

```ch
# 每压入一个字符就复制一份，同时打印字符和它的编码
65 : " . 66 : " . 67 : " .
```

**输出**:
```
A65 B66 C67
```

`:` 先复制栈顶，`"` 弹走复制出来的那份，原值留给 `.` 打印编码。

### 技巧2: 使用 Python 调试

```python
from chicken_stack import ChickenStackVM

class DebugVM(ChickenStackVM):
    def reverse_string(self, text):
        """带调试的字符串反转"""
        for char in text:
            self.push(ord(char))
        print(f"栈: {self.get_stack_state()}")

        result = ""
        while self.get_stack_state():
            value = self.pop()
            print(f"  弹出 {chr(value)} → 栈 {self.get_stack_state()}")
            result += chr(value)
        return result

vm = DebugVM()
print(vm.reverse_string("ABC"))
```

**输出**:
```
栈: [65, 66, 67]
  弹出 C → 栈 [65, 66]
  弹出 B → 栈 [65]
  弹出 A → 栈 []
CBA
```

## 性能优化

### 技巧1: 减少栈操作

```python
from chicken_stack import ChickenStackVM

def optimized_reverse(text):
    """直接按倒序压入并打印，不必先压满整个栈"""
    vm = ChickenStackVM()
    for char in reversed(text):
        vm.push(ord(char))
        vm.op_print_char()

optimized_reverse("HELLO")   # 输出 OLLEH
```

### 技巧2: 使用缓存

```python
from chicken_stack import ChickenStackVM

class CachedReverseVM(ChickenStackVM):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.cache = {}

    def reverse_string(self, text):
        """带缓存的字符串反转"""
        if text not in self.cache:
            self.cache[text] = text[::-1]
        for char in self.cache[text]:
            self.push(ord(char))
            self.op_print_char()

vm = CachedReverseVM()
vm.reverse_string("HELLO")   # 计算并缓存
vm.reverse_string("HELLO")   # 从缓存读取
```

## 常见错误

### 错误1: 忘记弹出

```ch
# 错误: 以为 " 只打印不弹栈，连续打印会把数据弹空
65 " 66 " 67 " . . .

# 正确: " 和 . 都会弹栈，想按相反顺序输出就直接连续打印
65 66 67 [ " ]
```

### 错误2: 顺序错误

```ch
# 错误: 先写输出指令、后压数据，执行到输出时栈是空的
: . : . : . 65 66 67

# 正确: 先压栈，再输出
65 66 67 [ " ]
```

### 错误3: 栈溢出

```ch
# 栈容量上限是 10000，每个字符占一个栈位
# 反转超长字符串时应分段处理，避免一次压满
```

## 字符串反转变体

### 变体1: 部分反转

```ch
# 只反转部分字符
# "ABCDEF" → "ABFEDC"
# 前两个字符用寄存器保持原序，后四个整体弹出
65 A 66 B 67 68 69 70 a " b " [ " ]
```

**输出**:
```
ABFEDC
```

### 变体2: 间隔反转

```ch
# 间隔反转
# "ABCDEF" → "FDBECA"
# 按目标顺序的逆序压栈（A C E B D F），弹出时即为 F D B E C A
65 67 69 66 68 70 [ " ]
```

**输出**:
```
FDBECA
```

### 变体3: 循环移位

```ch
# 循环右移一位
# "ABCDEF" → "FABCDE"
# 末尾字符先单独取出，其余字符保持原序
70 Z 70 " 65 " 66 " 67 " 68 " 69 "
```

**输出**:
```
FABCDE
```

## 实际应用

### 应用1: 检查回文

```python
def is_palindrome(text):
    """检查是否是回文"""
    return text == text[::-1]

print(is_palindrome("ABA"))   # True
print(is_palindrome("ABC"))   # False
```

### 应用2: DNA 序列分析

```python
def reverse_complement(dna):
    """DNA 反向互补"""
    complement = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'}
    reversed_dna = dna[::-1]
    return ''.join(complement[base] for base in reversed_dna)

print(reverse_complement("ATCG"))   # CGAT
```

### 应用3: 文本处理

```python
def reverse_words(sentence):
    """反转句子中的单词顺序"""
    words = sentence.split()
    return ' '.join(words[::-1])

print(reverse_words("Hello World"))   # World Hello
```

## 总结

字符串反转是常见的编程操作：

1. **基本方法**: 按原序压栈、逐个弹出即得倒序
2. **三种写法**: 循环弹栈、寄存器倒序读取、按深度索引
3. **实际应用**: 回文检测、单词重排、文本处理
4. **关键约束**: `"` 与 `.` 都会弹出栈顶，压栈和输出的顺序不能颠倒

通过这些示例，您可以：
- 掌握字符串反转
- 理解栈的 LIFO 特性
- 解决实际问题

继续探索更多字符串操作示例！
