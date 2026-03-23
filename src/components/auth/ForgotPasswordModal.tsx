import { useEffect } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Mail } from 'lucide-react';
import { forgotPassword } from '@/api/auth.api';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const forgotPasswordSchema = z.object({
  email: z.string().trim().email('Please enter a valid email address.'),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

interface ForgotPasswordModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialEmail?: string;
}

const ForgotPasswordModal = ({ open, onOpenChange, initialEmail = '' }: ForgotPasswordModalProps) => {
  const { toast } = useToast();
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: initialEmail,
    },
  });

  useEffect(() => {
    if (!open) return;

    form.reset({
      email: initialEmail,
    });
  }, [form, initialEmail, open]);

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      await forgotPassword({ email: values.email.trim().toLowerCase() });
      toast({
        title: 'Reset link sent',
        description: 'Password reset link has been sent to your email.',
      });
      onOpenChange(false);
    } catch (error) {
      console.error('Forgot password request failed:', error);
      toast({
        title: 'Unable to send reset link',
        description: 'Please verify your email address and try again.',
        variant: 'destructive',
      });
    }
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Forgot password?</DialogTitle>
          <DialogDescription>
            Enter the email linked to your account and we&apos;ll send you a secure password reset link.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <Input
                        {...field}
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        className="pl-10"
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    You will receive a password reset link if your account exists.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Sending reset link...' : 'Send Reset Link'}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPasswordModal;
