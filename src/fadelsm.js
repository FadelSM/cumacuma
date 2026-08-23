const repository = [
    { id: 1, date: "1 March 2026", name: "Ramadhan Science Competition Indonesia (RSCI) 2026", host: "Fosnas", field: "Informatika", result: "Medali Emas (A+)", link: "https://drive.google.com/file/d/1eztmI8LVAH0UOV_WnVB1RjkLmjBTwiT1/view?usp=drive_link" },
    { id: 2, date: "15 March 2026", name: "Semarak Sains Nasional (SSN)", host: "Gemanesia", field: "Ekonomi", result: "Medali Emas (A+)", link: "https://drive.google.com/file/d/1LMRLct-DOdGwMh6F1bHQMS-1yfU02pQr/view?usp=drive_link" },
    { id: 3, date: "15 March 2026", name: "Semarak Sains Nasional (SSN)", host: "Gemanesia", field: "PPKN", result: "Medali Emas (A+)", link: "https://drive.google.com/file/d/1IoBjF9ho5bU-zgQRFivI_5ZNVGPF6R6I/view?usp=drive_link" },
    { id: 4, date: "15 March 2026", name: "Semarak Sains Nasional (SSN)", host: "Gemanesia", field: "Informatika", result: "Medali Emas (A+)", link: "https://drive.google.com/file/d/1Hd72RWn1hA8_EhKtoeVd5B4YK8XIt4w2/view?usp=drive_link" },
    { id: 5, date: "29 March 2026", name: "National Science Competition (NSC)", host: "Puskanas", field: "PPKN", result: "Medali Emas (A+)", link: "https://drive.google.com/file/d/1Dwf8cW6rfS8C3hk5KHl85QThNOruQAlH/view?usp=drive_link" },
    { id: 6, date: "29 March 2026", name: "National Science Competition (NSC)", host: "Puskanas", field: "Informatika", result: "Medali Emas (A+)", link: "https://drive.google.com/file/d/1OJSE8bk_muhpFrXfmNyrk-kWHnOx8X6F/view?usp=drive_link" },
    { id: 7, date: "29 March 2026", name: "Olimpiade Sains Muda Indonesia (OSMI)", host: "Muda Sains", field: "Ekonomi", result: "Medali Perak", link: "https://drive.google.com/file/d/1-VxeLUvyW2mh7JPHzt27TXE7fY9GFbKW/view?usp=drive_link" },
    { id: 8, date: "29 March 2026", name: "Olimpiade Sains Muda Indonesia (OSMI)", host: "Muda Sains", field: "Informatika", result: "Medali Emas (A+)", link: "https://drive.google.com/file/d/19BUdb6SMu5DhVRepPCQzS3q5NX5AH_bh/view?usp=drive_link" },
    { id: 9, date: "05 April 2026", name: "Future Science Competition (FSC)", host: "Yaspresnas", field: "Bahasa Indonesia", result: "Medali Perak", link: "#" },
    { id: 10, date: "05 April 2026", name: "Future Science Competition (FSC)", host: "Yaspresnas", field: "Bahasa Inggris", result: "Medali Emas (A+)", link: "#" },
    { id: 11, date: "05 April 2026", name: "Future Science Competition (FSC)", host: "Yaspresnas", field: "Matematika", result: "Medali Perak", link: "#" },
    { id: 12, date: "05 April 2026", name: "Future Science Competition (FSC)", host: "Yaspresnas", field: "Kimia", result: "Medali Perak", link: "#" },
    { id: 13, date: "05 April 2026", name: "Future Science Competition (FSC)", host: "Yaspresnas", field: "Informatika", result: "Medali Perak", link: "#" },
    { id: 14, date: "19 April 2026", name: "Pekan Sains Pelajar Indonesia (PSPI)", host: "Gemanesia", field: "Informatika", result: "Medali Perak", link: "#" },
    { id: 15, date: "19 April 2026", name: "Olimpiade Sains dan Teknologi Nasional (OSTN)", host: "Sentral Olimpiade", field: "Biologi", result: "Medali Emas (A+)", link: "#" },
    { id: 16, date: "26 April 2026", name: "Kejuaraan Sains Nasional (KSN)", host: "Puskanas", field: "Informatika", result: "Medali Emas (A+)", link: "#" },
    { id: 17, date: "24 May 2026", name: "Sentral Olimpiade Nasional (SEON)", host: "Sentral Olimpiade", field: "Geografi", result: "Medali Emas (A+)", link: "#" },
    { id: 18, date: "24 May 2026", name: "Saintech National Competition (SNC)", host: "Saintech", field: "Kimia", result: "Medali Emas (A+)", link: "https://drive.google.com/file/d/1RpTpvnsr-m47a0DLetgS_JeqhVrcCeSr/view?usp=drivesdk"},
    { id: 19, date: "7 June 2026", name: "Kompetisi Sains Siswa Sigma (KSSS)", host: "Sigma Sains Nasional", field: "Geografi", result: "Medali Emas (A+)", link: "#" },
    { id: 20, date: "18 June 2026", name: "Olimpiade Sains Nasional", host: "Puspresnas", field: "Informatika", result: "Tidak Lolos", link: "#" },
    { id: 21, date: "09 August 2026", name: "Transmigrasi", host: "kementerian Transmigrasi", field: "Bug Hunter", result: "Apresiasi Penghargaan", link: "https://drive.google.com/file/d/1c3BQCeJMzh637EzqneOHjycwZJwHxWAg/view?usp=drivesdk" },
];

