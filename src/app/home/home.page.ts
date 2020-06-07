import { Component } from '@angular/core';
import { MQTTService } from 'ionic-mqtt';
import { ITopic, TopicsService } from '../services/topics.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public topics: Observable<ITopic[]>;

  cardProperties = {
    "alarm": {
      "img": "assets/img/alarm.jpg",
      "icon": "finger-print"
    },
    "doors": {
      "img": "assets/img/door.jpg",
      "icon": "journal"
    },
    "lights": {
      "img": "assets/img/light.jpg",
      "icon": "bulb"
    },
    "outside": {
      "img": "assets/img/outside.jpg",
      "icon": "flashlight"
    },
    "sensors": {
      "img": "assets/img/sensor.jpg",
      "icon": "thermometer"
    },
    "tv": {
      "img": "assets/img/tv.jpg",
      "icon": "tv"
    },
  };

  pages = {
    "tv": {
      "url": "/tvs"
    },
    "doors": {
      "url": "/doors"
    },
    "alarm": {
      "url": "/alarm"
    },
    "lights": {
      "url": "/lights"
    },
    "outside": {
      "url": "/outside"
    },
    "sensors": {
      "url": "/sensors"
    }
  };

  constructor(private topicsService: TopicsService) {
  }

  ngOnInit() {
    this.topics = this.topicsService.getTopics();
  }
}
