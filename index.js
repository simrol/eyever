const express = require('express');
const os = require('os');
const si = require('systeminformation');
const bodyParser = require('body-parser');
const { exec } = require('child_process');


const app = express();
const port = 4000;







app.get('/computerName', (req, res) => {
  const computerName = os.hostname();
  res.json({ computerName });
});

app.get('/system', (req, res) => {
  const cpuUsage = os.cpus()[0].times;
  const totalMemory = os.totalmem();
  const freeMemoryInfo = os.freemem();
  const cpuName = os.cpus()[0].model;
  const memoryUsage = Math.random() * 100;
  const diskInfo = os.platform() === 'win32' ? os.cpus()[0] : os.cpus(); // Csak Windows esetén van használható 'os.cpus()' érték

  // Százalékos formában kiszámoljuk a CPU-használatot és a memória-használatot
  const cpuUsagePercent = ((cpuUsage.user + cpuUsage.sys) / (cpuUsage.user + cpuUsage.sys + cpuUsage.idle)) * 100;
  const memoryUsagePercent = ((totalMemory - freeMemoryInfo) / totalMemory) * 100;

  res.json({
      cpuUsage: cpuUsagePercent,
      memoryUsage: memoryUsagePercent,
      totalMemoryInfo: totalMemory,
      freeMemoryInfo: freeMemoryInfo,
      diskInfo: diskInfo
      
  });
});

app.get('/disk', async (req, res) => {
  try {
      const diskInfo = await si.fsSize();
      res.json({ diskInfo: diskInfo });
  } catch (error) {
      console.error('Error fetching disk information:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Middlewares
app.use(bodyParser.json());

// Your other routes and middleware...

// Start the server


// Példa hiba: hiányzik egy lezáró zárójel az alábbi sor végén

// Hiányzik a lezáró zárójel az alábbi sor után
app.get('/', (req, res) => {
    res.render('index.ejs');
  });

  app.get('/storage-test', (req, res) => {
    res.render('storage.ejs');
  });
  app.get('/storage', (req, res) => {
    res.render('storage2.ejs');
  });

  app.post('/stop', (req, res) => {
    res.render('function.ejs');
  });

  app.post('/stop-server', (req, res) => {
    // Indítás
    serverProcess = child_process.spawn('npm', ['start', '--', '--host=0.0.0.0', '--port=3000']);
    res.send('Process started!');
  });
  
  
  app.get('/console', (req, res) => {
    res.render('konzol.ejs');
  });
  app.get('/dashboard', (req, res) => {
    res.render('eyeverhome.ejs');
  });

  app.get('/powerkill', (req, res) => {
    res.render('powerkill.ejs');
  });

  app.get('/status', (req, res) => {
    res.render('status.ejs');
  });

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
