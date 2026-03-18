import { useEffect, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

type VerificationResult = {
  success: boolean;
  message?: string;
};

interface OtpVerificationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  otpLength?: number;
  resendCooldown?: number;
  onVerify: (otp: string) => Promise<VerificationResult>;
  onResend: () => Promise<VerificationResult>;
  helperText?: string;
}

const OtpVerificationModal = ({
  open,
  onOpenChange,
  title,
  description,
  otpLength = 6,
  resendCooldown = 30,
  onVerify,
  onResend,
  helperText,
}: OtpVerificationModalProps) => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(resendCooldown);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    if (!open) return;

    setOtp("");
    setError("");
    setSuccessMessage("");
    setTimer(resendCooldown);
  }, [open, resendCooldown]);

  useEffect(() => {
    if (!open || timer <= 0) return;

    const intervalId = window.setInterval(() => {
      setTimer((previous) => {
        if (previous <= 1) {
          window.clearInterval(intervalId);
          return 0;
        }
        return previous - 1;
      });
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [open, timer]);

  const isOtpComplete = useMemo(() => otp.length === otpLength, [otp.length, otpLength]);

  const handleVerify = async () => {
    setError("");
    setSuccessMessage("");

    if (!isOtpComplete) {
      setError(`Please enter the ${otpLength}-digit OTP.`);
      return;
    }

    setIsVerifying(true);
    try {
      const result = await onVerify(otp);
      if (!result.success) {
        setError(result.message ?? "Unable to verify OTP. Please try again.");
        return;
      }

      setSuccessMessage(result.message ?? "OTP verified successfully.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResend = async () => {
    if (timer > 0 || isResending) return;

    setError("");
    setSuccessMessage("");
    setIsResending(true);

    try {
      const result = await onResend();
      if (!result.success) {
        setError(result.message ?? "Unable to resend OTP right now.");
        return;
      }

      setTimer(resendCooldown);
      setSuccessMessage(result.message ?? "OTP resent successfully.");
      setOtp("");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-2xl border-slate-200 p-6">
        <DialogHeader className="space-y-2 text-left">
          <DialogTitle className="text-xl font-semibold text-slate-900">{title}</DialogTitle>
          <DialogDescription className="text-sm text-slate-500">{description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <InputOTP
              maxLength={otpLength}
              value={otp}
              onChange={(value) => {
                setOtp(value.replace(/\D/g, ""));
                setError("");
              }}
              containerClassName="justify-center"
              disabled={isVerifying}
            >
              <InputOTPGroup className="gap-2">
                {Array.from({ length: otpLength }).map((_, index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                    className="h-12 w-11 rounded-lg border border-slate-300 bg-white text-base font-semibold"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
            {helperText && <p className="mt-3 text-center text-xs text-slate-500">{helperText}</p>}
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}
          {successMessage && <p className="text-sm text-green-600">{successMessage}</p>}

          <div className="flex items-center justify-between text-sm">
            <button
              type="button"
              onClick={handleResend}
              className="font-medium text-blue-600 disabled:cursor-not-allowed disabled:text-slate-400"
              disabled={timer > 0 || isResending || isVerifying}
            >
              {isResending ? "Resending..." : "Resend OTP"}
            </button>
            <span className="text-slate-500">{timer > 0 ? `Resend in ${timer}s` : "You can resend now"}</span>
          </div>

          <Button
            type="button"
            className="h-11 w-full rounded-lg bg-[#2E59D2] text-white hover:bg-[#2243a6]"
            onClick={handleVerify}
            disabled={isVerifying}
          >
            {isVerifying ? "Verifying..." : "Verify"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OtpVerificationModal;
