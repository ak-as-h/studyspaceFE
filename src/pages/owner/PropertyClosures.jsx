import React, { useState, useEffect } from "react";
import {
  FaLock,
  FaPlus,
  FaTimes,
  FaEdit,
  FaEye,
  FaUnlock,
  FaExclamationTriangle,
  FaCalendarAlt,
  FaBuilding,
} from "react-icons/fa";
import {
  getClosures,
  createClosure,
  updateClosure,
  findAffectedBookings,
  markBookingsAsAffected,
  createNotification,
  SAMPLE_SPACES,
} from "../../utils/closureStore";

// ─── Helper ───────────────────────────────────────────────────────────────────

function todayStr() {
  return new Date().toISOString().split("T")[0];
}

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
  };
  return map[status] || map.resolved;
}

// ─── Empty Form State ─────────────────────────────────────────────────────────

const emptyForm = {
  spaceId: "",
  type: "temporary",
  startDate: todayStr(),
  endDate: "",
  reason: "",
};

// ─── Component ────────────────────────────────────────────────────────────────

const PropertyClosures = () => {
  const [closures, setClosures] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [formErrors, setFormErrors] = useState({});
  const [confirmModal, setConfirmModal] = useState(null); // { affected: [], closureData: {} }
  const [viewModal, setViewModal] = useState(null); // closure object
  const [editModal, setEditModal] = useState(null); // closure object
  const [editForm, setEditForm] = useState(emptyForm);

  useEffect(() => {
    setClosures(getClosures());
  }, []);

  const ownerSpaces = SAMPLE_SPACES.filter((s) => s.ownerId === "owner-001");

  // ─── Computed stats ────────────────────────────────────────────────────────

  const totalClosures = closures.length;
  const currentlyClosed = closures.filter((c) => c.status === "active").length;
  const upcomingClosures = closures.filter((c) => c.status === "upcoming").length;
  const affectedTotal = closures.reduce(
    (sum, c) => sum + (c.affectedBookingIds?.length || 0),
    0
  );

  // ─── Form validation ───────────────────────────────────────────────────────

  function validate(f) {
    const errs = {};
    if (!f.spaceId) errs.spaceId = "Please select a property.";
    if (!f.startDate) errs.startDate = "Start date is required.";
    if (f.type === "temporary" && !f.endDate)
      errs.endDate = "End date is required for temporary closures.";
    if (f.type === "temporary" && f.endDate && f.endDate < f.startDate)
      errs.endDate = "End date must be after start date.";
    if (!f.reason.trim()) errs.reason = "Please enter a reason.";
    return errs;
  }

  // ─── Submit: check affected bookings first ─────────────────────────────────

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setFormErrors(errs);
      return;
    }
    setFormErrors({});

    const space = ownerSpaces.find((s) => s.id === form.spaceId);
    const closureData = {
      ...form,
      spaceName: space?.name || form.spaceId,
      ownerId: "owner-001",
    };

    const affected = findAffectedBookings(closureData);
    setConfirmModal({ affected, closureData });
  }

  // ─── Confirm and save closure ──────────────────────────────────────────────

  function handleConfirmClosure() {
    const { affected, closureData } = confirmModal;
    const newClosure = createClosure(closureData);

    if (affected.length > 0) {
      markBookingsAsAffected(newClosure.id, affected);
      // Update closure record with affected booking ids
      updateClosure(newClosure.id, {
        affectedBookingIds: affected.map((b) => b.id),
      });
      // Create student notifications
      affected.forEach((booking) => {
        createNotification({
          role: "student",
          title: "Your Booking is Affected",
          message: `Your booking at ${booking.spaceName} on ${formatDate(booking.date)} has been affected due to a property closure. Please choose an alternative action.`,
          type: "closure_alert",
          bookingId: booking.id,
          closureId: newClosure.id,
        });
      });
    }

    setClosures(getClosures());
    setConfirmModal(null);
    setShowForm(false);
    setForm(emptyForm);
  }

  // ─── Reopen a temporary closure ───────────────────────────────────────────

  function handleReopen(closure) {
    updateClosure(closure.id, { status: "resolved" });
    setClosures(getClosures());
  }

  // ─── Edit save ────────────────────────────────────────────────────────────

  function handleEditSave(e) {
    e.preventDefault();
    const errs = validate(editForm);
    if (Object.keys(errs).length) {
      setFormErrors(errs);
      return;
    }
    setFormErrors({});
    updateClosure(editModal.id, {
      startDate: editForm.startDate,
      endDate: editForm.endDate,
      reason: editForm.reason,
    });
    setClosures(getClosures());
    setEditModal(null);
    setEditForm(emptyForm);
  }

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#F5F0E8] px-5 py-10 md:px-10 lg:px-12">

      {/* Page Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-px bg-[#C17A56]" />
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
            Owner Portal
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1
              className="text-3xl font-bold text-[#1C1917] md:text-4xl"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Property Closures
            </h1>
            <p className="mt-2 text-sm text-[#7C6F60]">
              Manage temporary and permanent closures for your listed spaces.
            </p>
          </div>
          <button
            type="button"
            onClick={() => { setShowForm((p) => !p); setFormErrors({}); }}
            className="flex items-center gap-2 bg-[#1C1917] px-5 py-3 text-xs font-bold tracking-[0.08em] uppercase text-white transition hover:bg-[#C17A56]"
          >
            {showForm ? <FaTimes size={11} /> : <FaPlus size={11} />}
            {showForm ? "Cancel" : "New Closure"}
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="mb-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { label: "Total Closures", value: totalClosures, icon: <FaLock /> },
          { label: "Currently Closed", value: currentlyClosed, icon: <FaBuilding /> },
          { label: "Upcoming", value: upcomingClosures, icon: <FaCalendarAlt /> },
          { label: "Affected Bookings", value: affectedTotal, icon: <FaExclamationTriangle /> },
        ].map((card) => (
          <div key={card.label} className="bg-white border border-[#EDE8DF] p-5">
            <div className="mb-3 flex h-9 w-9 items-center justify-center bg-[#F5F0E8] text-[#C17A56]">
              {card.icon}
            </div>
            <p className="text-2xl font-bold text-[#1C1917]">{card.value}</p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#A09A93]">
              {card.label}
            </p>
          </div>
        ))}
      </div>

      {/* Create Closure Form */}
      {showForm && (
        <div className="mb-10 border border-[#D4C5A9] bg-white p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-[#C17A56]" />
            <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-[#C17A56]">
              Create New Closure
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              {/* Property Select */}
              <div>
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] text-[#7C6F60]">
                  Property
                </label>
                <select
                  value={form.spaceId}
                  onChange={(e) => setForm((p) => ({ ...p, spaceId: e.target.value }))}
                  className="w-full border border-[#D4C5A9] bg-white px-4 py-3 text-sm text-[#1C1917] outline-none focus:border-[#C17A56]"
                >
                  <option value="">— Select a property —</option>
                  {ownerSpaces.map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
                {formErrors.spaceId && (
                  <p className="mt-1 text-xs text-red-600">{formErrors.spaceId}</p>
                )}
              </div>

              {/* Closure Type */}
              <div>
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] text-[#7C6F60]">
                  Closure Type
                </label>
                <div className="flex border border-[#D4C5A9]">
                  {["temporary", "permanent"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setForm((p) => ({ ...p, type: t }))}
                      className={`flex-1 py-3 text-xs font-bold tracking-[0.06em] uppercase transition ${
                        form.type === t
                          ? "bg-[#1C1917] text-white"
                          : "bg-white text-[#7C6F60] hover:bg-[#F5F0E8]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Start Date */}
              <div>
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] text-[#7C6F60]">
                  Start Date
                </label>
                <input
                  type="date"
                  value={form.startDate}
                  min={todayStr()}
                  onChange={(e) => setForm((p) => ({ ...p, startDate: e.target.value }))}
                  className="w-full border border-[#D4C5A9] bg-white px-4 py-3 text-sm text-[#1C1917] outline-none focus:border-[#C17A56]"
                />
                {formErrors.startDate && (
                  <p className="mt-1 text-xs text-red-600">{formErrors.startDate}</p>
                )}
              </div>

              {/* End Date (temporary only) */}
              {form.type === "temporary" && (
                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] text-[#7C6F60]">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={form.endDate}
                    min={form.startDate || todayStr()}
                    onChange={(e) => setForm((p) => ({ ...p, endDate: e.target.value }))}
                    className="w-full border border-[#D4C5A9] bg-white px-4 py-3 text-sm text-[#1C1917] outline-none focus:border-[#C17A56]"
                  />
                  {formErrors.endDate && (
                    <p className="mt-1 text-xs text-red-600">{formErrors.endDate}</p>
                  )}
                </div>
              )}
            </div>

            {/* Reason */}
            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] text-[#7C6F60]">
                Reason for Closure
              </label>
              <textarea
                rows={3}
                value={form.reason}
                onChange={(e) => setForm((p) => ({ ...p, reason: e.target.value }))}
                placeholder="Describe the reason for this closure..."
                className="w-full border border-[#D4C5A9] bg-white px-4 py-3 text-sm text-[#1C1917] outline-none focus:border-[#C17A56] resize-none"
              />
              {formErrors.reason && (
                <p className="mt-1 text-xs text-red-600">{formErrors.reason}</p>
              )}
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-[#1C1917] px-6 py-3 text-xs font-bold tracking-[0.08em] uppercase text-white transition hover:bg-[#C17A56]"
              >
                Check &amp; Submit
              </button>
              <button
                type="button"
                onClick={() => { setShowForm(false); setFormErrors({}); setForm(emptyForm); }}
                className="border border-[#D4C5A9] bg-white px-6 py-3 text-xs font-bold tracking-[0.08em] uppercase text-[#7C6F60] transition hover:bg-[#F5F0E8]"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Closures Table */}
      <div className="bg-white border border-[#EDE8DF]">
        <div className="flex items-center gap-3 border-b border-[#EDE8DF] px-6 py-5">
          <span className="w-6 h-px bg-[#C17A56]" />
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-[#1C1917]">
            Closure Records
          </h2>
          <span className="ml-auto text-xs text-[#A09A93]">{closures.length} total</span>
        </div>

        {closures.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center bg-[#F5F0E8] border border-[#EDE8DF] text-[#C17A56]">
              <FaLock size={20} />
            </div>
            <h3
              className="text-lg font-bold text-[#1C1917]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              No Closures Yet
            </h3>
            <p className="mt-2 text-sm text-[#7C6F60]">
              Create your first property closure using the button above.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#EDE8DF] bg-[#F5F0E8]">
                  {["Space Name", "Type", "Dates", "Reason", "Affected", "Status", "Actions"].map(
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
                {closures.map((c, i) => (
                  <tr
                    key={c.id}
                    className={`border-b border-[#EDE8DF] transition hover:bg-[#F5F0E8] ${
                      i % 2 === 0 ? "" : "bg-[#FAF8F5]"
                    }`}
                  >
                    <td className="px-5 py-4 font-semibold text-[#1C1917]">{c.spaceName}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] border ${
                          c.type === "permanent"
                            ? "bg-[#1C1917] text-white border-[#1C1917]"
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
                    <td className="px-5 py-4 text-[#7C6F60] max-w-[180px] truncate" title={c.reason}>
                      {c.reason}
                    </td>
                    <td className="px-5 py-4 text-center font-bold text-[#1C1917]">
                      {c.affectedBookingIds?.length || 0}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-block border px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] ${statusBadge(
                          c.status
                        )}`}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          title="View"
                          onClick={() => setViewModal(c)}
                          className="flex h-7 w-7 items-center justify-center border border-[#D4C5A9] bg-white text-[#7C6F60] transition hover:bg-[#F5F0E8] hover:text-[#1C1917]"
                        >
                          <FaEye size={11} />
                        </button>
                        {c.type === "temporary" && c.status !== "resolved" && (
                          <>
                            <button
                              type="button"
                              title="Edit"
                              onClick={() => {
                                setEditModal(c);
                                setEditForm({
                                  spaceId: c.spaceId,
                                  type: c.type,
                                  startDate: c.startDate,
                                  endDate: c.endDate || "",
                                  reason: c.reason,
                                });
                                setFormErrors({});
                              }}
                              className="flex h-7 w-7 items-center justify-center border border-[#D4C5A9] bg-white text-[#7C6F60] transition hover:bg-[#F5F0E8] hover:text-[#1C1917]"
                            >
                              <FaEdit size={11} />
                            </button>
                            <button
                              type="button"
                              title="Reopen"
                              onClick={() => handleReopen(c)}
                              className="flex h-7 w-7 items-center justify-center border border-[#D4C5A9] bg-white text-[#7C6F60] transition hover:bg-[#F5F0E8] hover:text-green-600"
                            >
                              <FaUnlock size={11} />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ── Confirmation Modal ── */}
      {confirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1917]/60 px-4">
          <div className="w-full max-w-lg bg-white border border-[#EDE8DF] shadow-xl">
            <div className="border-b border-[#EDE8DF] px-6 py-5">
              <div className="flex items-center gap-3">
                <span className="w-6 h-px bg-[#C17A56]" />
                <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-[#C17A56]">
                  Confirm Closure
                </h2>
              </div>
              <h3
                className="mt-2 text-xl font-bold text-[#1C1917]"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Review Before Confirming
              </h3>
            </div>

            <div className="px-6 py-5">
              {confirmModal.affected.length === 0 ? (
                <div className="flex items-start gap-3 border border-green-200 bg-green-50 p-4">
                  <span className="text-green-600">✓</span>
                  <p className="text-sm text-green-700">
                    No existing bookings will be affected by this closure.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="mb-4 flex items-start gap-3 border border-amber-200 bg-amber-50 p-4">
                    <FaExclamationTriangle className="mt-0.5 shrink-0 text-amber-500" size={14} />
                    <div>
                      <p className="text-sm font-semibold text-amber-700">
                        {confirmModal.affected.length} booking
                        {confirmModal.affected.length > 1 ? "s" : ""} will be affected.
                      </p>
                      <p className="mt-1 text-xs text-amber-600">
                        Students will receive notifications to reschedule, choose an alternative, or request a refund.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {confirmModal.affected.map((b) => (
                      <div key={b.id} className="border border-[#EDE8DF] bg-[#F5F0E8] px-4 py-3 text-xs">
                        <span className="font-semibold text-[#1C1917]">{b.studentName}</span>
                        <span className="text-[#7C6F60]"> — {formatDate(b.date)} — ₹{b.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-3 border-t border-[#EDE8DF] px-6 py-5">
              <button
                type="button"
                onClick={handleConfirmClosure}
                className="flex-1 bg-[#1C1917] py-3 text-xs font-bold tracking-[0.08em] uppercase text-white transition hover:bg-[#C17A56]"
              >
                Confirm Closure
              </button>
              <button
                type="button"
                onClick={() => setConfirmModal(null)}
                className="flex-1 border border-[#D4C5A9] bg-white py-3 text-xs font-bold tracking-[0.08em] uppercase text-[#7C6F60] transition hover:bg-[#F5F0E8]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── View Modal ── */}
      {viewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1917]/60 px-4">
          <div className="w-full max-w-md bg-white border border-[#EDE8DF] shadow-xl">
            <div className="flex items-center justify-between border-b border-[#EDE8DF] px-6 py-5">
              <h2
                className="text-lg font-bold text-[#1C1917]"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Closure Details
              </h2>
              <button
                type="button"
                onClick={() => setViewModal(null)}
                className="flex h-8 w-8 items-center justify-center border border-[#D4C5A9] text-[#7C6F60] transition hover:bg-[#F5F0E8]"
              >
                <FaTimes size={12} />
              </button>
            </div>

            <div className="space-y-4 px-6 py-5 text-sm">
              {[
                { label: "Space", value: viewModal.spaceName },
                { label: "Type", value: viewModal.type },
                { label: "Status", value: viewModal.status },
                { label: "Start Date", value: formatDate(viewModal.startDate) },
                { label: "End Date", value: viewModal.type === "temporary" ? formatDate(viewModal.endDate) : "Permanent" },
                { label: "Reason", value: viewModal.reason },
                { label: "Affected Bookings", value: viewModal.affectedBookingIds?.length || 0 },
                { label: "Created", value: formatDate(viewModal.createdAt) },
              ].map((row) => (
                <div key={row.label} className="flex gap-3 border-b border-[#F5F0E8] pb-3">
                  <span className="w-36 shrink-0 text-[11px] font-bold uppercase tracking-[0.1em] text-[#A09A93]">
                    {row.label}
                  </span>
                  <span className="text-[#1C1917]">{row.value}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#EDE8DF] px-6 py-4">
              <button
                type="button"
                onClick={() => setViewModal(null)}
                className="w-full border border-[#D4C5A9] bg-white py-3 text-xs font-bold tracking-[0.08em] uppercase text-[#7C6F60] transition hover:bg-[#F5F0E8]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Edit Modal ── */}
      {editModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1917]/60 px-4">
          <div className="w-full max-w-lg bg-white border border-[#EDE8DF] shadow-xl">
            <div className="flex items-center justify-between border-b border-[#EDE8DF] px-6 py-5">
              <h2
                className="text-lg font-bold text-[#1C1917]"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Edit Closure
              </h2>
              <button
                type="button"
                onClick={() => { setEditModal(null); setFormErrors({}); }}
                className="flex h-8 w-8 items-center justify-center border border-[#D4C5A9] text-[#7C6F60] transition hover:bg-[#F5F0E8]"
              >
                <FaTimes size={12} />
              </button>
            </div>

            <form onSubmit={handleEditSave} className="px-6 py-5 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] text-[#7C6F60]">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={editForm.startDate}
                    onChange={(e) => setEditForm((p) => ({ ...p, startDate: e.target.value }))}
                    className="w-full border border-[#D4C5A9] bg-white px-4 py-3 text-sm text-[#1C1917] outline-none focus:border-[#C17A56]"
                  />
                  {formErrors.startDate && (
                    <p className="mt-1 text-xs text-red-600">{formErrors.startDate}</p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] text-[#7C6F60]">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={editForm.endDate}
                    min={editForm.startDate}
                    onChange={(e) => setEditForm((p) => ({ ...p, endDate: e.target.value }))}
                    className="w-full border border-[#D4C5A9] bg-white px-4 py-3 text-sm text-[#1C1917] outline-none focus:border-[#C17A56]"
                  />
                  {formErrors.endDate && (
                    <p className="mt-1 text-xs text-red-600">{formErrors.endDate}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] text-[#7C6F60]">
                  Reason
                </label>
                <textarea
                  rows={3}
                  value={editForm.reason}
                  onChange={(e) => setEditForm((p) => ({ ...p, reason: e.target.value }))}
                  className="w-full border border-[#D4C5A9] bg-white px-4 py-3 text-sm text-[#1C1917] outline-none focus:border-[#C17A56] resize-none"
                />
                {formErrors.reason && (
                  <p className="mt-1 text-xs text-red-600">{formErrors.reason}</p>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-[#1C1917] py-3 text-xs font-bold tracking-[0.08em] uppercase text-white transition hover:bg-[#C17A56]"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => { setEditModal(null); setFormErrors({}); }}
                  className="flex-1 border border-[#D4C5A9] bg-white py-3 text-xs font-bold tracking-[0.08em] uppercase text-[#7C6F60] transition hover:bg-[#F5F0E8]"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyClosures;
