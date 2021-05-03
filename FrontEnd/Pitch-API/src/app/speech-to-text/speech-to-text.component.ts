import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Pitch } from '../model/Pitch';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { VoiceRecognitionService } from '../service/voice-recognition.service'

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.css'],
  providers: [VoiceRecognitionService]
})
export class SpeechToTextComponent implements OnInit {
  pitch: Pitch = new Pitch()
  text: string;
  user:User = new User()

  constructor(
    public service : VoiceRecognitionService,
    private authService:AuthService
  ) { 
    this.service.init()
   }

  ngOnInit(): void{
   
  }
 
  salvar(){
    this.pitch.texto=this.service.text
    this.user.id = environment.id
    this.pitch.usuario=this.user
     this.authService.salvar(this.pitch).subscribe((resp)=>{
      this.pitch=resp
      alert('foi!')
    }) 
  }

  startService(){
    this.service.start(),
    alert
  }

  stopService(){
    this.service.stop()
  }

  
}
