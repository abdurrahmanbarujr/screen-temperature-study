// Visitor Counter System
document.addEventListener('DOMContentLoaded', function() {
    // Function to update the counter display
    function updateCounterDisplay(count) {
        const counterElement = document.getElementById('visitorCount');
        if (counterElement) {
            counterElement.textContent = count.toLocaleString();
        }
    }

    // Function to get today's date as a string (YYYY-MM-DD)
    function getTodayString() {
        const today = new Date();
        return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    }

    // Initialize counter if this is the first visit ever
    if (!localStorage.getItem('totalVisits')) {
        localStorage.setItem('totalVisits', '0');
        localStorage.setItem('visitorsByDay', '{}');
    }

    const today = getTodayString();
    let totalVisits = parseInt(localStorage.getItem('totalVisits'));
    let visitorsByDay = JSON.parse(localStorage.getItem('visitorsByDay'));

    // Check if user already visited today
    const lastVisit = localStorage.getItem('lastVisit');
    
    // If this is first visit of the day OR no record of last visit
    if (lastVisit !== today) {
        // Increment total visits
        totalVisits++;
        localStorage.setItem('totalVisits', totalVisits.toString());
        
        // Update today's count
        if (!visitorsByDay[today]) {
            visitorsByDay[today] = 0;
        }
        visitorsByDay[today]++;
        
        // Store the updated data
        localStorage.setItem('visitorsByDay', JSON.stringify(visitorsByDay));
        localStorage.setItem('lastVisit', today);
    }

    // Get count for today to display
    const todayCount = visitorsByDay[today] || 0;
    
    // Update the counter displays
    updateCounterDisplay(todayCount);
    
    // For administrative purposes - can view all stats in console
    console.log('Visitor Statistics:', {
        totalAllTime: totalVisits,
        dailyBreakdown: visitorsByDay
    });
});
