# 컨텍스트를 이용한 커스터마이즈

## 컨텍스트의 기능

- 컨텍스트란 컨텍스트 컴포넌트 하위의 모든 리액트 컴포넌트에 적용할 수 있는 무언가를 만드는 것이다.
- 기업을 대상으로 하는 서비스가 있다고 하자. 기업을 대상으로 하는 기능이 있을 것이고, 해당 기업을 이용하는 유저들을 위한 기능이 있을 것이다. 이 때 기업 대상의 서비스와 유저 대상의 서비스의 기능을 다르게 하고 싶다면, 기업 기능을 모은 상위 컴포넌트 기업에 관한 테마를 모은 컨텍스트를 부여하고, 유저 기능을 모은 상위 컴포넌트에는 유저에 관한 테마를 모든 컨텍스트를 부여하는 방법을 사용할 수 있다.
- 또는 모든 컴포넌트의 상위 컨텍스트를 만들어 모든 컴포넌트에 적용되는 테마를 만들 수 있다.

## 테마 컨텍스트를 정의하는 위치

- 보통 테마 컨텍스트는 글로벌 컨텍스트를 정의하는 Providers의 `ThemeContex`라는 이름으로 정의를 할 수도 있다.
- Providers와 별개로 `Themes`라는 폴더를 만들어 테마를 정의하고 컨텍스트를 만드는 부분에서 테마를 불러와서 사용할 수도 있다.
- 글로벌 테마를 정의하며 테마 컨텍스트 여럿을 정의하지 않는 경우는 별도의 폴더를 만들지 않고 `Providers`에 정의 해도 충분할 수 있다.
- 하지만 테마에 정의할 대상이 늘어나게 되면, Mui 컴포넌트 별로 테마를 정의한 부분을 불러와서 사용할 수도 있으며 이 경우에는 별도의 `Themes` 폴더를 이용하는 편이 좋을 수 있다.

## 코드 해설

```tsx
const theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
        },
      },
    },
  },
});
```

- `createTheme` 함수의 결과인 `theme` 변수는 테마 컨텍스트의 `theme` 속성에 추가되어 컨텍스트 하위 컴포넌트에 적용된다.

```tsx
<ThemeProvider theme={theme}>
  <Button>This button has disabled ripples.</Button>
</ThemeProvider>
```

- `createTheme` 함수의 인자로 기존의 Mui에 적용할 커스텀 설정을 추가할 수 있다.
- `components` 기존의 Mui 컴포넌트를 수정할 때 사용한다.
- `MuiButton` 기존의 Mui 컴포넌트에서 커스터마이징할 대상을 선택하는 부분이다. [라이브러리 소스코드](https://github.com/mui/material-ui/blob/master/packages/mui-material/src/styles/overrides.d.ts)를 보고 커스터마이징 할 수 있는 대상을 선택할 수 있다.
- `styleOverrides` Mui 컴포넌트에 부여된 CSS를 덮어쓰기 위한 옵션이다. 스타일을 추가하여 기존 Mui 컴포넌트의 스타일을 변경할 수 있다.
