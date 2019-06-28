import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotifierModule } from 'angular-notifier';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ImageInputComponent } from './input/image-input/image-input.component';
import { TabBackComponent } from './layout/tab/tab-back/tab-back.component';
import { TabChestComponent } from './layout/tab/tab-chest/tab-chest.component';
import { TabPantsComponent } from './layout/tab/tab-pants/tab-pants.component';
import { TabHatComponent } from './layout/tab/tab-hat/tab-hat.component';
import { NotifierErrorHandler } from './event/notifier-error-handler/notifier-error-handler.component';
import { FileTemplateContainerComponent } from './layout/template/file-template-container/file-template-container.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ImageInputComponent,
    TabBackComponent,
    TabChestComponent,
    TabPantsComponent,
    TabHatComponent,
    FileTemplateContainerComponent
  ],
  imports: [
    NgbModule,
    NotifierModule.withConfig({
      position: {
        horizontal: { position: 'right' },
        vertical: { position: 'top' }
      }
    }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: NotifierErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
