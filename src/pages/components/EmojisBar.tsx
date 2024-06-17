import React, { useState } from 'react';
import { Emoji, TPosition } from '@/pages/types';

interface EmojisBarProps extends React.HTMLAttributes<HTMLDivElement> {
  position: TPosition;
  onReact: (position: TPosition, emoji: Emoji, comment: string) => void;
}

export default function EmojisBar(props: EmojisBarProps) {
  const reactionTypes = [
    Emoji.Heart,
    Emoji.Lol,
    Emoji.Ok,
    Emoji.Fire,
    Emoji.Smile,
    Emoji.Definitely,
  ];

  const [comment, setComment] = useState<string>('');

  const handleClick = (reactionType: Emoji) => (e: React.MouseEvent) => {
    e.preventDefault();
    props.onReact(props.position, reactionType, comment);
  };

  return (
    <div
      className="bg-slate-800 absolute rounded-bl-3xl rounded-br-3xl rounded-tr-3xl"
      style={{
        left: props.position.x,
        top: props.position.y,
      }}>
      <input
        className="h-full w-full border-b border-blue-gray-200 bg-transparent p-3 font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        type="text"
        placeholder="Comment and react"
        autoFocus
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <div className="flex flex-row gap-2 p-2 text-2xl">
        {reactionTypes.map((rt, i) => (
          <span
            key={i}
            className="cursor-pointer transition-all hover:scale-125"
            onClick={handleClick(rt)}>
            {rt}
          </span>
        ))}
      </div>
    </div>
  );
}
