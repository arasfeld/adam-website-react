import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="sticky flex bg-background border-b">
      <div className="mx-auto flex h-16 w-full items-center justify-end px-4 sm:px-6">
        <ThemeToggle />
      </div>
    </header>
  );
}
