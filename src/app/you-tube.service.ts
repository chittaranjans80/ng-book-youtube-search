import { Injectable } from '@angular/core';

@Injectable()
export class YouTubeService {

  constructor(private http: Http,
			  @Inject(YOUTUBE_API_KEY) private apiKey: string,
			  @Inject(YOUTUBE_API_URL) private apiUrl: string) {
  }
}