const i18n = {
    id: {
        role: "Full-Stack Developer", schoolLabel: "Sekolah", classLabel: "Kelas", pobLabel: "Tempat Lahir",
        pobValue: "Jakarta, 11 Juni 2009", title: "Achievement Repository", subtitle: "Database prestasi dan sertifikasi akademik.",
        searchPlaceholder: "Cari nama lomba atau subjek...", goldLabel: "Medali Emas", silverLabel: "Medali Perak",
        totalLabel: "Total Kompetisi", activeLabel: "Periode Aktif", thDate: "Tanggal", thName: "Nama Lomba",
        thHost: "Penyelenggara", thCategory: "Kategori", thResult: "Hasil", noData: "Data tidak ditemukan...",
        gold: "Medali Emas", silver: "Medali Perak", counting: "Menghitung...", daysAgo: "Hari lagi",
        working: "Proses Dikerjakan", waiting: "Tunggu Hasilnya",
        fields: { "Informatika": "Informatika", "Ekonomi": "Ekonomi", "PPKN": "PPKN", "Bahasa Indonesia": "Bahasa Indonesia", "Bahasa Inggris": "Bahasa Inggris", "Matematika": "Matematika", "Kimia": "Kimia", "Biologi": "Biologi", "Geografi": "Geografi", "Fisika": "Fisika", "Kedokteran": "Kedokteran" }
    },
    en: {
        role: "Full-Stack Developer", schoolLabel: "School", classLabel: "Class", pobLabel: "Place of Birth",
        pobValue: "Jakarta, June 11, 2009", title: "Achievement Repository", subtitle: "Academic achievements and certifications database.",
        searchPlaceholder: "Search competition name or subject...", goldLabel: "Gold Medals", silverLabel: "Silver Medals",
        totalLabel: "Total Competition", activeLabel: "Active Period", thDate: "Date", thName: "Event Name",
        thHost: "Organizer", thCategory: "Category", thResult: "Result", noData: "No data found...",
        gold: "Gold Medal", silver: "Silver Medal", counting: "Counting...", daysAgo: "Days left",
        working: "In Progress", waiting: "Awaiting Results",
        fields: { "Informatika": "Computer Science", "Ekonomi": "Economics", "PPKN": "Civics", "Bahasa Indonesia": "Indonesian", "Bahasa Inggris": "English", "Matematika": "Mathematics", "Kimia": "Chemistry", "Biologi": "Biology", "Geografi": "Geography", "Fisika": "Physics", "Kedokteran": "Medicine" }
    }
};

const userLang = navigator.language || navigator.userLanguage;
const currentLang = userLang.startsWith('id') ? 'id' : 'en'; 
const lang = i18n[currentLang];

const renderTarget = document.getElementById('render-target');
const searchBar = document.getElementById('search-bar');
let countdownInterval = null;

function applyLanguageToUI() {
    document.getElementById('txt-role').innerText = lang.role;
    document.getElementById('txt-school-label').innerText = lang.schoolLabel;
    document.getElementById('txt-class-label').innerText = lang.classLabel;
    document.getElementById('txt-pob-label').innerText = lang.pobLabel;
    document.getElementById('txt-title').innerText = lang.title;
    document.getElementById('txt-subtitle').innerText = lang.subtitle;
    searchBar.placeholder = lang.searchPlaceholder;
    document.getElementById('txt-gold-label').innerText = lang.goldLabel;
    document.getElementById('txt-silver-label').innerText = lang.silverLabel;
    document.getElementById('txt-total-label').innerText = lang.totalLabel;
    document.getElementById('txt-active-label').innerText = lang.activeLabel;
    document.getElementById('th-date').innerText = lang.thDate;
    document.getElementById('th-name').innerText = lang.thName;
    document.getElementById('th-host').innerText = lang.thHost;
    document.getElementById('th-category').innerText = lang.thCategory;
    document.getElementById('th-result').innerText = lang.thResult;
}

