export enum Emoji {
  Heart = '❤️',
  Lol = '🤣',
  Ok = '👍',
  Fire = '🔥',
  Smile = '😁',
  Definitely = '💯',
}

export type TPosition = {
  x: number;
  y: number;
};

export type TReaction = {
  id: number;
  location: TPosition;
  emoji: Emoji;
  comment: string;
};
