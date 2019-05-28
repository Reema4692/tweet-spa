export type User = {
    created_at: Date;
    description: string,
    id: number,
    screen_name: string,
    name: string,
    profile_image_url: string,
    url: string,
    tweets_count: number,
    followers_count: number,
    tweets: []
}