import { Stack, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const alerts = {
  alertStackOptions: new Stack({
    dir1: 'dawn',
    dir2: 'right',
    firstpos1: 0,
    firstpos2: 10,
    maxStrategy: 'close',
    maxClosureCausesWait: false,
    sticker: false,
  }),
  alertOptions: {
    sticker: false,
    closer: false,
    delay: 3000,
  },
  errorTooManyResults() {
    error({
      title: 'Too many matches found.',
      text: 'Please enter a more specific query!',
      stack: this.alertStackOptions,
      ...this.alertOptions,
    });
  },
  errorNotFound() {
    error({
      title: 'Not found.',
      text: 'Please enter a more specific query!',
      stack: this.alertStackOptions,
      ...this.alertOptions,
    });
  },
};
export default alerts;
