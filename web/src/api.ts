import type { ServerEvent } from "./types";

export class ApiError extends Error {
  constructor(message: string, public status: number) {
    super(message);
  }
}

/** POST to the Netlify Function and call onEvent for each streamed NDJSON event. */
export async function callTeamApi(
  body: Record<string, unknown>,
  onEvent: (event: ServerEvent) => void,
  options: { signal?: AbortSignal; password?: string } = {},
): Promise<void> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(options.password ? { "x-app-password": options.password } : {}),
    },
    body: JSON.stringify(body),
    signal: options.signal,
  });

  if (!res.ok || !res.body) {
    let message = `Request failed (${res.status}).`;
    try {
      const data = await res.json();
      if (data?.error) message = data.error;
    } catch {
      if (res.status === 404) message = "The /api/chat function wasn't found. Run the app with `netlify dev` locally, or deploy it to Netlify.";
    }
    throw new ApiError(message, res.status);
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    let nl: number;
    while ((nl = buffer.indexOf("\n")) >= 0) {
      const line = buffer.slice(0, nl).trim();
      buffer = buffer.slice(nl + 1);
      if (line) onEvent(JSON.parse(line) as ServerEvent);
    }
  }
  if (buffer.trim()) onEvent(JSON.parse(buffer) as ServerEvent);
}
