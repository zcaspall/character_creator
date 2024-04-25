drop policy "Enable update for authenticated users only" on "public"."Games";

drop policy "Enable insert for authenticated users only" on "public"."JoinedGame";

drop policy "Enable read access for all users" on "public"."JoinedGame";

alter table "public"."Games" drop column "players";


