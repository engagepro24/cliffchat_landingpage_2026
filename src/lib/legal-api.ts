// Use relative path so in dev Vite proxies /api/legal to cliffchat.chat (avoids CORS).
// For production: deploy on same origin as the API, or configure your host to proxy /api/legal.
const LEGAL_API_BASE = "/api/legal";

export type LegalType = "terms" | "privacy";

export interface LegalApiResponse {
  success: boolean;
  content: string;
  title: string;
}

export async function fetchLegalContent(
  type: LegalType
): Promise<LegalApiResponse> {
  const res = await fetch(`${LEGAL_API_BASE}/${type}`);
  if (!res.ok) throw new Error(`Failed to load ${type}`);
  const data = (await res.json()) as LegalApiResponse;
  if (!data.success || !data.content) throw new Error(`Invalid ${type} response`);
  return data;
}
