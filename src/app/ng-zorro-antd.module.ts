import { NgModule } from '@angular/core'

import { NzInputModule } from 'ng-zorro-antd/input'
import { NzSwitchModule } from 'ng-zorro-antd/switch'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzNotificationModule } from 'ng-zorro-antd/notification'
import { NzProgressModule } from 'ng-zorro-antd/progress'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { NzPaginationModule } from 'ng-zorro-antd/pagination'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzRadioModule } from 'ng-zorro-antd/radio'
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm'
import { NzBadgeModule } from 'ng-zorro-antd/badge'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  exports: [
    NzInputModule,
    NzSwitchModule,
    NzIconModule,
    NzFormModule,
    NzNotificationModule,
    NzProgressModule,
    NzModalModule,
    NzPopoverModule,
    NzTableModule,
    NzSelectModule,
    NzTabsModule,
    NzPaginationModule,
    DragDropModule,
    NzSpinModule,
    NzRadioModule,
    NzSkeletonModule,
    NzAvatarModule,
    NzDropDownModule,
    NzToolTipModule,
    NzPopconfirmModule,
    NzBadgeModule,
    NzButtonModule,
    NzCardModule
    
  ],
})
export class NgZorroAntdModule {}
