import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/ChickenStack_doc/',
  ignoreDeadLinks: true,
  title: 'ChickenStack',
  description: '����ջ��ͼ���걸�������',
  
  themeConfig: {
    nav: [
      { text: '��ҳ', link: '/' },
      { text: '���ٿ�ʼ', link: '/guide/navigation' },
      { text: '����', link: '/about/' },
      { text: '���֤', link: '/license/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '���ٿ�ʼ',
          collapsed: false,
          items: [
            { text: 'ҳ�浼��', link: '/guide/navigation' },
            { text: 'ʲô�� ChickenStack', link: '/guide/what-is-chickenstack' },
            { text: '��װ', link: '/guide/installation' }
          ]
        },
        {
          text: 'ʹ��ָ��',
          collapsed: true,
          items: [
            { text: '���з�ʽ', link: '/guide/running' },
            { text: 'ָ�', link: '/guide/instruction-set' },
            { text: 'ջ����', link: '/guide/stack-operations' },
            { text: '�﷨', link: '/guide/syntax' }
          ]
        },
        {
          text: 'API �ĵ�',
          collapsed: true,
          items: [
            { text: 'Python API', link: '/guide/python-api' },
            { text: '����� API', link: '/guide/vm-api' },
            { text: '������ API', link: '/guide/parser-api' }
          ]
        },
        {
          text: 'ʾ��',
          collapsed: false,
          items: [
            {
              text: '����ʾ��',
              collapsed: false,
              items: [
                { text: 'Hello World', link: '/examples/hello-world' },
                { text: '��ѧ����', link: '/examples/math' },
                { text: 'ջ����', link: '/examples/stack' }
              ]
            },
            {
              text: '����ʾ��',
              collapsed: false,
              items: [
                { text: 'ѭ��', link: '/examples/loops' },
                { text: '쳲���������', link: '/examples/fibonacci' },
                { text: '�׳�', link: '/examples/factorial' },
                { text: '�ַ�����ת', link: '/examples/reverse-string' },
                { text: '���', link: '/examples/sum' },
                { text: '�˷���', link: '/examples/multiplication-table' }
              ]
            },
            {
              text: '����ʾ��',
              collapsed: false,
              items: [
                { text: '�ַ�����', link: '/examples/char-operations' }
              ]
            }
          ]
        },
        {
          text: 'Q&A',
          collapsed: true,
          items: [
            { text: '��������', link: '/qa/' }
          ]
        },
        {
          text: '������־',
          link: '/changelog/'
        }
      ],
      '/examples/': [
        {
          text: '���ٿ�ʼ',
          collapsed: false,
          items: [
            { text: 'ҳ�浼��', link: '/guide/navigation' },
            { text: 'ʲô�� ChickenStack', link: '/guide/what-is-chickenstack' },
            { text: '��װ', link: '/guide/installation' }
          ]
        },
        {
          text: 'ʹ��ָ��',
          collapsed: true,
          items: [
            { text: '���з�ʽ', link: '/guide/running' },
            { text: 'ָ�', link: '/guide/instruction-set' },
            { text: 'ջ����', link: '/guide/stack-operations' },
            { text: '�﷨', link: '/guide/syntax' }
          ]
        },
        {
          text: 'API �ĵ�',
          collapsed: true,
          items: [
            { text: 'Python API', link: '/guide/python-api' },
            { text: '����� API', link: '/guide/vm-api' },
            { text: '������ API', link: '/guide/parser-api' }
          ]
        },
        {
          text: 'ʾ��',
          collapsed: false,
          items: [
            {
              text: '����ʾ��',
              collapsed: false,
              items: [
                { text: 'Hello World', link: '/examples/hello-world' },
                { text: '��ѧ����', link: '/examples/math' },
                { text: 'ջ����', link: '/examples/stack' }
              ]
            },
            {
              text: '����ʾ��',
              collapsed: false,
              items: [
                { text: 'ѭ��', link: '/examples/loops' },
                { text: '쳲���������', link: '/examples/fibonacci' },
                { text: '�׳�', link: '/examples/factorial' },
                { text: '�ַ�����ת', link: '/examples/reverse-string' },
                { text: '���', link: '/examples/sum' },
                { text: '�˷���', link: '/examples/multiplication-table' }
              ]
            },
            {
              text: '����ʾ��',
              collapsed: false,
              items: [
                { text: '�ַ�����', link: '/examples/char-operations' }
              ]
            }
          ]
        },
        {
          text: 'Q&A',
          collapsed: true,
          items: [
            { text: '��������', link: '/qa/' }
          ]
        },
        {
          text: '������־',
          link: '/changelog/'
        }
      ],
      '/changelog/': [
        {
          text: '���ٿ�ʼ',
          collapsed: false,
          items: [
            { text: 'ҳ�浼��', link: '/guide/navigation' },
            { text: 'ʲô�� ChickenStack', link: '/guide/what-is-chickenstack' },
            { text: '��װ', link: '/guide/installation' }
          ]
        },
        {
          text: 'ʹ��ָ��',
          collapsed: true,
          items: [
            { text: '���з�ʽ', link: '/guide/running' },
            { text: 'ָ�', link: '/guide/instruction-set' },
            { text: 'ջ����', link: '/guide/stack-operations' },
            { text: '�﷨', link: '/guide/syntax' }
          ]
        },
        {
          text: 'API �ĵ�',
          collapsed: true,
          items: [
            { text: 'Python API', link: '/guide/python-api' },
            { text: '����� API', link: '/guide/vm-api' },
            { text: '������ API', link: '/guide/parser-api' }
          ]
        },
        {
          text: 'ʾ��',
          collapsed: false,
          items: [
            {
              text: '����ʾ��',
              collapsed: false,
              items: [
                { text: 'Hello World', link: '/examples/hello-world' },
                { text: '��ѧ����', link: '/examples/math' },
                { text: 'ջ����', link: '/examples/stack' }
              ]
            },
            {
              text: '����ʾ��',
              collapsed: false,
              items: [
                { text: 'ѭ��', link: '/examples/loops' },
                { text: '쳲���������', link: '/examples/fibonacci' },
                { text: '�׳�', link: '/examples/factorial' },
                { text: '�ַ�����ת', link: '/examples/reverse-string' },
                { text: '���', link: '/examples/sum' },
                { text: '�˷���', link: '/examples/multiplication-table' }
              ]
            },
            {
              text: '����ʾ��',
              collapsed: false,
              items: [
                { text: '�ַ�����', link: '/examples/char-operations' }
              ]
            }
          ]
        },
        {
          text: 'Q&A',
          collapsed: true,
          items: [
            { text: '��������', link: '/qa/' }
          ]
        },
        {
          text: '������־',
          link: '/changelog/'
        }
      ],
      '/license/': [
        {
          text: '���ٿ�ʼ',
          collapsed: false,
          items: [
            { text: 'ҳ�浼��', link: '/guide/navigation' },
            { text: 'ʲô�� ChickenStack', link: '/guide/what-is-chickenstack' },
            { text: '��װ', link: '/guide/installation' }
          ]
        },
        {
          text: 'ʹ��ָ��',
          collapsed: true,
          items: [
            { text: '���з�ʽ', link: '/guide/running' },
            { text: 'ָ�', link: '/guide/instruction-set' },
            { text: 'ջ����', link: '/guide/stack-operations' },
            { text: '�﷨', link: '/guide/syntax' }
          ]
        },
        {
          text: 'API �ĵ�',
          collapsed: true,
          items: [
            { text: 'Python API', link: '/guide/python-api' },
            { text: '����� API', link: '/guide/vm-api' },
            { text: '������ API', link: '/guide/parser-api' }
          ]
        },
        {
          text: 'ʾ��',
          collapsed: false,
          items: [
            {
              text: '����ʾ��',
              collapsed: false,
              items: [
                { text: 'Hello World', link: '/examples/hello-world' },
                { text: '��ѧ����', link: '/examples/math' },
                { text: 'ջ����', link: '/examples/stack' }
              ]
            },
            {
              text: '����ʾ��',
              collapsed: false,
              items: [
                { text: 'ѭ��', link: '/examples/loops' },
                { text: '쳲���������', link: '/examples/fibonacci' },
                { text: '�׳�', link: '/examples/factorial' },
                { text: '�ַ�����ת', link: '/examples/reverse-string' },
                { text: '���', link: '/examples/sum' },
                { text: '�˷���', link: '/examples/multiplication-table' }
              ]
            },
            {
              text: '����ʾ��',
              collapsed: false,
              items: [
                { text: '�ַ�����', link: '/examples/char-operations' }
              ]
            }
          ]
        },
        {
          text: 'Q&A',
          collapsed: true,
          items: [
            { text: '��������', link: '/qa/' }
          ]
        },
        {
          text: '������־',
          link: '/changelog/'
        }
      ],
      '/qa/': [
        {
          text: '���ٿ�ʼ',
          collapsed: false,
          items: [
            { text: 'ҳ�浼��', link: '/guide/navigation' },
            { text: 'ʲô�� ChickenStack', link: '/guide/what-is-chickenstack' },
            { text: '��װ', link: '/guide/installation' }
          ]
        },
        {
          text: 'ʹ��ָ��',
          collapsed: true,
          items: [
            { text: '���з�ʽ', link: '/guide/running' },
            { text: 'ָ�', link: '/guide/instruction-set' },
            { text: 'ջ����', link: '/guide/stack-operations' },
            { text: '�﷨', link: '/guide/syntax' }
          ]
        },
        {
          text: 'API �ĵ�',
          collapsed: true,
          items: [
            { text: 'Python API', link: '/guide/python-api' },
            { text: '����� API', link: '/guide/vm-api' },
            { text: '������ API', link: '/guide/parser-api' }
          ]
        },
        {
          text: 'ʾ��',
          collapsed: false,
          items: [
            {
              text: '����ʾ��',
              collapsed: false,
              items: [
                { text: 'Hello World', link: '/examples/hello-world' },
                { text: '��ѧ����', link: '/examples/math' },
                { text: 'ջ����', link: '/examples/stack' }
              ]
            },
            {
              text: '����ʾ��',
              collapsed: false,
              items: [
                { text: 'ѭ��', link: '/examples/loops' },
                { text: '쳲���������', link: '/examples/fibonacci' },
                { text: '�׳�', link: '/examples/factorial' },
                { text: '�ַ�����ת', link: '/examples/reverse-string' },
                { text: '���', link: '/examples/sum' },
                { text: '�˷���', link: '/examples/multiplication-table' }
              ]
            },
            {
              text: '����ʾ��',
              collapsed: false,
              items: [
                { text: '�ַ�����', link: '/examples/char-operations' }
              ]
            }
          ]
        },
        {
          text: 'Q&A',
          collapsed: false,
          items: [
            { text: '��������', link: '/qa/' }
          ]
        },
        {
          text: '������־',
          link: '/changelog/'
        }
      ]
    },

    editLink: {
      pattern: 'https://github.com/llz162652/ChickenStack/edit/main/docs/:path',
      text: '�� GitHub �ϱ༭��ҳ��'
    },

    docFooter: {
      prev: '��һҳ',
      next: '��һҳ'
    },

    outline: {
      label: 'ҳ�浼��'
    },

    lastUpdated: {
      text: '��������',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/llz162652/ChickenStack' }
    ],

    footer: {
      message: 'MIT Licensed | Copyright ? 2025-Present',
      copyright: 'Powered by AI GLM-4.7 | Built with <a href="https://vitepress.dev/" target="_blank">VitePress</a>'
    },
    editLink: {
      pattern: 'https://github.com/llz162652/ChickenStack/edit/main/docs/:path',
      text: '�� GitHub �ϱ༭��ҳ��'
    }
  }
})



