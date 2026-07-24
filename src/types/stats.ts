export interface GitHubStats {
  username: string;
  name: string;
  bio: string;
  avatarUrl?: string;
  publicRepos: number;
  followers: number;
  following: number;
  topRepos: Array<{
    name: string;
    description: string;
    language: string;
    stars: number;
    forks?: number;
    url?: string;
  }>;
  languages: Record<string, number>;
}

export interface LeetCodeStats {
  username: string;
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  totalQuestions: {
    easy: number;
    medium: number;
    hard: number;
  };
}
