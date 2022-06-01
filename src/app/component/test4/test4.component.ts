import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.scss']
})
export class Test4Component implements OnInit {

  fromData: FormGroup = this.fb.group({
    citizen_id: [null]
  });

  output:any
  status = 'ตรวจสอบ'
  public get input(): any {
    const data = {
      citizen_id: this.fromData.value['citizen_id'] ? this.fromData.value['citizen_id'] : null
    };
    return data;
  }

  constructor(
    private fb: FormBuilder,
    private httpService:HttpService
    ) {}

  ngOnInit(): void {}

  checkCitizenId() {
    try {
      this.status = 'กำลังตรวจสอบ...'
      this.httpService.get(`https://job-test.suwananpoedpong.repl.co/citizenid`,this.input).subscribe(res => {
          this.status = 'ตรวจสอบ'
          console.log('check', res);
          this.output = res;
      })
    } catch (error) {
      console.error(error);
    }
  }
}
