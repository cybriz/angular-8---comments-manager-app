import { Component }      from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from './service';
import { forkJoin }       from 'rxjs/observable/forkJoin';

@Component({
  selector: 'my-comment',
  templateUrl: './comment.component.html',
  styleUrls: [ './comment.component.css' ],
  providers: [ CommentService ]
})

export class CommentComponent {
  private commentList = [];
  private post_id: string = '';
  private title: string = 'Comments for a Post';
  private titlePost: string = 'Individual Post';
  private searchText: string = '';
  private singlePostList = [];
  
  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.post_id = this.route.snapshot.queryParamMap.get('post_id');
  }

  ngAfterViewInit() {
    this.loadData();
  }

  loadData() {
    forkJoin(
      this.commentService.getCommentsOfPost(this.post_id),
      this.commentService.getSinglePost(this.post_id)
    ).subscribe((res:any)=> {
      this.commentList = res[0];
      this.singlePostList = [res[1]];
    })
  }
}
