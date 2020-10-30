import { Component, Input, OnInit } from '@angular/core';
import { NgbModal , ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class ModalDetailUserComponent implements OnInit {

  @Input('infoUser')
  infoUser;

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
    
  }


}
