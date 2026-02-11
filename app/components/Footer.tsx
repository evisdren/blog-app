import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} My Blog
        </p>
        <nav className="flex items-center gap-6">
          <Link
            href="/privacy"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            Privacy
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
