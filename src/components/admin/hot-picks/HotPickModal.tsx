import { useEffect } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import type { HotPick, HotPickPayload } from '@/types/hotPick';

const schema = z.object({
  company_name: z.string().min(1, 'Company name is required'),
  stock_symbol: z.string().min(1, 'Stock symbol is required'),
  exchange: z.string().min(1, 'Exchange is required'),
  current_price: z.number().positive(),
  entry_price: z.number().positive(),
  target_price: z.number().positive(),
  stop_loss: z.number().positive(),
  price_change_percentage: z.number(),
  call_type: z.enum(['BUY', 'SELL']),
  confidence: z.number().min(0).max(100),
  reward_ratio: z.number().positive(),
  risk_ratio: z.number().positive(),
  pick_date: z.string().min(1, 'Pick date is required'),
  is_active: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

interface HotPickModalProps {
  open: boolean;
  mode: 'create' | 'edit';
  initialData?: HotPick | null;
  isLoading: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (payload: HotPickPayload) => Promise<void>;
}

const defaultValues: FormValues = {
  company_name: '',
  stock_symbol: '',
  exchange: '',
  current_price: 0,
  entry_price: 0,
  target_price: 0,
  stop_loss: 0,
  price_change_percentage: 0,
  call_type: 'BUY',
  confidence: 50,
  reward_ratio: 2,
  risk_ratio: 1,
  pick_date: new Date().toISOString().slice(0, 10),
  is_active: false,
};

const HotPickModal = ({ open, mode, initialData, isLoading, onOpenChange, onSubmit }: HotPickModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  useEffect(() => {
    if (!open) return;

    if (initialData) {
      reset({ ...initialData });
    } else {
      reset(defaultValues);
    }
  }, [initialData, open, reset]);

  const submitForm = handleSubmit(async (values) => {
    await onSubmit(values);
    reset(defaultValues);
  });

  const confidence = watch('confidence');

  const inputClass = 'mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{mode === 'create' ? 'Create Hot Pick' : 'Edit Hot Pick'}</DialogTitle>
        </DialogHeader>

        <form onSubmit={submitForm} className="space-y-5">
          <section className="grid gap-3 md:grid-cols-3">
            <Field label="Company" error={errors.company_name?.message}><input className={inputClass} {...register('company_name')} /></Field>
            <Field label="Symbol" error={errors.stock_symbol?.message}><input className={inputClass} {...register('stock_symbol')} /></Field>
            <Field label="Exchange" error={errors.exchange?.message}><input className={inputClass} {...register('exchange')} /></Field>
          </section>

          <section className="grid gap-3 md:grid-cols-2">
            {(['current_price', 'entry_price', 'target_price', 'stop_loss', 'price_change_percentage', 'reward_ratio', 'risk_ratio'] as const).map((field) => (
              <Field key={field} label={field.replaceAll('_', ' ')} error={errors[field]?.message}>
                <input type="number" step="0.01" className={inputClass} {...register(field, { valueAsNumber: true })} />
              </Field>
            ))}
            <Field label="Call Type" error={errors.call_type?.message}>
              <select className={inputClass} {...register('call_type')}>
                <option value="BUY">BUY</option>
                <option value="SELL">SELL</option>
              </select>
            </Field>
            <Field label="Pick Date" error={errors.pick_date?.message}>
              <input type="date" className={inputClass} {...register('pick_date')} />
            </Field>
          </section>

          <section>
            <label className="text-sm font-medium">Confidence ({confidence}%)</label>
            <input type="range" min={0} max={100} className="mt-2 w-full" {...register('confidence', { valueAsNumber: true })} />
          </section>

          <section className="flex items-center justify-between rounded-lg border p-3">
            <span className="text-sm font-medium">Set as active pick</span>
            <button
              type="button"
              onClick={() => setValue('is_active', !watch('is_active'))}
              className={`relative h-6 w-11 rounded-full transition ${watch('is_active') ? 'bg-primary' : 'bg-muted'}`}
            >
              <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${watch('is_active') ? 'left-5' : 'left-0.5'}`} />
            </button>
          </section>

          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => onOpenChange(false)} className="rounded-md border px-4 py-2 text-sm">Cancel</button>
            <button type="submit" disabled={isLoading} className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground disabled:opacity-50">
              {isLoading ? 'Saving...' : mode === 'create' ? 'Save' : 'Update'}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const Field = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <label className="block text-sm font-medium capitalize">
    {label}
    {children}
    {error ? <p className="mt-1 text-xs text-red-500">{error}</p> : null}
  </label>
);

export default HotPickModal;
