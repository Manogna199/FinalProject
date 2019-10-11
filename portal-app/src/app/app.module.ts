import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user.component';
import { AppRoutingModule } from './app.routing.module';
import {UserService} from './user/user.service';
import {HttpClientModule} from "@angular/common/http";
import { AddMentorComponent } from './mentor/add-mentor.component';
import { MentorComponent } from './mentor/mentor.component';
import {MentorService} from './mentor/mentor.service';
import { TrainingsComponent } from './trainings/trainings.component';
import {TrainingsService} from './trainings/trainings.service';
import { TechnologiesComponent } from './technologies/technologies.component';
import {TechnologiesService} from './technologies/technologies.service';
import { PaymentComponent } from './payment/payment.component';
import {PaymentService} from './payment/payment.service';
import { AddSkillComponent } from './skill/add-skill.component';
import { SkillComponent } from './skill/skill.component';
import {SkillService} from './skill/skill.service';
import { AddTechnologiesComponent } from './technologies/add-technologies.component';
import { AddTrainingsComponent } from './trainings/add-trainings.component';
import { AddPaymentComponent } from './payment/add-payment.component';
import { UserLoginComponent } from './user/userlogin.component';
import { MentorLoginComponent } from './mentor/mentorlogin.component';
import { AdminLoginComponent } from './admin/adminlogin.component';
import { MentorAdminComponent } from './mentor/mentoradmin.component';
import { HomeUserComponent } from './user/homeuser.component';
import { AdminAccessComponent } from './admin/adminaccess.component';
import { UserAdminComponent } from './user/useradmin.component';
import { IndexComponent } from './index.component';

import { MentorSearchComponent } from './mentor/mentorsearch.component';
import { MentorpageComponent } from './mentor/mentorpage.component';
import { PaymentpageComponent } from './payment/paymentpage.component';
import { TechnologiespageComponent } from './technologies/technologiespage.component';
import { TrainingspageComponent } from './trainings/trainingspage.component';
import { UserpageComponent } from './user/userpage.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MentorComponent,
    TrainingsComponent,
    TechnologiesComponent,
    PaymentComponent,
    SkillComponent,
    AddUserComponent,
    AddMentorComponent,
    AddSkillComponent,
    AddTechnologiesComponent,
    AddTrainingsComponent,
    AddPaymentComponent,
    UserLoginComponent,
    MentorLoginComponent,
    AdminLoginComponent,
    MentorAdminComponent,
    HomeUserComponent,
    AdminAccessComponent,
    UserAdminComponent,
    IndexComponent,
   
    MentorSearchComponent,
    MentorpageComponent,
    PaymentpageComponent,
    TechnologiespageComponent,
    TrainingspageComponent,
    UserpageComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [UserService,MentorService,TrainingsService,TechnologiesService,PaymentService,SkillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
