"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { loginSchema, RegisterInput, registerSchema } from "@/schemas/auth";

type Props = {
  type: "login" | "register";
};

export default function AuthForm({ type }: Props) {
  const currentSchema = type === "login" ? loginSchema : registerSchema;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    // this any here is necessary when building dynamic form with Zod + RHF
    resolver: zodResolver(currentSchema as unknown as any),
  });
  const router = useRouter();
  const onSubmit = async (data: RegisterInput) => {
    try {
      if (type === "login") {
        await axios.post("/api/auth/login", { email: data.email, password: data.password });
      } else {
        await axios.post("/api/auth/register", {
          email: data.email,
          name: data.name,
          password: data.password,
          passwordConfirmation: data.passwordConfirmation,
        });
      }
      router.push("/app");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-400">E-mail</label>
        <input
          {...register("email")}
          type="email"
          placeholder="jan@kowalski.pl"
          className="rounded-lg border border-slate-700 bg-slate-950 p-3 text-white"
        />
        {errors.email && <span className="text-xs text-red-400">{errors.email.message}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-400">Hasło</label>
        <input
          {...register("password")}
          type="password"
          placeholder="••••••••"
          className="rounded-lg border border-slate-700 bg-slate-950 p-3 text-white"
        />
        {errors.password && <span className="text-xs text-red-400">{errors.password.message}</span>}
      </div>
      {type === "register" && (
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-400">Powtórz hasło</label>
          <input
            {...register("passwordConfirmation")}
            type="password"
            placeholder="••••••••"
            className="rounded-lg border border-slate-700 bg-slate-950 p-3 text-white"
          />
          {errors.passwordConfirmation && (
            <span className="text-xs text-red-400">{errors.passwordConfirmation.message}</span>
          )}
        </div>
      )}
      {type === "register" && (
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-400">Imię i nazwisko</label>
          <input
            {...register("name")}
            placeholder="Jan Kowalski"
            className="rounded-lg border border-slate-700 bg-slate-950 p-3 text-white"
          />
          {errors.name && <span className="text-xs text-red-400">{errors.name.message}</span>}
        </div>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? "Przetwarzanie..." : type === "login" ? "Zaloguj się" : "Zarejestruj się"}
      </button>
    </form>
  );
}
