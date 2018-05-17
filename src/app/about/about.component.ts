import {Component, OnInit, ViewChild} from '@angular/core';
import {Stu} from './detail/model/stu.model';
import {DetailComponent} from './detail/detail.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  stuData: Stu[];

  @ViewChild(DetailComponent) detail: DetailComponent;

  // 等价于上面的， 只不过当在html中使用多个<app-detail></app-detail>的时候， 参数字符串可以区分哪一个。
  @ViewChild('detail1') detail1: DetailComponent;

  constructor() {
    // 模拟数据， 真实数据网络请求获取。
    this.stuData = [
      {id: 123, name: 'dottie', phoneNumber: '12123123', hobbies: ['games', 'works']},
      {id: 124, name: 'daejong', phoneNumber: '12122342', hobbies: ['ball', 'movie']},
      {id: 125, name: 'china', phoneNumber: '1231234123', hobbies: ['music', 'xixi']}
    ];
  }

  ngOnInit() {
  }

  receiveDataFromDetail(data) {
    console.log('hello' + data);
    this.stuData = this.stuData.filter(stu => stu.id !== data);
  }

  receivePhoneFromDetail(phone: string) {
    console.log('world' + phone);
    alert(JSON.stringify(this.stuData.filter(stu => stu.phoneNumber === phone)));
  }

  changeColor() {
    this.detail1.change();
  }
}
