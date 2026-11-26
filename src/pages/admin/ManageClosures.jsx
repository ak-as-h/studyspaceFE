import React, { useState, useEffect } from "react";
import {
  FaLock,
  FaUsers,
  FaBuilding,
  FaExclamationTriangle,
  FaCheckCircle,
  FaTimesCircle,
  FaChevronDown,
  FaChevronUp,
  FaMoneyBillWave,
} from "react-icons/fa";
import {
  getClosures,
  getBookings,
  getRefundRequests,
  updateRefundRequest,
  updateBooking,
} from "../../utils/closureStore";

function formatDate(str) {
  if (!str) return "—";
  return new Date(str).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function statusBadge(status) {
  const map = {
    active: "bg-[#C17A56]/10 text-[#C17A56] border-[#C17A56]/30",
    upcoming: "bg-amber-50 text-amber-700 border-amber-200",
    resolved: "bg-[#F5F0E8] text-[#7C6F60] border-[#EDE8DF]",
    permanent: "bg-[#1C1917] text-white border-[#1C1917]",
  };
  return map[status] || map.resolved;
}

function refundStatusInfo(status) {
  if (status === "pending") return { label: "Pending", cls: "bg-amber-50 text-amber-700 border-amber-200" };
  if (status === "approved") return { label: "Approved", cls: "bg-green-50 text-green-700 border-green-200" };
  if (status === "rejected") return { label: "Rejected", cls: "bg-red-50 text-red-700 border-red-200" };
  return { label: status, cls: "bg-[#F5F0E8] text-[#7C6F60] border-[#EDE8DF]" };
}

function bookingStatusLabel(status) {
  const map = {
    confirmed: "Confirmed",
    closure_affected: "Affected",
    action_required: "Action Required",
    rescheduled: "Rescheduled",
    alternative_selected: "Alt. Chosen",
    refund_requested: "Refund Requested",
    refund_approved: "Refund Approved",
    resolved: "Resolved",
  };
  return map[status] || status;
}

function bookingStatusCls(status) {
  if (["closure_affected", "action_required"].includes(status)) return "bg-amber-50 text-amber-700 border-amber-200";
  if (["rescheduled", "alternative_selected", "refund_approved", "confirmed"].includes(status)) return "bg-green-50 text-green-700 border-green-200";
  if (status === "refund_requested") return "bg-orange-50 text-orange-700 border-orange-200";
  return "bg-[#F5F0E8] text-[#7C6F60] border-[#EDE8DF]";
}

const ManageClosures = () => {
  const [closures, setClosures] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [refundRequests, setRefundRequests] = useState([]);
  const [expandedClosure, setExpandedClosure] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    setClosures(getClosures());
    setBookings(getBookings());
    setRefundRequests(getRefundRequests());
  }, []);

  function reload() {
    setClosures(getClosures());
    setBookings(getBookings());
    setRefundRequests(getRefundRequests());
  }

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  // ─── Stats ─────────────────────────────────────────────────────────────────

  const totalClosures = closures.length;
  const activeClosures = closures.filter((c) => c.status === "active").length;
  const affectedTotal = bookings.filter((b) =>
    ["closure_affected", "action_required"].includes(b.status)
  ).length;
  const pendingRefunds = refundRequests.filter((r) => r.status === "pending").length;

  // ─── Affected bookings for a specific closure ───────────────────────────────

  function getAffectedForClosure(closure) {
    return bookings.filter(
      (b) => closure.affectedBookingIds?.includes(b.id)
    );
  }

  // ─── Unresolved bookings ───────────────────────────────────────────────────

  const unresolvedBookings = bookings.filter((b) =>
    ["closure_affected", "action_required"].includes(b.status)
  );

  // ─── Refund actions ────────────────────────────────────────────────────────

  function handleRefundAction(id, action) {
    const req = updateRefundRequest(id, { status: action });
    if (req) {
      // Also update booking status if approved
      if (action === "approved") {
        updateBooking(req.bookingId, { status: "refund_approved" });
      }
    }
    reload();
    showToast(`Refund request ${action}.`);
  }

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
            Admin Console
          </span>
        </div>
        <h1
          className="text-3xl font-bold text-[#1C1917] md:text-4xl"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Manage Closures
        </h1>
        <p className="mt-2 text-sm text-[#7C6F60]">
          Monitor property closures, affected bookings, and refund requests across the platform.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="mb-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { label: "Total Closures", value: totalClosures, icon: <FaLock />, accent: false },
          { label: "Active Closures", value: activeClosures, icon: <FaBuilding />, accent: true },
          { label: "Affected Bookings", value: affectedTotal, icon: <FaExclamationTriangle />, accent: affectedTotal > 0 },
          { label: "Pending Refunds", value: pendingRefunds, icon: <FaMoneyBillWave />, accent: pendingRefunds > 0 },
        ].map((card) => (
          <div key={card.label} className="bg-white border border-[#EDE8DF] p-5">
            <div
              className={`mb-3 flex h-9 w-9 items-center justify-center ${
                card.accent ? "bg-[#C17A56]/10 text-[#C17A56]" : "bg-[#F5F0E8] text-[#7C6F60]"
              }`}
            >
              {card.icon}
            </div>
            <p className={`text-2xl font-bold ${card.accent ? "text-[#C17A56]" : "text-[#1C1917]"}`}>
              {card.value}
            </p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#A09A93]">
              {card.label}
            </p>
          </div>
        ))}
      </div>

      {/* All Closures Table */}
      <div className="mb-10 bg-white border border-[#EDE8DF]">
        <div className="flex items-center gap-3 border-b border-[#EDE8DF] px-6 py-5">
          <span className="w-6 h-px bg-[#C17A56]" />
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-[#1C1917]">
            All Property Closures
          </h2>
          <span className="ml-auto text-xs text-[#A09A93]">{closures.length} records</span>
        </div>

        {closures.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
            <FaLock className="mb-4 text-3xl text-[#D4C5A9]" />
            <p className="font-semibold text-[#1C1917]">No closures recorded</p>
            <p className="mt-1 text-sm text-[#7C6F60]">Property owners have not created any closures yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#EDE8DF] bg-[#F5F0E8]">
                  {["Space", "Owner ID", "Type", "Dates", "Reason", "Affected", "Status", ""].map(
                    (h) => (
                      <th
                        key={h}
                        className="px-5 py-3 text-left text-[10px] font-bold tracking-[0.1em] uppercase text-[#7C6F60]"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {closures.map((c, i) => {
                  const isExpanded = expandedClosure === c.id;
                  const affected = getAffectedForClosure(c);

                  return (
                    <React.Fragment key={c.id}>
                      <tr
                        className={`border-b border-[#EDE8DF] transition ${
                          i % 2 === 1 ? "bg-[#FAF8F5]" : ""
                        } ${isExpanded ? "bg-[#F5F0E8]" : "hover:bg-[#F5F0E8]"}`}
                      >
                        <td className="px-5 py-4 font-semibold text-[#1C1917]">{c.spaceName}</td>
                        <td className="px-5 py-4 text-[#7C6F60] text-xs">{c.ownerId}</td>
                        <td className="px-5 py-4">
                          <span
                            className={`inline-block border px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] ${
                              c.type === "permanent"
                                ? statusBadge("permanent")
                                : "bg-[#F5F0E8] text-[#C17A56] border-[#C17A56]/30"
                            }`}
                          >
                            {c.type}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-[#7C6F60] text-xs whitespace-nowrap">
                          {formatDate(c.startDate)}
                          {c.type === "temporary" && c.endDate && (
                            <> → {formatDate(c.endDate)}</>
                          )}
                          {c.type === "permanent" && <> onwards</>}
                        </td>
                        <td className="px-5 py-4 text-[#7C6F60] max-w-[160px] truncate" title={c.reason}>
                          {c.reason}
                        </td>
                        <td className="px-5 py-4 text-center font-bold text-[#1C1917]">
                          {c.affectedBookingIds?.length || 0}
                        </td>
                        <td className="px-5 py-4">
                          <span
                            className={`inline-block border px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] ${statusBadge(c.status)}`}
                          >
                            {c.status}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          {affected.length > 0 && (
                            <button
                              type="button"
                              onClick={() => setExpandedClosure(isExpanded ? null : c.id)}
                              className="flex items-center gap-1.5 text-xs font-bold tracking-[0.06em] uppercase text-[#C17A56] transition hover:text-[#A8663F]"
                            >
                              {isExpanded ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                              Details
                            </button>
                          )}
                        </td>
                      </tr>

                      {/* Expanded affected bookings */}
                      {isExpanded && (
                        <tr>
                          <td colSpan={8} className="border-b border-[#EDE8DF] bg-[#FAF8F5] px-5 py-4">
                            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#7C6F60]">
                              Affected Students ({affected.length})
                            </div>
                            <div className="space-y-2">
                              {affected.map((b) => (
                                <div
                                  key={b.id}
                                  className="flex flex-col gap-1 border border-[#EDE8DF] bg-white px-4 py-3 sm:flex-row sm:items-center sm:gap-4"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="flex h-7 w-7 items-center justify-center bg-[#F5F0E8] text-[#C17A56]">
                                      <FaUsers size={11} />
                                    </div>
                                    <div>
                                      <p className="text-xs font-semibold text-[#1C1917]">{b.studentName}</p>
                                      <p className="text-[10px] text-[#7C6F60]">{b.studentId}</p>
                                    </div>
                                  </div>
                                  <span className="text-xs text-[#7C6F60]">{formatDate(b.date)}</span>
                                  <span className="text-xs font-bold text-[#1C1917]">₹{b.amount}</span>
                                  <span
                                    className={`inline-block border px-2 py-1 text-[10px] font-bold uppercase tracking-[0.06em] ${bookingStatusCls(b.status)}`}
                                  >
                                    {bookingStatusLabel(b.status)}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Refund Requests */}
      <div className="mb-10 bg-white border border-[#EDE8DF]">
        <div className="flex items-center gap-3 border-b border-[#EDE8DF] px-6 py-5">
          <span className="w-6 h-px bg-[#C17A56]" />
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-[#1C1917]">
            Refund Requests
          </h2>
          <span className="ml-auto text-xs text-[#A09A93]">{refundRequests.length} total</span>
        </div>

        {refundRequests.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
            <FaMoneyBillWave className="mb-4 text-3xl text-[#D4C5A9]" />
            <p className="font-semibold text-[#1C1917]">No refund requests</p>
            <p className="mt-1 text-sm text-[#7C6F60]">Refund requests submitted by students will appear here.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#EDE8DF] bg-[#F5F0E8]">
                  {["Student", "Space", "Amount", "Reason", "Status", "Actions"].map((h) => (
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
                {refundRequests.map((r, i) => {
                  const info = refundStatusInfo(r.status);
                  return (
                    <tr
                      key={r.id}
                      className={`border-b border-[#EDE8DF] transition hover:bg-[#F5F0E8] ${i % 2 === 1 ? "bg-[#FAF8F5]" : ""}`}
                    >
                      <td className="px-5 py-4">
                        <p className="font-semibold text-[#1C1917]">{r.studentName}</p>
                        <p className="text-[10px] text-[#A09A93]">{r.studentId}</p>
                      </td>
                      <td className="px-5 py-4 text-[#7C6F60]">{r.spaceName}</td>
                      <td className="px-5 py-4 font-bold text-[#1C1917]">₹{r.amount}</td>
                      <td className="px-5 py-4 text-[#7C6F60] max-w-[160px] truncate" title={r.reason}>
                        {r.reason || "—"}
                      </td>
                      <td className="px-5 py-4">
                        <span className={`inline-block border px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] ${info.cls}`}>
                          {info.label}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        {r.status === "pending" && (
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => handleRefundAction(r.id, "approved")}
                              className="flex items-center gap-1.5 border border-green-200 bg-green-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.06em] text-green-700 transition hover:bg-green-100"
                            >
                              <FaCheckCircle size={10} />
                              Approve
                            </button>
                            <button
                              type="button"
                              onClick={() => handleRefundAction(r.id, "rejected")}
                              className="flex items-center gap-1.5 border border-red-200 bg-red-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.06em] text-red-700 transition hover:bg-red-100"
                            >
                              <FaTimesCircle size={10} />
                              Reject
                            </button>
                          </div>
                        )}
                        {r.status !== "pending" && (
                          <span className="text-xs text-[#A09A93]">Processed</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Unresolved Issues */}
      <div className="bg-white border border-[#EDE8DF]">
        <div className="flex items-center gap-3 border-b border-[#EDE8DF] px-6 py-5">
          <span className="w-6 h-px bg-[#C17A56]" />
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-[#1C1917]">
            Unresolved Issues
          </h2>
          <span className="ml-auto text-xs text-[#A09A93]">{unresolvedBookings.length} pending</span>
        </div>

        {unresolvedBookings.length === 0 ? (
          <div className="flex items-center gap-3 px-6 py-8">
            <FaCheckCircle className="shrink-0 text-green-500" size={18} />
            <div>
              <p className="font-semibold text-[#1C1917]">No unresolved issues</p>
              <p className="mt-0.5 text-sm text-[#7C6F60]">All affected bookings have been addressed.</p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#EDE8DF] bg-[#F5F0E8]">
                  {["Student", "Space", "Date", "Amount", "Status"].map((h) => (
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
                {unresolvedBookings.map((b, i) => (
                  <tr
                    key={b.id}
                    className={`border-b border-[#EDE8DF] transition hover:bg-[#F5F0E8] ${i % 2 === 1 ? "bg-[#FAF8F5]" : ""}`}
                  >
                    <td className="px-5 py-4">
                      <p className="font-semibold text-[#1C1917]">{b.studentName}</p>
                      <p className="text-[10px] text-[#A09A93]">{b.studentId}</p>
                    </td>
                    <td className="px-5 py-4 text-[#7C6F60]">{b.spaceName}</td>
                    <td className="px-5 py-4 text-[#7C6F60]">{formatDate(b.date)}</td>
                    <td className="px-5 py-4 font-bold text-[#1C1917]">₹{b.amount}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-block border px-2 py-1 text-[10px] font-bold uppercase tracking-[0.06em] ${bookingStatusCls(b.status)}`}>
                        {bookingStatusLabel(b.status)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageClosures;
