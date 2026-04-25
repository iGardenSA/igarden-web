export function IGardenName() {
  return (
    <span dir="ltr" className="ltr-inline font-latin font-bold">
      iGarden
    </span>
  );
}

export function LtrText({ children }: { children: React.ReactNode }) {
  return (
    <span dir="ltr" className="ltr-inline">
      {children}
    </span>
  );
}
