import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITopic, TopicsService } from '../services/topics.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.page.html',
  styleUrls: ['./alarm.page.scss'],
})
export class AlarmPage implements OnInit {
  topicName: string;
  topic: Observable<ITopic>;

  constructor(private route: ActivatedRoute, private topicsService: TopicsService, router: Router) {
    this.route.params.subscribe(d => {
      this.topicName = d.id;
      console.log(d.id);
      this.topic = this.topicsService.getTopic(d.id);
    });
  }

  ngOnInit() {
    
  }

}
