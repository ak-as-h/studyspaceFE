// closureStore.js — LocalStorage CRUD utility for Property Closure Management
// All functions are structured so LocalStorage ops can be replaced with API calls later.

const CLOSURES_KEY = "ss_closures";
const BOOKINGS_KEY = "ss_bookings";
const NOTIFICATIONS_KEY = "ss_notifications";
const REFUND_REQUESTS_KEY = "ss_refund_requests";
const SEEDED_KEY = "ss_seeded_v1";

// ─── Sample demo data ────────────────────────────────────────────────────────

export const SAMPLE_SPACES = [
  {
    id: "space-001",
    name: "The Reading Nook",
    location: "Koramangala, Bangalore",
    type: "Reading Room",
    pricePerDay: 120,
    capacity: 20,
    facilities: ["Wi-Fi", "Air Conditioning", "Quiet Zone"],
    ownerId: "owner-001",
  },
  {
    id: "space-002",
    name: "Focus Studio",
    location: "Indiranagar, Bangalore",
    type: "Coworking Space",
    pricePerDay: 200,
    capacity: 40,
    facilities: ["Wi-Fi", "Air Conditioning", "Parking", "Coffee"],
    ownerId: "owner-001",
  },
  {
    id: "space-003",
    name: "Scholar's Den",
    location: "HSR Layout, Bangalore",
    type: "Library",
    pricePerDay: 80,
    capacity: 50,
    facilities: ["Wi-Fi", "Quiet Zone", "Reference Books"],
    ownerId: "owner-002",
  },
  {
    id: "space-004",
    name: "The Study Cabin",
    location: "Whitefield, Bangalore",
    type: "Private Cabin",
    pricePerDay: 350,
    capacity: 4,
    facilities: ["Wi-Fi", "Air Conditioning", "Private Room"],
    ownerId: "owner-002",
  },
];

const SAMPLE_BOOKINGS = [
  {
    id: "booking-001",
    studentId: "student-001",
    studentName: "Riya Sharma",
    spaceId: "space-001",
    spaceName: "The Reading Nook",
    date: getFutureDate(5),
    duration: "Daily",
    amount: 120,
    status: "confirmed",
    closureId: null,
    originalDate: null,
    notes: "",
    createdAt: new Date().toISOString(),
  },
  {
    id: "booking-002",
    studentId: "student-001",
    studentName: "Riya Sharma",
    spaceId: "space-002",
    spaceName: "Focus Studio",
    date: getFutureDate(10),
    duration: "Daily",
    amount: 200,
    status: "confirmed",
    closureId: null,
    originalDate: null,
    notes: "",
    createdAt: new Date().toISOString(),
  },
  {
    id: "booking-003",
    studentId: "student-002",
    studentName: "Arjun Mehta",
    spaceId: "space-001",
    spaceName: "The Reading Nook",
    date: getFutureDate(7),
    duration: "Daily",
    amount: 120,
    status: "confirmed",
    closureId: null,
    originalDate: null,
    notes: "",
    createdAt: new Date().toISOString(),
  },
];

function getFutureDate(daysAhead) {
  const d = new Date();
  d.setDate(d.getDate() + daysAhead);
  return d.toISOString().split("T")[0];
}

function generateId(prefix = "id") {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

// ─── Seed on first load ───────────────────────────────────────────────────────

function seedIfEmpty() {
  if (localStorage.getItem(SEEDED_KEY)) return;
  if (!localStorage.getItem(BOOKINGS_KEY)) {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(SAMPLE_BOOKINGS));
  }
  if (!localStorage.getItem(CLOSURES_KEY)) {
    localStorage.setItem(CLOSURES_KEY, JSON.stringify([]));
  }
  if (!localStorage.getItem(NOTIFICATIONS_KEY)) {
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify([]));
  }
  if (!localStorage.getItem(REFUND_REQUESTS_KEY)) {
    localStorage.setItem(REFUND_REQUESTS_KEY, JSON.stringify([]));
  }
  localStorage.setItem(SEEDED_KEY, "true");
}

// ─── Closures ─────────────────────────────────────────────────────────────────

