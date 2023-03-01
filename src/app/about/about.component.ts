import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private swPush: SwPush, private httpClient: HttpClient) {}

  async register() {
    // 1. Pushregistrierung anfragen
    const pushSubscription = await this.swPush.requestSubscription({
      serverPublicKey: 'BLI8zF79Z1kCQq72RgzYs0WtQ0ojY3XCqPwmgcNP-8LJIeXRep9sv6h41hErJDewrm3WDbFMPyyPhYO7-ClXabQ',
    });

    // 2. Pushregistrierung an Backend übertragen
    await firstValueFrom(this.httpClient.post('http://localhost:3030/push', pushSubscription));
  }
}
