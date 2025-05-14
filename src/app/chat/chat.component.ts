// src/app/chat/chat.component.ts
import { Component } from '@angular/core';
import { ChatService } from '../chat.service';  // Import du service

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  userInput = '';  // Texte entré par l'utilisateur
  messages: { role: string, content: string }[] = [];  // Historique des messages
  isChatVisible = false;

  constructor(private chatService: ChatService) {}
 toggleChat() {
    this.isChatVisible = !this.isChatVisible;
  }
  
  sendMessage() {
    if (!this.userInput.trim()) return;
  
    const userMsg = this.userInput;
    this.messages.push({ role: 'user', content: userMsg });
    this.messages.push({ role: 'assistant', content: '⏳ Assistant écrit...' }); // Affiche temporairement
  
    this.chatService.sendMessage(userMsg).subscribe({
      next: res => {
        this.messages.pop(); // Supprimer le message "en cours"
        this.messages.push({ role: 'assistant', content: res.choices[0].message.content });
      },
      error: err => {
        this.messages.pop(); // Supprimer le message "en cours"
        this.messages.push({ role: 'assistant', content: `❌ Erreur : ${err.message}` });
      }
    });
  
    this.userInput = '';
  }
  
}