export function getClosures() {
  seedIfEmpty();
  try {
    return JSON.parse(localStorage.getItem(CLOSURES_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveClosures(closures) {
  localStorage.setItem(CLOSURES_KEY, JSON.stringify(closures));
}

export function createClosure(data) {
  const closures = getClosures();
  const now = new Date().toISOString();
  const startDate = new Date(data.startDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let status = "upcoming";
  if (startDate <= today) status = "active";

  const newClosure = {
    id: generateId("closure"),
    spaceId: data.spaceId,
    spaceName: data.spaceName,
    ownerId: data.ownerId || "owner-001",
    type: data.type, // 'temporary' | 'permanent'
    startDate: data.startDate,
    endDate: data.type === "permanent" ? null : data.endDate,
    reason: data.reason,
    status,
    affectedBookingIds: [],
    createdAt: now,
  };
  closures.push(newClosure);
  saveClosures(closures);
  return newClosure;
}

export function updateClosure(id, data) {
  const closures = getClosures();
  const idx = closures.findIndex((c) => c.id === id);
  if (idx === -1) return null;
  closures[idx] = { ...closures[idx], ...data };
  saveClosures(closures);
  return closures[idx];
}

export function deleteClosure(id) {
  const closures = getClosures().filter((c) => c.id !== id);
  saveClosures(closures);
}

// ─── Bookings ─────────────────────────────────────────────────────────────────

export function getBookings() {
  seedIfEmpty();
  try {
    return JSON.parse(localStorage.getItem(BOOKINGS_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveBookings(bookings) {
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
}

export function createBooking(data) {
  const bookings = getBookings();
  const newBooking = {
    id: generateId("booking"),
    studentId: data.studentId || "student-001",
    studentName: data.studentName || "Student",
    spaceId: data.spaceId,
    spaceName: data.spaceName,
    date: data.date,
    duration: data.duration || "Daily",
    amount: data.amount || 0,
    status: "confirmed",
    closureId: null,
    originalDate: null,
    notes: data.notes || "",
    createdAt: new Date().toISOString(),
  };
  bookings.push(newBooking);
  saveBookings(bookings);
  return newBooking;
}

export function updateBooking(id, data) {
  const bookings = getBookings();
  const idx = bookings.findIndex((b) => b.id === id);
  if (idx === -1) return null;
  bookings[idx] = { ...bookings[idx], ...data };
  saveBookings(bookings);
  return bookings[idx];
}

// ─── Availability Check ───────────────────────────────────────────────────────

export function checkSpaceAvailability(spaceId, date, closures) {
  if (!closures) closures = getClosures();
  const checkDate = new Date(date);

  for (const closure of closures) {
    if (closure.spaceId !== spaceId) continue;
    if (closure.status === "resolved") continue;

    const start = new Date(closure.startDate);

    if (closure.type === "permanent") {
      if (checkDate >= start) {
        return {
          available: false,
          reason: `This space has been permanently closed since ${closure.startDate}. Reason: ${closure.reason}`,
        };
      }
    } else {
      const end = new Date(closure.endDate);
      if (checkDate >= start && checkDate <= end) {
        return {
          available: false,
          reason: `This space is temporarily closed from ${closure.startDate} to ${closure.endDate}. Reason: ${closure.reason}`,
        };
      }
    }
  }
  return { available: true, reason: null };
}

export function findAffectedBookings(closure, bookings) {
  if (!bookings) bookings = getBookings();
  const start = new Date(closure.startDate);

  return bookings.filter((booking) => {
    if (booking.spaceId !== closure.spaceId) return false;
    if (["refund_approved", "resolved", "rescheduled", "alternative_selected"].includes(booking.status)) return false;

    const bookingDate = new Date(booking.date);
    if (closure.type === "permanent") {
      return bookingDate >= start;
    } else {
      const end = new Date(closure.endDate);
      return bookingDate >= start && bookingDate <= end;
    }
  });
}

export function markBookingsAsAffected(closureId, affectedBookings) {
  const bookings = getBookings();
  affectedBookings.forEach((ab) => {
    const idx = bookings.findIndex((b) => b.id === ab.id);
    if (idx !== -1) {
      bookings[idx].status = "closure_affected";
      bookings[idx].closureId = closureId;
    }
  });
  saveBookings(bookings);
  return bookings;
}

// ─── Notifications ────────────────────────────────────────────────────────────

export function getNotifications(role) {
  seedIfEmpty();
  try {
    const all = JSON.parse(localStorage.getItem(NOTIFICATIONS_KEY) || "[]");
    if (!role) return all;
    return all.filter((n) => n.role === role);
  } catch {
    return [];
  }
}

export function createNotification(data) {
  const notifications = getNotifications();
  const newNotif = {
    id: generateId("notif"),
    role: data.role,
    title: data.title,
    message: data.message,
    type: data.type || "info",
    bookingId: data.bookingId || null,
    closureId: data.closureId || null,
    read: false,
    createdAt: new Date().toISOString(),
  };
  notifications.push(newNotif);
  localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));
  return newNotif;
}

export function markNotificationRead(id) {
  const notifications = getNotifications();
  const idx = notifications.findIndex((n) => n.id === id);
  if (idx !== -1) notifications[idx].read = true;
  localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));
}

// ─── Refund Requests ──────────────────────────────────────────────────────────

export function getRefundRequests() {
  seedIfEmpty();
  try {
    return JSON.parse(localStorage.getItem(REFUND_REQUESTS_KEY) || "[]");
  } catch {
    return [];
  }
}

export function createRefundRequest(data) {
  const requests = getRefundRequests();
  const newReq = {
    id: generateId("refund"),
    bookingId: data.bookingId,
    studentId: data.studentId || "student-001",
    studentName: data.studentName || "Student",
    spaceName: data.spaceName || "",
    amount: data.amount || 0,
    reason: data.reason || "",
    status: "pending", // 'pending' | 'approved' | 'rejected'
    createdAt: new Date().toISOString(),
  };
  requests.push(newReq);
  localStorage.setItem(REFUND_REQUESTS_KEY, JSON.stringify(requests));
  return newReq;
}

export function updateRefundRequest(id, data) {
  const requests = getRefundRequests();
  const idx = requests.findIndex((r) => r.id === id);
  if (idx === -1) return null;
  requests[idx] = { ...requests[idx], ...data };
  localStorage.setItem(REFUND_REQUESTS_KEY, JSON.stringify(requests));
  return requests[idx];
}

// ─── Helpers for pages ────────────────────────────────────────────────────────

export function getSampleSpaces() {
  return SAMPLE_SPACES;
}

export function getSampleBookings() {
  return getBookings();
}

export function getClosureForSpace(spaceId) {
  const closures = getClosures();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return closures.find((c) => {
    if (c.spaceId !== spaceId) return false;
    if (c.status === "resolved") return false;
    const start = new Date(c.startDate);
    if (c.type === "permanent") return today >= start;
    const end = new Date(c.endDate);
    return today >= start && today <= end;
  }) || null;
}
