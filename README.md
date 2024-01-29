# character_creator
Character Creator app for ttrpgs

## Setting up for development
1. Clone this repo
2. `cd character_creator/character-creator` then run `npm i`
3. Set up a Supabase account
4. Send supabase account email to Zac to be added to org
5. Add anon api key and supabase url to .env.local
6. Install [Docker Desktop](https://docs.docker.com/desktop/)
7. `npx supabase init`
8. `npx supabase start`
9. local DB can be found [here](http://localhost:54323/project/default)
10. `npx supabase login`
11. `npx supabase link <projectId>`
12. `npx supabase db pull`
13. `npx supabase migration up`
