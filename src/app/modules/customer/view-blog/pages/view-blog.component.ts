import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {
  public data = "<p>Xin chào, hãy viết bài tại đây</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>";
  constructor() { }

  ngOnInit(): void {
  }

}
