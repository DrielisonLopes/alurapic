import { Component } from '@angular/core'

@Component({
    selector: 'ap-photo',
    templateUrl: './photo.component.html'
})

export class PhotoComponent {

    descripition='Logo';
    url='data:image/jpeg;base64,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';
}