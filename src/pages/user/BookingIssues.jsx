import React, { useState, useEffect } from "react";
import {
  FaExclamationTriangle,
  FaCalendarAlt,
  FaExchangeAlt,
  FaMoneyBillWave,
  FaBuilding,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import {
  getBookings,
  getNotifications,
  getClosures,
  updateBooking,
  createRefundRequest,
  markNotificationRead,
  checkSpaceAvailability,
  SAMPLE_SPACES,
} from "../../utils/closureStore";

function formatDate(str) {
  if (!str) return "—";
  return new Date(str).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const STATUS_LABEL = {
  confirmed: { label: "Confirmed", cls: "bg-green-50 text-green-700 border-green-200" },
  closure_affected: { label: "Affected by Closure", cls: "bg-amber-50 text-amber-700 border-amber-200" },
  action_required: { label: "Action Required", cls: "bg-red-50 text-red-700 border-red-200" },
  reschedule_requested: { label: "Reschedule Requested", cls: "bg-blue-50 text-blue-700 border-blue-200" },
  rescheduled: { label: "Rescheduled", cls: "bg-green-50 text-green-700 border-green-200" },
  alternative_selected: { label: "Alternative Chosen", cls: "bg-green-50 text-green-700 border-green-200" },
  refund_requested: { label: "Refund Requested", cls: "bg-orange-50 text-orange-700 border-orange-200" },
  refund_approved: { label: "Refund Approved", cls: "bg-green-50 text-green-700 border-green-200" },
  resolved: { label: "Resolved", cls: "bg-[#F5F0E8] text-[#7C6F60] border-[#EDE8DF]" },
};

function StatusBadge({ status }) {
  const info = STATUS_LABEL[status] || { label: status, cls: "bg-[#F5F0E8] text-[#7C6F60] border-[#EDE8DF]" };
  return (
    <span className={`inline-block border px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] ${info.cls}`}>
      {info.label}
    </span>
  );
}

const STUDENT_ID = "student-001";

const BookingIssues = () => {
  const [bookings, setBookings] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [closures, setClosures] = useState([]);
  const [expandedBooking, setExpandedBooking] = useState(null);
  const [activeTab, setActiveTab] = useState({}); // bookingId -> tab index
  const [rescheduleDate, setRescheduleDate] = useState({}); // bookingId -> date
  const [dateError, setDateError] = useState({});
  const [refundReason, setRefundReason] = useState({});
  const [selectedSpace, setSelectedSpace] = useState({}); // bookingId -> spaceId
  const [toast, setToast] = useState(null);

  useEffect(() => {
    setBookings(getBookings().filter((b) => b.studentId === STUDENT_ID));
    setNotifications(getNotifications("student"));
    setClosures(getClosures());
  }, []);

  function reload() {
    setBookings(getBookings().filter((b) => b.studentId === STUDENT_ID));
    setNotifications(getNotifications("student"));
    setClosures(getClosures());
  }

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  const affectedBookings = bookings.filter((b) =>
    ["closure_affected", "action_required"].includes(b.status)
  );

  // ─── Find the closure for a booking ───────────────────────────────────────

  function getClosureForBooking(booking) {
    return closures.find((c) => c.id === booking.closureId);
  }

  // ─── Reschedule ───────────────────────────────────────────────────────────

  function handleReschedule(booking) {
    const newDate = rescheduleDate[booking.id];
    if (!newDate) {
      setDateError((p) => ({ ...p, [booking.id]: "Please select a new date." }));
      return;
    }
    const { available, reason } = checkSpaceAvailability(booking.spaceId, newDate, closures);
    if (!available) {
      setDateError((p) => ({ ...p, [booking.id]: reason }));
      return;
    }
    setDateError((p) => ({ ...p, [booking.id]: null }));
    updateBooking(booking.id, {
      status: "rescheduled",
      originalDate: booking.date,
      date: newDate,
      notes: `Rescheduled from ${booking.date} to ${newDate} due to closure.`,
    });
    reload();
    showToast("Booking rescheduled successfully.");
  }

  // ─── Alternative ──────────────────────────────────────────────────────────

  function handleAlternative(booking) {
    const spaceId = selectedSpace[booking.id];
    if (!spaceId) return;
    const space = SAMPLE_SPACES.find((s) => s.id === spaceId);
    updateBooking(booking.id, {
      status: "alternative_selected",
      notes: `Alternative space selected: ${space?.name}`,
    });
    reload();
    showToast("Alternative space selected.");
  }

  // ─── Refund ───────────────────────────────────────────────────────────────

  function handleRefund(booking) {
    const reason = refundReason[booking.id] || "";
    createRefundRequest({
      bookingId: booking.id,
      studentId: STUDENT_ID,
      studentName: booking.studentName,
      spaceName: booking.spaceName,
      amount: booking.amount,
      reason,
    });
    updateBooking(booking.id, { status: "refund_requested" });
    reload();
    showToast("Refund request submitted.");
  }

  // ─── Tabs ─────────────────────────────────────────────────────────────────

  const TABS = [
    { label: "Reschedule", icon: <FaCalendarAlt size={11} /> },
    { label: "Alternative", icon: <FaExchangeAlt size={11} /> },
    { label: "Refund", icon: <FaMoneyBillWave size={11} /> },
  ];

  function tabFor(id) {
    return activeTab[id] ?? 0;
  }

  const availableSpaces = SAMPLE_SPACES.filter((s) => {
    const { available } = checkSpaceAvailability(s.id, new Date().toISOString().split("T")[0], closures);
    return available;
  });

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#F5F0E8] px-5 py-10 md:px-10 lg:px-12">

      {/* Toast */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 bg-[#1C1917] text-white px-5 py-3 text-sm font-semibold shadow-lg">
          {toast}
        </div>
      )}

      {/* Page Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-px bg-[#C17A56]" />
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
            Student Portal
          </span>
        </div>
        <h1
          className="text-3xl font-bold text-[#1C1917] md:text-4xl"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Booking Issues & Notifications
        </h1>
        <p className="mt-2 text-sm text-[#7C6F60]">
          Resolve affected bookings due to property closures.
        </p>
      </div>

      {/* Unread Notifications */}
      {notifications.filter((n) => !n.read).length > 0 && (
        <div className="mb-8 space-y-3">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-[#C17A56]" />
            <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-[#1C1917]">
              Notifications
            </h2>
          </div>
          {notifications.filter((n) => !n.read).map((notif) => (
            <div
              key={notif.id}
              className="flex items-start gap-4 border border-amber-200 bg-amber-50 p-4"
            >
              <FaExclamationTriangle className="mt-0.5 shrink-0 text-amber-500" size={14} />
              <div className="flex-1">
                <p className="text-sm font-semibold text-amber-700">{notif.title}</p>
                <p className="mt-1 text-xs text-amber-600">{notif.message}</p>
              </div>
              <button
                type="button"
                onClick={() => { markNotificationRead(notif.id); reload(); }}
                className="shrink-0 text-[10px] font-bold uppercase tracking-[0.08em] text-amber-600 hover:text-amber-800 transition"
              >
                Dismiss
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Affected Bookings – Resolution Panel */}
      {affectedBookings.length > 0 && (
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-[#C17A56]" />
            <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-[#1C1917]">
              Action Required ({affectedBookings.length})
            </h2>
          </div>

          <div className="space-y-4">
            {affectedBookings.map((booking) => {
              const closure = getClosureForBooking(booking);
              const isExpanded = expandedBooking === booking.id;
              const tab = tabFor(booking.id);

              return (
                <div key={booking.id} className="bg-white border border-[#EDE8DF]">
                  {/* Summary Row */}
                  <div
                    className="flex cursor-pointer items-center justify-between px-6 py-4"
                    onClick={() => setExpandedBooking(isExpanded ? null : booking.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-amber-50 text-amber-500 border border-amber-200">
                        <FaExclamationTriangle size={14} />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1C1917]">{booking.spaceName}</p>
                        <p className="mt-0.5 text-xs text-[#7C6F60]">
                          Booked: {formatDate(booking.date)} — ₹{booking.amount}
                        </p>
                        {closure && (
                          <p className="mt-0.5 text-xs text-amber-600">
                            Closure: {formatDate(closure.startDate)}
                            {closure.endDate && ` → ${formatDate(closure.endDate)}`}
                            {" · "}{closure.reason}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <StatusBadge status={booking.status} />
                      <span className="text-[#A09A93]">
                        {isExpanded ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Resolution Panel */}
                  {isExpanded && (
                    <div className="border-t border-[#EDE8DF] px-6 py-5">
                      {/* Tab buttons */}
                      <div className="mb-5 flex border border-[#D4C5A9]">
                        {TABS.map((t, i) => (
                          <button
                            key={t.label}
                            type="button"
                            onClick={() => setActiveTab((p) => ({ ...p, [booking.id]: i }))}
                            className={`flex flex-1 items-center justify-center gap-2 py-3 text-xs font-bold tracking-[0.06em] uppercase transition ${
                              tab === i
                                ? "bg-[#1C1917] text-white"
                                : "bg-white text-[#7C6F60] hover:bg-[#F5F0E8]"
                            }`}
                          >
                            {t.icon}
                            <span className="hidden sm:inline">{t.label}</span>
                          </button>
                        ))}
                      </div>

                      {/* Tab 0: Reschedule */}
                      {tab === 0 && (
                        <div className="space-y-4">
                          <p className="text-sm text-[#7C6F60]">
                            Select a new date to reschedule your booking at{" "}
                            <strong className="text-[#1C1917]">{booking.spaceName}</strong>.
                          </p>
                          <div>
                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] text-[#7C6F60]">
                              New Date
                            </label>
                            <input
                              type="date"
                              value={rescheduleDate[booking.id] || ""}
                              min={new Date().toISOString().split("T")[0]}
                              onChange={(e) =>
                                setRescheduleDate((p) => ({ ...p, [booking.id]: e.target.value }))
                              }
                              className="w-full max-w-xs border border-[#D4C5A9] bg-white px-4 py-3 text-sm text-[#1C1917] outline-none focus:border-[#C17A56]"
                            />
                            {dateError[booking.id] && (
                              <p className="mt-2 text-xs text-red-600">{dateError[booking.id]}</p>
                            )}
                          </div>
                          <button
                            type="button"
                            onClick={() => handleReschedule(booking)}
                            className="bg-[#1C1917] px-6 py-3 text-xs font-bold tracking-[0.08em] uppercase text-white transition hover:bg-[#C17A56]"
                          >
                            Confirm Reschedule
                          </button>
                        </div>
                      )}

                      {/* Tab 1: Alternative */}
                      {tab === 1 && (
                        <div className="space-y-4">
                          <p className="text-sm text-[#7C6F60]">
                            Choose an available alternative study space.
                          </p>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {availableSpaces
                              .filter((s) => s.id !== booking.spaceId)
                              .map((space) => (
                                <label
                                  key={space.id}
                                  className={`flex cursor-pointer items-start gap-3 border p-4 transition ${
                                    selectedSpace[booking.id] === space.id
                                      ? "border-[#1C1917] bg-[#F5F0E8]"
                                      : "border-[#EDE8DF] bg-white hover:border-[#C17A56]/40"
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name={`alt-${booking.id}`}
                                    value={space.id}
                                    checked={selectedSpace[booking.id] === space.id}
                                    onChange={() =>
                                      setSelectedSpace((p) => ({ ...p, [booking.id]: space.id }))
                                    }
                                    className="mt-1 accent-[#1C1917]"
                                  />
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <FaBuilding size={11} className="text-[#C17A56]" />
                                      <p className="font-semibold text-sm text-[#1C1917]">{space.name}</p>
                                    </div>
                                    <p className="mt-0.5 text-xs text-[#7C6F60]">{space.location}</p>
                                    <p className="mt-1 text-xs font-bold text-[#C17A56]">₹{space.pricePerDay}/day</p>
                                    {space.pricePerDay !== booking.amount && (
                                      <p className="mt-0.5 text-[10px] text-[#A09A93]">
                                        Price difference: {space.pricePerDay > booking.amount ? "+" : ""}
                                        ₹{space.pricePerDay - booking.amount}
                                      </p>
                                    )}
                                  </div>
                                </label>
                              ))}
                          </div>
                          {availableSpaces.filter((s) => s.id !== booking.spaceId).length === 0 && (
                            <p className="text-sm text-[#7C6F60]">No alternative spaces available currently.</p>
                          )}
                          <button
                            type="button"
                            disabled={!selectedSpace[booking.id]}
                            onClick={() => handleAlternative(booking)}
                            className="bg-[#1C1917] px-6 py-3 text-xs font-bold tracking-[0.08em] uppercase text-white transition hover:bg-[#C17A56] disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            Select Alternative
                          </button>
                        </div>
                      )}

                      {/* Tab 2: Refund */}
                      {tab === 2 && (
                        <div className="space-y-4">
                          <p className="text-sm text-[#7C6F60]">
                            Submit a refund request for your booking of{" "}
                            <strong className="text-[#1C1917]">₹{booking.amount}</strong>.
                          </p>
                          <div>
                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] text-[#7C6F60]">
                              Reason (optional)
                            </label>
                            <textarea
                              rows={3}
                              value={refundReason[booking.id] || ""}
                              onChange={(e) =>
                                setRefundReason((p) => ({ ...p, [booking.id]: e.target.value }))
                              }
                              placeholder="Any additional information..."
                              className="w-full border border-[#D4C5A9] bg-white px-4 py-3 text-sm text-[#1C1917] outline-none focus:border-[#C17A56] resize-none"
                            />
                          </div>
                          <div className="border border-[#EDE8DF] bg-[#F5F0E8] p-4 text-sm text-[#7C6F60]">
                            <strong className="text-[#1C1917]">Note:</strong> Refund requests are reviewed by an admin. You'll be notified when it's processed.
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRefund(booking)}
                            className="bg-[#C17A56] px-6 py-3 text-xs font-bold tracking-[0.08em] uppercase text-white transition hover:bg-[#A8663F]"
                          >
                            Request Refund
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* All Bookings Table */}
      <div className="bg-white border border-[#EDE8DF]">
        <div className="flex items-center gap-3 border-b border-[#EDE8DF] px-6 py-5">
          <span className="w-6 h-px bg-[#C17A56]" />
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-[#1C1917]">
            All Bookings
          </h2>
          <span className="ml-auto text-xs text-[#A09A93]">{bookings.length} total</span>
        </div>

        {bookings.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
            <FaCalendarAlt className="mb-4 text-3xl text-[#D4C5A9]" />
            <p className="font-semibold text-[#1C1917]">No bookings yet</p>
            <p className="mt-1 text-sm text-[#7C6F60]">Your booking history will appear here.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#EDE8DF] bg-[#F5F0E8]">
                  {["Space", "Date", "Duration", "Amount", "Status"].map((h) => (
                    <th
                      key={h}
                      className="px-5 py-3 text-left text-[10px] font-bold tracking-[0.1em] uppercase text-[#7C6F60]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, i) => (
                  <tr
                    key={b.id}
                    className={`border-b border-[#EDE8DF] transition hover:bg-[#F5F0E8] ${i % 2 === 1 ? "bg-[#FAF8F5]" : ""}`}
                  >
                    <td className="px-5 py-4 font-semibold text-[#1C1917]">{b.spaceName}</td>
                    <td className="px-5 py-4 text-[#7C6F60]">
                      {formatDate(b.date)}
                      {b.originalDate && (
                        <span className="ml-2 text-[10px] text-[#A09A93]">
                          (was {formatDate(b.originalDate)})
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-[#7C6F60]">{b.duration}</td>
                    <td className="px-5 py-4 font-bold text-[#1C1917]">₹{b.amount}</td>
                    <td className="px-5 py-4">
                      <StatusBadge status={b.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Empty state if no affected */}
      {affectedBookings.length === 0 && bookings.length > 0 && (
        <div className="mt-8 flex items-start gap-3 border border-green-200 bg-green-50 p-4">
          <FaCheckCircle className="mt-0.5 shrink-0 text-green-500" size={14} />
          <p className="text-sm text-green-700">
            All your bookings are in good standing. No closures are affecting your reservations.
          </p>
        </div>
      )}
    </div>
  );
};

export default BookingIssues;
