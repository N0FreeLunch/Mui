## 날짜 라이브러리
- Mui의 datepicker는 날짜 라이브러리를 사용한다. Mui에서는 4가지 날짜 라이브러리를 이용할 수 있도록 레핑한 코드를 제공하고 있다.
- dayjs, date-fns, luxon, moment를 지원하고 있는데, 보통은 dayjs를 사용하는 것을 추천한다. 사람들이 가장 많이 사용하며, 스텍오버플로우에 올라오는 답변은 dayjs 기준의 답변이 많다.
- Moment는 더 이상 업데이트 되지 않으므로 NodeJS의 버전이 올라가거나 하면, 더 이상 서포트되지 않는 문제가 발생할 수 있다.
- dayjs가 아닌 다른 라이브러리를 사용하고자 한다면, 각종 스폰서들이 많은 date-fns를 사용하도록 하자.

### 프로바이더 설정하기
- Mui의 datepicker 기능을 사용하기에 앞서 먼저 Localization을 해 줘야 한다.
- 지역에 따라 YYYY/MM/DD로 표기될 수도 있고, DD/MM/YYYY으로 표기가 될 수도 있다. Localization을 통해서 지역에 따른 표기 방식이나 UTC 설정 등을 세팅한다.
- 전체 리액트 코드를 실행하기에 앞서 리액트 코드가 실행되는 상위 컴포넌트에 LocalizationProvider를 설정하도록 하자.
```tsx
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
  );
}
```
