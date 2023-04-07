import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  users = [
    { name: 'Bob', age: 42, status: 'active' },
    { name: 'Alice', age: 37, status: 'inactive' },
    { name: 'Joe', age: 32, status: 'active' },

  ]

  constructor() { }
}
