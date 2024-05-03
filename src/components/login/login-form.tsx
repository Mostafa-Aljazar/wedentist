"use client";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "@/validation/login-schema";
import { loginFormValues } from "@/types/login-response";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<loginFormValues>({
    mode: "onBlur",
    resolver: zodResolver(LoginFormSchema),
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = form;

  const onSubmit = (data: loginFormValues) => {
    console.log("FormValues :", data);
  };

  const onError = (errors: FieldErrors<loginFormValues>) => {
    console.log("FormErrors :", errors);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="mx-auto min-h-screen flex items-center max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
      <div className="mx-auto w-full max-w-md  ">
        <h1 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          Wedentis
        </h1>

        <form
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          onSubmit={handleSubmit(onSubmit, onError)}
          noValidate
        >
          <p className="text-center text-lg font-medium">
            سجل دخولك لمنصة Wedentis الان
          </p>

          <div>
            <label htmlFor="email" className="sr-only">
              الايميل
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full  border-gray-200 p-4 pe-12 text-sm shadow-sm "
                placeholder="Enter email"
                {...register("email", { required: true })}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>

            {errors.email && (
              <span className="text-[12px] text-left text-red-500">
                {errors.email?.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              كلمة المرور
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full  border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                {...register("password", { required: true })}
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <button onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                      <line x1="2" x2="22" y1="2" y2="22" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </span>
            </div>

            {errors.password && (
              <span className="text-[12px] text-red-500">
                {errors.password?.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="block w-full  bg-primary px-5 py-3 text-sm font-medium text-white"
          >
            تسجيل الدخول
          </button>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
};

export default LoginForm;
