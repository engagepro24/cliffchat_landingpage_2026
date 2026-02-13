import { useLocation, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchLegalContent, type LegalType } from "@/lib/legal-api";

const legalTypeFromPathname = (pathname: string): LegalType | null => {
  if (pathname === "/terms" || pathname === "/privacy") return pathname.slice(1) as LegalType;
  return null;
};

const LegalPage = () => {
  const { pathname } = useLocation();
  const legalType = legalTypeFromPathname(pathname);

  const { data, isLoading, error } = useQuery({
    queryKey: ["legal", legalType],
    queryFn: () => fetchLegalContent(legalType!),
    enabled: !!legalType,
  });

  if (!legalType) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <p className="text-muted-foreground">Page not found.</p>
          <Link to="/" className="text-primary underline mt-2 inline-block">
            Return home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <p className="text-muted-foreground">Loading…</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <p className="text-muted-foreground">
            Unable to load this page. Please try again later.
          </p>
          <Link to="/" className="text-primary underline mt-2 inline-block">
            Return home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="container mx-auto px-4 md:px-8 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          {data.title}
        </h1>
        <div className="prose prose-neutral dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground max-w-none">
          <ReactMarkdown
            components={{
              a: ({ href, children, ...props }) => {
                if (href?.startsWith("/")) {
                  return (
                    <Link to={href} {...props}>
                      {children}
                    </Link>
                  );
                }
                return (
                  <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                    {children}
                  </a>
                );
              },
            }}
          >
            {data.content}
          </ReactMarkdown>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default LegalPage;
