import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Cup } from './cup';

@Injectable()
export class CupService {
  private cupsUrl = 'api/cups';

  constructor(private http: Http) { }

  getCups(): Promise<Cup[]> {
    return this.http.get(this.cupsUrl)
               .toPromise()
               .then(response => response.json().data as Cup[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  update(cup: Cup): Promise<Cup> {
    const url = `${this.cupsUrl}/${cup.id}`;
    return this.http
      .put(url, JSON.stringify(cup), {headers: this.headers})
      .toPromise()
      .then(() => cup)
      .catch(this.handleError);
  }

  updateAll = (cups: Cup[]) => {
    cups.forEach(cup => this.update(cup));
  }

  create(name: string, material: string, display: string): Promise<Cup> {
    return this.http
      .post(this.cupsUrl, JSON.stringify({name, material, display}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Cup)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.cupsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

}
