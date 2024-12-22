import checkFile from '../../lib/index.js';

export default [
  {
    files: ['src/**/*.*'],
    plugins: {
      'check-file': checkFile,
    },
    processor: 'check-file/eslint-processor-check-file',
    rules: {
      'check-file/no-index': 'error',
      'check-file/filename-blocklist': [
        'error',
        {
          '**/*.model.ts': '*.models.ts',
          '**/*.util.ts': '*.utils.ts',
        },
      ],
      'check-file/folder-match-with-fex': [
        'error',
        {
          '*.test.{js,jsx,ts,tsx}': '**/__tests__/',
          '*.styled.{jsx,tsx}': '**/components/',
        },
      ],
      'check-file/filename-naming-convention': [
        'error',
        {
          '**/*.{jsx,tsx}': 'PASCAL_CASE',
          '**/*.{js,ts}': 'CAMEL_CASE',
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
      'check-file/folder-naming-convention': [
        'error',
        {
          'src/components/*/': 'PASCAL_CASE',
          'src/!(components)/**/!(__tests__)/': 'CAMEL_CASE',
        },
      ],
    },
  },
];
