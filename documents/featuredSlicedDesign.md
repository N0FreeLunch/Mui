### App 레이어 기본 세팅
- src 폴더를 보면 `src/App.css`, `src/App.tsx` 두 파일이 존재한다. 이 두 파일을 `src/app` 폴더로 이동시킨다.
- `src/main.tsx` 경로의 파일에서 `import App from './app/App.tsx'` 부분의 불러오는 파일의 경로를 바꾸어 준다.

### Pages 레이어 기본 세팅
- pages 레이어에 react route의 코드를 세팅한다. `src/pages/routes.tsx` 파일을 만든다.
```tsx
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const Routing = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default Routing;
```
- 라우터 파일을 위와 같이 세팅해 준다.

```tsx
import './App.css';
import Routing from '@src/pages/Routing';

function App() {
  return (
    <>
      <Routing />
    </>
  )
}

export default App
```
- `src/App.tsx`에서 라우팅 파일을 불러 온다.
