import { Callback, BackendMessage } from "./types";

export class WebSocketBroker {
    private webSocket: WebSocket;
    private typeToCallbacks: Map<string, Array<Callback>> = new Map();

    constructor(url: string, onOpen: () => void, onClose: () => void) {
        this.webSocket = new WebSocket(`ws://${url}`);
        this.webSocket.onopen = onOpen;

        this.webSocket.onmessage = (ev: MessageEvent<string>) => {
            const socketMessage = JSON.parse(ev.data) as BackendMessage;
            const callbacks =
                this.typeToCallbacks.get(socketMessage.type) ?? [];
            for (const callback of callbacks) {
                callback(socketMessage.msg);
            }
        };

        this.webSocket.onclose = onClose;
    }

    public addCallback(type: string, callback: Callback) {
        const callbacks = this.typeToCallbacks.get(type) ?? [];
        this.typeToCallbacks.set(type, [...callbacks, callback]);
    }

    public removeCallback(type: string, handler: Callback) {
        if (!this.typeToCallbacks.has(type)) {
            console.warn(`Path ${type} doesn't exist in pathToHandlers`);
        } else {
            const callbacks = this.typeToCallbacks.get(type)!;
            this.typeToCallbacks.set(
                type,
                callbacks.filter((element) => element != handler)
            );

            if (this.typeToCallbacks.get(type)?.length == 0) {
                this.typeToCallbacks.delete(type);
            }
        }
    }

    public createSender(type: string) {
        return (msg: any) => {
            this.webSocket.send(JSON.stringify({ type, msg }));
        };
    }

    public close() {
        if (this.webSocket.readyState == this.webSocket.OPEN) {
            this.webSocket.close();
        }
    }
}
