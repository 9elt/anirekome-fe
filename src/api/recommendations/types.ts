interface RekoRelated {
    id: number;
    relation: number;
  }
  
  interface RekoDetails {
    airing_date: string;
    airing_status: number;
    genres: number[];
    id: number;
    mean: number;
    num_episodes: number;
    picture: string;
    rating: number;
    related: RekoRelated[];
    title: string;
  }
  
  interface RekoPredictions {
    enjoyment: number;
    score: number;
  }
  
  export interface Reko {
    details: RekoDetails;
    predictions: RekoPredictions;
    id: number;
    users: number[];
  }
  
  export interface UsersInfo {
    user_name: string; 
    affinity: number;
  }

  export interface APIrequest {
    accuracy?: number ;
    banned_ids?: number[];
    banned_users?: string[];
    force_list_update?: boolean;
  }

  export interface APIresponse {
    next_request: APIrequest;
    recommendations: Reko[];
    users: UsersInfo[];
  }