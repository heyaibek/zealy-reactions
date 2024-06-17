import React from 'react';
import { TReaction } from '@/pages/types';

interface EmojiViewProps extends React.HTMLAttributes<HTMLDivElement> {
  item: TReaction;
}

export function EmojiView(props: EmojiViewProps) {
  return (
    <div
      className="absolute bg-slate-800 w-[50px] h-[50px] text-center p-2 rounded-full text-2xl transition-all hover:scale-125 z-0 hover:z-150"
      style={{
        left: props.item.location.x - 25,
        top: props.item.location.y - 25,
      }}>
      <span>{props.item.emoji}</span>
      {props.item.comment && (
        <div className="absolute whitespace-normal rounded-lg bg-black py-1.5 px-3 text-sm text-white border border-slate-800">
          {props.item.comment}
        </div>
      )}
    </div>
  );
}
