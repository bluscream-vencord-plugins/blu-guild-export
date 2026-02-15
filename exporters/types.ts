export interface ExporterContext {
    guildId: string;
    actionDelay: number;
    filenameFormat: "IDs" | "Names";
    save: (path: string, data: Uint8Array | string) => Promise<void>;
    logger: any;
    setProgress: (status: string, type?: string) => void;
}

export type ExporterFunc = (ctx: ExporterContext) => Promise<void>;
