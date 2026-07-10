import { NextResponse } from 'next/server';
import { getAdminDb } from '../../../../lib/firebase/admin';

export async function GET() {
  try {
    const db = getAdminDb();
    const snap = await db.collection('gateways').doc('payphone').get();

    if (!snap.exists) {
      return NextResponse.json({ error: 'Documento payphone no existe en Firestore' });
    }

    const data = snap.data()!;
    const token: string = data.secretKey ?? '';
    const storeId: string = data.publicKey ?? '';

    // Muestra solo los primeros/últimos caracteres para diagnóstico
    const tokenPreview = token.length > 0
      ? `${token.slice(0, 20)}...${token.slice(-10)} (${token.length} chars)`
      : 'VACÍO';

    const url = 'https://pay.payphonetodoesposible.com/api/Links';
    const uniqueTxId = `AL${Date.now().toString().slice(-13)}`.slice(0, 15);

    // Prueba A: sin storeId
    const bodyA = {
      amount: 100,
      amountWithoutTax: 100,
      amountWithTax: 0,
      tax: 0,
      service: 0,
      tip: 0,
      currency: 'USD',
      clientTransactionId: uniqueTxId,
      reference: 'Test pago ALOEC',
    };

    const resA = await fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyA),
    });
    const textA = await resA.text();

    // Prueba B: con storeId
    const bodyB = { ...bodyA, clientTransactionId: `B${uniqueTxId}`.slice(0, 15), storeId };
    const resB = await fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyB),
    });
    const textB = await resB.text();

    return NextResponse.json({
      firestoreFields: { isActive: data.isActive, environment: data.environment, tokenLength: token.length, tokenPreview, storeId },
      pruebaA_sinStoreId: { status: resA.status, body: textA.slice(0, 1000) },
      pruebaB_conStoreId: { status: resB.status, body: textB.slice(0, 1000) },
    });
  } catch (err: unknown) {
    return NextResponse.json({ error: err instanceof Error ? err.message : String(err) });
  }
}
