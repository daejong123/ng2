import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {routing} from './routes/app.routes';
import { LoginComponent } from './login/login.component';
import {AuthService} from './login/auth/auth.service';
import { DetailComponent } from './about/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    {provide: 'auth', useClass: AuthService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * typescirpt语法。
 *
 * ng2：
 * ng serve 启动
 * ng g c home 创建一个component
 * ng g s auth 创建一个service
 * ng g class model 创建一个model
 *
 * @Injectable() 让容器管理
 * provide 全局注册下bean
 * @Inject构造函数注入
 *
 * @Input   [data]='todata'
 * @Output  event1 =  new eventEmitter()
 * @ViewChild #divRef  divRef.func1();  divRef.nativeElement  Renderer
 *
 * #nameRef='ngModel'  nameRef.errors?.required
 * #formRef='ngForm'  (ngSubmit)='toSubmit(formRef.value)'
 *
 * *ngIf
 * *ngFor='let stu of stulist'
 * (click)='doclick()'
 *
 * [(ngModel)]='databind'
 * {{databind}}
 *
 * routes路由
 */
