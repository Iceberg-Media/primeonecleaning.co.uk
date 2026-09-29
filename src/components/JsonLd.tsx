import { useEffect } from "react";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
}

export default function JsonLd({ data, id }: JsonLdProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    if (id) script.dataset.jsonLdId = id;
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data, id]);

  return null;
}
