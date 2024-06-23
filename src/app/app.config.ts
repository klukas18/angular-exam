import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { TetrisGameComponent } from './tetris-game/tetris-game.component';
import { IntroPageComponent } from './intro-page/intro-page.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: 'intro', component: IntroPageComponent },
      { path: 'game/:colors', component: TetrisGameComponent },
      { path: '**', redirectTo: 'intro' },
    ]),
    provideHttpClient(),
  ],
};
