import { Injectable } from '@angular/core';
import { configuration } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  configuration: any = configuration;

  getConfiguration(){
    return this.configuration;
  }
}
