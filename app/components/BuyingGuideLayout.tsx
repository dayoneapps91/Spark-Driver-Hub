import type { ReactNode } from "react";

type BuyingGuideLayoutProps = {
  children: ReactNode;
};

export default function BuyingGuideLayout({
  children,
}: BuyingGuideLayoutProps) {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-10 md:px-8 md:py-14 lg:px-10 lg:py-16">
      <div className="space-y-16 md:space-y-20">
        {children}
      </div>
    </main>
  );
}
