// State
let currentDate = new Date();

const HIST = [
  ["2026-04-27","Monday","1","Material Acquisition","Ecomaterials","General","","2","Arrange Shipping from Ecomaterials, Georgia - XPO","Completed","09:00","2026-04-27","Pickup for April 28, 2026","",""],
  ["2026-04-27","Monday","2","Casting","Terra OPUS - 20%","ASTM C109","20OPUS-C109","12","Each replacement will have 3 specimen and 4 timeline","Completed","09:30","2026-04-27","Demold on 12:00 PM - April 28","",""],
  ["2026-04-27","Monday","3","Casting","Terra OPUS - 25%","ASTM C109","25OPUS-C109","12","Each replacement will have 3 specimen and 4 timeline","Completed","09:30","2026-04-27","Demold on 3:00 PM - April 28","",""],
  ["2026-04-27","Monday","4","Casting","Terra OPUS - 30%","ASTM C109","30OPUS-C109","12","Each replacement will have 3 specimen and 4 timeline","Completed","09:30","2026-04-27","Demold on 3:30 PM - April 28","",""],
  ["2026-04-27","Monday","5","Material Acquisition","Thermal tape","DEF and ASTM C1012","","1","Buy from Gilson.co","Completed","12:30","2026-04-27","Confirm the Tax exempt","",""],
  ["2026-04-27","Monday","6","Material Acquisition","Creep contact seat","Creep test","","1 pack","Buy brass wood insert","Completed","12:45","2026-04-27","Confirm the diameter","",""],
  ["2026-04-28","Tuesday","1","Casting","Tephra - 20%","ASTM C1012","20TEP-C1012","6","Casted kept in curing tank at 38 C","Completed","11:00","2026-04-28","Demold on 1:00 PM - April 29","",""],
  ["2026-04-28","Tuesday","2","Casting","Tephra - 30%","ASTM C1012","30TEP-C1012","6","Casted kept in curing tank at 38 C","Completed","12:00","2026-04-28","Demold on 2:00 PM - April 29","",""],
  ["2026-04-28","Tuesday","3","Demolding","Terra OPUS - 20%","ASTM C109","20OPUS-C109","12","Demold and keep in lime water solution","Completed","12:00","2026-04-28","Clean the cube molds - April 29","",""],
  ["2026-04-28","Tuesday","4","Experiment Test","Terra OPUS - 20%","ASTM C109","20OPUS-C109","3","Compressive Strength Test - 1 day","Completed","12:15","2026-04-28","","",""],
  ["2026-04-28","Tuesday","5","Sample Prep","Lime Water","ASTM C1012","","8 Litres","Kept in curing tank at 38 C for curing","Completed","13:00","2026-04-28","","",""],
  ["2026-04-28","Tuesday","6","Demolding","Terra OPUS - 25%","ASTM C109","25OPUS-C109","12","Demold and keep in lime water solution","Completed","15:00","2026-04-28","Clean the cube molds - April 29","",""],
  ["2026-04-28","Tuesday","7","Experiment Test","Terra OPUS - 25%","ASTM C109","25OPUS-C109","3","Compressive Strength Test - 1 day","Completed","15:15","2026-04-28","","",""],
  ["2026-04-28","Tuesday","8","Demolding","Terra OPUS - 30%","ASTM C109","30OPUS-C109","12","Demold and keep in lime water solution","Completed","15:30","2026-04-28","Clean the cube molds - April 29","",""],
  ["2026-04-28","Tuesday","9","Experiment Test","Terra OPUS - 30%","ASTM C109","30OPUS-C109","3","Compressive Strength Test - 1 day","Completed","15:45","2026-04-28","","",""],
  ["2026-04-29","Wednesday","1","Material Acquisition","Admixtures","General","","4","Print Material Label and keep in the mixing room","Completed","10:30","2026-04-29","","",""],
  ["2026-04-29","Wednesday","2","Sample Prep","Natural Sand","General","","1 tray","Keep in oven at 225 F","Completed","11:00","2026-04-29","","",""],
  ["2026-04-29","Wednesday","3","Sample Prep","Compressive cube molds","ASTM C109","","12 molds","Clean all the cube molds for next casting","Completed","11:15","2026-04-29","","",""],
  ["2026-04-29","Wednesday","4","Sample Prep","Lime Water","ASTM C109","","1 tank","Clean the tank and make a new solution","Completed","12:15","2026-04-29","145 liters of lime water - kept in curing room","",""],
  ["2026-04-29","Wednesday","5","Demolding","Tephra - 20%","ASTM C1012","20TEP-C1012","6","Demold and keep in lime water solution at 38 C","Completed","13:00","2026-04-29","Clean the mortar molds - April 30","",""],
  ["2026-04-29","Wednesday","6","Demolding","Tephra - 30%","ASTM C1012","30TEP-C1012","6","Demold and keep in lime water solution at 38 C","Completed","14:00","2026-04-29","Clean the mortar molds - April 30","",""],
  ["2026-04-29","Wednesday","7","Material Acquisition","Ecomaterials","General","","2","Pozzoslag and Geofortis materials received","Completed","14:00","2026-04-29","Need to send this material to Penn State and Toronto","",""],
  ["2026-04-29","Wednesday","8","Material Acquisition","Cylinder 6 x 12","Creep test","","1 pack","Get from MA Industries","In Progress","14:45","2026-04-29","Received quote - Payment left","",""],
  ["2026-04-30","Thursday","1","Curing / Storage","Natural Sand","General","","1 tray","Oven drying sand to Barrel","Completed","11:00","2026-04-30","","",""],
  ["2026-04-30","Thursday","2","Sample Prep","Pozzoslag","Shipping","","2","Fill in the bucket, label and weigh for Penn State","Completed","11:15","2026-04-30","","",""],
  ["2026-04-30","Thursday","3","Sample Prep","Pozzoslag","Shipping","","1","Fill in the bucket for Toronto","Completed","11:25","2026-04-30","","",""],
  ["2026-04-30","Thursday","4","Sample Prep","Geofortis - Volcanic Ash","Shipping","","2","Fill in the bucket for Penn State","Completed","11:45","2026-04-30","","",""],
  ["2026-04-30","Thursday","5","Sample Prep","Sodium Sulphate","ASTM C1012","","1 tank","Clean the tank for a new solution","Completed","12:15","2026-04-30","","",""],
  ["2026-04-30","Thursday","6","Sample Prep","Mortar Molds","ASTM C1012","","6","Clean all the mortar molds for next casting","Completed","13:00","2026-04-30","","",""],
  ["2026-04-30","Thursday","7","Experiment Test","Compressive Test","Sample","","1","To learn Compressive Test for Elastic Modulus Test","Completed","14:00","2026-04-30","","",""],
  ["2026-04-30","Thursday","8","Material Acquisition","SRMG","General","","1 drum","Harvested Fly Ash received","Completed","14:00","2026-04-30","Need to send this material to Penn State and Toronto","",""],
  ["2026-04-30","Thursday","9","Material Acquisition","SRMG","General","","6 buckets","Tucson Pozz received","Completed","14:00","2026-04-30","Need to send this material to Penn State and Toronto","",""],
  ["2026-04-30","Thursday","10","Experiment Test","Elastic Modulus Test","Sample","","1","Elastic Modulus Test Sample Setup","Completed","14:30","2026-04-30","","",""],
  ["2026-04-30","Thursday","11","Sample Prep","Pozzoslag and Volcanic Ash","Label","","2","Make the research label for both drum","Completed","15:30","2026-05-01","","",""],
  ["2026-04-30","Thursday","12","Measurement","Portland IL (Canada) - Control","ASTM C1012","Control-C1012","6","Length Change Measurement - Week 1","Completed","16:00","2026-04-30","","",""],
  ["2026-04-30","Thursday","13","Sample Prep","Measurement Sheet","ASTM C109 and ASTM C1012","","","To record experiment data","Completed","16:30","2026-05-01","","",""],
  ["2026-04-30","Thursday","14","Sample Prep","Geofortis - Volcanic Ash","Shipping","","1","Fill in the bucket for Toronto","Completed","23:55","2026-04-30","","",""],
  ["2026-05-01","Friday","1","Measurement","Portland IL (Canada) - Control","DEF Test","Control-DEF","8","Length Change Measurement - Week 3","Completed","09:00","2026-05-01","","",""],
  ["2026-05-01","Friday","2","Material Acquisition","Inventory List","General","","","Arrange materials and update the Excel file","Delayed","10:00","","Print Research Labels for cabinet","",""],
  ["2026-05-01","Friday","3","Curing / Storage","Natural Sand","General","","1 tray","Oven drying sand to Barrel","Completed","11:00","2026-05-01","","",""],
  ["2026-05-01","Friday","4","Sample Prep","SRMG - Harvested Fly Ash","Shipping","","2","Fill in the bucket for Penn State","Planned","11:45","2026-05-01","","",""],
  ["2026-05-01","Friday","5","Experiment Test","Portland IL (Canada) - Control","ASTM C109","Control-C109","3","To train Antonella for compressive test for cubes","Completed","12:00","2026-05-01","This was made from DEF left over mortar","",""],
  ["2026-05-01","Friday","6","Material Acquisition","Gloves and Mask","General","","3 pack","Required for experiment research","Delayed","14:30","","","",""],
  ["2026-05-01","Friday","7","Sample Prep","All","Label","","","Make the research label for both drum","Completed","14:30","2026-05-01","","",""],
  ["2026-05-01","Friday","8","Sample Prep","SRMG - Harvested Fly Ash","Shipping","","1","Fill in the bucket for Toronto","Planned","23:55","2026-05-01","","",""],
  ["2026-05-04","Monday","1","Experiment Test","Terra OPUS - 20%","ASTM C109","20OPUS-C109","3","Compressive Strength Test - 7 days","Completed","12:00","2026-05-04","","",""],
  ["2026-05-04","Monday","2","Sample Prep","Natural Sand","General","","1 tray","Keep in oven at 225 F","Completed","13:00","2026-05-04","","",""],
  ["2026-05-04","Monday","3","Sample Prep","Sodium Sulphate Solution","ASTM C1012","","10 liters","Kept in Shrinkage Room","Completed","13:30","2026-05-04","","",""],
  ["2026-05-04","Monday","4","Experiment Test","Terra OPUS - 25%","ASTM C109","25OPUS-C109","3","Compressive Strength Test - 7 days","Completed","15:00","2026-05-04","","",""],
  ["2026-05-04","Monday","5","Experiment Test","Terra OPUS - 30%","ASTM C109","30OPUS-C109","3","Compressive Strength Test - 7 days","Completed","15:30","2026-05-04","","",""],
  ["2026-05-05","Tuesday","1","Sample Prep","Mortar Bar","ASTM C1012","","6 molds","Prepared for Casting","Completed","10:00","2026-05-05","","",""],
  ["2026-05-05","Tuesday","2","Curing / Storage","Natural Sand","General","","2 tray","Oven drying sand to Barrel","Completed","11:00","2026-05-05","","",""],
  ["2026-05-05","Tuesday","3","Data Entry / Review","Tephra NP","ASTM C1012","","","Prepared the Excel Sheet and Entered the data","Completed","11:00","2026-05-05","","",""],
  ["2026-05-05","Tuesday","4","Data Entry / Review","Portland IL Canada","ASTM C1012","","","Entered the data from printed sheet","Completed","11:30","2026-05-05","","",""],
  ["2026-05-05","Tuesday","5","Data Entry / Review","Portland IL Canada","DEF Test","","","Prepared the Excel Sheet and Entered the data","Completed","12:30","2026-05-05","","",""],
  ["2026-05-05","Tuesday","6","Measurement","Tephra - 20%","ASTM C1012","20TEP-C1012","6","Length Change Measurement - Initial","Completed","13:00","2026-05-05","","",""],
  ["2026-05-05","Tuesday","7","Measurement","Tephra - 30%","ASTM C1012","30TEP-C1012","6","Length Change Measurement - Initial","Completed","14:00","2026-05-05","","",""],
  ["2026-05-05","Tuesday","8","Data Entry / Review","Portland IL Florida","DEF Test","","","Entered the data from printed sheet","Completed","15:30","2026-05-05","","",""],
  ["2026-05-05","Tuesday","9","Data Entry / Review","Terra OPUS","ASTM C109","","","Prepared the Excel Sheet and Entered the data","Completed","16:00","2026-05-05","","",""],
  ["2026-05-05","Tuesday","10","Other","FedEx Label","Shipping","","9 buckets","Shipping to Penn State and Toronto","Completed","17:30","2026-05-05","","",""],
  ["2026-05-05","Tuesday","11","Data Entry / Review","Purchasing Approval Forms","General","","","To settle the P-Card Purchase","In Progress","19:00","2026-05-05","","",""],
  ["2026-05-06","Wednesday","1","Other","Purchasing Approval Forms","P Card","","","Email Dr. Riding for Approval","Completed","08:45","2026-05-06","","",""],
  ["2026-05-06","Wednesday","2","Other","FedEx Label","Shipping","","9 buckets","Print and Paste all the label to bucket","Completed","09:00","2026-05-06","","",""],
  ["2026-05-06","Wednesday","3","Casting","Portland Cement - Florida","ASTM C109","Portland-C109","12","Casting for 4 timeline","Completed","09:30","2026-05-06","Demold on 10:30 PM - May 7","",""],
  ["2026-05-06","Wednesday","4","Other","Project Meeting NCHRP 18-21","","","","Biweekly Project Meeting","Completed","12:00","2026-05-06","","",""],
  ["2026-05-06","Wednesday","5","Other","FedEx Drop Off","Shipping","","9 buckets","Drop off all 9 buckets to FedEx","Completed","13:00","2026-05-06","","",""],
  ["2026-05-06","Wednesday","6","Material Acquisition","5 Gallon Buckets and Lid","Home Depot","","12 buckets and lids","Buckets to store ASCMs at Weil Lab","Completed","14:00","2026-05-06","","",""],
  ["2026-05-06","Wednesday","7","Other","Shipping Arrangement","XPO Logistics","","2 Pallets","Research Materials from Penn State to UF","Completed","15:30","2026-05-06","","",""],
  ["2026-05-07","Thursday","1","Material Acquisition","ASCM in Weil Lab","","","6 buckets","Transfer all barrel material into buckets","Completed","09:00","2026-05-07","","",""],
  ["2026-05-07","Thursday","2","Demolding","Portland Cement - Florida","ASTM C109","Portland-C109","12","Demold and keep in lime water solution","Completed","10:00","2026-05-07","Found problem in cube consolidation for 6 cubes","",""],
  ["2026-05-07","Thursday","3","Experiment Test","Portland Cement - Florida","ASTM C109","Portland-C109","3","Compressive Strength Test - 1 day","Completed","10:30","2026-05-07","","",""],
  ["2026-05-07","Thursday","4","Material Acquisition","ASCM in Weil Lab","","","8 barrels and 4 buckets","Keep in the pallet to transfer the barrel in Solar Park","Completed","11:00","2026-05-07","","",""],
  ["2026-05-07","Thursday","5","Other","ASCM in Weil Lab","","","8 barrels and 4 buckets","Arrange pallets in solar park","Completed","12:30","2026-05-07","2 rounds of Solar Park for 2 pallets","",""],
  ["2026-05-07","Thursday","6","Measurement","Portland IL (Canada) - Control","ASTM C1012","Control-C1012","6","Length Change Measurement - Week 2","Completed","16:00","2026-05-07","","",""],
  ["2026-05-07","Thursday","7","Measurement","Portland IL (Florida) - Control","DEF Test","Control-DEF","8","Length Change Measurement - Week 8","Completed","16:30","2026-05-07","","",""],
  ["2026-05-08","Friday","1","Measurement","Portland IL (Canada) - Control","DEF Test","Control-DEF","8","Length Change Measurement - Week 4","Completed","09:00","2026-05-08","","",""],
  ["2026-05-08","Friday","2","Casting","Portland Cement - Florida","ASTM C109","Portland-C109","6","Casting cubes for 2 timeline - 28 days and 56 days","Completed","10:00","2026-05-08","","",""],
  ["2026-05-09","Saturday","1","Demolding","Portland Cement - Florida","ASTM C109","Portland-C109","6","Demold and keep in lime water solution","Completed","10:45","","","",""],
  ["2026-05-09","Saturday","2","Sample Prep","Compressive cube molds","ASTM C109","","6 molds","Clean all the cube molds for next casting","Completed","11:30","","","",""],
  ["2026-05-11","Monday","1","Casting","PozzoSlag - 20%","ASTM C109","20PS-C109","12","Cast 12 cubes for 1, 7, 28, and 56 day compressive strength testing","Completed","11:16","","Flow was very high","",""],
  ["2026-05-11","Monday","2","Casting","PozzoSlag - 25%","ASTM C109","25PS-C109","12","Cast 12 cubes for 1, 7, 28, and 56 day compressive strength testing","Delayed","10:00","","","",""],
  ["2026-05-11","Monday","3","Casting","PozzoSlag - 30%","ASTM C109","30PS-C109","12","Cast 12 cubes for 1, 7, 28, and 56 day compressive strength testing","Delayed","11:00","","","",""],
  ["2026-05-12","Tuesday","1","Demolding","PozzoSlag - 20%","ASTM C109","20PS-C109","12","Demold cubes; keep remaining cubes in saturated lime water","Completed","11:30","","","",""],
  ["2026-05-12","Tuesday","2","Experiment Test","PozzoSlag - 20%","ASTM C109","20PS-C109","3","Compressive Strength Test - 1 day","Completed","11:42","","","",""],
  ["2026-05-12","Tuesday","3","Sample Prep","Sodium Sulphate","ASTM C1012","General","100 L","5 Kg of Sodium Sulphate","Completed","10:00","","","",""],
  ["2026-05-12","Tuesday","4","Other","Label","ASCM","General","6 buckets","Prepared and pasted labels for 6 buckets","Completed","09:00","","","",""],
  ["2026-05-12","Tuesday","5","Sample Prep","Plastic Box","ASTM C1012","General","4 buckets","Washed the box with lids for ASTM C1012","Completed","11:00","","","",""],
  ["2026-05-12","Tuesday","6","Measurement","Tephra - 20%","ASTM C1012","20TEP-C1012","6","Length Change Measurement - Week 1","Completed","13:00","","","",""],
  ["2026-05-12","Tuesday","7","Solution Preparation","Tephra - 20%","ASTM C1012","20TEP-C1012","Na2SO4","Rinsed the box and changed the solution","Completed","13:15","","","",""],
  ["2026-05-12","Tuesday","8","Measurement","Tephra - 30%","ASTM C1012","30TEP-C1012","6","Length Change Measurement - Week 1","Completed","13:30","","","",""],
  ["2026-05-12","Tuesday","9","Solution Preparation","Tephra - 30%","ASTM C1012","30TEP-C1012","Na2SO4","Rinsed the box and changed the solution","Completed","13:45","","","",""],
  ["2026-05-12","Tuesday","10","Casting","Portland Cement - Canada","ASTM C1012","Portland-C1012","6","Cast 6 mortar bars; cover molds and keep in sealed curing container at 38 C","Completed","14:00","","","",""],
  ["2026-05-12","Tuesday","11","Sample Prep","Portland Cement - Canada","ASTM C1012","Portland-C1012","38 C lime water","Prepare saturated lime water and keep in curing chamber at 38 C for demolding/curing","Completed","15:30","","Need to Repeat this again","",""],
  ["2026-05-13","Wednesday","1","Experiment Test","Portland Cement - Florida","ASTM C109","Portland-C109","3","Compressive Strength Test - 7 days","Completed","10:30","","","",""],
  ["2026-05-13","Wednesday","2","Demolding","Portland Cement - Canada","ASTM C1012","Portland-C1012","6","Demold mortar bars and keep in 38 C saturated lime water","Completed","14:30","","Need to Repeat this again","",""],
  ["2026-05-14","Thursday","1","Casting","Volcanic Ash - 20%","ASTM C109","20VA-C109","12","Cast 12 cubes for 1, 7, 28, and 56 day compressive strength testing","Completed","12:00","","","",""],
  ["2026-05-14","Thursday","2","Measurement","Portland IL (Canada) - Control","ASTM C1012","Control-C1012","6","Length Change Measurement - Week 3","Completed","16:00","","","",""],
];

let tasks = JSON.parse(localStorage.getItem('labTasks')) || [];

if (!localStorage.getItem('historyImported_v1')) {
    const initialTasks = HIST.map((row, i) => ({
        id: 'hist_' + i,
        date: row[0],
        time: row[10] || '09:00',
        category: row[3],
        title: row[4] + (row[5] && row[5] !== 'General' ? ' (' + row[5] + ')' : ''),
        desc: row[8] || 'No notes'
    }));
    
    // Merge history with any existing tasks
    tasks = [...tasks, ...initialTasks];
    localStorage.setItem('labTasks', JSON.stringify(tasks));
    localStorage.setItem('historyImported_v1', 'true');
}


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
