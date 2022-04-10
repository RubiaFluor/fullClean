import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-common',
  templateUrl: './modal-common.component.html',
  styleUrls: ['./modal-common.component.scss']
})
export class ModalCommonComponent implements OnInit {
  @Input() public options: any;
  @Input() public modalType: any;
  constructor(public activeModal: NgbActiveModal) { 
    
  }

  ngOnInit(): void {
    console.log(this.options);
  }

  public acceptPay(): void {
  
  }

}
