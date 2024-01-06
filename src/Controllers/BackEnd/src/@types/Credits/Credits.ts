export interface Credits {
  trackUri: string;
  trackTitle: string;
  roleCredits: RoleCredit[];
  extendedCredits: any[];
  sourceNames: string[];
}

export interface RoleCredit {
  roleTitle: string;
  artists: Artist[];
}

export interface Artist {
  uri?: string;
  name: string;
  imageUri?: string;
  subroles: string[];
  weight: number;
  externalUrl?: string;
  creatorUri?: string;
}
