export type SignerGetSignedUrlResponse = string;

export type GetSignedUrlResponse = [SignerGetSignedUrlResponse];

export interface DownloadInterface {
  nomeArquivo: string;
  urlDownload: GetSignedUrlResponse;
}
