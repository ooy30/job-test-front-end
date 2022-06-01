import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test5',
  templateUrl: './test5.component.html',
  styleUrls: ['./test5.component.scss']
})
export class Test5Component implements OnInit {

  show :any;
  fromData: FormGroup = this.fb.group({
    number: [null]
  });

  public get number(): any {
    const data = this.fromData.value['number'] ? this.fromData.value['number'] : 0
    return data;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  drawn(){
    this.show = [];
    if(this.number > 0){
      for(var i=1 ;i<=this.number;i++){
        let data = '';
        for(var j=1 ;j<=i*2-2;j++){
          data = data+'*';
        }
        this.show[i]= i+data+i
      }
      for(var i = this.show.length - 2;i>=0;i--){
        this.show[this.show.length] = this.show[i]
      }
    }
  }

}
