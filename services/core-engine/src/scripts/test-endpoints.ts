import prisma from '../lib/prisma';
import jwt from 'jsonwebtoken';

async function testKeyGeneration() {
    const merchant = await (prisma as any).merchant.findFirst();
    if (!merchant) { console.error('No merchant found'); return; }

    const secret = process.env.JWT_SECRET || 'zenwallet_jwt_secret_change_in_production';
    const token = jwt.sign({ merchantId: merchant.id }, secret, { expiresIn: '7d' });
    console.log('Test token for merchant:', merchant.name);
    console.log('Token:', token.slice(0, 50) + '...');

    // Test the generate endpoint
    const resp = await fetch('http://localhost:4000/v1/keys/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ environment: 'live', name: 'Test Key' })
    });
    const data = await resp.json();
    console.log('Generate key response:', JSON.stringify(data, null, 2));

    // Test list webhooks
    const wresp = await fetch('http://localhost:4000/v1/webhooks', {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    const wdata = await wresp.json();
    console.log('Webhooks response:', JSON.stringify(wdata, null, 2));

    await prisma.$disconnect();
}

testKeyGeneration().catch(console.error);
