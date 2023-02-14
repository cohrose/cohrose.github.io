import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormatPipe } from './shared/format.pipe';
import { FormatDashPipe } from './shared/format.pipe';
import { ReplaceDashPipe } from './shared/format.pipe';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PortfolioHomeComponent } from './components/home/home.component';

const MatModules = [
  FlexLayoutModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatTooltipModule
];

@NgModule({
  declarations: [
    AppComponent,
    PortfolioHomeComponent,
    FormatPipe,
    FormatDashPipe,
    ReplaceDashPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ...MatModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
