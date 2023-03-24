const terminalOutput = document.querySelector('.terminal-output');
const terminalPrompt = document.querySelector('.terminal-prompt');
const terminalInput = document.querySelector('.terminal-input');
let tr = document.getElementsByClassName("terminall");

const helpCommand = {
  command: 'help',
  description: 'Display a list of available commands',
  run: function() {
    displayOutput(['<br>', 
      '<span class="command">help</span>             Display a list of available commands',
      '<span class="command">projects</span>        View coding projects',
      '<span class="command">whois</span>        View coding projects',
      '<span class="command">contact</span>        View coding projects',
      '<span class="command">social</span>        View coding projects',
      
      '<br>'
    ]);
  }
};

const projectsCommand = {
  command: 'projects',
  description: 'View coding projects',
  run: function() {
    displayOutput(['<br>', 
      'see',
      '<br>'
    ]);
  }
};

const whoisCommand = {
    command: 'whois',
    description: 'About me',
    run: function() {
      displayOutput(['<br>', 
      "Hey, I'm Sameer Sha‹",
      "a Computer Engineering Syudent at MIT Academy of Engineering, pune,",
      " who has passion for building clean web applications with ",
      "intuitive functionality. I enjoy the process of turning ideas into ",
      "reality using creative solutions. I’m always curious ",  
      " about learning new skills, tools, and concepts.",
        '<br>'
      ]);
    }
  };

const contactCommand = {
    command: 'contact',
    description: 'Contact me',
    run: function() {
      displayOutput(['<br>', 
        'eamil: sameersha279@gmilcom',
        'linkedin: linkedin.com./sameer-sha-666245',
        '<br>'
      ]);
    }
  };

  const socialCommand = {
    command: 'social',
    description: 'social',
    run: function() {
      displayOutput(['<br>', 
      'Github <a href="https://github.com/sameersha158" > https://github.com/sameersha158</a>  ',
      'LinkedIn: <a href="" >  https://www.linkedin.com/in/sameer-sha-67732222a/ </a>',
      'GeeksForGeek: <a href="https://auth.geeksforgeeks.org/user/sameer158/practice/smeer158" >  https://auth.geeksforgeeks.org/user/sameer158/practice/smeer158 </a>',
      'Leetode: <a href="https://leetcode.com/sameerxv8" >  https://leetcode.com/sameerxv8 </a>',
      'Codechef: <a href="https://www.codechef.com/users/itachi158"> https://www.codechef.com/users/itachi158</a>',
        '<br>'
      ]);
    }
  };


  const clearCommand = {
    command: 'clear',
    description: 'Clear the terminal',
    run: function() {
      clearTerminal();
    }
  };
  

const commands = [helpCommand, projectsCommand,contactCommand,clearCommand,whoisCommand,socialCommand];

let commandHistory = [];
let commandIndex = 0;

function displayOutput(output) {
  const pre = document.createElement('pre');
  pre.innerHTML = output.join('\n');
  terminalOutput.appendChild(pre);
}

function clearTerminal() {
  terminalOutput.innerHTML = '';
}

function runCommand(input) {
  commandHistory.push(input);
  commandIndex = commandHistory.length;

  const args = input.split(' ');
  const command = args.shift();

  const cmd = commands.find(c => c.command === command);

  if (cmd) {
    cmd.run(args);
  } else if (input.trim() !== '') {
    displayOutput(['<br>', input + ': command not found', '<br>']);
  }

  terminalInput.value = '';
  tr.scrollTo(0, document.body.scrollHeight);
}

terminalInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();

    const input = terminalInput.value.trim();

    if (input !== '') {
      const prompt = document.createElement('div');
      prompt.classList.add('terminal-prompt');
      prompt.innerHTML = '<span class="terminal-user">user@ubuntu:</span><span class="terminal-directory">~$</span><span class="terminal-command">' + input + '</span>';
      terminalOutput.appendChild(prompt);

      runCommand(input);
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();

    if (commandIndex > 0) {
      commandIndex--;
      terminalInput.value = commandHistory[commandIndex];
    }
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();

    if (commandIndex < commandHistory.length - 1) {
      commandIndex++;
      terminalInput.value = commandHistory[commandIndex];
    } else {
      commandIndex = commandHistory.length;
      terminalInput.value = '';
    }
  }
});

terminalInput.focus();
