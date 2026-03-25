const { PrismaClient } = require('./services/core-engine/src/generated/client');
const prisma = new PrismaClient();

async function main() {
    const demoMerchantId = "cmn61kmxs0000o79ko7qqhlif"; // Found from my previous run
    try {
        console.log("Attempting to create order for merchant:", demoMerchantId);
        const order = await prisma.order.create({
            data: {
                merchantId: demoMerchantId,
                amountPaise: 1050,
                currency: "INR",
                receipt: "sim_test_" + Date.now(),
                status: "PENDING"
            }
        });
        console.log("Order Created:", order);
    } catch (e) {
        console.error("CREATE ERROR:", e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
