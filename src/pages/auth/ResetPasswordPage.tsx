import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, KeyRound, ShieldCheck } from 'lucide-react';
import { resetPassword } from '@/api/auth.api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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

const resetPasswordSchema = z
  .object({
    token: z.string().min(1),
    email: z.string().email('A valid reset email is required.'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long.')
      .regex(/[A-Z]/, 'Include at least one uppercase letter.')
      .regex(/[a-z]/, 'Include at least one lowercase letter.')
      .regex(/[0-9]/, 'Include at least one number.'),
    password_confirmation: z.string().min(1, 'Please confirm your password.'),
  })
  .refine((value) => value.password === value.password_confirmation, {
    message: 'Password confirmation does not match.',
    path: ['password_confirmation'],
  });

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

const tokenPattern = /^[a-fA-F0-9]{32,}$/;

const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [didResetSucceed, setDidResetSucceed] = useState(false);

  const token = searchParams.get('token')?.trim() ?? '';
  const email = searchParams.get('email')?.trim() ?? '';

  const hasValidToken = tokenPattern.test(token);
  const hasValidEmail = z.string().email().safeParse(email).success;
  const hasValidQuery = hasValidToken && hasValidEmail;

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      token,
      email,
      password: '',
      password_confirmation: '',
    },
  });

  const submitReset = form.handleSubmit(async (values) => {
    try {
      await resetPassword({
        token: values.token,
        email: values.email,
        password: values.password,
        password_confirmation: values.password_confirmation,
      });

      toast({
        title: 'Password reset complete',
        description: 'Your password has been reset successfully.',
      });
      setDidResetSucceed(true);
    } catch (error) {
      console.error('Reset password failed:', error);
      setDidResetSucceed(false);
      toast({
        title: 'Reset failed',
        description: 'This password reset link is invalid or has expired.',
        variant: 'destructive',
      });
    }
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#ECF3FA] via-white to-[#ECF3FA] px-4 py-12 md:px-8">
      <div className="mx-auto flex w-full max-w-lg items-center justify-center">
        <Card className="w-full border-[#d9e3f2] shadow-[0_20px_45px_rgba(12,24,146,0.14)]">
          {!hasValidQuery ? (
            <>
              <CardHeader className="space-y-3 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
                  <KeyRound className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Invalid reset link</CardTitle>
                <CardDescription>This password reset link is invalid or has expired.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" onClick={() => navigate('/login?forgot-password=1')}>Request New Reset Link</Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/login">Back to Sign In</Link>
                </Button>
              </CardContent>
            </>
          ) : didResetSucceed ? (
            <>
              <CardHeader className="space-y-3 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl">Password reset successful</CardTitle>
                <CardDescription>Your password has been reset successfully.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link to="/login" className="inline-flex items-center gap-2">
                    Back to Sign In
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </>
          ) : (
            <>
              <CardHeader className="space-y-3 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[#2E59D2]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Set your new password</CardTitle>
                <CardDescription>Use a strong password to keep your account secure.</CardDescription>
              </CardHeader>

              <CardContent>
                <Form {...form}>
                  <form onSubmit={submitReset} className="space-y-4">
                    <input type="hidden" {...form.register('token')} />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input {...field} readOnly disabled className="bg-slate-50 text-slate-500" />
                          </FormControl>
                          <FormDescription>Email is fixed for this reset request.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>New Password</FormLabel>
                          <FormControl>
                            <Input {...field} type="password" autoComplete="new-password" placeholder="Create a strong password" />
                          </FormControl>
                          <FormDescription>
                            At least 8 characters, including upper/lowercase letters and a number.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password_confirmation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input {...field} type="password" autoComplete="new-password" placeholder="Re-enter new password" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? 'Resetting password...' : 'Reset Password'}
                    </Button>

                    <Button asChild variant="ghost" className="w-full text-[#2E59D2]">
                      <Link to="/login">Back to Sign In</Link>
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </main>
  );
};

export default ResetPasswordPage;
