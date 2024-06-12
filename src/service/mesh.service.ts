import { Injectable, OnModuleInit } from '@nestjs/common';
import { getMeshSDK, Sdk } from '../../.mesh';

@Injectable()
export class ApiService implements OnModuleInit {
  private sdk: Sdk;

  async onModuleInit() {
    this.sdk = getMeshSDK();
  }

  async getCountry(code: string) {
    try {
      const result = await this.sdk.GetCountry({ code });
      return result.country;
    } catch (error) {
      console.error('Error executing: ', error);
      throw error;
    }
  }
}
