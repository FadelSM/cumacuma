const repository = [
    { id: 1, date: "1 Maret 2026", name: "Ramadhan Science Competition Indonesia (RSCI) 2026", host: "Fosnas", field: "Informatika", result: "Medali Emas (A+)", link: "https://drive.google.com/file/d/1eztmI8LVAH0UOV_WnVB1RjkLmjBTwiT1/view?usp=drive_link" },
    { id: 2, date: "15 Maret 2026", name: "Semarak Sains Nasional (SSN)", host: "Gemanesia", field: "Ekonomi", result: "Medali Emas (A+)", link: "https://drive.google.com/file/d/1LMRLct-DOdGwMh6F1bHQMS-1yfU02pQr/view?usp=drive_link" },
    { id: 3, date: "15 Maret 2026", name: "Semarak Sains Nasional (SSN)", host: "Gemanesia", field: "PPKN", result: "Medali Emas (A+)", link: "https://drive.google.com/file/d/1IoBjF9ho5bU-zgQRFivI_5ZNVGPF6R6I/view?usp=drive_link" },
    { id: 4, date: "15 Maret 2026", name: "Semarak Sains Nasional (SSN)", host: "Gemanesia", field: "Informatika", result: "Medali Emas (A+)", link: "https://drive.google.com/file/d/1Hd72RWn1hA8_EhKtoeVd5B4YK8XIt4w2/view?usp=drive_link" },
    { id: 5, date: "29 Maret 2026", name: "National Science Competition (NSC)", host: "Puskanas", field: "PPKN", result: "Medali Emas (A+)", link: "https://drive.google.com/file/d/1Dwf8cW6rfS8C3hk5KHl85QThNOruQAlH/view?usp=drive_link" },
    { id: 6, date: "29 Maret 2026", name: "National Science Competition (NSC)", host: "Puskanas", field: "Informatika", result: "Medali Emas (A+)", link: "https://drive.google.com/file/d/1OJSE8bk_muhpFrXfmNyrk-kWHnOx8X6F/view?usp=drive_link" },
    { id: 7, date: "29 Maret 2026", name: "Olimpiade Sains Muda Indonesia (OSMI)", host: "Muda Sains", field: "Ekonomi", result: "Medali Perak", link: "https://drive.google.com/file/d/1-VxeLUvyW2mh7JPHzt27TXE7fY9GFbKW/view?usp=drive_link" },
    { id: 8, date: "29 Maret 2026", name: "Olimpiade Sains Muda Indonesia (OSMI)", host: "Muda Sains", field: "Informatika", result: "Medali Emas (A+)", link: "https://drive.google.com/file/d/19BUdb6SMu5DhVRepPCQzS3q5NX5AH_bh/view?usp=drive_link" },
    { id: 9, date: "05 Apr 2026", name: "Future Science Competition (FSC)", host: "Yaspresnas", field: "Bahasa Indonesia", result: "Medali Perak", link: "#" },
    { id: 10, date: "05 Apr 2026", name: "Future Science Competition (FSC)", host: "Yaspresnas", field: "Bahasa Inggris", result: "Medali Emas (A+)", link: "#" },
    { id: 11, date: "05 Apr 2026", name: "Future Science Competition (FSC)", host: "Yaspresnas", field: "Matematika", result: "Medali Perak", link: "#" },
    { id: 12, date: "05 Apr 2026", name: "Future Science Competition (FSC)", host: "Yaspresnas", field: "Kimia", result: "Medali Perak", link: "#" },
    { id: 13, date: "05 Apr 2026", name: "Future Science Competition (FSC)", host: "Yaspresnas", field: "Informatika", result: "Medali Perak", link: "#" },
    { id: 14, date: "19 Apr 2026", name: "Pekan Sains Pelajar Indonesia (PSPI)", host: "Gemanesia", field: "Informatika", result: "Medali Perak", link: "#" },
    { id: 15, date: "19 Apr 2026", name: "Olimpiade Sains dan Teknologi Nasional (OSTN)", host: "Sentral Olimpiade", field: "Biologi", result: "Medali Emas (A+)", link: "#" },
    { id: 16, date: "26 Apr 2026", name: "Kejuaraan Sains Nasional (KSN)", host: "Puskanas", field: "Informatika", result: "Medali Emas (A+)", link: "#" },
    { id: 17, date: "24 May 2026 15:00", name: "Sentral Olimpiade Nasional (SEON)", host: "Sentral Olimpiade", field: "Informatika", result: "Coming Soon", link: "#" },
    { id: 18, date: "24 May 2026 14:00", name: "Sentral Olimpiade Nasional (SEON)", host: "Sentral Olimpiade", field: "Geografi", result: "Coming Soon", link: "#" },
    { id: 19, date: "24 May 2026 10:00", name: "Saintech National Competition (SNC)", host: "Saintech", field: "Kimia", result: "Medali Emas", link: "#"},
    { id: 20, date: "24 May 2026 10:40", name: "Saintech National Competition (SNC)", host: "Saintech", field: "Fisika", result: "Medali Emas", link: "#"},
    { id: 21, date: "28 juny 2026 09:00", name: "Olimpiade Sains Siswa Nasional (OSSN)", host: "Puskanas", field: "Kimia", result: "Coming Soon", link: "#" },
    { id: 22, date: "28 juny 2026 13:00", name: "Olimpiade Sains Siswa Nasional (OSSN)", host: "Puskanas", field: "Fisika", result: "Coming Soon", link: "#" },
    { id: 23, date: "28 juny 2026 14:00", name: "Olimpiade Sains Siswa Nasional (OSSN)", host: "Puskanas", field: "Informatika", result: "Coming Soon", link: "#" }
];

