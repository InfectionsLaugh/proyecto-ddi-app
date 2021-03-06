import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITopic, TopicsService } from '../services/topics.service';
import { ActivatedRoute } from '@angular/router';
import { MqttService } from '../services/mqtt.service';

@Component({
  selector: 'app-outside',
  templateUrl: './outside.page.html',
  styleUrls: ['./outside.page.scss'],
})
export class OutsidePage implements OnInit {
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

  toggleLight(ev: any, light: string) {
    this.mqtt.publishMessage('outside/' + light, (ev.detail.checked) ? 'on' : 'off');
  }

}
