import { motion } from 'framer-motion';

interface PermissionToggleProps {
  label: string;
  description?: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
}

const PermissionToggle = ({ label, description, checked, disabled, onChange }: PermissionToggleProps) => (
  <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/80 p-3">
    <div className="pr-2">
      <p className="text-sm font-medium text-slate-900">{label}</p>
      {description ? <p className="text-xs text-slate-500">{description}</p> : null}
    </div>
    <button
      type="button"
      disabled={disabled}
      onClick={onChange}
      className={`relative h-6 w-11 rounded-full transition-colors ${checked ? 'bg-primary' : 'bg-slate-300'} ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white ${checked ? 'left-5' : 'left-0.5'}`}
      />
    </button>
  </div>
);

export default PermissionToggle;
