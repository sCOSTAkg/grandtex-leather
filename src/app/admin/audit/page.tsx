import AuditTable from "./AuditTable";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAuditEntries } from "./actions";

export default async function AuditPage() {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("admin")?.value === "true";
  if (!isAdmin) {
    redirect("/");
  }

  const entries = await getAuditEntries();

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Audit Log</h1>
      <AuditTable initialEntries={entries} />
    </main>
  );
}
