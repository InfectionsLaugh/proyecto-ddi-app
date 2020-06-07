import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface ITopic {
  id?: string,
  data?: string,
  value?: string
}

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  topics: Observable<ITopic[]>;

  constructor(private afdb : AngularFireDatabase) {
    this.topics = this.afdb.list<ITopic>('topics').snapshotChanges().pipe(
      map(a => {
        return a.map(actions => {
          console.log(actions.payload);
          const id = actions.payload.key;
          return { id };
        });
      })
    );

  }

  getTopics(): Observable<ITopic[]> {
    return this.topics;
  }

  getTopic(id: string): Observable<any> {    
    return this.afdb.object<any>('topics/' + id).valueChanges();
  }
}
