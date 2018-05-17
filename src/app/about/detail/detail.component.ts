import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer, ViewChild} from '@angular/core';
import {Stu} from './model/stu.model';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() stuList: Stu[];

  @Output() eventdottie = new EventEmitter();

  @Output() eventphone = new EventEmitter();

  // 操作dom
  @ViewChild('div') div: ElementRef;

  /**
   * 在其他html中定义如下。
   *   <app-detail
   *          [stuList]="stuData"
   *          (eventdottie)="receiveDataFromDetail($event)"
   *          (eventphone)="receivePhoneFromDetail($event)"
   *  ></app-detail>
   *
   *  类比： <button name='button' onclick='click()'></button>  输入和输出
   */

  constructor(private renderer: Renderer) { }

  ngOnInit() {
  }


  tellAboutClickWho(id: number) {
    console.log(id);
    this.eventdottie.emit(id);
  }

  tellAboutClickPhone(phone: string) {
    console.log(phone);
    this.eventphone.emit(phone);
  }

  change() {
    alert('changeColor...');
    console.log(this.div);
    this.renderer.setElementStyle(this.div.nativeElement, 'background-color', 'red');
  }
}
