"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Logo } from "@/components/icons";

export default function SelectCompanyPage() {
  const { user, userProfile, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user && userProfile) {
      const getCompanyAndRedirect = async () => {
        const companyDocRef = doc(db, "companies", userProfile.companyId);
        const companyDoc = await getDoc(companyDocRef);
        if (companyDoc.exists()) {
          // I am assuming the company document has a 'slug' field.
          // The user provided a list of companies with slugs.
          // I will use the company name as a slug for now.
          const companyData = companyDoc.data();
          const companySlug = companyData.name.toLowerCase().replace(/\s+/g, '-');
          router.push(`/${companySlug}/dashboard`);
        } else {
          // Handle case where company doesn't exist, maybe redirect to an error page
          // or a page to create a company profile. For now, just log an error.
          console.error("Company not found for user:", user.uid);
          router.push("/login");
        }
      };
      getCompanyAndRedirect();
    } else if (!loading && !user) {
        router.push("/login");
    }
  }, [user, userProfile, loading, router]);

  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <Logo className="h-12 w-12 animate-pulse text-primary" />
        <p className="text-muted-foreground">Loading your dashboard...</p>
      </div>
    </div>
  );
}
