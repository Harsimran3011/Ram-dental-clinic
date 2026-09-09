import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const navigate = useNavigate();

  const { loginUser, loading, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    const result = await loginUser(data);

    if (result.success) {
      navigate("/");
    }
  };

  return (
    <main className="min-h-screen bg-[#f5faf9] px-6 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] bg-white shadow-xl lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="relative hidden min-h-[650px] lg:block">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
              alt="Modern dental clinic"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#103f3d]/60" />

            <div className="absolute bottom-12 left-12 right-12 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#65ddd3]">
                Ram Dental Clinic
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight">
                Your smile,
                <br />
                our priority.
              </h1>

              <p className="mt-4 max-w-md leading-7 text-white/80">
                Access your account and stay connected with your dental care.
              </p>
            </div>
          </div>

          {/* RIGHT LOGIN */}
          <div className="flex items-center p-8 sm:p-12 lg:p-16">
            <div className="w-full max-w-md">
              {/* Heading */}
              <div className="mt-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#12a89d]">
                  Welcome Back
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#102b3f]">
                  Sign in to your account
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Enter your details to continue.
                </p>
              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-5"
              >
                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#102b3f]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-[#12a89d] focus:ring-2 focus:ring-[#12a89d]/10"
                  />

                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-[#102b3f]">
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-xs font-medium text-[#12a89d] hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <input
                    type="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-[#12a89d] focus:ring-2 focus:ring-[#12a89d]/10"
                  />

                  {errors.password && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Error */}
                {error && (
                  <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-[#12a89d] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0d9188] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>

                {/* Register */}
                <p className="text-center text-sm text-slate-500">
                  Don't have an account?{" "}
                  <Link
                    to="/auth/register"
                    className="font-semibold text-[#12a89d] hover:underline"
                  >
                    Create account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
