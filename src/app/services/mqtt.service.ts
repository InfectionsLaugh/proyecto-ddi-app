import { Injectable } from '@angular/core';
import { MQTTService } from 'ionic-mqtt';

@Injectable({
  providedIn: 'root'
})
export class MqttService {
  private _mqttClient: any;

  private MQTT_CONFIG: {
    host: string,
    port: number,
    clientId: string,
  } = {
    host: "192.168.1.71",
    port: 9001,
    clientId: "ionic",
  };

  private TOPICS: string[] = [
    'tv/#',
    'doors/#',
    'alarm/#',
    'lights/#',
    'outside/#',
    'sensors/#',
  ];

  constructor(private mqttService: MQTTService) {
    this._mqttClient = this.mqttService.loadingMqtt(this._onConnectionLost, this._onMessageArrived, this.TOPICS, this.MQTT_CONFIG);
  }

  private _onConnectionLost(responseObject) {
    // connection listener
    // ...do actions when connection lost
    console.log('_onConnectionLost', responseObject);
  }

  private _onMessageArrived(message) {
    // message listener
    // ...do actions with arriving message
    console.log('message', message);
  }

  public sendMessage(topic, message) {
    console.log('sendMessage')
    this.mqttService.sendMessage(topic, message);
  }

  public publishMessage(topic, message) {
    console.log('publishMessage')
    this.mqttService.sendMessage(topic, message);
  }
}
