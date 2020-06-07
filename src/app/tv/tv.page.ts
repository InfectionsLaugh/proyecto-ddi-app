import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITopic, TopicsService } from '../services/topics.service';
import { ActivatedRoute } from '@angular/router';
import { MqttService } from '../services/mqtt.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.page.html',
  styleUrls: ['./tv.page.scss'],
})
export class TvPage implements OnInit {
  topicName: string;
  topic: Observable<ITopic>;
  tvTurned: string = "off";
  tvChannel;
  tvVolume;
  turnTv = true;
  tvChangeVolume;
  tvChangeChannel;
  press: number = 0;

  constructor(private route: ActivatedRoute, private topicsService: TopicsService, private mqtt: MqttService) {
    this.route.params.subscribe(d => {
      this.topicName = d.id;
      console.log(d.id);
      this.topicsService.getTopic('tv/' + d.id).subscribe(data => {
        console.log(data);
        this.tvTurned = data.turned;
        this.tvChannel = data.channel;
        this.tvVolume = data.volume;
        this.tvVolume *= 100;
      });
    });
  }

  ngOnInit() {
    
  }

  toggleTv(ev: any, tv: string) {
    if(ev.detail.value == 'on')
      this.turnTv = false;
    else
      this.turnTv = true;

    this.mqtt.publishMessage('tv/' + this.topicName, ev.detail.value);
  }

  changeVolume(inc: number) {
    var message = (inc > 0) ? 'volume_up' : 'volume_down';
    this.mqtt.publishMessage('tv/' + this.topicName, message);
  }

  changeChannel(inc: number) {
    var message = (inc > 0) ? 'channel_up' : 'channel_down';
    this.mqtt.publishMessage('tv/' + this.topicName, message);
  }

}
