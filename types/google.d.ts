declare global {
  interface Window {
    gapi: {
      load(api: string, callback: () => void): void;
      init(params: { clientId: string }): Promise<void>;
      auth2: {
        getAuthInstance(): Promise<{
          signIn(): Promise<{
            getAuthResponse(): {
              id_token: string;
              access_token: string;
              token_type: string;
              expires_at: number;
            };
            getBasicProfile(): {
              getId(): string;
              getName(): string;
              getGivenName(): string;
              getFamilyName(): string;
              getImageUrl(): string;
              getEmail(): string;
            };
          }>;
          signOut(): Promise<void>;
          isSignedIn: {
            get(): boolean;
            listen(callback: (isSignedIn: boolean) => void): void;
          };
        }>;
      };
    };
  }
}

export {}; 