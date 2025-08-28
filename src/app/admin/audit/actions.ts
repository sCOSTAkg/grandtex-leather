export type AuditEntry = {
  id: number;
  user: string;
  action: string;
  date: string; // ISO string
};

export async function getAuditEntries(): Promise<AuditEntry[]> {
  "use server";
  return [
    { id: 1, user: "alice", action: "login", date: "2024-01-01T12:00:00Z" },
    { id: 2, user: "bob", action: "logout", date: "2024-01-02T08:30:00Z" },
    {
      id: 3,
      user: "alice",
      action: "update profile",
      date: "2024-01-03T10:15:00Z",
    },
  ];
}
