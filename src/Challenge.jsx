import React, { useState } from 'react';
import { FlaskConical, Lightbulb, CheckCircle2, RotateCcw } from 'lucide-react';
const tasks={
 area:{title:'Close the gap',task:'Use the triangle controls above to get within 0.01 of the exact ratio 4/3.',hint:'Each round adds a quarter as much area as the previous round. Try adding more rounds.',success:'You did it! Four rounds give 1.328125, less than 0.01 away from 4/3. Five rounds get even closer.'},
 grid:{title:'Make a line meet its points',task:'Adjust the sliders so your line passes through (0, 1) and (2, 3).',hint:'At x = 0, y equals b. Between the two points, y rises by 2 while x rises by 2. What does that make the slope?',success:'Exactly! With m = 1 and b = 1, the line y = x + 1 passes through both points.'},
 speed:{title:'Catch the instant',task:'Make the average speed less than 2.1 m/s by shrinking the time interval.',hint:'The average speed is 2 + h. How small must h be to make the total less than 2.1?',success:'Nice work! The smaller the interval, the closer the average speed gets to 2 m/s—the instantaneous speed at t = 1.'}
};
export default function Challenge({id,level,m,b,h,onReset}){
 const [feedback,setFeedback]=useState(null),[hint,setHint]=useState(false);
 const q=tasks[id];
 const correct=id==='area'?Math.abs(4/3-(4/3)*(1-.25**(level+1)))<.01:id==='grid'?m===1&&b===1:h<.1;
 return <section className="mt-7 bg-white/90 rounded-xl border border-indigo-100 p-5" aria-label="Hands-on challenge">
 <div className="flex items-center gap-2 text-[10px] font-semibold tracking-widest text-indigo-600"><FlaskConical size={15}/> YOUR TURN</div>
 <h4 className="font-serif text-xl mt-3">{q.title}</h4><p className="text-xs leading-6 text-[#68775a] mt-2">{q.task}</p>
 <div className="flex flex-wrap gap-3 mt-4"><button onClick={()=>setFeedback(correct)} className="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium px-4 py-2.5">Check my experiment</button><button onClick={()=>setHint(!hint)} aria-expanded={hint} className="inline-flex items-center gap-1 text-xs text-[#68775a]"><Lightbulb size={14}/>{hint?'Hide hint':'Need a hint?'}</button><button onClick={()=>{onReset();setFeedback(null);setHint(false)}} className="inline-flex items-center gap-1 text-xs text-[#68775a]"><RotateCcw size={13}/> Reset</button></div>
 {hint&&<p className="mt-4 text-xs leading-6 border-l-2 border-amber-300 pl-3">{q.hint}</p>}
 <div aria-live="polite">{feedback!==null&&<p className={`mt-4 text-xs leading-6 rounded-lg p-3 ${feedback&&correct?'bg-emerald-50 text-emerald-800':'bg-amber-50 text-amber-900'}`}>{feedback&&correct?<><CheckCircle2 size={15} className="inline mr-2"/>{q.success}</>:feedback&&!correct?'You changed the experiment. Check again when you’re ready.':'Not quite yet. Keep experimenting with the controls, or open the hint.'}</p>}</div>
 </section>
}
