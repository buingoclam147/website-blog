import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NzMessageService } from 'ng-zorro-antd/message';
import { stringify } from 'querystring';
import { Observable, observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { User } from 'src/app/share/models/user.model';

@Component({
  selector: 'app-user-infomation',
  templateUrl: './user-infomation.component.html',
  styleUrls: ['./user-infomation.component.scss']
})
export class UserInfomationComponent implements OnInit {
  downloadURL: Observable<string>;
  isUpdate = true;
  fb;
  currentUser;
  tempUserInfomation: User;
  userInfomation: User;
  dateOfBirth;
  constructor(
    private auth: AuthService,
    private storage: AngularFireStorage,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.auth.currentUser$.subscribe(id => {
      this.currentUser = id;
      this.auth.getPersonalInfomation(this.currentUser).subscribe(data => {
        this.userInfomation = data;
        this.tempUserInfomation = { ...data };
      });
    })
  }
  update() {
    this.userInfomation = { ...this.tempUserInfomation, dateOfBirth: new Date(this.tempUserInfomation.dateOfBirth).getTime() }
    this.auth.updateUser(this.currentUser, this.userInfomation).subscribe(data => {
      this.isUpdate = !this.isUpdate
      this.message.success('Cập nhật thông tin thành công', {
        nzDuration: 5000
      });
      this.auth.updateImage(data.avatar);
    })
  }
  onFileSelected(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `avatar/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`avatar/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
              this.tempUserInfomation.avatar = this.fb;
              console.log(this.tempUserInfomation);
            }
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url)
        }
      });
  }
}
