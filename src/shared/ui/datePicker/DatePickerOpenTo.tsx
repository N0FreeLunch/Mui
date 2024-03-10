import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerOpenTo() {
  return (
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker label={'"year"'} openTo="year" />
        <DatePicker
          label={'"month"'}
          openTo="month"
          views={['year', 'month', 'day']}
        />
      </DemoContainer>
  );
}
