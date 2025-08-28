"use client";

import { useMemo, useState } from "react";
import type { AuditEntry } from "./page";

interface Props {
  initialEntries: AuditEntry[];
}

export default function AuditTable({ initialEntries }: Props) {
  const [user, setUser] = useState("");
  const [action, setAction] = useState("");
  const [date, setDate] = useState("");
  const [sortKey, setSortKey] = useState<keyof AuditEntry>("date");
  const [asc, setAsc] = useState(false);

  const entries = useMemo(() => {
    return initialEntries
      .filter((e) =>
        user ? e.user.toLowerCase().includes(user.toLowerCase()) : true,
      )
      .filter((e) =>
        action ? e.action.toLowerCase().includes(action.toLowerCase()) : true,
      )
      .filter((e) => (date ? e.date.startsWith(date) : true))
      .sort((a, b) => {
        const aVal = a[sortKey];
        const bVal = b[sortKey];
        if (aVal < bVal) return asc ? -1 : 1;
        if (aVal > bVal) return asc ? 1 : -1;
        return 0;
      });
  }, [initialEntries, user, action, date, sortKey, asc]);

  const onSort = (key: keyof AuditEntry) => {
    if (sortKey === key) {
      setAsc(!asc);
    } else {
      setSortKey(key);
      setAsc(true);
    }
  };

  const exportCsv = () => {
    const headers = ["id", "user", "action", "date"];
    const rows = entries.map((e) =>
      headers
        .map((h) => JSON.stringify(e[h as keyof AuditEntry] ?? ""))
        .join(","),
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "audit.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <input
          className="border px-2 py-1"
          placeholder="User"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          className="border px-2 py-1"
          placeholder="Action"
          value={action}
          onChange={(e) => setAction(e.target.value)}
        />
        <input
          className="border px-2 py-1"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="border px-2 py-1" onClick={exportCsv}>
          Export CSV
        </button>
      </div>
      <table className="min-w-full text-left border">
        <thead>
          <tr>
            <th className="cursor-pointer px-2" onClick={() => onSort("user")}>
              User
            </th>
            <th
              className="cursor-pointer px-2"
              onClick={() => onSort("action")}
            >
              Action
            </th>
            <th className="cursor-pointer px-2" onClick={() => onSort("date")}>
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {entries.map((e) => (
            <tr key={e.id} className="border-t">
              <td className="px-2 py-1">{e.user}</td>
              <td className="px-2 py-1">{e.action}</td>
              <td className="px-2 py-1">{new Date(e.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
