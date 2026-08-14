import { useEffect, useState } from "react";

type TypewriterProps = {
  words: string[];
  className?: string;
};

export function Typewriter({ words, className }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length] ?? "";
    const done = !deleting && text === word;
    const cleared = deleting && text === "";

    const timeout = window.setTimeout(
      () => {
        if (done) {
          setDeleting(true);
          return;
        }
        if (cleared) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
          return;
        }
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      },
      done ? 1700 : deleting ? 38 : 72,
    );

    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span className={className}>
      <span aria-live="polite">{text}</span>
      <span className="caret ml-0.5 inline-block text-lime" aria-hidden>
        |
      </span>
    </span>
  );
}
