const launchDate = new Date("2026-12-31T20:00:00").getTime();
        function updateTimer() {
            const now = new Date().getTime();
            const distance = launchDate - now;
            const d = Math.floor(distance / (1000 * 60 * 60 * 24));
            const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((distance % (1000 * 60)) / 1000);
            if (distance < 0) return;
            document.getElementById("days").innerText = d.toString().padStart(2, '0');
            document.getElementById("hours").innerText = h.toString().padStart(2, '0');
            document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
            document.getElementById("seconds").innerText = s.toString().padStart(2, '0');
        }
        setInterval(updateTimer, 1000);
        updateTimer();

        function simulateVisits() {
            const countEl = document.getElementById('visit-count');
            let count = parseInt(countEl.innerText.replace(',', ''));
            if (Math.random() > 0.7) {
                count += 1;
                countEl.innerText = count.toLocaleString();
            }
        }
        setInterval(simulateVisits, 5000);