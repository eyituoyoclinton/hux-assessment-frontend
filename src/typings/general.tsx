export type KeyValueObject = {
   name: string;
   value: string;
}

export type ObjectPayload = Record<string, any>

export interface SendRequestInput {
   url: string;
   body?: any;
   json?: ObjectPayload;
   method?: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';
   timeout?: number;
   token?: string
}

export interface SendRequestOutput {
   data: any;
   status_code: number;
   error: any;
}