import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WelcomeComponent } from './templates/welcome/welcome.component';
import { PreregistrationComponent } from './templates/preregistration/preregistration.component';
import { FaqsComponent } from './templates/faqs/faqs.component';
import { MediaComponent } from './templates/media/media.component';

import { HeaderComponent } from './childtemplates/header/header.component';
import { FooterComponent } from './childtemplates/footer/footer.component';

import { CostComponent } from './childtemplates/faqs/cost/cost.component';
import { DefinitionComponent } from './childtemplates/faqs/definition/definition.component';
import { InvestmentComponent } from './childtemplates/faqs/investment/investment.component';
import { PaymentComponent } from './childtemplates/faqs/payment/payment.component';
import { SharesComponent } from './childtemplates/faqs/shares/shares.component';
import { LegalityComponent } from './childtemplates/faqs/legality/legality.component';
import { PreRegistrationComponent } from './childtemplates/faqs/pre-registration/pre-registration.component';
import { ParticipationComponent } from './childtemplates/faqs/participation/participation.component';
import { EntitlementComponent } from './childtemplates/faqs/entitlement/entitlement.component';
import { ProspectusComponent } from './childtemplates/faqs/prospectus/prospectus.component';

import { BsModule } from './shared/bs/bs.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PreregistrationComponent,
    FaqsComponent,
    MediaComponent,
    HeaderComponent,
    FooterComponent,
    CostComponent,
    DefinitionComponent,
    InvestmentComponent,
    PaymentComponent,
    SharesComponent,
    LegalityComponent,
    PreRegistrationComponent,
    ParticipationComponent,
    EntitlementComponent,
    ProspectusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    BsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
