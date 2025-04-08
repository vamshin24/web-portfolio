
export function Footer() {
  return (
    <footer className="py-6 px-4 border-t">
      <div className="container max-w-5xl flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vamshi Narayana Babu. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-2 md:mt-0">
          Robotics Software Engineer
        </p>
      </div>
    </footer>
  );
}
