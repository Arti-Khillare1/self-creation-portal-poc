import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { createCustomElement } from '@angular/elements';
import { ProjectHomeComponent } from 'project';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {
  constructor(private inject:Injector) {}
  ngDoBootstrap() {
    const customElement = createCustomElement(ProjectHomeComponent, {
      injector:this.inject
    })
    customElements.define('my-web-comp',customElement)
  }
}
