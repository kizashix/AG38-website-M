import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([
    '> System initialized...',
    '> Type "help" or "?" for available commands'
  ]);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const commands = {
    help: () => [
      'Available commands:',
      'about    - Learn about me',
      'skills   - View my technical skills',
      'projects - List my projects',
      'contact  - Get my contact info',
      'clear    - Clear terminal'
    ],
    about: () => [
      'Ammar Alshehri',
      'Cybersecurity Analyst at JIGPC',
      'Specializing in:',
      '- Advanced security solutions',
      '- Risk assessment and mitigation',
      '- IT infrastructure optimization',
      '- Data Loss Prevention (DLP)'
    ],
    skills: () => [
      'Technical Skills:',
      '- Cybersecurity & Risk Management',
      '- IT Infrastructure Security',
      '- Data Loss Prevention (DLP)',
      '- Policy Development & Compliance',
      '- Microsoft 365 Security Suite',
      '- ITIL-based Service Management'
    ],
    projects: () => [
      'Recent Projects:',
      '- Enterprise DLP Implementation',
      '- Security Infrastructure Modernization',
      '- IT Service Management Transformation',
      '- Network Security Enhancement'
    ],
    contact: () => [
      'Contact Information:',
      'LinkedIn: linkedin.com/in/ams38',
      'GitHub: github.com/kizashix',
      'Email: [Contact via LinkedIn]'
    ],
    clear: () => {
      setOutput([]);
      return [];
    }
  };

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const cmd = input.toLowerCase().trim();
      const newOutput = [...output, `> ${input}`];
      
      if (cmd in commands || cmd === '?') {
        newOutput.push(...(cmd === '?' ? commands.help() : commands[cmd as keyof typeof commands]()));
      } else if (cmd) {
        newOutput.push('Command not found. Type "help" for available commands.');
      }
      
      setOutput(newOutput);
      setInput('');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-black/80 text-[#00FF00] font-mono p-6 rounded-sm border border-[#003B00] backdrop-blur-sm">
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-[#003B00]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF3399]"></div>
          <div className="w-3 h-3 rounded-full bg-[#00C2FF]"></div>
          <div className="w-3 h-3 rounded-full bg-[#00FF00]"></div>
        </div>
        <div className="text-sm text-[#00C2FF]">ams@terminal:~$</div>
      </div>
      <div 
        ref={terminalRef} 
        className="h-[24rem] overflow-y-auto mb-4 space-y-1 scrollbar-thin scrollbar-thumb-[#003B00] scrollbar-track-transparent"
      >
        {output.map((line, index) => (
          <p key={index} className="font-mono">
            {line.startsWith('>') ? (
              <span className="text-[#00C2FF]">{line}</span>
            ) : (
              <span className="text-[#00FF00]">{line}</span>
            )}
          </p>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-[#00C2FF]">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleEnter}
          className="bg-transparent border-none text-[#00FF00] focus:outline-none flex-grow"
          placeholder="Type 'help' or '?' for commands..."
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;