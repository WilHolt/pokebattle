import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less']
})
export class PopupComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() changeEmiter: EventEmitter<boolean> = new EventEmitter<boolean>()
  
  loginForm = this.fb.group({
      username: [''],
      password: ['']

  })
  constructor(private fb:FormBuilder, private auth:AuthService, private router:Router) {


   }

  ngOnInit() {
    console.log(this.isOpen)

  }

  open(){
    this.isOpen = this.isOpen;
  }
  close(){
    this.isOpen = false;
    this.changeEmiter.emit(this.isOpen)
  }

  async onSubmit(){
    let user = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }
    await this.auth.login(user)
    this.router.navigate([''])
    this.close()
   
  }
}
