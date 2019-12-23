import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { MessageComponent } from "./message/message.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroTestComponent } from "./hero-test/hero-test.component";
import { HeroChildComponent } from "./hero-child/hero-child.component";
import { HeroParentComponent } from "./hero-parent/hero-parent.component";
import { CountdownTimerComponent } from "./countdown-timer/countdown-timer.component";
import { CountdownParentComponent } from "./countdown-parent/countdown-parent.component";
import { ViterComponent } from "./viter/viter.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    MessageComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroTestComponent,
    HeroChildComponent,
    HeroParentComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
    ViterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
