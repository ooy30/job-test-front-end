import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {

  data:any;
  constructor(
    private httpService:HttpService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  private getList() {
    try {
      this.httpService.get(`https://jsonplaceholder.typicode.com/posts`,{}).subscribe(res => {
        if (res) {
          console.log('list', res);
          this.data = res;
        }
      })
    } catch (error) {
      console.error(error);
    }
  }

}
