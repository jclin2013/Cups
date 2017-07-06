import { Injectable } from '@angular/core';

import { Cup } from './cup';
import { CUPS } from './mock-cups';

@Injectable()
export class CupService {
  getCups(): Cup[] {
    return Promise.resolve(CUPS);
  }
}