const renderTarget = document.getElementById('render-target');
const searchBar = document.getElementById('search-bar');

function displayData(data) {
    renderTarget.innerHTML = data.length ? "" : '<tr><td colspan="5" style="text-align:center; padding:50px; color:#666;">Data tidak ditemukan...</td></tr>';
    
    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours();

    data.forEach((item, index) => {
        let displayResult = item.result;
        let badgeClass = "badge-pending";
        let countdownId = `timer-${item.id}`;

        // // TANDAI: Logika Sembunyikan Hasil Otomatis
        if (item.isAutoRelease) {
            const isReleased = currentDay >= item.releaseDay && currentHour >= item.releaseHour;
            if (!isReleased) {
                displayResult = "⏳ Menunggu Pengumuman";
            }
        }

        const resLower = displayResult.toLowerCase();

        if (resLower.includes("coming soon")) {
            displayResult = `<span id="${countdownId}">Menghitung...</span>`;
            
            setInterval(() => {
                const eventDate = new Date(item.date).getTime();
                const processDeadline = eventDate + (2 * 60 * 60 * 1000); 
                const currentTime = new Date().getTime();
                const distance = eventDate - currentTime;
                const timerElement = document.getElementById(countdownId);

                if (timerElement) {
                    if (distance > 0) {
                        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (days >= 1) {
                timerElement.innerHTML = `⏳ ${days + 1} Hari lagi`;
    } else {
                timerElement.innerHTML = `⏳ ${hours}j ${minutes}m ${seconds}s`;
            }
                    } else if (currentTime < processDeadline) {
                        timerElement.innerHTML = "Proses Dikerjakan";
                        timerElement.style.color = "#fbbf24";
                    } else {
                        timerElement.innerHTML = "Tunggu Hasilnya";
                        timerElement.style.color = "#94a3b8"; 
                    }
                }
            }, 1000);
        }

        if (resLower.includes("emas")) badgeClass = "badge-gold";
        else if (resLower.includes("perak")) badgeClass = "badge-silver";

        const hasLink = item.link && item.link !== "#";
        const row = `
            <tr style="animation: fadeIn 0.4s ease forwards ${index * 0.05}s; opacity: 0;">
                <td style="color: var(--slate-400); font-size: 0.8rem; font-weight: 600;">${item.date}</td>
                <td>${hasLink ? `<a href="${item.link}" target="_blank" class="comp-link">${item.name}</a>` : item.name}</td>
                <td>${item.host}</td>
                <td>${item.field}</td>
                <td><span class="badge ${badgeClass}">${displayResult}</span></td>
            </tr>
        `;
        renderTarget.innerHTML += row;
    });
}

searchBar.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = repository.filter(item => 
        item.name.toLowerCase().includes(keyword) || 
        item.field.toLowerCase().includes(keyword)
    );
    displayData(filtered);
});

function initDashboard() {
    displayData(repository);
    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours();

    const releasedItems = repository.filter(item => {
        if (!item.isAutoRelease) return true;
        return currentDay >= item.releaseDay && currentHour >= item.releaseHour;
    });

    document.getElementById('count-gold').innerText = releasedItems.filter(i => i.result.includes("Emas")).length;
    document.getElementById('count-silver').innerText = releasedItems.filter(i => i.result.includes("Perak")).length;
    document.getElementById('count-total').innerText = repository.length;
}

function updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    const dateStr = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
    const clockElement = document.getElementById('local-clock');
    if (clockElement) clockElement.innerHTML = `🕒 ${dateStr} | ${timeStr}`;
}

setInterval(updateClock, 1000);
updateClock();
initDashboard();
