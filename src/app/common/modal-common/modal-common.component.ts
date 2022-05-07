import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-common',
  templateUrl: './modal-common.component.html',
  styleUrls: ['./modal-common.component.scss']
})
export class ModalCommonComponent implements OnInit {
  @Input() public options: any;
  @Input() public modalType: any;
  @Input() public isVisible: boolean;
  @Output() public action = new  EventEmitter<boolean>();
  constructor(public activeModal: NgbActiveModal) { 
    this.isVisible = false;
  }

  ngOnInit(): void {
console.log(this.options);
  }

  public acceptPay() {
  
  }

  public payCashOrCard(): void {
    this.action.emit(true)
  }

  public cancelPay() {
    this.activeModal.close()
  }

  public handleCancel(): void {
    this.isVisible = false
  }

}
