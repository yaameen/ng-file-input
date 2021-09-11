import { FilePondOptions } from "filepond"

export interface NgPondFileOptions extends FilePondOptions {}

export class NgFileInputConfig {
    plugins: string[]
    serverEndpoint?: string = '/api/upload'
    options?: NgPondFileOptions
}