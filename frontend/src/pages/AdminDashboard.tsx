import React, { useEffect, useState } from 'react';
import {
  Search,
  Filter,
  CheckCircle2,
  Clock4,
  CheckCheck,
  XCircle,
  RefreshCw,
  LogOut,
  X,
  FileText,
  AlertCircle,
  ChevronDown,
  Download
} from 'lucide-react';
import { useAdminAuth } from '../context/AdminAuthContext';
import { AdminLogin } from '../components/admin/AdminLogin';
import type { AdminAppointment, AdminOverview } from '../services/api';
import {
  adminGetOverviewApi,
  adminGetAppointmentsApi,
  adminUpdateAppointmentStatusApi
} from '../services/api';

const STATUS_OPTIONS = [
  { value: 'all', label: 'All Statuses' },
  { value: 'pending', label: 'Pending' },
  { value: 'confirmed', label: 'Confirmed' },
  { value: 'completed', label: 'Completed' },
  { value: 'cancelled', label: 'Cancelled' },
];

export const AdminDashboard: React.FC = () => {
  const { token, adminUser, isLoading: isAuthLoading, logout } = useAdminAuth();

  const [overview, setOverview] = useState<AdminOverview>({
    total: 0,
    pending: 0,
    confirmed: 0,
    completed: 0,
    cancelled: 0,
  });

  const [appointments, setAppointments] = useState<AdminAppointment[]>([]);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
  const [dataError, setDataError] = useState<string>('');

  // Filters
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [dateFilter, setDateFilter] = useState<string>('');

  // Selected Appointment Modal / Detail Drawer
  const [selectedAppointment, setSelectedAppointment] = useState<AdminAppointment | null>(null);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState<boolean>(false);
  const [updateSuccessMsg, setUpdateSuccessMsg] = useState<string>('');

  useEffect(() => {
    document.title = "Admin Dashboard | Thukral Dental & Aesthetic Clinic";
  }, []);

  const loadDashboardData = async () => {
    if (!token) return;
    setIsLoadingData(true);
    setDataError('');

    try {
      const [overviewData, appointmentsData] = await Promise.all([
        adminGetOverviewApi(token),
        adminGetAppointmentsApi(token, {
          search: searchQuery,
          status: statusFilter,
          date: dateFilter,
          limit: 100,
        }),
      ]);

      setOverview(overviewData);
      setAppointments(appointmentsData.data);
      setTotalRecords(appointmentsData.total);
    } catch (err: any) {
      setDataError(err?.message || 'Failed to load clinic records');
    } finally {
      setIsLoadingData(false);
    }
  };

  useEffect(() => {
    if (token) {
      loadDashboardData();
    }
  }, [token, statusFilter, dateFilter]);

  // Debounced search trigger
  useEffect(() => {
    if (!token) return;
    const timer = setTimeout(() => {
      loadDashboardData();
    }, 350);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleStatusChange = async (appointmentId: number, newStatus: string) => {
    if (!token) return;
    setIsUpdatingStatus(true);
    setUpdateSuccessMsg('');

    try {
      await adminUpdateAppointmentStatusApi(token, appointmentId, newStatus);
      
      // Update local state smoothly
      setAppointments((prev) =>
        prev.map((app) => (app.id === appointmentId ? { ...app, status: newStatus } : app))
      );

      if (selectedAppointment && selectedAppointment.id === appointmentId) {
        setSelectedAppointment((prev) => (prev ? { ...prev, status: newStatus } : null));
      }

      setUpdateSuccessMsg(`Status updated to ${newStatus}`);
      setTimeout(() => setUpdateSuccessMsg(''), 3000);

      // Refresh overview metrics in background
      adminGetOverviewApi(token).then(setOverview).catch(() => {});
    } catch (err: any) {
      alert(err?.message || 'Failed to update status');
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const [isExporting, setIsExporting] = useState<boolean>(false);

  const handleExportCSV = async () => {
    if (!token) return;
    setIsExporting(true);

    try {
      // Fetch all incoming appointment records for export
      const result = await adminGetAppointmentsApi(token, {
        limit: 200,
        offset: 0,
      });

      const records = result.data;
      if (!records || records.length === 0) {
        alert('No appointment records found to export.');
        setIsExporting(false);
        return;
      }

      // Format CSV headers
      const headers = [
        'Appointment ID',
        'Patient Name',
        'Phone Number',
        'Email Address',
        'Treatment / Concern',
        'Preferred Date',
        'Preferred Time Slot',
        'Status',
        'Patient Message',
        'Submitted Date & Time'
      ];

      // Format CSV rows escaping commas, quotes, and line breaks
      const rows = records.map((rec) => {
        const escape = (val: any) => {
          if (val === null || val === undefined) return '""';
          const str = String(val).replace(/"/g, '""');
          return `"${str}"`;
        };

        const formattedDate = rec.preferred_date
          ? new Date(rec.preferred_date).toISOString().split('T')[0]
          : '';

        const formattedCreated = rec.created_at
          ? new Date(rec.created_at).toLocaleString()
          : '';

        return [
          rec.id,
          escape(rec.patient_name),
          escape(rec.phone),
          escape(rec.email || 'N/A'),
          escape(rec.treatment || 'General Checkup'),
          escape(formattedDate),
          escape(rec.preferred_time || 'N/A'),
          escape(rec.status || 'pending'),
          escape(rec.message || ''),
          escape(formattedCreated),
        ].join(',');
      });

      const csvContent = [headers.join(','), ...rows].join('\r\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      const dateStamp = new Date().toISOString().split('T')[0];
      link.setAttribute('href', url);
      link.setAttribute('download', `thukral_clinic_appointments_${dateStamp}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err: any) {
      alert(err?.message || 'Failed to export CSV file');
    } finally {
      setIsExporting(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const s = (status || 'pending').toLowerCase();
    switch (s) {
      case 'confirmed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 size={13} />
            Confirmed
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
            <CheckCheck size={13} />
            Completed
          </span>
        );
      case 'cancelled':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200">
            <XCircle size={13} />
            Cancelled
          </span>
        );
      case 'pending':
      case 'new':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
            <Clock4 size={13} />
            Pending
          </span>
        );
    }
  };

  const formatDate = (dateStr?: string | null) => {
    if (!dateStr) return '—';
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  const formatTimestamp = (dateStr?: string | null) => {
    if (!dateStr) return '—';
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return dateStr;
    }
  };

  if (isAuthLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          <p className="text-sm text-text-muted font-light">Verifying administrative credentials...</p>
        </div>
      </div>
    );
  }

  if (!token) {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary/20 pb-20">
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 bg-background/95 backdrop-blur-md border-b border-border shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-text">
              THUKRAL
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
              Admin Portal
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-sm font-medium text-text">{adminUser?.username}</span>
              <span className="text-xs text-text-muted">{adminUser?.email || 'Medical Director'}</span>
            </div>
            <button
              onClick={logout}
              title="Sign Out"
              className="p-2.5 rounded-xl border border-border bg-background hover:bg-background-secondary text-text-muted hover:text-red-600 transition-colors cursor-pointer flex items-center gap-2 text-xs font-medium"
            >
              <LogOut size={16} />
              <span className="hidden md:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Page Title & Refresh */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-serif text-text tracking-tight">Appointments Management</h1>
            <p className="text-sm text-text-muted font-light mt-1">
              Review incoming patient bookings, preferred timing, and consultation requests.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              onClick={handleExportCSV}
              disabled={isExporting || isLoadingData}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-primary/30 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold tracking-wide transition-colors cursor-pointer disabled:opacity-60 shadow-xs"
              title="Download all appointments as a CSV spreadsheet"
            >
              <Download size={14} className={isExporting ? 'animate-bounce' : ''} />
              <span>{isExporting ? 'Exporting...' : 'Export CSV File'}</span>
            </button>

            <button
              onClick={loadDashboardData}
              disabled={isLoadingData}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-background-secondary hover:border-primary/50 text-text-muted hover:text-text text-xs font-medium transition-colors cursor-pointer disabled:opacity-60"
            >
              <RefreshCw size={14} className={isLoadingData ? 'animate-spin text-primary' : ''} />
              <span>Refresh Data</span>
            </button>
          </div>
        </div>

        {/* Overview Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {/* Total */}
          <div className="bg-background-secondary border border-border rounded-2xl p-5 shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted block mb-1">
              Total Bookings
            </span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-text">{overview.total}</div>
          </div>

          {/* Pending */}
          <div className="bg-background-secondary border border-amber-200/60 rounded-2xl p-5 shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 block mb-1">
              Pending Action
            </span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-800">{overview.pending}</div>
          </div>

          {/* Confirmed */}
          <div className="bg-background-secondary border border-emerald-200/60 rounded-2xl p-5 shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 block mb-1">
              Confirmed
            </span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-emerald-800">{overview.confirmed}</div>
          </div>

          {/* Completed */}
          <div className="bg-background-secondary border border-blue-200/60 rounded-2xl p-5 shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 block mb-1">
              Completed
            </span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-blue-800">{overview.completed}</div>
          </div>

          {/* Cancelled */}
          <div className="bg-background-secondary border border-red-200/60 rounded-2xl p-5 shadow-xs col-span-2 lg:col-span-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-red-700 block mb-1">
              Cancelled
            </span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-red-800">{overview.cancelled}</div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-background-secondary border border-border rounded-2xl p-5 mb-8 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="sm:col-span-5 relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-muted">
                <Search size={16} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search patient name or phone number..."
                className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-text focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Status Filter */}
            <div className="sm:col-span-4 relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-muted">
                <Filter size={16} />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full bg-background border border-border rounded-xl pl-10 pr-8 py-2.5 text-sm text-text focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
              >
                {STATUS_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-text-muted">
                <ChevronDown size={14} />
              </div>
            </div>

            {/* Date Filter */}
            <div className="sm:col-span-3">
              <input
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-sm text-text focus:outline-none focus:border-primary transition-colors cursor-pointer"
              />
            </div>
          </div>

          {(searchQuery || statusFilter !== 'all' || dateFilter) && (
            <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs text-text-muted">
              <span>Showing filtered results ({appointments.length} matching)</span>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setStatusFilter('all');
                  setDateFilter('');
                }}
                className="text-primary hover:underline cursor-pointer font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Data Error Notice */}
        {dataError && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-3">
            <AlertCircle size={20} className="text-red-500 shrink-0" />
            <span>{dataError}</span>
          </div>
        )}

        {/* Appointments Table */}
        <div className="bg-background-secondary border border-border rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-background/50 text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                  <th className="py-4 px-4 sm:px-6">ID</th>
                  <th className="py-4 px-4 sm:px-6">Patient</th>
                  <th className="py-4 px-4 sm:px-6">Contact Details</th>
                  <th className="py-4 px-4 sm:px-6">Treatment</th>
                  <th className="py-4 px-4 sm:px-6">Preferred Schedule</th>
                  <th className="py-4 px-4 sm:px-6">Status</th>
                  <th className="py-4 px-4 sm:px-6">Submitted</th>
                  <th className="py-4 px-4 sm:px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-sm">
                {isLoadingData ? (
                  <tr>
                    <td colSpan={8} className="py-16 text-center text-text-muted font-light">
                      <div className="inline-block w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin mb-3"></div>
                      <p>Loading patient appointment records from MySQL database...</p>
                    </td>
                  </tr>
                ) : appointments.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-16 text-center text-text-muted font-light">
                      <FileText size={36} className="mx-auto mb-2 text-text-muted/60" />
                      <p className="text-base font-serif text-text mb-1">No appointments found</p>
                      <p className="text-xs">Try adjusting your search criteria or filter options.</p>
                    </td>
                  </tr>
                ) : (
                  appointments.map((appointment) => (
                    <tr
                      key={appointment.id}
                      className="hover:bg-background/40 transition-colors cursor-pointer group"
                      onClick={() => setSelectedAppointment(appointment)}
                    >
                      <td className="py-4 px-4 sm:px-6 font-mono text-xs font-bold text-text-muted">
                        #{appointment.id}
                      </td>

                      <td className="py-4 px-4 sm:px-6">
                        <div className="font-medium text-text group-hover:text-primary transition-colors">
                          {appointment.patient_name}
                        </div>
                      </td>

                      <td className="py-4 px-4 sm:px-6">
                        <div className="flex flex-col gap-0.5">
                          <span className="font-mono text-xs text-text">{appointment.phone}</span>
                          {appointment.email ? (
                            <span className="text-xs text-text-muted truncate max-w-[180px]">
                              {appointment.email}
                            </span>
                          ) : (
                            <span className="text-[11px] text-text-muted/60 italic">No email</span>
                          )}
                        </div>
                      </td>

                      <td className="py-4 px-4 sm:px-6 text-text-muted">
                        {appointment.treatment || 'General Consultation'}
                      </td>

                      <td className="py-4 px-4 sm:px-6">
                        <div className="flex flex-col gap-0.5">
                          <span className="font-medium text-text">
                            {formatDate(appointment.preferred_date)}
                          </span>
                          <span className="text-xs text-primary font-medium">
                            {appointment.preferred_time || 'Flexible'}
                          </span>
                        </div>
                      </td>

                      <td className="py-4 px-4 sm:px-6">
                        {getStatusBadge(appointment.status)}
                      </td>

                      <td className="py-4 px-4 sm:px-6 text-xs text-text-muted whitespace-nowrap">
                        {formatTimestamp(appointment.created_at)}
                      </td>

                      <td className="py-4 px-4 sm:px-6 text-right" onClick={(e) => e.stopPropagation()}>
                        <select
                          value={appointment.status || 'pending'}
                          onChange={(e) => handleStatusChange(appointment.id, e.target.value)}
                          className="bg-background border border-border rounded-lg text-xs font-medium py-1.5 px-2.5 text-text focus:outline-none focus:border-primary transition-colors cursor-pointer"
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t border-border/60 bg-background/30 flex items-center justify-between text-xs text-text-muted">
            <span>
              Total records: <strong className="text-text">{totalRecords}</strong>
            </span>
            <span>Realtime synchronized with MySQL server</span>
          </div>
        </div>
      </main>

      {/* Appointment Detail Modal */}
      {selectedAppointment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-fade-in"
            onClick={() => setSelectedAppointment(null)}
          ></div>

          <div className="relative bg-background-secondary w-full max-w-xl rounded-2xl shadow-2xl border border-border p-6 sm:p-8 animate-fade-in-up z-10 max-h-[92vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-border/60 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-text-muted font-bold">
                    #{selectedAppointment.id}
                  </span>
                  {getStatusBadge(selectedAppointment.status)}
                </div>
                <h3 className="text-2xl font-serif text-text">
                  {selectedAppointment.patient_name}
                </h3>
              </div>

              <button
                onClick={() => setSelectedAppointment(null)}
                className="p-1.5 rounded-lg text-text-muted hover:text-text hover:bg-background transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {updateSuccessMsg && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span>{updateSuccessMsg}</span>
              </div>
            )}

            {/* Details Grid */}
            <div className="space-y-6">
              {/* Patient Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-background border border-border">
                  <span className="text-xs uppercase tracking-wider text-text-muted font-semibold block mb-1">
                    Phone Number
                  </span>
                  <a
                    href={`tel:${selectedAppointment.phone}`}
                    className="text-sm font-mono font-medium text-primary hover:underline"
                  >
                    {selectedAppointment.phone}
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-background border border-border">
                  <span className="text-xs uppercase tracking-wider text-text-muted font-semibold block mb-1">
                    Email Address
                  </span>
                  {selectedAppointment.email ? (
                    <a
                      href={`mailto:${selectedAppointment.email}`}
                      className="text-sm font-medium text-text hover:text-primary transition-colors truncate block"
                    >
                      {selectedAppointment.email}
                    </a>
                  ) : (
                    <span className="text-sm text-text-muted italic">Not provided</span>
                  )}
                </div>
              </div>

              {/* Booking Schedule & Treatment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-background border border-border">
                  <span className="text-xs uppercase tracking-wider text-text-muted font-semibold block mb-1">
                    Treatment / Concern
                  </span>
                  <span className="text-sm font-medium text-text">
                    {selectedAppointment.treatment || 'General Checkup'}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-background border border-border">
                  <span className="text-xs uppercase tracking-wider text-text-muted font-semibold block mb-1">
                    Preferred Time Slot
                  </span>
                  <span className="text-sm font-medium text-primary">
                    {formatDate(selectedAppointment.preferred_date)} at {selectedAppointment.preferred_time || 'Anytime'}
                  </span>
                </div>
              </div>

              {/* Message */}
              <div className="p-4 rounded-xl bg-background border border-border">
                <span className="text-xs uppercase tracking-wider text-text-muted font-semibold block mb-1">
                  Patient Notes / Message
                </span>
                <p className="text-sm text-text font-light leading-relaxed whitespace-pre-wrap">
                  {selectedAppointment.message || 'No additional notes provided by patient.'}
                </p>
              </div>

              {/* Submission Date */}
              <div className="text-xs text-text-muted text-right">
                Request recorded: {formatTimestamp(selectedAppointment.created_at)}
              </div>

              {/* Status Update Actions */}
              <div className="pt-4 border-t border-border/60">
                <label className="block text-xs uppercase tracking-wider text-text-muted font-semibold mb-2">
                  Update Appointment Status
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['pending', 'confirmed', 'completed', 'cancelled'] as const).map((st) => (
                    <button
                      key={st}
                      type="button"
                      disabled={isUpdatingStatus || selectedAppointment.status === st}
                      onClick={() => handleStatusChange(selectedAppointment.id, st)}
                      className={`py-2 px-3 rounded-xl text-xs font-medium capitalize border transition-all cursor-pointer ${
                        selectedAppointment.status === st
                          ? 'bg-primary text-white border-primary shadow-xs'
                          : 'bg-background border-border hover:border-primary/50 text-text'
                      } disabled:opacity-50`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
