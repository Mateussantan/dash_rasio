import { NextResponse } from "next/server";
import { getConnection } from "../../../lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const pool = await getConnection(); 
    const result = await pool.request().query(`
      SELECT DT_LASTUPDATE FROM DEADLINE_INT
    `);   
    return NextResponse.json(result.recordset, { status: 200 });
  } catch (err) {
    console.error("ERRO /api/deadline/hoje:", err?.message);
    return NextResponse.json(
      { error: "Erro ao consultar DEADLINE_INT", detail: err?.message },
      { status: 500 }
    );
  }
}
