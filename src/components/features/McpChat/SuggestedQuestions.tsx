"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { defaultQuestions } from "@/utils/questions";
import { normalizePath } from "@/utils/strings";

export const SuggestedQuestions = ({ onSend }: { onSend: (question: string) => void }) => {
  const pathname = usePathname() ?? "/";
  const { locale, segments } = useMemo(() => normalizePath(pathname), [pathname]);

  const questions = useMemo(() => defaultQuestions(locale, segments), [locale, segments]);

  return (
    <div className="flex flex-wrap gap-2">
      {questions.map((question) => (
        <button
          type="button"
          key={question}
          onClick={() => onSend(question)}
          className="rounded-full bg-white px-3 py-1 text-start text-sm hover:bg-neutral-200"
          aria-label={`Frage senden: ${question}`}
        >
          {question}
        </button>
      ))}
    </div>
  );
};
