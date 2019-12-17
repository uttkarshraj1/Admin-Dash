import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

import 'moment/locale/it';

export default function Example() {
  return (
    <div className='date'>
      <p>Pickup Date:</p>
      <DayPickerInput
        formatDate={formatDate}
        parseDate={parseDate}
        format="DD/MM/YYYY"
        placeholder={`${formatDate(new Date(), 'DD/MM/YYYY')}`}
      />
      <p>
       {/* <code>{'format="LL"'}</code>: */}
      </p>
      <DayPickerInput
        formatDate={formatDate}
        parseDate={parseDate}
        format="DD/MM/YYYY"
        placeholder={`${formatDate(new Date(), 'DD/MM/YYYY', 'it')}`}
        dayPickerProps={{
          locale: 'it',
          localeUtils: MomentLocaleUtils,
        }}
      />
    </div>
  );
}