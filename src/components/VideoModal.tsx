import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE } from './fx';

const YOUTUBE_VIDEO_ID = 'jefp7vkPnuE';
const YOUTUBE_URL = 'https://youtu.be/jefp7vkPnuE?si=nYDAhWtxrKvmWpN-';

export default function VideoModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeBtn.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      prevFocus?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Reference Video"
    >
      <motion.div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        className="relative z-10 flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-2 shadow-2xl"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.25 } }}
        transition={{ duration: 0.4, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-crimson text-xs font-bold text-white">
              ▶
            </span>
            <div>
              <p className="font-display text-lg tracking-wide text-bone sm:text-xl">LET&apos;S BUILD</p>
              <p className="text-[11px] text-mist">Reference Video</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-bone transition hover:border-white/40 hover:bg-white/5 sm:inline-flex items-center gap-1.5"
            >
              Open in YouTube ↗
            </a>
            <button
              ref={closeBtn}
              type="button"
              onClick={onClose}
              aria-label="Close video"
              data-cursor="close"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-bone transition hover:bg-white/20"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
            title="Let's Build — Reference Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full border-0"
          />
        </div>

        {/* Footer info bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 py-3 text-xs text-mist sm:px-6">
          <p>
            Reference Video for <span className="font-semibold text-bone">Let&apos;s Build</span>
          </p>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noreferrer"
            className="text-crimson-2 hover:underline sm:hidden"
          >
            Open in YouTube ↗
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

