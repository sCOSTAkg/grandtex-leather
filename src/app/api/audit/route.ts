import { NextRequest, NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { userId, action, payload } = await req.json();

    if (!userId || !action || typeof payload === 'undefined') {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const log = await prisma.auditLog.create({
      data: { userId, action, payload },
    });

    return NextResponse.json(log, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId') || undefined;
  const start = searchParams.get('start');
  const end = searchParams.get('end');
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '20', 10);

  const where: Prisma.AuditLogWhereInput = {};
  if (userId) where.userId = userId;
  if (start || end) {
    where.createdAt = {};
    if (start) where.createdAt.gte = new Date(start);
    if (end) where.createdAt.lte = new Date(end);
  }

  const logs = await prisma.auditLog.findMany({
    where,
    orderBy: { createdAt: 'desc' },
    skip: (page - 1) * limit,
    take: limit,
  });

  return NextResponse.json(logs);
}
