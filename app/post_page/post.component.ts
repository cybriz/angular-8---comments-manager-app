import { Component, NgModule } from '@angular/core';
import { Router }              from '@angular/router';
import { PostService }         from './service';

@Component({
  selector: 'my-post',
  templateUrl: './post.component.html',
  styleUrls: [ './post.component.css' ],
  providers: [ PostService ]
})

export class PostComponent {
  private data = [];
  private title: string = 'All Post';
  private searchText: string = '';

  constructor(
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.postService.getAllPost().subscribe((res: any) => { 
      this.data = res;
    });
  }

  redirect(post_id: string) {
    const id = post_id
    this.router.navigate(['/comment'], { queryParams: { post_id: id }});
  }
}
