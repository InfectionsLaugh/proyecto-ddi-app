import { Component, OnInit } from '@angular/core';
import { ITopic, TopicsService } from '../services/topics.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MqttService } from '../services/mqtt.service';

@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.page.html',
  styleUrls: ['./tvs.page.scss'],
})
export class TvsPage implements OnInit {
  topicName: string;
  topic: Observable<ITopic>;


  constructor(private route: ActivatedRoute, private topicsService: TopicsService, private mqtt: MqttService) {
    this.route.params.subscribe(d => {
      this.topicName = d.id;
      console.log(d.id);
      this.topic = this.topicsService.getTopic(d.id);
    });
  }

  ngOnInit() {
  }

}
