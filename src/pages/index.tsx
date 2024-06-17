import React, { useState } from 'react';
import Image from 'next/image';
import { TPosition, TReaction } from '@/pages/types';
import { getRandomInt } from '@/pages/utils';
import EmojisBar from '@/pages/components/EmojisBar';
import { EmojiView } from '@/pages/components/EmojiView';
import Link from 'next/link';

export default function Home() {
  const [newReactionPosition, setNewReactionPosition] = useState<TPosition | null>(null);
  const [items, setItems] = useState<Array<TReaction>>([]);

  const handleClickClear = (e: React.MouseEvent) => {
    setItems([]);
  };

  const handleOnCanvasClick = (e: React.MouseEvent) => {
    if (newReactionPosition == null) {
      setNewReactionPosition({
        x: e.clientX,
        y: e.clientY,
      });
    } else {
      setNewReactionPosition(null);
    }
  };

  return (
    <main className="h-screen flex flex-col">
      {/* NAVIGATION BAR */}
      <nav className="flex flex-row p-5 gap-5 items-center">
        <Image src="https://apply.zealy.io/zealy.svg" alt="Zealy Logo" width="100" height="24" />
        <div className="grow text-center">
          Click anywhere on the page and react with an emoji 😜
        </div>
        <button
          className="select-none rounded-lg bg-amber-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={handleClickClear}>
          Clear
        </button>
      </nav>

      {/* CANVAS */}
      <div className="grow" onClick={handleOnCanvasClick}>
        {items.map((item) => (
          <EmojiView key={item.id} item={item} />
        ))}
        {!!newReactionPosition && (
          <EmojisBar
            position={newReactionPosition}
            onReact={(position, emoji, comment) => {
              setItems([
                ...items,
                {
                  id: getRandomInt(100),
                  location: position,
                  emoji,
                  comment,
                },
              ]);
            }}
          />
        )}
      </div>

      {/* FOOTER */}
      <footer className="text-center p-5">
        <p>
          &lt;/&gt; by @heyaibek ·{' '}
          <Link target="_blank" href="https://github.com/heyaibek">
            GitHub
          </Link>{' '}
          ·{' '}
          <Link target="_blank" href="https://linkedin.com/in/heyaibek">
            LinkedIn
          </Link>
        </p>
      </footer>
    </main>
  );
}
