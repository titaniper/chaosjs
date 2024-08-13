import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'], // ES 모듈과 CommonJS 모듈 형식으로 빌드를 수행합니다.
      fileName: (format) => `index.${format}.js`, // 빌드된 파일 이름 형식 지정
    },
    rollupOptions: {
      external: [], // 외부 종속성으로 처리할 모듈을 지정할 수 있습니다.
      output: {
        globals: {}, // 글로벌 변수를 설정할 수 있습니다 (UMD 형식에서 사용).
      },
    },
  },
});
