import { Component, OnInit } from '@angular/core';
import { Pitch } from '../model/Pitch';
import { AuthService } from '../service/auth.service';
import { VoiceRecognitionService } from '../service/voice-recognition.service'

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.scss'],
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

  salvar()
  {
    this.authService.salvar(this.pitch).subscribe((resp:Pitch)=>{
      this.pitch=resp
      alert('pitch salvo com sucesso!')
    })
  }

  startService(){
    this.service.start()
  }

  stopService(){
    this.service.stop()
  }

  
}


