# @langchain/scripts

该包包含我们各包共享的 LangChain.js 脚本。

## 安装
```bash npm2yarn
npm install @langchain/scripts
```
# 基本示例

```python
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")
```

此代码从[HuggingFace Hub](https://huggingface.co/)下载与`bert-base-cased`模型相关联的预训练分词器，并缓存至磁盘。在首次运行时，您会看到类似如下输出：

```
Loading checkpoint shards:   0%|          | 0/5 [00:00<?, ?it/s]
```

这表示正在下载分词器的组成部分。下载完成后，下次加载该分词器时就会直接从磁盘读取，而不再需要重新下载。