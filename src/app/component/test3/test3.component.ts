import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss'],
})
export class Test3Component implements OnInit {
  fromData: FormGroup = this.fb.group({
    base: [null],
    height: [null],
  });

  output:any
  status = 'คำนวน'
  public get input(): any {
    const data = {
      base: this.fromData.value['base'] ? this.fromData.value['base'] : 0,
      height: this.fromData.value['height'] ? this.fromData.value['height'] : 0,
    };
    return data;
  }

  constructor(
    private fb: FormBuilder,
    private httpService:HttpService
    ) {}

  ngOnInit(): void {}

  calculateTriangle() {
    try {
      this.status = 'กำลังคำนวน...'
      this.httpService.get(`https://job-test.suwananpoedpong.repl.co/triangle`,this.input).subscribe(res => {

          this.status = 'คำนวน'
          console.log('list', res);
          this.output = res;

      })
    } catch (error) {
      console.error(error);
    }
  }
}
