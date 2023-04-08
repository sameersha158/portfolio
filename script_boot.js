const consoled = document.querySelector('.console');
const seq_liness = [
  'Loading Linux kernel...',
  'Loading initial ramdisk...',
  'Loading modules...',
  'Detecting hardware...',
  'Configuring network...',
  'Starting system logger...',
  'Starting kernel log daemon...',
  'Starting system message bus...',
  'Starting network connection manager...',
  'Configuring network interfaces...',
  'Setting hostname...',
  'Mounting filesystems...',
  'Starting automatic crash report generation...',
  'Checking battery state...',
  'Starting system time synchronization...',
  'Starting ACPI daemon...',
  'Starting system services...',
  'Starting CPU interrupts balancing daemon...',
  'Starting deferred execution scheduler...',
  'Starting periodic command scheduler...',
  'Starting userspace bootsplash...',
  'Starting session manager...',
  'Starting GNOME display manager...',
  'Starting system tray...',
  'Starting network manager applet...',
  'Starting sound system...',
  'Starting Bluetooth daemon...',
  'Starting SSH server...',
  'Starting virtualization services...',
  'Starting container services...',
  'Starting web services...',
  'Starting database services...',
  'Starting web server...'
];
let index = 0;
const intrvl = setInterval(() => {
  if (index === 10) {
    clearInterval(intrvl);
    const speedintrvl = setInterval(() => {
      if (index >= seq_liness.length) {
        clearInterval(speedintrvl);
        return;
      }
      const line = document.createElement('p');
      line.classList.add('line');
      line.textContent = '# ' + seq_liness[index];
      consoled.appendChild(line);
      line.scrollIntoView();
      line.style.display = 'block';
      index++;
    }, 100);
    return;
  }
  const line = document.createElement('p');
  line.classList.add('line');
  line.textContent = '# ' + seq_liness[index];
  consoled.appendChild(line);
  line.scrollIntoView();
  line.style.display = 'block';
  index++;
}, 400);

setTimeout(() => {
    window.location.href = 'login.html';
  }, 10* 100 + 8000); 