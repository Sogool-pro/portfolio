import { FormEvent, useMemo, useRef, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

type Message = {
  role: "assistant" | "user";
  text: string;
};

const suggestedQuestions = [
  "Who is Neljhan?",
  "What projects has he built?",
  "Tell me about FireGuard",
  "What technologies does he use?",
];

const knowledge = {
  intro:
    "Neljhan is a full-stack web developer from the Philippines with a BS Information Technology background. He builds responsive, scalable web applications and focuses on clean code, practical interfaces, and useful products.",
  availability:
    "Neljhan is available for hire and open to full-time roles, freelance work, and collaborations.",
  skills:
    "His technical skill set includes HTML5, CSS3, JavaScript, TypeScript, React.js, Tailwind CSS, PHP, Node.js, Express, Python, REST APIs, MySQL, PostgreSQL, MongoDB, Git, GitHub, responsive design, AI tools, and workflow automation.",
  automation:
    "For automation, Neljhan works with n8n and Make.com. He is also comfortable with AI tools and workflow design.",
  contact:
    "You can contact Neljhan at neljhan.p.redondo@gmail.com. His GitHub is github.com/complidev, and his LinkedIn is linkedin.com/in/neljhan.",
  projects:
    "Neljhan's featured projects include FireGuard, TaskFlow, Savouramen, Panabo City Park, BookFi, and an Inventory Management System.",
  fireguard:
    "FireGuard is a real-time fire safety platform integrated with IoT sensors. It monitors room temperature, humidity, smoke/gas, and carbon monoxide levels, with smart alerts, logs, reports, and emergency contact access. It uses React JS, Node.js, Firebase, and Tailwind CSS.",
  taskflow:
    "TaskFlow is a task management system built with PHP, HTML, CSS, and JavaScript. It integrates with Google Workspace to support organized workflows, collaboration, and task tracking.",
  savouramen:
    "Savouramen is a restaurant website for a ramen business, built with HTML, CSS, Bootstrap, and JavaScript. It presents the menu, brand, and customer-facing information for diners in Panabo City.",
  bookfi:
    "BookFi is a book management system built with Java and MySQL. It helps organize book records, track details, and support library or collection management workflows.",
  inventory:
    "The Inventory Management System focuses on MySQL-backed records, SQL queries, reporting, and practical stock management.",
  panabo:
    "Panabo City Park is a Google Sites project that presents organized location details, public information, and a clean browsable page structure.",
};

function getBotReply(input: string) {
  const question = input.toLowerCase();

  if (question.match(/fire\s*guard|fireguard|iot|sensor|firebase/)) {
    return knowledge.fireguard;
  }

  if (question.match(/task\s*flow|taskflow|google workspace|workflow|collaboration/)) {
    return knowledge.taskflow;
  }

  if (question.match(/savouramen|ramen|restaurant/)) {
    return knowledge.savouramen;
  }

  if (question.match(/bookfi|book|library/)) {
    return knowledge.bookfi;
  }

  if (question.match(/inventory|mysql|sql|query|queries|stock/)) {
    return knowledge.inventory;
  }

  if (question.match(/panabo|city park|google sites/)) {
    return knowledge.panabo;
  }

  if (question.match(/project|portfolio|built|work/)) {
    return `${knowledge.projects} ${knowledge.fireguard} ${knowledge.taskflow}`;
  }

  if (question.match(/skill|tech|technology|stack|language|framework/)) {
    return knowledge.skills;
  }

  if (question.match(/automation|automate|n8n|make\.com|make|ai/)) {
    return knowledge.automation;
  }

  if (question.match(/contact|email|github|linkedin|hire|available/)) {
    return `${knowledge.availability} ${knowledge.contact}`;
  }

  if (question.match(/who|about|neljhan|background|degree|education/)) {
    return knowledge.intro;
  }

  return `I can answer questions about Neljhan's background, skills, projects, availability, and contact details. Try asking about FireGuard, TaskFlow, his tech stack, or how to contact him.`;
}

export function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi, I'm Neljhan's portfolio assistant. Ask me about his projects, skills, experience, or contact details.",
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const latestMessages = useMemo(() => messages.slice(-8), [messages]);

  const ask = (question: string) => {
    const trimmed = question.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
      { role: "assistant", text: getBotReply(trimmed) },
    ]);
    setInput("");
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    ask(input);
  };

  const openChat = () => {
    setOpen(true);
    window.setTimeout(() => inputRef.current?.focus(), 150);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 z-[60] w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-xl border border-[#ddd8cf] dark:border-[#302a21] bg-white dark:bg-[#11100d] shadow-2xl shadow-[#1a1710]/15"
          >
            <div className="flex items-center justify-between border-b border-[#f0ede7] dark:border-[#302a21] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1a1710] dark:bg-[#f9f7f4] text-[#f9f7f4] dark:text-[#1a1710]">
                  <Bot size={17} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#1a1710] dark:text-[#f9f7f4]">
                    Ask about Neljhan
                  </p>
                  <p className="text-[11px] text-[#9e9589] dark:text-[#8f8578]">
                    Portfolio assistant
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded-md p-1.5 text-[#6b6358] dark:text-[#b8afa2] hover:bg-[#f9f7f4] dark:hover:bg-[#181611] hover:text-[#1a1710] dark:hover:text-[#f9f7f4] transition-colors"
              >
                <X size={17} />
              </button>
            </div>

            <div className="max-h-[360px] space-y-3 overflow-y-auto px-4 py-4">
              {latestMessages.map((message, index) => (
                <div
                  key={`${message.role}-${index}-${message.text.slice(0, 12)}`}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <p
                    className={`max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                      message.role === "user"
                        ? "bg-[#1a1710] dark:bg-[#f9f7f4] text-[#f9f7f4] dark:text-[#1a1710]"
                        : "bg-[#f9f7f4] dark:bg-[#181611] text-[#6b6358] dark:text-[#b8afa2] border border-[#f0ede7] dark:border-[#302a21]"
                    }`}
                  >
                    {message.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-[#f0ede7] dark:border-[#302a21] px-4 py-3">
              <div className="mb-3 flex flex-wrap gap-2">
                {suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => ask(question)}
                    className="rounded-full border border-[#ddd8cf] dark:border-[#302a21] px-2.5 py-1 text-[11px] text-[#6b6358] dark:text-[#b8afa2] hover:border-[#b5410d] hover:text-[#b5410d] transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about projects, skills..."
                  className="min-w-0 flex-1 rounded-lg border border-[#ddd8cf] dark:border-[#302a21] bg-[#f9f7f4] dark:bg-[#181611] px-3 py-2 text-sm text-[#1a1710] dark:text-[#f9f7f4] placeholder-[#9e9589] dark:placeholder-[#6f665c] focus:border-[#b5410d]/60 focus:outline-none focus:ring-1 focus:ring-[#b5410d]/20"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#b5410d] text-white hover:bg-[#9f390b] transition-colors"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={open ? () => setOpen(false) : openChat}
        aria-label={open ? "Close portfolio chat" : "Open portfolio chat"}
        className="fixed bottom-6 right-4 z-[999] inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#1a1710] dark:bg-[#f9f7f4] px-5 text-sm text-[#f9f7f4] dark:text-[#1a1710] shadow-xl shadow-[#1a1710]/25 hover:scale-105 transition-transform"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        <span className="font-semibold">{open ? "Close" : "Ask about me"}</span>
      </button>
    </>
  );
}
