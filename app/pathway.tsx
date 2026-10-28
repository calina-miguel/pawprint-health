"use client";

import { useState } from "react";

const questions = [
  { title: "Who is in your care circle?", choices: ["A curious puppy", "A settled adult", "A cherished senior"] },
  { title: "What would you like to keep in view?", choices: ["Everyday routines", "Preventative visits", "A new question"] },
  { title: "What kind of reminder feels right?", choices: ["A gentle nudge", "A short checklist", "A note for the vet"] },
];
const plans = [
  ["The Growing Days Plan", "Keep a simple note of meals, sleep, play, and the questions that come up as routines change. Bring anything concerning to your veterinary team."],
  ["The Steady Days Plan", "Choose one recurring care reminder to review, keep appointment notes together, and write down changes you want to discuss at the next visit."],
  ["The Comfort Days Plan", "Track comfort, appetite, mobility, and the details that matter to your animal. Share changes with your veterinarian so they can guide next steps."],
];

export function Pathway() {
  const [month, setMonth] = useState(0); const [answers, setAnswers] = useState<number[]>([]); const [ready, setReady] = useState(false);
  const choose = (i: number) => setAnswers((old) => { const next = old.slice(0, month); next[month] = i; return next; });
  return <div className="pathway pathway--paw" id="paw-pathway" aria-live="polite">
    <div className="pathway__header"><span className="pathway__pawmark">P</span><span>{ready ? "YOUR CARE NOTE" : `A GOOD FIRST STEP / 0${month + 1}`}</span><b>{ready ? "♥" : `${month + 1} OF 3`}</b></div>
    {ready ? <div className="pathway__result"><div className="pathway__pet-badge">✿</div><h3>{plans[answers[0] ?? 0][0]}</h3><p>{plans[answers[0] ?? 0][1]}</p><div className="pathway__care-note">A thoughtful note for your next conversation with your veterinary team.</div><small>Email follow-up is paused until sender-domain setup is complete.</small><button onClick={() => { setReady(false); setMonth(0); setAnswers([]); }}>Build another care note</button></div> : <>
      <div className="pathway__progress"><i style={{ width: `${((month + 1) / 3) * 100}%` }}/></div><h3>{questions[month].title}</h3><div className="pathway__choices">{questions[month].choices.map((item, i) => <button key={item} onClick={() => choose(i)} className={answers[month] === i ? "selected" : ""} aria-pressed={answers[month] === i}><span className="pathway__choice-icon">{["●", "✿", "♥"][i]}</span><b>{item}</b><span>{answers[month] === i ? "Selected" : "Choose"}</span></button>)}</div>
      <div className="pathway__actions"><button onClick={() => setMonth(Math.max(0, month - 1))} disabled={!month}>Back</button><button onClick={() => month < 2 ? setMonth(month + 1) : setReady(true)} disabled={answers[month] === undefined}>{month === 2 ? "Build our care note" : "Next step"}<span>↗</span></button></div>
    </>}
  </div>;
}
