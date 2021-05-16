import { Stack, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const alerts = {
  alertStackOptions: new Stack({
    dir1: 'down',
    firstpos1: 200,
    firstpos2: 15,
    maxStrategy: 'close',
    maxClosureCausesWait: false,
    sticker: false,
  }),
  alertOptions: {
    sticker: false,
    closer: false,
    delay: 2000,
  },
  errorManyResults() {
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
