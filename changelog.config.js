module.exports = {
  disableEmoji: true,
  list: ['test', 'feat', 'fix', 'chore', 'docs', 'style', 'ci', 'perf'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject'],
  // 根据不同项目配置不同的模块。
  scopes: [],
  types: {
    chore: {
      description: '编写日常事务',
      emoji: '🤖',
      value: 'chore'
    },
    ci: {
      description: '修改了项目 CI',
      emoji: '🎡',
      value: 'ci'
    },
    docs: {
      description: '修改了项目文档',
      emoji: '✏️',
      value: 'docs'
    },
    feat: {
      description: '完成了新功能',
      emoji: '🎸',
      value: 'feat'
    },
    fix: {
      description: '修复了 Bug',
      emoji: '🐛',
      value: 'fix'
    },
    perf: {
      description: '优化了代码性能',
      emoji: '⚡️',
      value: 'perf'
    },
    release: {
      description: '创建了发布提交',
      emoji: '🏹',
      value: 'release'
    },
    style: {
      description: '修改了代码样式',
      emoji: '💄',
      value: 'style'
    },
    test: {
      description: '修改了测试代码',
      emoji: '💍',
      value: 'test'
    }
  }
}
