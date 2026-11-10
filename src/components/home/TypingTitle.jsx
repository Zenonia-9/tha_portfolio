import Typewriter from "typewriter-effect";
const titles = ["Your Role", "Your Specialty", "Your Focus"];
export default function TypingTitle() {
  return <div className="font-mono text-sm uppercase tracking-[0.22em] text-secondary"><Typewriter options={{strings:titles,autoStart:true,loop:true,delay:55,deleteSpeed:28}}/></div>;
}
