export interface GameplayHistory {
  timeStamp: Date;
  action: string;
}

export enum selectedAction {
  'All',
  'Game Started',
  'Game Paused',
  'Game Lost',
  'Line Cleared',
}
