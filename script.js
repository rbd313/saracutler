// Artist calls data structure
const artistCalls = [
  {
    id: 1,
    title: "Jerusalem Artists House - Annual Open Call / בית האמנים ירושלים - קול קורא שנתי",
    description: "Open call for Israeli artists to exhibit at the Jerusalem Artists House. / קול קורא לאמנים ישראלים להציג בבית האמנים ירושלים.",
    deadline: "2025-12-31",
    link: "https://www.art.org.il/",
    active: true
  }
  // Add more artist calls here as needed
];

// Function to render artist calls
function renderArtistCalls() {
  const container = document.getElementById('calls-container');
  if (!container) return;

  const activeCalls = artistCalls.filter(call => call.active);
  
  if (activeCalls.length === 0) {
    container.innerHTML = '<p class="no-calls">אין קולות קוראים פעילים כרגע / No active calls at the moment</p>';
    return;
  }

  container.innerHTML = activeCalls.map(call => `
    <div class="call-item">
      <h4>${call.title}</h4>
      <p>${call.description}</p>
      <p class="deadline"><strong>מועד אחרון / Deadline:</strong> ${new Date(call.deadline).toLocaleDateString('he-IL')}</p>
      <a href="${call.link}" target="_blank" rel="noopener noreferrer" class="call-link">
        לפרטים והגשה / Details & Submit →
      </a>
    </div>
  `).join('');
}

// Handle artist calls subscription form
const subscriptionForm = document.getElementById('artist-calls-subscription');
if (subscriptionForm) {
  subscriptionForm.addEventListener('submit', async (e) => {
    const submitButton = subscriptionForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'שולח / Sending...';
    submitButton.disabled = true;
    
    // Let Formspree handle the submission
    // On success, it will redirect or show success message
  });
}

// Handle contact form
const contactForm = document.querySelector('#contact form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
  });
}

// Initialize artist calls on page load
document.addEventListener('DOMContentLoaded', () => {
  renderArtistCalls();
});
