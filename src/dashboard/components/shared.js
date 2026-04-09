import { useEffect, useState } from 'react';

/* ───── Animated Counter ───── */
export const AnimCount = ({ to, duration = 1200 }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = to / (duration / 16);
    const t = setInterval(() => {
      start += step;
      if (start >= to) { setVal(to); clearInterval(t); }
      else setVal(Math.floor(start));
    }, 16);
    return () => clearInterval(t);
  }, [to, duration]);
  return <>{typeof to === 'string' ? to : val.toLocaleString()}</>;
};

/* ───── Fade-in wrapper ───── */
export const FadeIn = ({ children, delay = 0, className = '' }) => {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), delay); return () => clearTimeout(t); }, [delay]);
  return (
    <div className={`transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}>
      {children}
    </div>
  );
};

/* ───── Status indicators ───── */
export const StatusDot = ({ status }) => {
  const c = { pending: 'bg-amber-400', in_progress: 'bg-blue-400', done: 'bg-emerald-400' };
  return <span className={`w-2 h-2 rounded-full ${c[status] || 'bg-gray-300'} inline-block`} />;
};

export const StatusBadge = ({ status }) => {
  const config = {
    pending: 'bg-amber-50 text-amber-700 border-amber-100',
    in_progress: 'bg-blue-50 text-blue-700 border-blue-100',
    done: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  };
  const labels = { pending: 'Pending', in_progress: 'In Progress', done: 'Done' };
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${config[status] || ''}`}>
      <StatusDot status={status} />
      {labels[status] || status}
    </span>
  );
};

/* ───── Avatar ───── */
export const Avatar = ({ name, src, size = 'w-7 h-7', color }) => {
  const colors = ['bg-violet-100 text-violet-600', 'bg-blue-100 text-blue-600', 'bg-emerald-100 text-emerald-600', 'bg-amber-100 text-amber-600', 'bg-pink-100 text-pink-600', 'bg-indigo-100 text-indigo-600'];
  const c = color || colors[((name || '').charCodeAt(0) || 0) % colors.length];
  if (src) {
    return <img src={src} alt={name} className={`${size} rounded-full object-cover ring-2 ring-white flex-shrink-0`} />;
  }
  return (
    <div className={`${size} rounded-full ${c} flex items-center justify-center text-[10px] font-bold flex-shrink-0 ring-2 ring-white`}>
      {(name || '?').charAt(0).toUpperCase()}
    </div>
  );
};

/* ───── Stat card ───── */
export const StatCard = ({ value, label, color, icon, delay = 0 }) => (
  <FadeIn delay={delay}>
    <div className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:shadow-gray-100/80 hover:-translate-y-0.5 transition-all duration-300 cursor-default">
      <div className="flex items-start justify-between">
        <div>
          <p className={`text-3xl font-black ${color || 'text-gray-900'} tracking-tight`}>
            {typeof value === 'number' ? <AnimCount to={value} /> : value}
          </p>
          <p className="text-[13px] text-gray-400 mt-1.5 font-medium">{label}</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors flex items-center justify-center text-gray-400">
          {icon}
        </div>
      </div>
    </div>
  </FadeIn>
);

/* ───── Section header ───── */
export const SectionHeader = ({ title, description, action }) => (
  <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
    <div>
      <h1 className="text-2xl font-black text-gray-900 tracking-tight">{title}</h1>
      {description && <p className="text-sm text-gray-400 mt-1">{description}</p>}
    </div>
    {action}
  </div>
);

/* ───── Empty state ───── */
export const EmptyState = ({ icon, title, description, action }) => (
  <div className="py-16 text-center">
    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <p className="text-sm text-gray-700 font-semibold">{title}</p>
    {description && <p className="text-xs text-gray-400 mt-1">{description}</p>}
    {action && <div className="mt-5">{action}</div>}
  </div>
);
