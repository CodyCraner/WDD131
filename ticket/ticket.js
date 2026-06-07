
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
document.getElementById('eventDate').min = tomorrow.toISOString().split('T')[0];


document.getElementById('attendeeType').addEventListener('change', function () {
  var idField = document.getElementById('idField');
  var idLabel = document.getElementById('idLabel');
  var idInput = document.getElementById('idInput');

  idInput.value = '';
  idInput.classList.remove('error');

  if (this.value === 'student') {
    idLabel.textContent = 'Student I#';
    idInput.placeholder = '9-digit student number';
    idInput.maxLength = 9;
    idField.classList.remove('hidden');
  } else if (this.value === 'guest') {
    idLabel.textContent = 'Access Code';
    idInput.placeholder = 'Enter event access code';
    idInput.maxLength = 20;
    idField.classList.remove('hidden');
  } else {
    idField.classList.add('hidden');
  }
});

function submitForm() {
  var firstName    = document.getElementById('firstName');
  var lastName     = document.getElementById('lastName');
  var email        = document.getElementById('email');
  var eventDate    = document.getElementById('eventDate');
  var attendeeType = document.getElementById('attendeeType');
  var idInput      = document.getElementById('idInput');

  // Clear previous error highlights
  var fields = [firstName, lastName, email, eventDate, attendeeType, idInput];
  for (var i = 0; i < fields.length; i++) {
    fields[i].classList.remove('error');
  }

  var errors = [];

  if (!firstName.value.trim()) {
    errors.push('First name is required.');
    firstName.classList.add('error');
  }

  if (!lastName.value.trim()) {
    errors.push('Last name is required.');
    lastName.classList.add('error');
  }

  var emailVal = email.value.trim();
  if (!emailVal) {
    errors.push('Email is required.');
    email.classList.add('error');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
    errors.push('Please enter a valid email address.');
    email.classList.add('error');
  }

  if (!eventDate.value) {
    errors.push('Please select an event date.');
    eventDate.classList.add('error');
  } else {
    var chosen = new Date(eventDate.value + 'T00:00:00');
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    if (chosen <= today) {
      errors.push('Event date must be later than today.');
      eventDate.classList.add('error');
    }
  }

  if (!attendeeType.value) {
    errors.push('Please select your attendee type.');
    attendeeType.classList.add('error');
  }

  if (attendeeType.value === 'student') {
    var iv = idInput.value.trim();
    if (!iv) {
      errors.push('Student I# is required.');
      idInput.classList.add('error');
    } else if (!/^\d{9}$/.test(iv)) {
      errors.push('Student I# must be exactly 9 digits.');
      idInput.classList.add('error');
    }
  }

  if (attendeeType.value === 'guest') {
    var iv = idInput.value.trim();
    if (!iv) {
      errors.push('Access Code is required.');
      idInput.classList.add('error');
    } else if (iv.toUpperCase() !== 'EVENT131') {
      errors.push('Access Code is incorrect. Please try again.');
      idInput.classList.add('error');
    }
  }

  var errorList = document.getElementById('errorList');
  var ticket    = document.getElementById('ticket');

  if (errors.length > 0) {
    errorList.innerHTML = '';
    for (var j = 0; j < errors.length; j++) {
      var li = document.createElement('li');
      li.textContent = errors[j];
      errorList.appendChild(li);
    }
    errorList.classList.remove('hidden');
    ticket.classList.add('hidden');
    return;
  }

  // No errors — show ticket
  errorList.classList.add('hidden');

  var months = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];
  var parts = eventDate.value.split('-');
  var formattedDate = months[parseInt(parts[1], 10) - 1] + ' ' + parseInt(parts[2], 10) + ', ' + parts[0];

  document.getElementById('tName').textContent  = firstName.value.trim() + ' ' + lastName.value.trim();
  document.getElementById('tEmail').textContent = emailVal;
  document.getElementById('tDate').textContent  = formattedDate;
  document.getElementById('tType').textContent  = attendeeType.value === 'student' ? 'Student' : 'Guest';
  document.getElementById('tIdLabel').textContent = attendeeType.value === 'student' ? 'Student I#:' : 'Access Code:';
  document.getElementById('tId').textContent    = idInput.value.trim();
  document.getElementById('ticketNum').textContent = 'TKT-' + Math.random().toString(36).substring(2, 8).toUpperCase();

  ticket.classList.remove('hidden');
}