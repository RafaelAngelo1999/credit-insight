import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

export function Layout({ children, title }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50">
      <header className="w-full border-b bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold">{title || "Dashboard"}</h1>
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl px-6 py-8">{children}</main>
    </div>
  );
}
