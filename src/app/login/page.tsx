"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/icons";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";
import { mockUsers } from "@/lib/mock-users";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = mockUsers.find(u => u.email === email && u.password === password);

    if (user) {
      const { password, ...userToStore } = user;
      sessionStorage.setItem("user", JSON.stringify(userToStore));

      let redirectUrl = '';
      if (user.role === 'Super Admin' || user.role === 'Platform Manager') {
        redirectUrl = '/platform-admin/dashboard';
      } else if (user.role === 'Sales & Marketing') {
        redirectUrl = `/${user.company.slug}/sales-marketing`;
      } else if (user.role === 'Operations Team') {
        redirectUrl = `/${user.company.slug}/operations`;
      } else {
        redirectUrl = `/${user.company.slug}/financial-dashboard`;
      }

      window.location.href = redirectUrl;
    } else {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Invalid email or password.",
      });
    }
  };

  return (
    <div className="flex min-h-screen">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
                <div>
                    <Logo className="h-12 w-auto text-primary" />
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">CEO Dashboard</h2>
                </div>

                <div className="mt-8">
                    <div className="mt-6">
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <Label htmlFor="email">Email address</Label>
                                <div className="mt-1">
                                    <Input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <div className="mt-1 relative">
                                    <Input id="password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" required value={password} onChange={e => setPassword(e.target.value)} />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 flex items-center justify-center px-3 text-gray-400 hover:text-gray-500"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <Checkbox id="remember-me" name="remember-me" />
                                    <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-200">Remember me</Label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-primary hover:text-primary/90">Forgot your password?</a>
                                </div>
                            </div>

                            <div>
                                <Button type="submit" className="w-full" style={{ backgroundColor: '#2563EB' }}>Sign in</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
            <img className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174" alt="" />
        </div>
    </div>
  );
}
