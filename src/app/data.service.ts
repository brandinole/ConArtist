import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  private data: string[] = [ "one", "two", "three", "four"]

  getDate(): string[]{
    return this.data
  }

  addData(name: string){
    this.data.push(name);
  }

  removeData(index: number){
    console.log(this.data)
    this.data.splice(index,1)
    console.log(index)
  }


}