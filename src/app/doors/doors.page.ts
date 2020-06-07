import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITopic, TopicsService } from '../services/topics.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MqttService } from '../services/mqtt.service';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.page.html',
  styleUrls: ['./doors.page.scss'],
})
export class DoorsPage implements OnInit {
  topicName: string;
  topic: Observable<ITopic>;
  segmentValue: string;


  constructor(private route: ActivatedRoute, private topicsService: TopicsService, private mqtt: MqttService) {
    this.route.params.subscribe(d => {
      this.topicName = d.id;
      console.log(d.id);
      this.topic = this.topicsService.getTopic(d.id);
    });
  }

  ngOnInit() {
    
  }

  segmentChanged(ev: any, door: string) {
    console.log('Segment changed', ev.detail.value);
    // this.openDoor = !this.openDoor;
    this.segmentValue = ev.detail.value;
    this.mqtt.publishMessage('doors/' + door, ev.detail.value);
  }

}
