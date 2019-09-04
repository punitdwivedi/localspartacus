import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule, defaultCmsContentConfig } from '@spartacus/storefront';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002',
          prefix: '/rest/v2/',
          legacy: false
        }
      },
      authentication: {
        client_id: 'mobile_android',
        client_secret: 'secret'
      },
      context: {
        baseSite: ['electronics']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
