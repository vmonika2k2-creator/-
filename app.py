from flask import Flask, request, jsonify

app = Flask(__name__)

# Temporary in-memory storage for bookings
bookings_list = []

# The four services shown in the Home Cleaning popup
cleaning_services = [
    {"id": "full-house", "name": "Full House Cleaning Services", "icon": "🏠", "desc": "Deep clean of every room, floor to ceiling"},
    {"id": "kitchen", "name": "Kitchen Services", "icon": "🍳", "desc": "Degreasing of tiles, slab, stove, chimney and cabinets"},
    {"id": "sofa", "name": "Sofa Cleaning Services", "icon": "🛋️", "desc": "Vacuuming and shampooing for sofas, cushions and recliners"},
    {"id": "bathroom", "name": "Bathroom Cleaning Services", "icon": "🚿", "desc": "Tiles, fittings, toilet and drain deep cleaning"},
]

html_code = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>NoBroker Home Services Clone</title>
    <!-- Tailwind CSS (preflight off so the existing styles stay the same) -->
    <script>tailwind = { config: { corePlugins: { preflight: false } } };</script>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: Arial, sans-serif; }
        body { background-color: #f4f6f9; color: #333; }
        .navbar { display: flex; justify-content: space-between; align-items: center; background: #fff; padding: 15px 40px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .logo strong { color: #fd3752; font-size: 1.2rem; }
        .nav-right { display: flex; align-items: center; gap: 20px; font-size: 0.9rem; }
        .nav-right span, .nav-right select { cursor: pointer; font-weight: 500; }
        select { border: none; font-size: 0.9rem; outline: none; background: transparent; }
        .search-section { display: flex; justify-content: center; padding: 25px; }
        .search-box { background: #fff; width: 600px; padding: 12px 20px; border-radius: 30px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); display: flex; gap: 10px; }
        .search-box input { border: none; outline: none; width: 100%; font-size: 1rem; }
        .container { max-width: 1100px; margin: 0 auto; padding: 10px 20px; }
        .hero-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 30px; align-items: center; }
        .services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; text-align: center; }
        .service-item { cursor: pointer; transition: transform 0.2s; padding: 8px; border-radius: 10px; }
        .service-item:hover { transform: translateY(-4px); background: #eef1f6; }
        .badge { background: #fde8b9; color: #8a5a00; font-size: 0.7rem; font-weight: bold; padding: 2px 8px; border-radius: 10px; display: inline-block; margin-bottom: 5px; }
        .icon-circle { width: 60px; height: 60px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; margin: 0 auto 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.08); }
        .promo-banner { height: 240px; border-radius: 12px; background: linear-gradient(135deg, #2c5e50, #4a7c6d); display: flex; align-items: flex-end; overflow: hidden; }
        .promo-overlay { width: 100%; background: rgba(0,0,0,0.7); color: #fff; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; }
        .btn-teal { background: #009587; color: #fff; border: none; padding: 8px 20px; border-radius: 5px; font-weight: bold; cursor: pointer; }
        .offers-section { background: #fff; margin-top: 30px; padding: 25px; border-radius: 12px; }
        .offers-section h2 { text-align: center; margin-bottom: 20px; }
        .offers-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .offer-card { padding: 20px; border-radius: 12px; min-height: 150px; display: flex; flex-direction: column; justify-content: space-between; }
        .dark { background: #1a1a1a; color: #fff; }
        .light-green { background: #e6f7f2; color: #0b4f3e; }
        .light-blue { background: #eaf4fc; color: #164366; }
        button { align-self: flex-start; padding: 8px 16px; border-radius: 20px; border: 1px solid #ccc; background: #fff; font-weight: bold; cursor: pointer; }
        button:hover { opacity: 0.9; }

        /* Popup Modal Styles */
        .modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); justify-content: center; align-items: center; z-index: 1000; }
        .modal-content { background: #fff; padding: 25px; border-radius: 12px; width: 400px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); }
        .modal-content h3 { margin-bottom: 15px; color: #fd3752; }
        .modal-content input { width: 100%; padding: 10px; margin: 8px 0 15px; border: 1px solid #ccc; border-radius: 6px; }
        .modal-actions { display: flex; justify-content: flex-end; gap: 10px; }
        .booking-card { background: #f4f6f9; padding: 10px; border-radius: 6px; margin-bottom: 10px; font-size: 0.9rem; border-left: 4px solid #009587; }
    </style>
</head>
<body>
    <div class="navbar">
        <div class="logo">🚫 <strong>NOBROKER</strong> Home Services</div>
        <div class="nav-right">
            <select id="citySelect">
                <option value="Pune">Pune ▼</option>
                <option value="Hyderabad">Hyderabad ▼</option>
                <option value="Bangalore">Bangalore ▼</option>
                <option value="Mumbai">Mumbai ▼</option>
            </select>
            <span onclick="openBookingsModal()">📋 My Bookings (<span id="bookingCount">0</span>)</span>
            <span onclick="openAuthModal('Sign Up')">Sign Up</span>
            <span onclick="openAuthModal('Log In')">Log In</span>
        </div>
    </div>

    <div class="search-section">
        <div class="search-box">
            🔍 <input type="text" id="searchInput" onkeyup="filterServices()" placeholder="Type to search services (e.g., Cleaning, Painting, AC)...">
        </div>
    </div>

    <div class="container">
        <div class="hero-grid">
            <div class="services-grid" id="servicesGrid">
                <div class="service-item" onclick="openCleaningPopup()"><span class="badge">Upto 60% Off*</span><div class="icon-circle">🧹</div><p>Home Cleaning</p></div>
                <div class="service-item" onclick="openBookingModal('Packers & Movers')"><span class="badge">Lowest Quote*</span><div class="icon-circle">🚚</div><p>Packers & Movers</p></div>
                <div class="service-item" onclick="openBookingModal('Home Painting')"><span class="badge">Flat 15% Off</span><div class="icon-circle">🖌️</div><p>Painting</p></div>
                <div class="service-item" onclick="openBookingModal('Sales Agreement')"><br><div class="icon-circle">📄</div><p>Sales Agreement</p></div>
                <div class="service-item" onclick="openBookingModal('Rental Agreement')"><span class="badge">Flat 30% Off*</span><div class="icon-circle">📝</div><p>Rental Agreement</p></div>
                <div class="service-item" onclick="openBookingModal('Electrician, Plumber & Carpenter')"><br><div class="icon-circle">🔧</div><p>Electrician & Plumber</p></div>
                <div class="service-item" onclick="openBookingModal('Interior & Renovation')"><br><div class="icon-circle">🛋️</div><p>Interior & Renovation</p></div>
                <div class="service-item" onclick="openBookingModal('AC & Appliance Repair')"><span class="badge">Upto 30% Off*</span><div class="icon-circle">❄️</div><p>AC & Appliance Repair</p></div>
            </div>
            <div class="promo-banner">
                <div class="promo-overlay">
                    <span>Cleaning Services</span>
                    <button class="btn-teal" onclick="openBookingModal('Deep Cleaning Service')">Book</button>
                </div>
            </div>
        </div>

        <div class="offers-section">
            <h2>Offers for you</h2>
            <div class="offers-grid">
                <div class="offer-card dark"><small>VIP MEMBERSHIP</small><h3>Save upto 15% off on Home Services</h3><button onclick="openBookingModal('VIP Membership Plan')">Buy Now</button></div>
                <div class="offer-card light-green"><small>Free Tenant Verification</small><h3>Upto 30% off on Rental agreement</h3><button onclick="openBookingModal('Rental Agreement (30% Off)')">Create Agreement</button></div>
                <div class="offer-card light-blue"><small>Festive Sale</small><h3>Flat 15% off on Home Painting</h3><button onclick="openBookingModal('Home Painting (15% Off)')">Explore Now</button></div>
            </div>
        </div>
    </div>

    <!-- Home Cleaning Popup (4 services) -->
    <div id="cleaningModal" class="modal">
        <div class="bg-white rounded-2xl p-6 w-[480px] max-w-[92vw] shadow-2xl">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold text-gray-900" style="margin:0;color:#111">Home Cleaning Services</h3>
                <button class="text-2xl leading-none border-0 bg-transparent" onclick="closeModals()">✕</button>
            </div>
            <p class="text-sm text-gray-500 mb-4">Choose a service to book</p>
            <div id="cleaningList" class="grid grid-cols-2 gap-3"></div>
        </div>
    </div>

    <!-- Booking Modal -->
    <div id="bookingModal" class="modal">
        <div class="modal-content">
            <h3 id="modalServiceTitle">Book Service</h3>
            <label>Your Name:</label>
            <input type="text" id="custName" placeholder="Enter your full name">
            <label>Phone Number:</label>
            <input type="text" id="custPhone" placeholder="Enter 10-digit mobile number">
            <label>Preferred Date:</label>
            <input type="date" id="custDate">
            <div class="modal-actions">
                <button onclick="closeModals()">Cancel</button>
                <button class="btn-teal" onclick="submitBooking()">Confirm Booking</button>
            </div>
        </div>
    </div>

    <!-- My Bookings Modal -->
    <div id="myBookingsModal" class="modal">
        <div class="modal-content">
            <h3>My Bookings</h3>
            <div id="bookingsContainer">No bookings yet.</div>
            <div class="modal-actions" style="margin-top:15px;">
                <button class="btn-teal" onclick="closeModals()">Close</button>
            </div>
        </div>
    </div>

    <script>
        let selectedService = "";

        // 1. Live Search Filter
        function filterServices() {
            let input = document.getElementById('searchInput').value.toLowerCase();
            let items = document.getElementsByClassName('service-item');
            for (let item of items) {
                let text = item.innerText.toLowerCase();
                item.style.display = text.includes(input) ? "block" : "none";
            }
        }

        // 2. Open Booking Popup
        function openBookingModal(serviceName) {
            selectedService = serviceName;
            document.getElementById('modalServiceTitle').innerText = "Book: " + serviceName;
            document.getElementById('bookingModal').style.display = 'flex';
        }

        // Home Cleaning popup: loads the 4 services from Python
        async function openCleaningPopup() {
            const list = document.getElementById('cleaningList');
            const res = await fetch('/api/cleaning-services');
            const services = await res.json();
            list.innerHTML = services.map(s =>
                `<div class="cursor-pointer rounded-xl border border-gray-200 p-4 text-center hover:border-teal-600 hover:bg-teal-50 transition"
                      onclick="pickCleaningService('${s.name}')">
                    <div class="text-3xl mb-2">${s.icon}</div>
                    <div class="font-semibold text-gray-900 text-sm">${s.name}</div>
                    <div class="text-xs text-gray-500 mt-1">${s.desc}</div>
                </div>`
            ).join('');
            document.getElementById('cleaningModal').style.display = 'flex';
        }

        function pickCleaningService(name) {
            closeModals();
            openBookingModal(name);
        }

        function openAuthModal(type) {
            alert(type + " feature triggered! Enter details during booking.");
        }

        function closeModals() {
            document.getElementById('cleaningModal').style.display = 'none';
            document.getElementById('bookingModal').style.display = 'none';
            document.getElementById('myBookingsModal').style.display = 'none';
        }

        // 3. Send Booking Data to Python Backend
        async function submitBooking() {
            const name = document.getElementById('custName').value;
            const phone = document.getElementById('custPhone').value;
            const date = document.getElementById('custDate').value;
            const city = document.getElementById('citySelect').value;

            if (!name || !phone || !date) {
                alert("Please fill in all details!");
                return;
            }

            const response = await fetch('/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ service: selectedService, name, phone, date, city })
            });

            const data = await response.json();
            document.getElementById('bookingCount').innerText = data.total;
            alert("Success! Your booking for " + selectedService + " is confirmed.");
            closeModals();
        }

        // 4. Fetch & Display Saved Bookings from Python
        async function openBookingsModal() {
            const response = await fetch('/bookings');
            const bookings = await response.json();
            const container = document.getElementById('bookingsContainer');
            
            if (bookings.length === 0) {
                container.innerHTML = "<p>No bookings yet. Click any service to book!</p>";
            } else {
                container.innerHTML = bookings.map(b => 
                    `<div class="booking-card">
                        <strong>${b.service}</strong> (${b.city})<br>
                        Name: ${b.name} | Date: ${b.date}
                    </div>`
                ).join('');
            }
            document.getElementById('myBookingsModal').style.display = 'flex';
        }
    </script>
</body>
</html>
"""

@app.route('/')
def home():
    return html_code

@app.route('/api/cleaning-services')
def get_cleaning_services():
    return jsonify(cleaning_services)

@app.route('/book', methods=['POST'])
def book_service():
    data = request.json
    bookings_list.append(data)
    return jsonify({"status": "success", "total": len(bookings_list)})

@app.route('/bookings', methods=['GET'])
def get_bookings():
    return jsonify(bookings_list)

if __name__ == '__main__':
    app.run(debug=True)