// State
let currentDate = new Date();
let tasks = JSON.parse(localStorage.getItem('labTasks')) || [];

// DOM Elements
const currentDateDisplay = document.getElementById('currentDateDisplay');
const scheduleList = document.getElementById('scheduleList');
const addModal = document.getElementById('addModal');
const addBtn = document.getElementById('addBtn');
const closeModal = document.getElementById('closeModal');
const addForm = document.getElementById('addForm');
const prevDayBtn = document.getElementById('prevDay');
const nextDayBtn = document.getElementById('nextDay');
const notifyBanner = document.getElementById('notifyBanner');
const enableNotifyBtn = document.getElementById('enableNotifyBtn');
const dismissNotifyBtn = document.getElementById('dismissNotifyBtn');

// Initialize
function init() {
    renderDate();
    renderTasks();
    checkNotificationPermission();
    
    // Set default date in form to today
    document.getElementById('castDate').value = formatDateForInput(new Date());
}

// Date Utils
function renderDate() {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const today = new Date();
    if (isSameDay(currentDate, today)) {
        currentDateDisplay.textContent = `Today, ${currentDate.toLocaleDateString('en-US', options)}`;
    } else {
        currentDateDisplay.textContent = currentDate.toLocaleDateString('en-US', options);
    }
}

function isSameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
}

function formatDateForInput(date) {
    return date.toISOString().split('T')[0];
}

function addDays(dateStr, days) {
    const d = new Date(dateStr);
    d.setDate(d.getDate() + days);
    return formatDateForInput(d);
}

// Rules matching the Google Apps Script
const R109 = [
    {d: 1, cat: 'Demolding', n: 'Demold cubes; keep in saturated lime water'},
    {d: 1, cat: 'Experiment', n: 'Compressive Strength Test - 1 day'},
    {d: 7, cat: 'Experiment', n: 'Compressive Strength Test - 7 days'},
    {d: 28, cat: 'Experiment', n: 'Compressive Strength Test - 28 days'},
    {d: 56, cat: 'Experiment', n: 'Compressive Strength Test - 56 days'}
];

const R1012 = [
    {d: 1, cat: 'Demolding', n: 'Demold mortar bars at ~23.5h'},
    {d: 6, cat: 'Solution', n: 'Prepare Na2SO4 solution DAY BEFORE initial reading'},
    {d: 7, cat: 'Measurement', n: 'INITIAL LENGTH READING at 7 days'}
];

// Event Listeners
prevDayBtn.addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() - 1);
    renderDate();
    renderTasks();
});

nextDayBtn.addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() + 1);
    renderDate();
    renderTasks();
});

addBtn.addEventListener('click', () => {
    addModal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    addModal.classList.add('hidden');
});

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const castDate = document.getElementById('castDate').value;
    const castTime = document.getElementById('castTime').value;
    const material = document.getElementById('material').value;
    const testStandard = document.getElementById('testStandard').value;
    const notify = document.getElementById('notify').checked;
    
    generateTasks(castDate, castTime, material, testStandard, notify);
    
    addModal.classList.add('hidden');
    addForm.reset();
    document.getElementById('castDate').value = formatDateForInput(new Date());
    
    // Switch to cast date to see the new task
    currentDate = new Date(castDate + 'T00:00:00');
    renderDate();
    renderTasks();
});

function generateTasks(dateStr, timeStr, material, standard, notify) {
    // Add original casting task
    addTask(dateStr, timeStr, 'Casting', material, `Cast for ${standard}`, notify);
    
    if (standard === 'ASTM C109') {
        R109.forEach(r => {
            const taskDate = addDays(dateStr, r.d);
            addTask(taskDate, timeStr, r.cat, material, r.n, notify);
        });
    } else if (standard === 'ASTM C1012') {
        R1012.forEach(r => {
            const taskDate = addDays(dateStr, r.d);
            addTask(taskDate, timeStr, r.cat, material, r.n, notify);
        });
        // Generate weekly measurements for 78 weeks (simplified for demo to 4 weeks)
        const wkly = [1, 2, 3, 4];
        wkly.forEach(w => {
            const taskDate = addDays(dateStr, 7 + w * 7);
            addTask(taskDate, timeStr, 'Measurement', material, `Length Change Measurement - Week ${w}`, notify);
            addTask(taskDate, timeStr, 'Solution', material, `Replace Na2SO4 solution - Week ${w}`, notify);
        });
    }
}

function addTask(date, time, category, title, desc, notify) {
    const task = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        date: date,
        time: time,
        category: category,
        title: title,
        desc: desc,
        completed: false
    };
    tasks.push(task);
    saveTasks();
    
    if (notify) {
        scheduleNotification(task);
    }
}

function saveTasks() {
    localStorage.setItem('labTasks', JSON.stringify(tasks));
}

function renderTasks() {
    scheduleList.innerHTML = '';
    const targetDateStr = formatDateForInput(currentDate);
    
    const dayTasks = tasks.filter(t => t.date === targetDateStr)
                          .sort((a, b) => a.time.localeCompare(b.time));
    
    if (dayTasks.length === 0) {
        scheduleList.innerHTML = `
            <div class="empty-state">
                <p>No tasks scheduled for this day.</p>
            </div>
        `;
        return;
    }
    
    dayTasks.forEach(task => {
        const card = document.createElement('div');
        card.className = 'task-card';
        card.innerHTML = `
            <div class="task-header">
                <span class="task-time">${task.time}</span>
                <span class="task-category cat-${task.category}">${task.category}</span>
            </div>
            <h3 class="task-title">${task.title}</h3>
            <p class="task-desc">${task.desc}</p>
        `;
        scheduleList.appendChild(card);
    });
}

// Notifications
function checkNotificationPermission() {
    if (!("Notification" in window)) return;
    
    if (Notification.permission === "default") {
        notifyBanner.classList.remove('hidden');
    }
}

enableNotifyBtn.addEventListener('click', () => {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            notifyBanner.classList.add('hidden');
        }
    });
});

dismissNotifyBtn.addEventListener('click', () => {
    notifyBanner.classList.add('hidden');
});

function scheduleNotification(task) {
    if (Notification.permission !== "granted" || !('serviceWorker' in navigator)) return;
    
    const taskDateTime = new Date(`${task.date}T${task.time}:00`);
    const now = new Date();
    const delayMs = taskDateTime.getTime() - now.getTime();
    
    // Only schedule if it's in the future and within a reasonable timeframe (e.g. today/tomorrow)
    // For a real PWA, you'd use the Web Push API for reliable background scheduling.
    // Here we simulate it using the active Service Worker for short-term delays.
    if (delayMs > 0 && delayMs < 86400000 * 7) { 
        navigator.serviceWorker.ready.then(registration => {
            registration.active.postMessage({
                type: 'SCHEDULE_NOTIFICATION',
                title: `Lab Reminder: ${task.category}`,
                options: {
                    body: `${task.title} at ${task.time}\n${task.desc}`,
                    icon: '/icon.png',
                    badge: '/icon.png'
                },
                delayMs: delayMs
            });
        });
    }
}

// Boot
init();
