import { Component, OnInit } from '@angular/core';
import { Pitch } from '../model/Pitch';
import { AuthService } from '../service/auth.service';
import { VoiceRecognitionService } from '../service/voice-recognition.service'

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.css'],
  providers: [VoiceRecognitionService]
})
export class SpeechToTextComponent implements OnInit {
  pitch: Pitch = new Pitch
  text: string;

  constructor(
    public service : VoiceRecognitionService,
    private authService:AuthService
  ) { 
    this.service.init()
   }

  ngOnInit(): void{
   
  }
 
  startService(){
    this.service.start(),
    alert
  }

  stopService(){
    this.service.stop()
  }

  
}
