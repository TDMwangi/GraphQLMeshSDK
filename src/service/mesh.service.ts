import { Injectable, OnModuleInit } from '@nestjs/common';
import { getMeshSDK, Sdk } from '../../.mesh';

@Injectable()
export class ApiService implements OnModuleInit {
  private sdk: Sdk;

  async onModuleInit() {
    this.sdk = getMeshSDK();
  }
}
