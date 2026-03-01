import { Server as HttpServer } from 'http';
import { Server as SocketServer } from 'socket.io';

let io: SocketServer;

export const initSocket = (server: HttpServer) => {
    io = new SocketServer(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    });

    io.on('connection', (socket) => {
        const userId = socket.handshake.query.userId;
        if (userId) {
            socket.join(`user:${userId}`);
            console.log(`📡 Socket: User ${userId} joined their room`);
        }

        const merchantId = socket.handshake.query.merchantId;
        if (merchantId) {
            socket.join(`merchant:${merchantId}`);
            console.log(`📡 Socket: Merchant ${merchantId} joined their room`);
        }

        socket.on('disconnect', () => {
            console.log('📡 Socket: Client disconnected');
        });
    });

    return io;
};

export const getIO = () => {
    if (!io) {
        throw new Error('Socket.io not initialized');
    }
    return io;
};

export const emitToUser = (userId: string, event: string, data: any) => {
    if (io) {
        io.to(`user:${userId}`).emit(event, data);
    }
};

export const emitToMerchant = (merchantId: string, event: string, data: any) => {
    if (io) {
        io.to(`merchant:${merchantId}`).emit(event, data);
    }
};
