## 프로젝트 구성
```
pnpm create vite . --template react-swc-ts
```

## 설치
```
pnpm install
```

## 실행
```
pnpm run dev
```

## Mui 설치
```
pnpm add @mui/material @emotion/react @emotion/styled
pnpm add @fontsource/roboto
pnpm add @mui/icons-material
```

## vite 설정

### 절대 경로 사용하기
- src 폴더를 기준으로 절대경로값을 사용할 수 있게 하기 위한 설정이다.

```json
"compilerOptions": {
  // ... other options
  "baseUrl": "./",
  "paths": {
    "@src/*": ["src/*"],
  },
  // ... other options
}
```
- `tsconfig.json`에서 위의 설정은 IDE로 하여금 PATH를 입력할 때 자동으로 추론할 수 있게 해 준다.
- 위의 예시는 `@src`로 시작하는 경로를 입력하면 프로젝트 폴더의 `src` 폴더에서 시작하는 것과 같게 하겠다는 의미이다.
- 하지만, 이 부분은 IDE의 설정에만 적용되는 것이며, 실제 빌드될 때 지정한 경로를 사용할 수 있게 하기 위해서는 vite의 설정이 추가적으로 필요하다.

```
pnpm install vite-tsconfig-paths
```
- 참고 : https://github.com/aleclarson/vite-tsconfig-paths
- `tsconfig.json`에서 설정한 경로를 vite에서 이용할 수 있도록 한다. vite의 기본 설정 방법을 사용하면 `tsconfig.json`와 `vite.config.ts` 이중으로 설정해 줘야 하는 문제점이 있다. 위의 플러그인은 한 곳에서만 관리할 수 있게 해 주는 편리한 도구이다.

```ts
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
})
```

### react router 설치
```
pnpm install react-router-dom
```
