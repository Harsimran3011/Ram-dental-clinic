import { useState } from "react";
import { Link } from "react-router";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Register Data:", data);
  };

  return (
    <div className="min-h-screen bg-[#f7fbfa] px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] lg:grid-cols-[0.9fr_1.1fr]">
          {/* ================= LEFT SIDE ================= */}
          <div className="relative hidden overflow-hidden bg-[#159a8c] p-10 text-white lg:flex lg:flex-col lg:justify-between">
            {/* Decorative shapes */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10" />
            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/10" />

            <div className="relative z-10">
              <Link to="/" className="inline-flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg font-bold text-[#159a8c]">
                  R
                </div>

                <div>
                  <p className="text-sm font-bold">Ram Dental Clinic</p>

                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/80">
                    & Implant Center
                  </p>
                </div>
              </Link>

              <div className="mt-24 max-w-sm">
                <p className="mb-3 text-sm font-medium text-white/75">
                  Your smile deserves the best
                </p>

                <h2 className="text-4xl font-semibold leading-tight tracking-tight">
                  Start your journey towards a healthier smile.
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/75">
                  Create your account to make appointments, manage your visits
                  and stay connected with Ram Dental Clinic.
                </p>
              </div>
            </div>

            <p className="relative z-10 text-xs text-white/60">
              Professional dental care with a patient-first approach.
            </p>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
            <div className="w-full max-w-md">
              {/* Mobile Logo */}
              <div className="mb-8 flex items-center gap-3 lg:hidden">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#159a8c] text-lg font-bold text-white">
                  R
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Ram Dental Clinic
                  </p>

                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#159a8c]">
                    & Implant Center
                  </p>
                </div>
              </div>

              {/* Heading */}
              <div className="mb-8">
                <p className="mb-2 text-sm font-semibold text-[#159a8c]">
                  Create your account
                </p>

                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                  Welcome to Ram Dental Clinic
                </h1>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Register to manage your appointments and access your dental
                  care details.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    {...register("name", {
                      required: "Full name is required",
                    })}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#159a8c] focus:ring-4 focus:ring-[#159a8c]/10 ${
                      errors.name ? "border-red-400" : "border-slate-200"
                    }`}
                  />

                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Enter a valid email address",
                      },
                    })}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#159a8c] focus:ring-4 focus:ring-[#159a8c]/10 ${
                      errors.email ? "border-red-400" : "border-slate-200"
                    }`}
                  />

                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                      className={`w-full rounded-xl border bg-white px-4 py-3 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#159a8c] focus:ring-4 focus:ring-[#159a8c]/10 ${
                        errors.password ? "border-red-400" : "border-slate-200"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((previous) => !previous)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-[#159a8c]"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  {errors.password && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Confirm Password
                  </label>

                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      {...register("confirmPassword", {
                        required: "Please confirm your password",
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                      className={`w-full rounded-xl border bg-white px-4 py-3 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#159a8c] focus:ring-4 focus:ring-[#159a8c]/10 ${
                        errors.confirmPassword
                          ? "border-red-400"
                          : "border-slate-200"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword((previous) => !previous)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-[#159a8c]"
                      aria-label={
                        showConfirmPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>

                  {errors.confirmPassword && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* Terms */}
                <label className="flex cursor-pointer items-start gap-2.5">
                  <input
                    type="checkbox"
                    {...register("terms", {
                      required: "You must accept the terms",
                    })}
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-[#159a8c]"
                  />

                  <span className="text-xs leading-5 text-slate-500">
                    I agree to the terms and privacy policy.
                  </span>
                </label>

                {errors.terms && (
                  <p className="-mt-3 text-xs text-red-500">
                    {errors.terms.message}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#159a8c] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#117d72] hover:shadow-md active:translate-y-0"
                >
                  Create Account
                </button>
              </form>

              {/* Login */}
              <p className="mt-7 text-center text-sm text-slate-500">
                Already have an account?{" "}
                <Link
                  to="/auth/login"
                  className="font-semibold text-[#159a8c] transition hover:text-[#117d72]"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
