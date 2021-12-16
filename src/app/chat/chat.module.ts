import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatbotComponent } from '../components/chatbot/chatbot.component';
import { ChatService } from '../services/chat.service';

@NgModule({
  declarations: [
    ChatbotComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ChatbotComponent
  ],
  providers:[
    ChatService
  ]
  
})
export class ChatModule { }
