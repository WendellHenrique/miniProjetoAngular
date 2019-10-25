import { Component } from '@angular/core'
import { templateJitUrl } from '@angular/compiler';

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css']
})
export class TopoComponent {
    public titulo: string = 'Aprendendo ingles'
}