function formatLocaleDate(dateStr) {
    const d = new Date(dateStr);
    if (isNaN(d)) return dateStr;
    return d.toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' });
}

function translateResult(resultStr) {
    if (resultStr.toLowerCase().includes("coming soon")) return "Coming Soon";
    let translated = resultStr;
    if (currentLang === 'en') {
        translated = translated.replace("Medali Emas", lang.gold).replace("Medali Perak", lang.silver);
    }
    return translated;
}

function displayData(data) {
    if (countdownInterval) clearInterval(countdownInterval);

    if (!data.length) {
        renderTarget.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:50px; color:#666;">${lang.noData}</td></tr>`;
        return;
    }

    renderTarget.innerHTML = "";
    const activeTimers = [];

    data.forEach((item, index) => {
        let displayResult = translateResult(item.result);
        let badgeClass = "badge-pending";
        const countdownId = `timer-${item.id}`;
        const resLower = item.result.toLowerCase();

        if (resLower.includes("coming soon")) {
            displayResult = `<span id="${countdownId}">${lang.counting}</span>`;
            activeTimers.push(item);
        } else if (resLower.includes("emas")) {
            badgeClass = "badge-gold";
        } else if (resLower.includes("perak")) {
            badgeClass = "badge-silver";
        }

        const hasLink = item.link && item.link !== "#";
        const formattedDate = formatLocaleDate(item.date);
        const translatedField = lang.fields[item.field] || item.field;

        const row = `
            <tr style="animation: fadeIn 0.4s ease forwards ${index * 0.05}s; opacity: 0;">
                <td style="color: var(--slate-400); font-size: 0.8rem; font-weight: 600;">${formattedDate}</td>
                <td>${hasLink ? `<a href="${item.link}" target="_blank" class="comp-link">${item.name}</a>` : item.name}</td>
                <td>${item.host}</td>
                <td>${translatedField}</td>
                <td><span class="badge ${badgeClass}">${displayResult}</span></td>
            </tr>
        `;
        renderTarget.innerHTML += row;
    });

    if (activeTimers.length > 0) {
        startGlobalCountdown(activeTimers);
    }
}

function startGlobalCountdown(items) {
    countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();

        items.forEach(item => {
            const timerElement = document.getElementById(`timer-${item.id}`);
            if (!timerElement) return;

            const eventDate = new Date(item.date).getTime();
            const processDeadline = eventDate + (2 * 60 * 60 * 1000); 
            const distance = eventDate - currentTime;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                if (days >= 1) {
                    timerElement.innerHTML = `⏳ ${days + 1} ${lang.daysAgo}`;
                } else {
                    timerElement.innerHTML = `⏳ ${hours}h ${minutes}m ${seconds}s`;
                }
            } else if (currentTime < processDeadline) {
                timerElement.innerHTML = lang.working;
                timerElement.style.color = "#fbbf24";
            } else {
                timerElement.innerHTML = lang.waiting;
                timerElement.style.color = "#94a3b8"; 
            }
        });
    }, 1000);
}

searchBar.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = repository.filter(item => {
        const translatedField = lang.fields[item.field] || item.field;
        return item.name.toLowerCase().includes(keyword) || translatedField.toLowerCase().includes(keyword);
    });
    displayData(filtered);
});

function initDashboard() {
    applyLanguageToUI();
    displayData(repository);

    const releasedItems = repository.filter(item => !item.result.toLowerCase().includes("coming soon"));

    document.getElementById('count-gold').innerText = releasedItems.filter(i => i.result.includes("Emas")).length;
    document.getElementById('count-silver').innerText = releasedItems.filter(i => i.result.includes("Perak")).length;
    document.getElementById('count-total').innerText = repository.length;
}

function updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString(currentLang === 'id' ? 'id-ID' : 'en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    const dateStr = now.toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', { day: 'numeric', month: 'short' });
    const clockElement = document.getElementById('local-clock');
    if (clockElement) clockElement.innerHTML = `🕒 ${dateStr} | ${timeStr}`;
}

setInterval(updateClock, 1000);
updateClock();
initDashboard();
