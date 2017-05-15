import { YouTubeService } from './you-tube.service';

let YOUTUBE_API_KEY: string = "XXX_YOUR_KEY_HERE_XXX";
let YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";

export var youTubeServiceInjectables: Array<any> = [ 
	{provide: YouTubeService, useClass: YouTubeService},
	{provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
	{provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
];