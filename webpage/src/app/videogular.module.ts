import { NgModule } from "@angular/core";
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { CommonModule } from "@angular/common";
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

const vgModules = [
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
]

@NgModule({
    imports: [
        CommonModule,
        vgModules
    ],
    exports: [
        vgModules
    ]
})

export class videogularModule {}