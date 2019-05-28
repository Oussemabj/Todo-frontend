import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message ='some welcome Message'
  welcomeMessageFromService: string
  name=''

  constructor(
    private router: ActivatedRoute,
    private service :WelcomeDataService
    ) { }

  ngOnInit() {
    
  this.name=this.router.snapshot.params['name'];
  }
  getWelcomeMessage() {
   this.service.executeHelloWorldBeanService().subscribe(
     response => this.handleSuccesfullRespone (response),
     error=>this.handleErrorRespnse(error)

   );  
}
getWelcomeMessageWithParameter () {
  this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
    response => this.handleSuccesfullRespone (response),
    error=>this.handleErrorRespnse(error)

  );  
}
handleSuccesfullRespone(response){
 this.welcomeMessageFromService=response.message

}
handleErrorRespnse(error){
  this.welcomeMessageFromService= error.error.message
}
}
