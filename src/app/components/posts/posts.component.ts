import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostService } from 'src/services/posts.service';
import { getFilters } from 'src/app/store/actions';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$: Observable<any> = this.store.select(state => state.posts)
  constructor(private filtersService: PostService, private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(getFilters())
  }

}
