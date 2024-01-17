export * as grpc from '@grpc/grpc-js'
declare class ClarifaiStub {
    static grpc(base?: string): any;
    static insecureGrpc(): any;
    static json(): void;
}

declare module 'clarifai-nodejs-grpc/node_modules/@grpc/proto-loader' {
    export function loadSync(
        file: string | string[],
        options?: {
            keepCase?: boolean;
            longs?: Function;
            enums?: Function;
            defaults?: boolean;
            oneofs?: boolean;
        }
    ): any;
}

declare module 'clarifai-nodejs-grpc/node_modules/@grpc/grpc-js' {
    export function loadPackageDefinition(packageDefinition: any): any;
    export function load(filename: string, format?: string, options?: any): any;
    export const credentials: any;
}

export { ClarifaiStub };
